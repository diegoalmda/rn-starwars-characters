import { QueryClient, QueryClientProvider } from "react-query";
import { render, waitFor } from "@testing-library/react-native";
import { Characters } from "../../screens/Characters";
import React from "react";
import { appServices } from "../../services";

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => (
  { useNavigation: () => ({ navigate: mockedNavigate }) }));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: Infinity,
      retry: false,
    },
  },
});

const wrapper = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

export default wrapper;

describe("Characters component", () => {
  it("Displays the loading view", () => {
    jest.spyOn(appServices, 'getAllCharacters').mockResolvedValueOnce(null);
    const { getByTestId } = render(<Characters />, { wrapper });
    expect(getByTestId('loader')).toBeTruthy();
  });
});