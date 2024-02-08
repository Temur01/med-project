type LogoProps = {
  logoPath: string;
};

const LogoSection = ({ logoPath }: LogoProps) => (
  <div className="bg-white p-2">
    <img src={logoPath} alt="Logo" className="h-10 mx-auto" />
  </div>
);

export default LogoSection;
