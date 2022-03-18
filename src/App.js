import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Home,
  Login,
  Recipes,
  SingleRecipe,
  RegisterUser,
  Error,
} from "./pages";
import { Header } from "./components";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterUser />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/:id" element={<SingleRecipe />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
