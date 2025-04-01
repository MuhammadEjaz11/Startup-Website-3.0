import Home from "./Pages/Home/Home"
import Service from "./Pages/Service/Service"
import Solution from "./Pages/Solution/Solution"
import Portfolio from "./Pages/Portfolio/Portfolio"
import Contact from "./Pages/Contact/Contact"
import NotFound from "./Pages/NotFound/NotFound"
import LayoutOne from './Pages/Layouts/LayoutOne'
import Layout  from './Pages/Layouts/Layout'
import { Routes, Route,BrowserRouter } from 'react-router-dom'

// importing services section to render here

import AppDevelopment from "./Pages/Services/AppDevelopment/AppDevelopment"
import WebDevelopment from "./Pages/Services/WebDevelopment/WebDevelopment"
import GraphicDesigning from "./Pages/Services/GrapgicDesigning/GraphicDesigning"
import SearchEngine from "./Pages/Services/SearchEngine/SearchEngine"

import DigitalMarketing from "./Pages/Services/DigitalMarketing/DigitalMarketing"
import SupportMaintanance from "./Pages/Services/SupportMaintaince/SupportMaintanance"
import VideoAnimation from "./Pages/Services/VideoAnimation/VideoAnimation"
import VideoEditing from "./Pages/Services/VideoEditing/VideoEditing"
import CustomSoftware from "./Pages/Services/CustomSoftware/CustomSoftware"
import CmsSolution from "./Pages/Services/CmsSolution/CmsSolution"
import HrmSolution from "./Pages/Services/HrmSolution/HrmSolution.jsx"
import CrmSolution from "./Pages/Services/CrmSolution/CrmSolution.jsx"
import ErpSolution from "./Pages/Services/ErpSolution/ErpSolution.jsx"
import PosSolution from "./Pages/Services/PosSolution/PosSolution.jsx"
import OurBlogsPage from "./Pages/Services/OurBlogs/OurBlogsPage.jsx"
import BlogDetails from "./Pages/Services/BLogDetails/BlogDetails.jsx"




import SolutionPage from "./Pages/SolutionPage/SolutionPage"




import store from "./Redux/store"
import { Provider } from "react-redux"
import LmsSolution from "./Pages/Services/LmsSolution/LmsSolution.jsx"
function App() {
  return (
    <Provider store={store} >
    <BrowserRouter>
    
      <Routes>
        <Route path='/' element={<LayoutOne />}>
          <Route index element={<Home />}></Route>
          <Route path='contact-us' element={<Contact/>}></Route>   
          <Route path='our-portfolio' element={<Portfolio/>}></Route>  
        </Route>
        <Route path='/' element={<Layout />}> 
          <Route path='solutions-page' element={<SolutionPage/>}></Route>   
          <Route path='*' element={<NotFound/>}></Route>  

          {/* here will be dropdown of service routing defined */}
          <Route path="services/">
            <Route path='android-&-ios-app-development' element={<AppDevelopment/>}></Route>   
            <Route path='web-development' element={<WebDevelopment/>}></Route>   
            <Route path='graphic-design' element={<GraphicDesigning/>}></Route>
            <Route path='search-engine-optimization-(SEO)' element={<SearchEngine/>}></Route>   
            <Route path='digital-marketing' element={<DigitalMarketing/>}></Route>   
            <Route path='support-&-maintenance' element={<SupportMaintanance/>}></Route> 
            <Route path='video-animation' element={<VideoAnimation/>}></Route>   
            <Route path='video-editing' element={<VideoEditing/>}></Route>   
            <Route path='custom-software-development' element={<CustomSoftware/>}></Route>
            <Route path='our-blogs' element={<OurBlogsPage/>}></Route>
            <Route path='our-blogs/details' element={<BlogDetails/>}></Route>


            <Route path='cms-solution' element={<CmsSolution/>}></Route>
            <Route path='hrm-solution' element={<HrmSolution/>}></Route>
            <Route path='crm-solution' element={<CrmSolution/>}></Route>
            <Route path='erp-solution' element={<ErpSolution/>}></Route>
            <Route path='lms-solution' element={<LmsSolution/>}></Route>
            <Route path='pos-solution' element={<PosSolution/>}></Route>





          </Route>
          
          
          
          
          
          
          
          
          
          

          
        </Route>

      </Routes>
    </BrowserRouter>
    </Provider>
  )
}

export default App
