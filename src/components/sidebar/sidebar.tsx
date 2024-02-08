import LogoSection from "../logo/logo";
import SidebarItem from "./sidebarItem";

const Sidebar: React.FC = () => (
  <aside className="w-20 md:w-64 p-2 h-screen border-r bg-white" aria-label="Sidebar">
    <LogoSection
      logoPath={
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/UZINFOCOM_logo.png/472px-UZINFOCOM_logo.png"
      }
    />
    <nav className="mt-5">
      <ul className="space-y-2">
        <SidebarItem to="/home">
          <span className="hidden md:inline">Общая информация</span>
        </SidebarItem>
        <SidebarItem to="/health">
          <span className="hidden md:inline">
            Состояние здоровья и благополучия населения
          </span>
        </SidebarItem>
        <SidebarItem to="/service">
          <span className="hidden md:inline">Охват услугами</span>
        </SidebarItem>
        <SidebarItem to="/staff">
          <span className="hidden md:inline">Кадровые ресурсы</span>
        </SidebarItem>
        <SidebarItem to="/import">
          <span className="hidden md:inline">Импорт данных</span>
        </SidebarItem>
        <SidebarItem to="/admin">
          <span className="hidden md:inline">Администрирование</span>
        </SidebarItem>
      </ul>

    </nav>
  </aside>
);

export default Sidebar;
