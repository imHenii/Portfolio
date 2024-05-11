import '../styles/App.css';
import Newport1 from '../components/Newport1.png';
import Newport2 from '../components/Newport2.png';
import SantaAna from '../components/SantaAna.png';
import Huntington1 from '../components/Huntington1.png';

function About() {

    return (
        <div className="About-header">
            <section id="about">
                <div className="About-Me-Tab">
                    <br />
                    About Me
                    <br />
                    <br />
                </div>
                <div className="About-Me-Text">
                    I'm a first-generation Vietnamese American who came to the United States in 1998.<br />
                    Since childhood, I've been fascinated by technology, which has been a driving force in my life. Since 2016, I've been <br />
                    working in the retail industry, constantly refining my skills and knowledge. <br />
                    <br/>
                    Outside of work, I have a passion for music. In my free time, you'll often find me behind the DJ booth, <br />
                    spinning tunes for nightlife venues like clubs and bars.<br/>
                </div>
                <div className="Image-Container">
                    <img src={Newport1} alt="Newport 1" className="About-Image" />
                    <img src={Newport2} alt="Newport 2" className="About-Image" />
                    <img src={SantaAna} alt="Santa Ana" className="About-Image" />
                    <img src={Huntington1} alt="Huntington 1" className="About-Image" />
                </div>
            </section> 
        </div>
    );
}

export default About;


