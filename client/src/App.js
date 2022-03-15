import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/index";
import { home, missing } from "./pages/index";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/*Public Routes*/}
        <Route path="/" element={{ home }} />
        {/*catch all*/}
        <Route path="/*" element={{ missing }} />
      </Route>
    </Routes>
  );
}

export default App;
