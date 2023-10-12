import { useTranslation } from "react-i18next";

export const Testimonials = () => {
  const { t } = useTranslation("translation");

  const testimonialsData = [
    {
      customerName: t("TESTIMONIALS.clients.one.name"),
      customerTitle: t("TESTIMONIALS.clients.one.role"),
      content: t("TESTIMONIALS.clients.one.quote"),
      image: "https://randomuser.me/api/portraits/men/86.jpg",
    },
    {
      customerName: t("TESTIMONIALS.clients.two.name"),
      customerTitle: t("TESTIMONIALS.clients.two.role"),
      content: t("TESTIMONIALS.clients.two.quote"),
      image: "https://randomuser.me/api/portraits/women/26.jpg",
    },
    {
      customerName: t("TESTIMONIALS.clients.three.name"),
      customerTitle: t("TESTIMONIALS.clients.three.role"),
      content: t("TESTIMONIALS.clients.three.quote"),
      image: "https://randomuser.me/api/portraits/men/31.jpg",
    },
  ];
  return (
    <section className="w-full flex justify-center pt-10 mb-16 mt-28 lg:mb-32 relative">
      <div className="flex flex-col w-full lg:w-[1150px] justify-center">
        <p className="text-center text-qGreen font-semibold mb-2 px-2 md:px-0">
          {t("TESTIMONIALS.sub")}
        </p>

        <h3 className="text-center text-white text-3xl font-bold mb-16 max-w-lg balance mx-auto">
          {t("TESTIMONIALS.title")}{" "}
          <span className="text-qGreen"> {t("TESTIMONIALS.listening")}</span>
        </h3>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-5 xl:gap-10 px-6 xl:px-0 items-center">
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="w-11/12 relative lg:h-[495px] sm:w-4/5 md:w-[560px] lg:w-1/3 rounded-xl bg-qGray flex flex-col px-6 py-4">
              <div className="flex mb-3 h-8 aspect-video object-contain">
                <img src="/images/quote.png" alt="quote image" />
              </div>
              <div className="text-white"> {testimonial.content}</div>
              <div className="flex mt-4 mb-2 xl:mt-8 xl:mb-4 lg:absolute lg:bottom-2">
                <img
                  src={testimonial.image}
                  alt="quote icon"
                  width="45"
                  height="45"
                  className="rounded-full"
                />
                <div className="flex flex-col ml-4">
                  <div className="text-white font-medium">
                    {testimonial.customerName}
                  </div>
                  <div className="text-white/80 text-sm">
                    {testimonial.customerTitle}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
