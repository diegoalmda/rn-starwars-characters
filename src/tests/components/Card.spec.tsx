import React from 'react';
import { Card } from "../../components/Card";
import { cleanup, render } from "@testing-library/react-native";
 
afterEach(cleanup);

describe('Layout Component', () => {
  
  it('renders Child component', () => {
    const characterInfo = {
      name: "John",
      height: "180",
      mass: "100"
    }
 
    const {toJSON, getByText} = render(<Card characterInfo={characterInfo} />); 
    const foundNameText = getByText('John'); 
    expect(foundNameText.props.children).toEqual('John');
    expect(toJSON()).toMatchSnapshot();
  });
});