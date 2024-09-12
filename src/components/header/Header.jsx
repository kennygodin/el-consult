import Button from '../button/Button';
import './header.scss';

function Header() {
  return (
    <div className="header-container">
      <div className="texts">
        <h1>Innovative Solutions for Today’s Business Challenges.</h1>
        <p>
          We provide customized services that elevate your business and
          streamline processes for efficiency and growth.
        </p>
        <Button label="Know More" path="/services" />
      </div>
      <div className="image">
        <img src="/images/hero.png" alt="" />
      </div>
    </div>
  );
}

export default Header;
