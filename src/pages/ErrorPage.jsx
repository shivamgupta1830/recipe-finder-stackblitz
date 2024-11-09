import { Link } from "react-router-dom";
import cancel from "../assets/cancel.svg";

const ErrorPage = () => (
  <div className="flex flex-col items-center justify-center min-h-screen  gap-8 p-2">
    <h2 className="text-2xl font-bold mb-4 text-purple-700">
      404 - Page Not Found
    </h2>
    <img src={cancel} alt="Page not Found" width="200px" />
    <Link
      to="/"
      className="bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 rounded"
    >
      Go Home
    </Link>
  </div>
);

export default ErrorPage;
