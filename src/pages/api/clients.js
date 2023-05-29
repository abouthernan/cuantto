import { extractCount, incrementCount } from '../../lib/mongodb.ts'

export async function get() {
  const count = await extractCount()

  return new Response(JSON.stringify({ count }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST'
    }
  })
}

export async function post({ request }) {
  let { count } = await request.json()
  const currentCount = await extractCount()
  const newCount = currentCount + 1

  if (count !== currentCount) {
    // El contador en la solicitud POST no coincide con el contador actual
    // Puedes manejar esto según tus requisitos, ya sea lanzando un error o actualizando el contador en consecuencia
    count = currentCount
  }

  await incrementCount(newCount)

  return new Response(null, {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST'
    }
  })
}
