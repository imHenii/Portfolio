// App.js
import logo from './HENIINEWLOGO.png';
import linkedinLogo from '../components/linkedin.png';
import githubLogo from '../components/github.png';
import emailLogo from '../components/email.png';
import '../styles/App.css';
import About from './About';
import Resume from './Resume';
import Projects from './Projects';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* New class for the smaller logo */}
        <div className="center">
          <img src={logo} className="Small-logo" alt="logo" />
          <h1>Henry Ngo</h1>
        </div>
        <div className="top-left">
          <ul className="tabs">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#projects">Projects</a></li>
          </ul>
        </div>
        <div className="top-right">
          <a href="mailto: henrycngo@yahoo.com">
            <img src={emailLogo} className="email" alt="Email" />
          </a>
          <a href="https://www.linkedin.com/in/henrycngo/">
            <img src={linkedinLogo} className="linkedin" alt="LinkedIn" />
          </a>
          <a href="https://github.com/imHenii">
            <img src={githubLogo} className="github" alt="GitHub" />
          </a>
        </div>
        <div className="paragraph">
          <p>
            Welcome to my portfolio!<br />
            As a recent graduate of California State University, Fullerton with a degree in Computer Science,<br />
            I am a seasoned software engineer specializing in front-end development.<br />
            With a passion for crafting innovative solutions, I specialize in creating sleek and impactful projects,<br />
            ranging from dynamic websites to cutting-edge iOS applications.<br />
            Join me on this journey as you explore my portfolio and delve deeper into my expertise and experiences.
          </p>
        </div>
      </header>
      <About />
      <Resume />
      <Projects />
    </div>
  );
}

export default App;











