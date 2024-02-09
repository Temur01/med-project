type Props = {
  statitics: number;
  title: string;
  isGood: boolean;
  img: string;
};

const MonitorCard = ({ statitics, img, title, isGood }: Props) => {
  return (
    <div className="flex items-center py-6 px-10 bg-white rounded-lg shadow-md relative">
      <div className="absolute -top-2 -left-2">
        <span className="relative flex h-4 w-4">
          <span
            className={`animate-ping absolute inline-flex h-full w-full rounded-full ${
              isGood ? "bg-green-500" : "bg-red-600"
            } opacity-75`}
          ></span>
          <span
            className={`relative inline-flex rounded-full h-4 w-4 ${
              isGood ? "bg-green-500" : "bg-orange-600"
            }`}
          ></span>
        </span>
      </div>
      <div className="mr-4">
        <img src={img} alt="girl" className="w-14" />
      </div>
      <div>
        <div className="text-xs text-gray-600">{title}</div>
        <hr />
        <div className="flex mt-1">
          <div
            className={`font-bold text-3xl ${
              isGood ? "text-green-600" : "text-red-600"
            }`}
          >
            {isGood ? "-" : "+"}
            {statitics}%
          </div>
          <div className="text-xs text-blue-600 mt-1 mx-2 font-light">
            на за последние 5 лет
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonitorCard;
