import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="App">
      <h1>Mi primer deploy</h1>
      <p>Mi primera modificación.</p>
      <Link to="/profile">Perfil</Link>
    </div>
  );
}

export default Home;
