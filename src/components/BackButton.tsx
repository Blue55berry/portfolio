
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="fixed top-3 md:top-10 left-1/2 transform -translate-x-1/2 bg-white/80 backdrop-blur-sm rounded-full p-2 md:p-3 shadow-lg hover:shadow-xl transition-all duration-300 z-50 hover:scale-110"
    >
      <ArrowLeft className="w-4 h-4 md:w-9 md:h-9 cursor-pointer text-gray-700" />
    </button>
  );
};

export default BackButton;
