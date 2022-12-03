import logo from './logo.svg';
import './App.css';
import { LessenedProvider } from './providers/context.js'
import { LeftBar, RightBar, Window} from './components'
import axios from '../node_modules/axios/index'
import { useState, useEffect } from 'react'

const baseUrl = "https://6375fb74b5f0e1eb85fed196.mockapi.io/api/v1/"

function App() {


  const [data, setData] = useState();
  
    useEffect(() => {
      (async () => {
        const response = await axios.get(
          baseUrl + "users/1"
        );
        console.log(response.data);
        setData(response.data);
      })();
    }, []);
    

  return (
    <div className='App'>
        <LessenedProvider >
        <LeftBar />
        <Window />
        <RightBar />
      </LessenedProvider>

        
    </div>
  );
}

export default App;
