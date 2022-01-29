import '../../App.css';
import {Link} from 'react-router-dom';
import Logo from './img/Logo.png';

function DesktopNavbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light ml-3 mr-3 shadow mb-3">
      <Link className="navbar-brand display-1" to="/"></Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent container">
        <ul className="navbar-nav mr-auto text-lg-right">
          <li className="nav-item active">
            <Link className="nav-link" to="/"> <span className="sr-only"><img src={Logo} alt='' className='img img-responsive'/></span>Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/voting.html">Voting</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="createPolls.html">Create Polls</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="pricing.html">Pricing</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="forms.html">Forms</Link>
          </li>
        </ul>
        <div className="my-5 my-lg-0 pull-right">
          <button className="btn  btn-outline-black my-1 my-sm-0 p-2 mx-2
            border-dark" type="submit" style={{width:"150px"}}>Login</button>
          <button className="btn btn-black my-2 my-sm-0 p-2 mx-2 btn-lg"type="button">Get
            started</button>
        </div>
      </div>
    </nav>
    </div>
  );
}

export default DesktopNavbar;
