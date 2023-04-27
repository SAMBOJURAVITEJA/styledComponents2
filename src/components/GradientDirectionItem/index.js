import {Li, LiButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {each, changeDirection, active} = props
  const {displayText, value} = each

  const buttonChange = () => {
    changeDirection(value)
  }

  return (
    <Li data-testid="gradientGenerator" onClick={buttonChange}>
      <LiButton data-testid="gradientGenerator" active={active}>
        {displayText}
      </LiButton>
    </Li>
  )
}

export default GradientDirectionItem
