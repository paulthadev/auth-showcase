import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Welcome to the Test App
        </h1>

        <div className="space-y-4">
          <button
            onClick={() => navigate("/login")}
            className="w-full py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-300 ease-in-out"
          >
            Login
          </button>

          <button
            onClick={() => navigate("/register")}
            className="w-full py-3 text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-300 ease-in-out"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
