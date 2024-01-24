import "./style.css"
import styled from "styled-components"

const Title = styled.h1`
  font-size : 20px;
  color : red;
`

const func = () => "동작"
let sumFunc = (a, b) => a + b;

function Exam01Expressions(props){
  const name = "React";

  const var1 = "리액트";
  const var2 = false;

  const myStyle = {
    color : "aqua",
    fontSize : "20px"
  }
  return (
    <div className = "card">
      <div className = "card-header">
        Exam01Expressions
      </div>
      <div className = "card-body">
        <p>Hello, {name}</p>
        <p>{func()}</p>
        <p>{sumFunc(2, 3)}</p>
        <h6 className = "text-info">삼항 연산식을 이용한 선택 렌더링</h6>
        <div>
          {var1 === "리액트" ? <p>내용1</p> : <p>내용2</p>}
        </div>
        <h6 className = "text-info">&& 연산식을 이용한 선택 렌더링</h6>
        <div>
          {(var1 === "리액트") && <p>내용3</p>}
          {(!var2) && <p>내용3.1</p>}
        </div>

        <h6 className = "text-info">|| 연산식을 이용한 선택 렌더링</h6>
        <div>
          {/* 앞에꺼가 참이면 앞에꺼 먼저 뿌려줌 */}
          <div className = "react"> {var1 || <p>내용4</p>}</div>
          <div style = {myStyle}>{var2 || <p>내용4.1</p>}</div>
          <Title>qwdqd</Title>
        </div>
      </div>
    </div>


  )
}
export default Exam01Expressions