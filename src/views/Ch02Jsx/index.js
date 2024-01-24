import { Route, Routes } from "react-router-dom"
import Exam01Expressions from "./Exam01Expressions"

function Ch02Jsx(){
  

  return (
    <div className = "card">
      <div className = "card-header">
        Ch02Jsx
      </div>
      <div className = "card-body">
        <Routes>
          <Route path = "exam01" element = {<Exam01Expressions/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default Ch02Jsx