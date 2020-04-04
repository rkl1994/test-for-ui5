import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TestComponent } from "./components";


import { ThemeProvider } from '@ui5/webcomponents-react/lib/ThemeProvider';
const App = () => {
  return (
    <ThemeProvider withToastContainer>
      <TestComponent />
    </ThemeProvider>
  );
}
export default App;

