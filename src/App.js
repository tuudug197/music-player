import logo from './logo.svg';
import './App.css';
import { LessenedProvider } from './providers/LessenedContext.js'
import { LeftBar, RightBar, Window} from './components'

function App() {
  return (
    <div className='App'>

        <LessenedProvider>
          <LeftBar />
          <Window />
        </LessenedProvider>

        <RightBar />
        
    </div>
  );
}

export default App;
