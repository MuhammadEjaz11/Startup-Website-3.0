import Home from "./Pages/Home/Home";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Contact from "./Pages/Contact/Contact";
import NotFound from "./Pages/NotFound/NotFound";
import LayoutOne from "./Pages/Layouts/LayoutOne";
import Layout from "./Pages/Layouts/Layout";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Digitizing from "./Pages/Services/Digitizing/Digitizing.jsx";
import WebDevelopment from "./Pages/Services/WebDevelopment/WebDevelopment";
import GraphicDesigning from "./Pages/Services/GrapgicDesigning/GraphicDesigning";
import Vector from "./Pages/Services/Vector/Vector.jsx";
import VideoEditing from "./Pages/Services/VideoEditing/VideoEditing";
import SublimationPatches from "./Pages/Services/SublimationPatches/SublimationPatches.jsx";
import LeatherPatches from "./Pages/Services/LeatherPatches/LeatherPatches.jsx";
import store from "./Redux/store";
import { Provider } from "react-redux";
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
                <Route path="video-editing" element={<VideoEditing />}></Route>
              <Route
                path="custom-patches/embroidered-patches"
                element={<EmbroideredPatches />}
              ></Route>
       
    
              <Route path="custom-patches/chenille-patches" element={<ChenillePatches />}></Route>
              <Route path="custom-patches/sublimation-patches" element={<SublimationPatches />}></Route>
              <Route path="custom-patches/leather-patches" element={<LeatherPatches />}></Route>
              <Route path="custom-patches/pvc-patches" element={<PVCPatches />}></Route>
              
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
