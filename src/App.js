import './App.css';
import { LessenedProvider, AuthProvider, TrackProvider} from './providers/context.js'
import { LeftBar, RightBar, Window} from './components'

function App() {

  return (
    <div className='App'>
      <AuthProvider>
        <LessenedProvider >
          <LeftBar />
          <TrackProvider >
            <Window />
            <RightBar />
          </TrackProvider >
        </LessenedProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
