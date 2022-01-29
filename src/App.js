import {BrowserRouter} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Home />
      </BrowserRouter>
    </div>
  );
}
export default App;
