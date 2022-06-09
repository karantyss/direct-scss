import { Link } from "react-router-dom";
import "../styles/home.scss";
function Home() {
  return (
    <div className="section">
      <h1>Home Page</h1>
      <Link to="/details">Go to Details</Link>
    </div>
  );
}

export default Home;
