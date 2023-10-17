import { Nav } from "./Nav.tsx";
import { ToggleButton } from "./ToggleButton.tsx";

export const Header = () => {
  return (
    <header className="w-full bg-transparent z-40 backdrop-blur-xl shadow">
      <section className="flex items-center justify-between py-1 container mx-auto px-2 lg:px-0 max-w-7xl">
        <a href="/" className="h-20 block">
          <img
            className="h-full w-full object-contain aspect-video"
            src="/images/logo-qantto-white.svg"
            alt="logo"
          />
        </a>

        <Nav />

        <ToggleButton />
      </section>
    </header>
  );
};
