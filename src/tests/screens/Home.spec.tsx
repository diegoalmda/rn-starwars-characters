import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';

import { Home } from '../../screens/Home';
import Logo from '../../assets/starwars.svg';

const mocked = jest.mock('../../assets/starwars.svg', () => "mockedSVG");

describe('Home screen', () => {
  it('Should be rendered successfully', () => {
    render(<Home />);
  });
});
