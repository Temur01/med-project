import { useMemo, useState } from "react";
import { useLocation } from "react-router";
import Avatar from "../avatar/avatar";
import { languages } from "../../data/lang";
import { Language } from "../../types/type";
import Cookies from "js-cookie";
import { useTranslation } from "react-i18next";

const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { i18n } = useTranslation();
  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleLanguageChange = (language: Language) => {
    i18n.changeLanguage(language.code); // Changes the language using i18next
    Cookies.set("i18next", language.code); // Sets a cookie to remember the choice
    setIsOpen(false); // Closes the language selection dropdown
  };

  const pageName = useMemo(() => {
    switch (location.pathname) {
      case "/home":
        return "Эффективность деятельности Системы ПМСП";
      case "/health":
        return "Состояние здоровья и благополучия населения";
      case "/service":
        return "Охват услугами";
      case "/staff":
        return "Кадровые ресурсы Министерства здравоохранения";
      case "/import":
        return "Импорт данных";
      case "/admin":
        return "Сотрудники";
      default:
        return "";
    }
  }, [location.pathname]);

  const currentLanguageCode = Cookies.get("i18next") || "en";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);

  return (
    <header className="py-2">
      <div className="container mx-4 flex justify-between">
        <h1 className="text-xl font-bold mt-12">{pageName}</h1>
        <div className="flex gap-2">
          <div className="relative">
            <button
              type="button"
              className="inline-flex  justify-center w-full rounded-lg bg-gray-100 shadow-sm px-4 py-2 text-sm font-medium text-gray-700 focus:outline-none hover:bg-gray-200"
              id="menu-button"
              aria-expanded="true"
              aria-haspopup="true"
              onClick={toggleDropdown}
            >
              <img
                src={currentLanguage?.flag}
                alt="flag"
                className="w-5 h-5 mr-2"
              />
              {currentLanguage?.name}
            </button>

            {isOpen && (
              <div
                className="origin-top-right absolute right-0 mt-2 w-44 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabIndex={-1}
              >
                <ul className="py-1" role="language-item">
                  {languages.map((language) => (
                    <li
                      key={language.code}
                      className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
                      role="menuitem"
                      tabIndex={-1}
                      onClick={() => handleLanguageChange(language)}
                    >
                      <img
                        src={language.flag}
                        alt="flag"
                        className="w-5 h-5 mr-2 inline"
                      />
                      {language.name}
                    </li>
                  ))}
                </ul>
              </div>  
            )}
          </div>
          <Avatar />
        </div>
      </div>
      <hr className="mt-2 h-1.5 rounded-sm bg-gradient-to-r from-blue-300 from-40% to-blue-400 to-60%" />
    </header>
  );
};

export default Header;
