import React from 'react';
import { Text } from "react-native";
import { Layout } from "../../components/Layout";
import { cleanup, render } from "@testing-library/react-native";
 
afterEach(cleanup);

describe('Layout Component', () => {
  
  it('renders Child component', () => {
    const helloWorldText = <Text>Hello World!</Text>;
 
    const {toJSON, getByText} = render(<Layout children={helloWorldText} />);
 
    const foundHelloWorldText = getByText('Hello World!');
 
    expect(foundHelloWorldText.props.children).toEqual('Hello World!');
    expect(toJSON()).toMatchSnapshot();
  });
});