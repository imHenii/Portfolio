import React from 'react';
import { Container, Typography, Button, Paper, CardContent, List, ListItem, ListItemText } from '@mui/material';
import DownloadIcon from '../components/downloadicon.png'; // Import the download icon image
import HenryResumeFinal from '../components/Henry_Resume_Final.pdf'; // Import the resume file
import '../styles/App.css';

function Resume() {
    // Function to handle the resume download
    const handleDownloadResume = () => {
        const link = document.createElement('a');
        link.href = HenryResumeFinal;
        link.setAttribute('download', 'Henry_Resume_Final.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className='Resume'>
            <section id="resume">
                <Container maxWidth="md">
                    <Typography variant="h2" gutterBottom className="Resume-Tab">
                        Resume
                    </Typography>
                    <Button variant="contained" color="primary" size="large" onClick={handleDownloadResume} className="Resume-Button" style={{ marginBottom: '20px' }}>
                        <img src={DownloadIcon} alt="Download Icon" className="Download-Icon" />
                        Download Resume
                    </Button>
                    <EducationSection />
                    <WorkExperienceSection />
                </Container>
            </section>
        </div>
    );
}

function EducationSection() {
    return (
        <Paper elevation={3} style={{ padding: '20px', width: '100%', height: '90%' }}>
            <CardContent>
                <Typography variant="h4" gutterBottom>
                    Education
                </Typography>
                <List>
                    <ListItem>
                        <ListItemText 
                            primary="California State University Fullerton"
                            secondary="Bachelor's in Science in Computer Science • May 2024"
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText 
                            primary="Santa Ana College"
                            secondary="Associate's Degree in Computer Science • May 2022"
                        />
                    </ListItem>
                </List>
            </CardContent>
        </Paper>
    );
}

function WorkExperienceSection() {
    return (
        <Paper elevation={3} style={{ padding: '20px', width: '100%', height: '100%' }}>
            <CardContent>
                <Typography variant="h4" gutterBottom>
                    Work Experience
                </Typography>
                <List>
                    <ListItem>
                        <ListItemText 
                            primary="Endless Productions"
                            secondary="Software Engineer • November 2023 - Present"
                            secondaryTypographyProps={{ component: 'div' }}
                            primaryTypographyProps={{ component: 'strong' }}
                        />
                        <ListItemText
                            primary={
                                <Typography component="div">
                                    <ul>
                                    <li>Designed an intuitive and engaging user interface using React.js and enhanced it with the sleek and modern Material-UI (MUI) framework for a polished user experience </li>
                                    <li>Ensured cross-device and cross-browser compatibility, prioritizing responsiveness and accessibility to guarantee an exceptional user journey</li>
                                    <li>Leveraged MongoDB to architect a flexible and scalable backend, facilitating the management of dynamic content and user data securely and efficiently</li>
                                    <li>Spearheaded the development of a dynamic website from inception to execution, emphasizing both visual appeal and functional robustness</li>
                                    </ul>
                                </Typography>
                            }
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText 
                            primary="Geek Squad"
                            secondary="Advanced Repair Agent • May 2022 - Current"
                            secondaryTypographyProps={{ component: 'div' }}
                            primaryTypographyProps={{ component: 'strong' }}
                        />
                        <ListItemText
                            primary={
                                <Typography component="div">
                                    <ul>
                                        <li>Provide advanced technical support and repair services to clients for a wide range of electronic devices</li>
                                        <li>Diagnose and resolve complex hardware and software issues on computers, laptops, smartphones, and other consumer electronics</li>
                                        <li>Educate clients on best practices for device maintenance and security and provide recommendations for hardware upgrades and replacement when necessary</li>
                                    </ul>
                                </Typography>
                            }
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText 
                            primary="HB Entertainment"
                            secondary="Operations • February  2023 - Present"
                            secondaryTypographyProps={{ component: 'div' }}
                            primaryTypographyProps={{ component: 'strong' }}
                        />
                        <ListItemText
                            primary={
                                <Typography component="div">
                                    <ul>
                                        <li>Coordinate music festivals and nightclub events, fostering community engagement and providing platforms for emerging artists</li>
                                        <li>Book talent for bi-monthly shows, liaising with local venues across Los Angeles, Orange County, San Diego, and Houston</li>
                                        <li>Manage event operations to ensure smooth execution and customer satisfaction</li>
                                        <li>Establish and maintain a community engagement page for event promotion</li>
                                    </ul>
                                </Typography>
                            }
                        />
                    </ListItem>
                </List>
            </CardContent>
        </Paper>
    );
}

export default Resume;








