import styled from "styled-components";
// .first-color { black
// 	background: #222831;
// }

// .second-color { dark gray
// 	background: #393e46;
// }

// .third-color { blue
// 	background: #0092ca;
// }

// .fourth-color { light gray
// 	background: #eeeeee;
// }
export const Button = styled.button`
  height: 40px;
  width: 150px;
  background-color: #393e46;
  color: #eeeeee;
  font-size: 15px;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  margin: 5px;
  &:hover {
    background-color: #0092ca;
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-evenly;
`;

export const A = styled.a`
  color: #eeeeee;
  text-decoration: none;
  margin: 0 5px;
  &:hover {
    color: #0092ca;
  }
`;

export const HeaderWrapper = styled.header`
  display: flex;
  background-color: #222831;
  height: 10vh;
  align-items: center;
  color: white;
  justify-content: space-between;
  padding: 0 20px;
`;

export const Main = styled.div`
  width: 100%;
  min-height: 90vh;
  display: flex;
  justify-content: center;
  background-color: #393e46;
`;

export const Page = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.backgroundColor};
 
  width: 90%;
`;

export const LoginDiv = styled.div`
  display: flex;
  width: 40%;
  height: 80%;
  flex-direction: column;
  align-items: center;
  background-color: #222831;
  color: #eeeeee;
  border-radius: 10px;
`;

export const FormWrapper = styled.form`
  display: flex;
  height: 300px;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 2px solid #eeeeee;
  padding: 10px;
  margin: 10px 0;
  outline: none;
  color: #eeeeee;
  font-size: 30px;
`;

export const Span = styled.span`
  color: #eeeeee;
  font-size: 20px;
  &:hover {
    color: #0092ca;
  }
`;

export const TextArea = styled.textarea`
  background-color: transparent;
  border: none;
  border: 2px solid #eeeeee;
  padding: 10px;
  margin: 10px 0;
  outline: none;
  color: #eeeeee;
  font-size: 20px;
  resize: none;
`;
