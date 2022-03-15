import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/index";
import { Admin, Developer, Home, Missing } from "./pages/index";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/*Public Routes*/}
        <Route path="/" element={<Home />} />
        {/*Admin Routes*/}
        <Route path="/admin/programs" element={<Admin />} />
        <Route path="/admin/employees" element={<Admin />} />
        <Route path="/admin/addprogram" element={<Admin />} />
        <Route path="/admin/addticket" element={<Admin />} />
        {/*Admin & Developer Routes*/}
        <Route path="/myprograms" element={<Developer />} />
        <Route path="/mytickets" element={<Developer />} />
        <Route path="/login" element={<Developer />} />
        <Route path="/logout" element={<Developer />} />
        {/*catch all*/}
        <Route path="/*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;
