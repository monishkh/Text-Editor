import styled from 'styled-components'

export const AppPage = styled.div`
  background-color: #25262c;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const Container = styled.div`
  background-color: #1b1c22;
  border-radius: 10px;
  padding: 10px;
  width: 80%;
  height: 500px;
  display: flex;
  justify-content: space-between;
`

export const ImgContainer = styled.div`
  text-align: center;
  padding: 20px;
  width: 50%;
`

export const Heading = styled.h1`
  color: white;
  font-size: 32px;
  line-height: 2;
  font-family: Roboto;
`

export const Image = styled.img`
  width: 300px;
`

export const TextAreaContainer = styled.div`
  background-color: #25262c;
  border-radius: 10px;
  width: 50%;
  padding: 5px;
  box-shadow: 0px 0px 2px 0px #cbcbcb;
`
export const BtnContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #cbcbcb;
  padding: 10px;
`

export const Button1 = styled.button`
  background-color: transparent;
  border: none;
  margin-right: 10px;
  font-size: 25px;
  color: ${props => (props.bold ? 'yellow' : 'gray')};
`
export const Button2 = styled.button`
  background-color: transparent;
  border: none;
  margin-right: 10px;
  font-size: 25px;
  color: ${props => (props.italic ? 'yellow' : 'gray')};
`
export const Button3 = styled.button`
  background-color: transparent;
  border: none;
  margin-right: 10px;
  font-size: 25px;
  color: ${props => (props.underline ? 'yellow' : 'gray')};
`

export const TextArea = styled.textarea`
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 18px;
  padding: 10px;
  color: white;
  text-decoration: ${props => (props.underline ? 'underline' : null)};
  font-style: ${props => (props.italic ? 'italic' : null)};
  font-weight: ${props => (props.bold ? 'bold' : null)};
`
