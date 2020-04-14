import styled from "styled-components";

export const Thing = styled.div`
  color: blue;
  &:hover {
    color: red; // <Thing> when hovered
  }
  & ~ & {
    background: tomato; // <Thing> as a sibling of <Thing>, but maybe not directly next to it
  }
  & + & {
    background: lime; // <Thing> next to <Thing>
  }
  &.something {
    background: orange; // <Thing> tagged with an additional CSS class ".something"
  }
  .something-else & {
    border: 1px solid; // <Thing> inside another element labeled ".something-else"
  }
  .yet-another-stuff {
    border: 5px solid; // an element labeled ".yet-another-stuff" inside <Thing>
    display: block;
  }
`