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
        <Route path="/recettedepoche" element={<Home />} />
        <Route path="/recettedepoche/login" element={<Login />} />
        <Route path="/recettedepoche/register" element={<RegisterUser />} />
        <Route path="/recettedepoche/recipes" element={<Recipes />} />
        <Route path="/recettedepoche/recipes/:id" element={<SingleRecipe />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
