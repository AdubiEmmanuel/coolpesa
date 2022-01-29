import {BrowserRouter} from 'react-router-dom';
import DesktopNavbar from './Components/Navbar/DesktopNavbar';
import Home from './Components/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <DesktopNavbar/>
        <Home />
      </BrowserRouter>
    </div>
  );
}
export default App;
