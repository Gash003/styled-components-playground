// "as" syntax
import React from 'React';
import { Button } from "./2-button";

export const ReversedButton = props => <Button {...props} children={props.children.split('').reverse()} />;
