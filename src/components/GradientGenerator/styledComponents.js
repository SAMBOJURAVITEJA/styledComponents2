import styled from 'styled-components'

export const BgContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  font-weight: bold;
  font-family: 'Roboto';
  padding: 20px;
  background-image: linear-gradient(${props => props.linearGradient});
`

export const ContentContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const UnOrderedList = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  display: flex;
  text-align: center;
  justify-content: center;
`

export const DivContainer = styled.div`
  display: flex;
  justify-content: space-around;
  background-size: cover;
  width: 500px;
  align-self: center;
`

export const CustomButtonContainer = styled.div`
  text-align: center;
`

export const CustomButton = styled.button`
  font-weight: bold;
  font-family: 'Roboto';
  border: none;
  outline: none;
  cursor: pointer;
  padding: 5px;
  color: #014f7b;
  border-radius: 8px;
  background-color: #00c9b7;
`

export const CustomHeading = styled.h1`
  font-weight: bold;
  font-family: 'Roboto';
  color: #ffffff;
  text-align: center;
`

export const CustomParagraph = styled.p`
  font-weight: bold;
  font-family: 'Roboto';
  color: #ededed;
  text-align: center;
`

export const CustomInput = styled.input`
  width: 150px;
  height: 45px;
  border: none;
  cursor: pointer;
  outline: none;
  background-size: cover;
  background-color: transparent;
`

export const InputContainer = styled.div`
  font-weight: bold;
  font-family: 'Roboto';
  display: flex;
  flex-direction: column;
  margin-right: 5px;
`
