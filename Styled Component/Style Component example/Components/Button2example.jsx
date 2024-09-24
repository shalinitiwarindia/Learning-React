// import styled from "styled-components";
// const Button = styled.button`
// backgrounmd-color:red;
// `;
// export {Button};
import "./Button.css";
export const Button = ({children,onClick })=> {
    return <button onClick={onClick} className="btn">{children}</button>
}
