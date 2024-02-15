import { User } from "lucide-react";
import { useState, useRef, useEffect, FC } from "react";
import { useNavigate } from "react-router";

const Avatar: FC = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleDropdown = () => setIsOpen(!isOpen);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        type="button"
        className="flex items-center gap-2 py-2.5 px-3 me-2 mb-1 text-sm font-medium text-gray-900 focus:outline-none bg-white"
      >
        <User size={20} />
        Админ
      </button>
      {isOpen && (
        <div className="origin-top-right absolute right-0 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div
            className="p-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
          
            <div
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
              role="menuitem"
              onClick={() => navigate("/")}
            >
              Sign Out
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Avatar;
