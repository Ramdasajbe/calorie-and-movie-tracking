import Home from "./Home";
import Movie from "./Movies";

import { Route } from "react-router-dom/cjs/react-router-dom.min";
import Navbar from "./Navbar";
import Home1 from "./Home1";
function App() {
  return (
    <div>
      <Navbar />
      <Route path="/" exact component={Home1} />
      <Route path="/Home" component={Home} />
      <Route path="/Movie" component={Movie} />
    </div>
  );
}

export default App;
