type Props = {
  title: string;
  stats: number;
  type: string;
  measurment?: string;
};

const PersonCard = ({ title, stats, type, measurment }: Props) => {
  return (
    <div>
      <div className="flex items-center gap-4 px-5">
        <div className="p-2 bg-gray-100 rounded-full mr-2">
          <svg
            className={`w-6 h-6 ${
              type === "man" ? "text-blue-600" : "text-pink-600"
            }`}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <div>
          <div
            className={`${
              type === "man" ? "text-blue-600" : "text-pink-600"
            } font-semibold text-xs`}
          >
            {title}
          </div>
          <div className="text-lg font-bold">
            {stats} {measurment === "people" ? "Млн" : "%"}
          </div>
        </div>
      </div>
      <hr className="my-4" />
    </div>
  );
};
export default PersonCard;
