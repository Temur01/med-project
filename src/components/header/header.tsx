import { useLocation } from "react-router";
import { useMemo } from "react";
import Avatar from "../avatar/avatar";

const Header = () => {
  const location = useLocation();

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

  return (
    <header className="py-2 overflow-hidden">
    <div className="container mx-4 flex justify-between">
      <h1 className="text-xl font-bold mt-12">{pageName}</h1>
      <div>
        <Avatar />
      </div>
    </div>
    <hr className="mt-2 h-1.5 rounded-sm bg-gradient-to-r from-blue-300 from-40% to-blue-400 to-60%" />
  </header>
  );
};  

export default Header;
