import logo from './logo.svg';
import './App.css';
import { LessenedProvider } from './providers/context.js'
import { LeftBar, RightBar, Window} from './components'

function App() {
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
