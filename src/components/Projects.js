import React from 'react';
import '../styles/App.css'; // Import the CSS file for styling

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
                    <img src="https://media.discordapp.net/attachments/1202056550349537342/1235697252723462144/image.png?ex=663fdc3f&is=663e8abf&hm=3ee82daf2a40b16091ee8dd15d1b49949e84550e44f6582d9970f54f60485ea3&=&format=webp&quality=lossless&width=809&height=366" />
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
                    <img src="https://media.discordapp.net/attachments/1202323704907059262/1234649737332920391/image.png?ex=6640012c&is=663eafac&hm=ebb5c943123e6d43873d22ef1c81231f3881ddd482a9242244ec004740f9fea8&=&format=webp&quality=lossless&width=291&height=632" alt="Project 2" className="project-image" />
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
                    <img src="https://media.discordapp.net/attachments/1200276343020064838/1238405966362312735/image.png?ex=663f2aee&is=663dd96e&hm=79a31d2b4c83e88a3d5842c9d50af4039b160ae9424e28c68be0440aafc79b3f&=&format=webp&quality=lossless&width=768&height=605" alt="Project 3" className="project-image" />
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
                    <img src="https://stopzer.dev/images/portfolio/modals/m-barber.png" alt="Project 4" className="project-image" />
                </div>
            </section>
        </div>
    );
}

export default Projects;










