type LogoProps = {
  logoPath: string;
};

const LogoSection = ({ logoPath }: LogoProps) => (
  <div className="bg-white">
    <img src={logoPath} alt="Logo" className="w-32 mx-auto" />
  </div>
);

export default LogoSection;
