import BottomFlow from "../../components/bottomFlow/bottomFlow";
import LogButton from "../../components/button/logButton";

const Auth = () => {
  return (
    <div>
      <div className="flex items-center justify-center h-[80vh]">
        <div className="sm:px-60 sm:py-52 p-20 rounded-2xl shadow-md ">
          <div className="font-bolder text-xl text-center mb-3">ВОЙТИ</div>
          <div className="flex justify-center">
            <LogButton title="Войти через SSO" />
          </div>
        </div>
      </div>
      <BottomFlow />
    </div>
  );
};

export default Auth;
