import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react-native';
import { Home } from '../../screens/Home';

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => (
  { useNavigation: () => ({ navigate: mockedNavigate }) }));

afterEach(cleanup);

describe('Home screen', () => {
  it('Should render image successfully', () => {
    const { getByTestId } = render(<Home />);
    const image = getByTestId('logoImage');
    expect(image).toBeTruthy();
  });
  it('Should calls navigation on button press', () => {
    const { getByTestId } = render(<Home />);
    fireEvent.press(getByTestId('goToCharacters'));
    expect(mockedNavigate).toHaveBeenCalledTimes(1);
  });
});
