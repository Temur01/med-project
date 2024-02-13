import LogoSection from "../logo/logo";
import SidebarItem from "./sidebarItem";

const Sidebar: React.FC = () => (
  <aside className="w-32 md:w-72 p-2 h-screen bg-white" aria-label="Sidebar">
    <div className="mb-8 mt-4">
      <LogoSection
        logoPath={
          "data:image/png;base64,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"
        }
      />
    </div>
    <nav>
      <ul className="space-y-2 p-2">
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
