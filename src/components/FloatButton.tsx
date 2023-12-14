import { useState } from "react";
import { useTranslation } from "react-i18next";

export const FloatButton = () => {
  const [showText, setShowText] = useState(true);

  const { t, ready } = useTranslation("translation");

  const handleClose = (e: any) => {
    e.stopPropagation();
    setShowText(false);
  };

  const handleContact = (e: any) => {
    e.stopPropagation();
    window.open("https://api.whatsapp.com/send?phone=13022790440", "_blank");
  };

  const onHoverShowText = () => {
    setShowText(true);
  };

  if (!ready) return null;

  return (
    <div className="fixed z-0 bottom-4 right-4 md:min-w-max">
      <button
        onClick={(e) => handleContact(e)}
        className="text-qBlack rounded-full flex items-center justify-center shadow-2xl relative"
      >
        <div className="absolute w-max right-20">
          {showText ? (
            <>
              <button
                onClick={handleClose}
                className="text-white bg-qBlack rounded-full py-1 px-3 flex items-center justify-center shadow-white absolute -right-4 -top-8"
              >
                x
              </button>
              <span className="text-qBlack text-sm md:text-base bg-white rounded-md px-2 py-1">
                {t("FLOAT.text")}
              </span>
            </>
          ) : null}
        </div>
        <img
          src="/laura2.webp"
          onMouseEnter={!showText ? onHoverShowText : () => ""}
          width={56}
          height={56}
          alt="pic profile"
          className=" w-14 h-14 md:w-16 md:h-16 object-cover aspect-square object-top rounded-full"
        />
      </button>
    </div>
  );
};
