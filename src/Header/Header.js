import React, { Component } from 'react';
import { Link } from 'react-scroll';
import { Button } from '_components';
import FontAwesome from 'react-fontawesome';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import './Header.scss';

class Header extends Component {
  constructor(props) {
    super(props);

    this.scrollPos = window.scrollY;

    this.state = {
      isSmall: window.innerWidth <= 600,
      isOpen: false,
      isSticked: false,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', () => this.updateDimensions());

    window.addEventListener('scroll', () => {
      this.setState({
        isSticked: window.scrollY > 20,
      });
    });

    this.updateDimensions();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  updateDimensions() {
    const { isSmall } = this.state;
    if (window.innerWidth <= 600 && !isSmall) {
      this.setState({
        isSmall: true,
      });
    } else if (window.innerWidth >= 600 && isSmall) {
      this.setState({
        isSmall: false,
      });
    }
  }

  toggle(e) {
    e.preventDefault();
    const { isOpen } = this.state;
    this.setState({
      isOpen: !isOpen,
    });
  }

  close() {
    this.setState({
      isOpen: false,
    });
  }

  render() {
    const { isSmall, isOpen, isSticked } = this.state;
    let headerClasses = isSmall ? ' -small' : '';
    headerClasses = isOpen ? ' -open' : '';

    if (isSticked) {
      headerClasses += ' -is-sticked';
    }

    return (
      <header className={`Header${headerClasses}`}>
          <nav className="Navigation">
            <Link
              to="About"
              smooth="true"
              spy={true}
              offset={-100}
              className="Link"
              onClick={() => this.close()}
            >
              About
            </Link>
          
            <Link
              to="Speakers"
              smooth="true"
              spy={true}
              offset={-100}
              className="Link"
              onClick={() => this.close()}
            >
              Events
            </Link>
            
            <Link
              to="Team"
              smooth="true"
              spy={true}
              offset={-100}
              className="Link"
              onClick={() => this.close()}
            >
              Team
            </Link>
            
                        
          </nav>
          <a href="#Intro" className="NavBtn" onClick={e => this.toggle(e)}>
            <FontAwesome name="bars" />
          </a>
        </div>
      </header>
    );
  }
}

export default Header;
