type LogButtonProps = {
  title: string;
};

const LogButton = ({ title }: LogButtonProps) => {
  return (
    <div>
      <a
        href="https://test-sso.ssv.uz/oauth/authorize?response_type=code&client_id=9b45819c-2b3a-4786-ab5e-8611d0cf5b1f&state=46c9fb32127354e5a28ab230858c3916&redirect_uri=http%3A%2F%2Fitmed%2F&code_challenge=ODZlMzg4NTUxY2Y3OGQzZWJhMzE4NzEzMTljNWFjMDQ2OTAyMTQ3MDUzNDA2MjBiZjI5NGFhZDEzNzQzZDRhZg&code_challenge_method=S256"
        type="button"
        className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-12 py-3 me-2 mb-2"
      >
        {title}
      </a>
    </div>
  );
};

export default LogButton;
