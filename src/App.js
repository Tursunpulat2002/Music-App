import './App.css';
import Greeting from './components/Greeting.js'

function App() {
  return (
    <div className="App">
      <Greeting greeting_name="tom" gret="hell" />
      <Greeting greeting_name="tommy" />
      <Greeting greeting_name="tom3" />
      <Greeting greeting_name="tom4" />
    </div>
  );
}

export default App;
