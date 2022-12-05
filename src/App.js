import './App.css';
import { LessenedProvider, AuthProvider } from './providers/context.js'
import { LeftBar, RightBar, Window} from './components'
import axios from "axios";
import { useState, useEffect } from 'react'

const baseUrl = "https://6375fb74b5f0e1eb85fed196.mockapi.io/api/v1/"

function App() {

  return (
    <div className='App'>
      <AuthProvider>
        <LessenedProvider >
          <LeftBar />
          <Window />
          <RightBar />
        </LessenedProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
