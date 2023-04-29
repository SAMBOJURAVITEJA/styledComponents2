import {Li, LiButton} from './styledComponents'

const GradientDirectionItem = props => {
  console.log(props)
  const {each, changeDirection, active} = props
  const {displayText, value} = each

  const buttonChange = () => {
    changeDirection(value)
  }

  return (
    <Li onClick={buttonChange}>
      <LiButton active={active}>{displayText}</LiButton>
    </Li>
  )
}

export default GradientDirectionItem
