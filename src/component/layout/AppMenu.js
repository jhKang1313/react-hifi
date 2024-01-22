import { Link } from "react-router-dom";

const AppMenu = () => {
  return (
    <ul className="nav flex-column" >
      <li className="nav-item">
        <h6 className="text-white">React Home</h6>
        <Link to="/" className="nav-link text-warning">Home</Link>
      </li>
      <li className="nav-item">
        <h6 className="text-white">CH01 Component</h6>
        <Link to="/ch01/exam01" className="nav-link text-warning">ComA함수형 컴포넌트</Link>
        <Link to="/ch01/exam02" className="nav-link text-warning">ComB클래스형 컴포넌트</Link>
      </li>
      <li className="nav-item">
        <h6 className="text-white">CH02 JSX</h6>
        <Link to="/ch02/exam01" className="nav-link text-warning">JSX</Link>
      </li>
      
    </ul>
  )
}
export default AppMenu;