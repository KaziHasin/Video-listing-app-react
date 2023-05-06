
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

import Videos from './component/video/Videos';
import Front from './component/front/Front';





function App() {
       
 return (
    
  <>
  
  <Router>

        <Routes>
            
             
        <Route path="/" element={<Front />} />
             <Route path="/video" element={<Videos />} />
            


        </Routes>

  </Router>
  
  </>

 )
 
}


export default App;