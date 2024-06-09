import { Link } from 'react-router-dom';
import Navigation from './Navigation';

const Header = () => {
  return (
    <header>
      <div>
        <Link to="/">
          <h1>Stephen Bates</h1>
        </Link>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;