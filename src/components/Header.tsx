import { useState } from "react";
import { Nav } from "./Nav.tsx";
import { ToggleButton } from "./ToggleButton.tsx";
import { ToggleLang } from "./ToggleLang.tsx";

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };
  return (
    <header className="w-full bg-transparent z-40 backdrop-blur-xl shadow">
      <section className="flex items-center justify-between py-1 container mx-auto px-2 lg:px-0 max-w-7xl">
        <a href="/" className="h-20 aspect-video object-contain block">
          <img
            className="h-full w-full object-contain aspect-video"
            src="/images/logo-qantto-white.svg"
            alt="logo"
          />
        </a>

        <Nav handleClick={handleClick} />

        <div className="flex space-x-2 lg:space-x-0">
          <div className="lg:hidden">
            <ToggleLang />
          </div>
          <ToggleButton showMenu={showMenu} handleClick={handleClick} />
        </div>
      </section>
    </header>
  );
};
