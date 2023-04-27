import {Component} from 'react'

import GradientDirectionItem from '../GradientDirectionItem'

import {
  BgContainer,
  ContentContainer,
  CustomHeading,
  CustomParagraph,
  UnOrderedList,
  DivContainer,
  InputContainer,
  CustomInput,
  CustomButtonContainer,
  CustomButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    fromColor: '#8ae323',
    toColor: '#014f7b',
    activeDirection: gradientDirectionsList[0].value,
    linearGradient: `to ${gradientDirectionsList[0].value} ,#8ae323,#014f7b`,
  }

  fromChange = event => {
    this.setState({fromColor: event.target.value})
  }

  toChange = event => {
    this.setState({toColor: event.target.value})
  }

  changeDirection = event => {
    this.setState({activeDirection: event})
  }

  generate = () => {
    const {fromColor, toColor, activeDirection} = this.state
    this.setState({
      linearGradient: `to ${activeDirection},${fromColor},${toColor}`,
    })
  }

  render() {
    const {fromColor, toColor, activeDirection, linearGradient} = this.state
    return (
      <BgContainer
        linearGradient={linearGradient}
        data-testid="gradientGenerator"
      >
        <ContentContainer data-testid="gradientGenerator">
          <CustomHeading data-testid="gradientGenerator">
            Generate a CSS Color Gradient
          </CustomHeading>
          <CustomParagraph data-testid="gradientGenerator">
            Choose Direction
          </CustomParagraph>
          <UnOrderedList data-testid="gradientGenerator">
            {gradientDirectionsList.map(each => (
              <GradientDirectionItem
                active={activeDirection === each.value}
                changeDirection={this.changeDirection}
                key={each.directionId}
                each={each}
              />
            ))}
          </UnOrderedList>
          <CustomParagraph data-testid="gradientGenerator">
            Pick the Colors
          </CustomParagraph>
          <DivContainer data-testid="gradientGenerator">
            <InputContainer data-testid="gradientGenerator">
              <CustomParagraph data-testid="gradientGenerator">
                {fromColor}
              </CustomParagraph>
              <CustomInput
                data-testid="gradientGenerator"
                onChange={this.fromChange}
                value={fromColor}
                type="color"
              />
            </InputContainer>
            <InputContainer
              data-testid="gradientGenerator"
              onChange={this.toChange}
            >
              <CustomParagraph data-testid="gradientGenerator">
                {toColor}
              </CustomParagraph>
              <CustomInput
                data-testid="gradientGenerator"
                onChange={this.toChange}
                value={toColor}
                type="color"
              />
            </InputContainer>
          </DivContainer>
          <CustomButtonContainer data-testid="gradientGenerator">
            <CustomButton type="button" onClick={this.generate}>
              Generate
            </CustomButton>
          </CustomButtonContainer>
        </ContentContainer>
      </BgContainer>
    )
  }
}

export default GradientGenerator
