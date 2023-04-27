import styled from 'styled-components'

export const Li = styled.li`
  font-weight: bold;
  font-family: 'Roboto';
  margin-right: 5px;
`

export const LiButton = styled.button`
  font-weight: bold;
  font-family: 'Roboto';
  border: none;
  outline: none;
  cursor: pointer;
  padding: 10px;
  border-radius: 8px;
  color: ${props => (props.active ? '#334155' : '#1e293b')};
  opacity: ${props => (props.active ? 1 : 0.5)};
`
