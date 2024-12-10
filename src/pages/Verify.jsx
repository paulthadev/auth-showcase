import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import config from "../config/config";
const { API_URL } = config;

const VerifyEmail = () => {
  const { token } = useParams(); // Token from URL parameter
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const response = await fetch(`${API_URL}/verify/${token}`, {
          method: "GET",
        });

        if (response.ok) {
          setMessage("Email verified successfully!");

          alert("Email verified successfully! Please login to continue.");

          navigate("/login");
        } else {
          const errorData = await response.json();
          setMessage(errorData.message || "Something went wrong.");
        }
      } catch (error) {
        setMessage("Server error, please try again later.");
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    verifyToken();
  }, [token, navigate]);

  if (loading) {
    return (
      <div className="grid place-content-center h-screen w-full">
        Loading...
      </div>
    );
  }

  return (
    <div className="grid place-content-center w-full h-screen">
      <h2>{message}</h2>
    </div>
  );
};

export default VerifyEmail;
