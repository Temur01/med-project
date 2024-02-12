import AllStaffes from "./sections/all";
import Proportion from "./sections/proportion";

const StaffPage = () => {
  return (
    <div>
      <div>
        <AllStaffes />
      </div>
      <div className="mt-8">
        <Proportion />
      </div>
    </div>
  );
};

export default StaffPage;
