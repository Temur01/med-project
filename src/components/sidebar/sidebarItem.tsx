import { NavLink } from "react-router-dom";

type SidebarItemProps = {
  children: React.ReactNode;
  to: string;
};

const SidebarItem: React.FC<SidebarItemProps> = ({
  to,
  children,
  ...props
}) => (
  <NavLink
    to={to}
    {...props}
    className={({ isActive }) =>
      `flex items-center px-4 py-2 text-sm font-medium rounded-lg ${
        isActive ? "bg-blue-500 text-white" : "text-blue-900 hover:bg-blue-100"
      }`
    }
  >
    {children}
  </NavLink>
);

export default SidebarItem;
