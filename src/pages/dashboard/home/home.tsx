import AllInformationSection from "./sections/allInfo";
import Category from "./sections/category";
import Condition from "./sections/condition";

const HomePage = () => {
  return (
    <div>
      <div>
        <AllInformationSection />
      </div>
      <div className="mt-6">
        <Category />
      </div>
      <div className="mt-6">
        <Condition />
      </div>
    </div>
  );
};

export default HomePage;
