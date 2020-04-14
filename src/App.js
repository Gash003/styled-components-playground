import React from 'React';
import { Wrapper } from './components/1-wrapper';
import { Title } from './components/1-title';
import { Button } from './components/2-button';
import { TomatoButton } from './components/3-tomato-button';
import { ReversedButton } from './components/4-reversed-button';
import { Link, StyledLink } from './components/5-link';
import { Input } from './components/6-input';
import { Thing } from './components/8-thing';
import { SpecificThing } from './components/9-specific-thing';
import { AttrsProps } from './components/10-attrs-input';
import { RotatedSquare } from './components/11-rotated-square';
import { Theme } from './components/advanced/1-theme';
import { RefForm } from './components/advanced/2-input-ref';
import { WatchOut } from './components/advanced/3-how-styling-actually-works';

export const App = () => (<>
  <Wrapper>
    <Title>Hello Styled Components!</Title>
  </Wrapper>
  <hr />
  <Button>Normal button</Button>
  <Button primary>Primary button</Button>
  <TomatoButton>Tomato Button</TomatoButton>
  <ReversedButton as={TomatoButton}>Reversed text</ReversedButton>
  <hr />
  <div>
    <Link>Unstyled, boring Link</Link>
    <br />
    <StyledLink>Styled, exciting Link</StyledLink>
  </div>
  <hr />
  <div>
    <Input defaultValue="@probablyup" type="text" />
    <Input defaultValue="@geelen" type="text" inputColor="rebeccapurple" />
  </div>
  <hr />
  <div>
    <Thing>Hello world!</Thing>
    <Thing>How ya doing?</Thing>
    <Thing className="something">The sun is shining...</Thing>
    <div>Pretty nice day today.</div>
    <Thing>Don't you think?</Thing>
    <div className="something-else">
      <Thing>Splendid.</Thing>
    </div>
    <Thing>
      <label className="yet-another-stuff">Test label</label>
    </Thing>
  </div>
  <hr />
  <SpecificThing />
  <hr />
  <AttrsProps />
  <hr />
  <RotatedSquare />
  <hr />
  <Theme />
  <hr />
  <RefForm />
  <hr />
  <WatchOut />
  <hr />

</>); 