import Home from "./Pages/Home/Home";
import Service from "./Pages/Service/Service";
import Solution from "./Pages/Solution/Solution";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Contact from "./Pages/Contact/Contact";
import NotFound from "./Pages/NotFound/NotFound";
import LayoutOne from "./Pages/Layouts/LayoutOne";
import Layout from "./Pages/Layouts/Layout";
import { Routes, Route, BrowserRouter } from "react-router-dom";

// importing services section to render here

import Digitizing from "./Pages/Services/Digitizing/Digitizing.jsx";
import WebDevelopment from "./Pages/Services/WebDevelopment/WebDevelopment";
import GraphicDesigning from "./Pages/Services/GrapgicDesigning/GraphicDesigning";
import Vector from "./Pages/Services/Vector/Vector.jsx";

// import CustomPatches from "./Pages/Services/CustomPatches/CustomPatches";
import SupportMaintanance from "./Pages/Services/EmbroideredPatches/EmbroideredPatches.jsx";
import VideoAnimation from "./Pages/Services/VideoAnimation/VideoAnimation";
import VideoEditing from "./Pages/Services/VideoEditing/VideoEditing";
import CustomSoftware from "./Pages/Services/CustomSoftware/CustomSoftware";
import CmsSolution from "./Pages/Services/ChenillePatches/ChenillePatches.jsx";
import SublimationPatches from "./Pages/Services/SublimationPatches/SublimationPatches.jsx";
import LeatherPatches from "./Pages/Services/LeatherPatches/LeatherPatches.jsx";
import PosSolution from "./Pages/Services/PosSolution/PosSolution.jsx";
import OurBlogsPage from "./Pages/Services/OurBlogs/OurBlogsPage.jsx";
import BlogDetails from "./Pages/Services/BLogDetails/BlogDetails.jsx";

import SolutionPage from "./Pages/SolutionPage/SolutionPage";

import store from "./Redux/store";
import { Provider } from "react-redux";
import LmsSolution from "./Pages/Services/LmsSolution/LmsSolution.jsx";
import CustomPatches from "./Pages/Services/CustomPatches/CustomPatches.jsx";
import EmbroideredPatches from "./Pages/Services/EmbroideredPatches/EmbroideredPatches.jsx";
import ChenillePatches from "./Pages/Services/ChenillePatches/ChenillePatches.jsx";
import PVCPatches from "./Pages/Services/PVCPatches/PVCPatches.jsx";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutOne />}>
            <Route index element={<Home />}></Route>
            <Route path="contact-us" element={<Contact />}></Route>
            <Route path="our-portfolio" element={<Portfolio />}></Route>
          </Route>
          <Route path="/" element={<Layout />}>
            <Route path="solutions-page" element={<SolutionPage />}></Route>
            <Route path="*" element={<NotFound />}></Route>

            {/* here will be dropdown of service routing defined */}
            <Route path="services/">
              <Route
                path="digitizing"
                element={<Digitizing />}
              ></Route>
              <Route
                path="web-development"
                element={<WebDevelopment />}
              ></Route>
              <Route
                path="graphic-design"
                element={<GraphicDesigning />}
              ></Route>
              <Route
                path="vector-art"
                element={<Vector />}
              ></Route>
              <Route
                path="custom-patches"
                element={<CustomPatches />}
              ></Route>
              <Route
                path="embroidered-patches"
                element={<EmbroideredPatches />}
              ></Route>
              <Route
                path="video-animation"
                element={<VideoAnimation />}
              ></Route>
              <Route path="video-editing" element={<VideoEditing />}></Route>
              <Route
                path="custom-software-development"
                element={<CustomSoftware />}
              ></Route>
              <Route path="our-blogs" element={<OurBlogsPage />}></Route>
              <Route path="our-blogs/details" element={<BlogDetails />}></Route>

              <Route path="chenille-patches" element={<ChenillePatches />}></Route>
              <Route path="sublimation-patches" element={<SublimationPatches />}></Route>
              <Route path="leather-patches" element={<LeatherPatches />}></Route>
              <Route path="pvc-patches" element={<PVCPatches />}></Route>
              <Route path="lms-solution" element={<LmsSolution />}></Route>
              <Route path="pos-solution" element={<PosSolution />}></Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
