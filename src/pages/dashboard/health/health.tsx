import Adults from "./sections/adult";
import Children from "./sections/children";
import Mathers from "./sections/mathers";

const HealthPage = () => {
  return (
    <div>
      <div>
        <Mathers />
      </div>
      <div className="mt-8">
        <Adults />
      </div>
      <div className="mt-8">
        <Children />
      </div>
    </div>
  )
}

export default HealthPage;