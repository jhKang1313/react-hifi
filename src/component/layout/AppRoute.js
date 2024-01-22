import { Route, Routes } from "react-router-dom";
import Home from "../../views/Home";
import Ch01Component from "../../views/Ch01Component";
import Ch02Jsx from "../../views/Ch02Jsx";



function AppRoute(){
  return(
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/ch01/*" element={<Ch01Component />}/> 
      <Route path="/ch02/*" element={<Ch02Jsx />}/> 
    </Routes>
  );
}
export default AppRoute;