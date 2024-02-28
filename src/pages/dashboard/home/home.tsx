import AllInformationSection from "./sections/all";
import Category from "./sections/category";
import Condition from "./sections/condition";
import MedicalCentres from "./sections/centres";
import MedicalSystem from "./sections/systems";
import HomeModel from "./sections/models";

const HomePage = () => {
  return (
    <div className="px-2">
      <div>
        <AllInformationSection />
      </div>
      <div className="mt-8">
        <Category />
      </div>
      <div className="mt-8">
        <Condition />
      </div>
      <div className="mt-8">
        <MedicalCentres />
      </div>
      <div className="mt-8">
       <HomeModel />
      </div>
      <div className="mt-8">
        <MedicalSystem />
      </div>
    </div>
  );
};

export default HomePage;
