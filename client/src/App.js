import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/index";
import { Home, Missing } from "./pages/index";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/*Public Routes*/}
        <Route path="/" element={<Home />} />
        {/*catch all*/}
        <Route path="/*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;
