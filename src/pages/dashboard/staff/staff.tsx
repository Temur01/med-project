import AllStaffes from "./sections/all";
import LastSection from "./sections/last";
import Proportion from "./sections/proportion";
import Technical from "./sections/technical";
import Training from "./sections/training";

const StaffPage = () => {
  return (
    <div className="px-2">
      <div>
        <AllStaffes />
      </div>
      <div className="mt-8">
        <Proportion />
      </div>
      <div className="mt-8">
        <Training />
      </div>
      <div className="mt-8">
        <Technical />
      </div>
      <div className="mt-8">
        <LastSection />
      </div>
    </div>
  );
};

export default StaffPage;
