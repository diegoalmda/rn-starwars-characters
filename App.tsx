import React from 'react';
import 'react-native-gesture-handler';
import { QueryClient, QueryClientProvider } from 'react-query'
import Routes from './src/routes';
import { StatusBar } from 'expo-status-bar';

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar
        style='light'
        backgroundColor='transparent'
        translucent
      />
      <Routes />
    </QueryClientProvider>
  );
}
