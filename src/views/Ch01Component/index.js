import { Route, Routes } from "react-router-dom";
import ComA from "./ComA";
import ComB from "./ComB";

function Ch01Component(){
  return (
    <div className = "card">
      <div className = "card-header">
        Ch01Component
      </div>
      <div className = "card-body">
        <Routes>
          <Route path="exam01" element = {<ComA/>}/>
          <Route path="exam02" element = {<ComB/>}/>
        </Routes>
      </div>
    </div>
  )
}
export default Ch01Component;