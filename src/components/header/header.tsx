import { useParams } from "react-router";

const Header = () => {
  const url = useParams();
  console.log("🚀 ~ Header ~ url:", url);
  return (
    <header className="bg-white shadow w-full z-10">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8"></div>
    </header>
  );
};

export default Header;
