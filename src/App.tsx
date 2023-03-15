import { useState } from 'react'
import SignInSide from './components/SignInSide';
import Header from './components/Header';


import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import CssBaseline from '@mui/material/CssBaseline';
import './App.scss'


function App() {

  return (
    <div className="App">
      <CssBaseline />

      <Header></Header>

      <SignInSide></SignInSide>

    </div>
  )
}

export default App
