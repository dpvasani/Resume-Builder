import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import DetailsFilling from "./Pages/DetailsFilling";
import CheckSelectedId from "./Components/CheckSelectedId";
import AboutUs from "./Pages/AboutUs";
import MyResumes from "./Pages/MyResumes";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Home Page Route */}
        <Route exact path="/" element={<Home />} />

        {/* Details Filling Page */}
        <Route
          exact
          path="/template/fill-details"
          element={
            <CheckSelectedId>
              <DetailsFilling />
            </CheckSelectedId>
          }
        />

        {/* My Resumes Page */}
        <Route exact path="/my/resumes" element={<MyResumes />} />

        {/* About Us Page */}
        <Route exact path="/about-us" element={<AboutUs />} />
      </Routes>
    </Router>
  );
};

export default App;
