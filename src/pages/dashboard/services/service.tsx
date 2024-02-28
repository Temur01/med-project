import AYearConsult from "./sections/aYearConsult";
import MoreConsult from "./sections/moreConsult";
import Pregnant from "./sections/pregnant";

const ServicePage = () => {
  return (
    <div className="px-2">
      <div>
        <Pregnant />
      </div>
      <div className="mt-8">
        <AYearConsult />
      </div>
      <div className="mt-8">
        <MoreConsult />
      </div>
    </div>
  );
};

export default ServicePage;
