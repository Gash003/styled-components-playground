const StyledWrapper = styled.div`
  color: green;
`

const RecommendedWrapper = ({ message }) => {
  return <StyledWrapper>{message}</StyledWrapper>
}

const NotRecommendedWrapper = ({ message }) => {
  const NotRecommendedStyledWrapper = styled.div`
    color: red;
  `

  return <NotRecommendedStyledWrapper>{message}</NotRecommendedStyledWrapper>
}
