import { Link } from "react-router-dom";
import "../styles/not-found-404.scss";
function NotFound() {
  return (
    <div className="section">
      <h1>404</h1>
      <Link to="/">Go to Homepage</Link>
    </div>
  );
}

export default NotFound;
