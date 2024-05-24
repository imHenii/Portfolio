import React from 'react';
import '../styles/App.css'; // Import the CSS file for styling
import barberImage from '../components/barber.png'; // Import the barber image file
import dishImage from '../components/dish.png'; // Import the dish image file
import flixImage from '../components/flix.png'; // Import the flix image file
import endlessImage from '../components/endless.png'; // Import the endless image file

function Projects() {
    return (
        <div className='Projects'>
            <h1>Projects</h1>
            <section id="projects">
                <div className="project-contents">
                    <h2>Endless Productions</h2>
                    <p><em>Web Development</em></p>
                    <p><strong>January 2024</strong></p>
                    <p>
                        Developed "Endless Production," a website using HTML, JavaScript, and CSS, offering interactive features for users.<br/>
                        Implemented functionalities for users to add galleries and videos, enhancing the site's multimedia experience.<br/>
                        Incorporated options for users to add products and facilitate sales, contributing to the e-commerce aspect of the website.<br/>
                        Leveraged MongoDB to create and manage a database, ensuring secure storage and encryption of user data.<br/>
                        Established a user system with username and password creation, along with a login page to restrict access for unauthorized users.<br/>
                    </p>
                    <img src={endlessImage} alt="Endless Productions" className="project-image" />
                </div>
                <div className="project">
                    <h2>Dish Dive</h2>
                    <p><em>iOS Application</em></p>
                    <p><strong>March 2024</strong></p>
                    <p>
                        Developed "Dish Dive," an iOS app promoting culinary exploration and community engagement through recipe sharing.<br/>
                        Utilized Swift and Xcode to create a user-friendly interface enabling seamless navigation and interaction.<br/>
                        Implemented features allowing users to upload, search, and explore recipes within a community-driven platform.<br/>
                        Conducted thorough testing to ensure app stability and performance across iOS devices.<br/>
                    </p>
                    <img src={dishImage} alt="Dish Dive" className="project-image" />
                </div>
                <div className="project">
                    <h2>Flix Picks</h2>
                    <p><em>Python Software</em></p>
                    <p><strong>December 2023</strong></p>
                    <p>
                        Developed "FlixPix," a Python program leveraging IMDb and Netflix datasets for movie recommendations.<br/>
                        Utilized Tkinter to design an intuitive graphical user interface (GUI) for user interaction.<br/>
                        Integrated functionalities to filter recommendations based on attributes like title, genre, rating, country, and description.<br/>
                        Employed Python for both front-end and back-end development, ensuring seamless integration and functionality.<br/>
                    </p>
                    <img src={flixImage} alt="Flix Picks" className="project-image" />
                </div>
                <div className="project">
                    <h2>Barber's Chair</h2>
                    <p><em>Web Development with AWS Hosting</em></p>
                    <p><strong>November 2023</strong></p>
                    <p>
                        Developed a scalable website hosting platform on Amazon Web Services (AWS) using Terraform, an Infrastructure as Code (IaC) tool.<br/>
                        Defined AWS infrastructure as code, deployed websites, and configured DNS using AWS Route 53.<br/>
                        Achieved a fully functional, cost-effective website hosting solution while gaining practical expertise in AWS and Terraform for future cloud-based projects.<br/>
                    </p>
                    <img src={barberImage} alt="Barber's Chair" className="project-image" />
                </div>
            </section>
        </div>
    );
}

export default Projects;













