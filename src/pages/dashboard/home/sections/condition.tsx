import MonitorCard from "../../../../components/card/monitorCard";
import girl from "../../../../assets/girl.png";
import boy from "../../../../assets/child.png";
const Condition = () => {
  return (
    <div className="shadow-md p-6 rounded-lg">
      <div className="text-2xl text-blue-700 font-semibold">
        МОНИТОРИНГ СОСТОЯНИЙ
      </div>

      <div className="flex items-center gap-8 px-4 py-6">
        <MonitorCard
          img={girl}
          isGood={true}
          statitics={2.7}
          title={"Материнская смертность снизилась на"}
        />
        <MonitorCard
          img={boy}
          isGood={false}
          statitics={1.7}
          title={"Смертность детей до 5 лет повысилась на"}
        />
      </div>
    </div>
  );
};

export default Condition;
