import "./aboutUs.css";

export function AboutUs(){
    return (
        <div className="AboutUs" id="aboutus">
            <div className="AboutUs-Header">
                <h1>About Us</h1>
                <p>Welcome to our Cocktail App, <span>What's Shakin'</span>, your one stop shop for new recipes, a place to save your favorites, and share recipes with others!<br /><br />
                No longer will you have to search through books, multiple pages, YouTube videos, etc. for your new favorite drink!<br /><br />
                This was completed as part of our Final Project for Grand Circus' 26 week After Hours JavaScript Bootcamp (September 2022 - April 2023) where we covered HTML, CSS, JavaScript, TypeScript, Test-Driven Development (TDD), Object Oriented Programming (OOP), React, MongoDB, SQL, GitHub, and more.
                </p>
            </div>
            <div className="AboutUs-Cards">
            <div className="AboutUs-Card">
                <div className="AboutUs-Circle"></div>
                <div className="AboutUs-Content">
                    <h2>Clint Smith</h2>
                    <p>Graduate of the September 2022 JavaScript After Hours Bootcamp from Grand Circus</p>
                    <a href="/contact">Contact Me</a>
                </div>
                <img src="https://media.licdn.com/dms/image/C5603AQFVu4yRnFfeWQ/profile-displayphoto-shrink_800_800/0/1658979192414?e=1684368000&v=beta&t=qtStmg7_GS6R-te73wEDR5g3bFd3unjESO7b_PFFHPM" alt="" />
            </div>
            <div className="AboutUs-Card">
                <div className="AboutUs-Circle"></div>
                <div className="AboutUs-Content">
                    <h2>Cristiana Gherasim</h2>
                    <p>Graduate of the September 2022 JavaScript After Hours Bootcamp from Grand Circus</p>
                    <a href="/contact">Contact Me</a>
                </div>
                <img src="https://media.licdn.com/dms/image/D5603AQHuU6TRlrZnTw/profile-displayphoto-shrink_800_800/0/1673466499552?e=1684368000&v=beta&t=1UUz-dhwVLNKyKVVxPMi9LFoje54U7FiWPP38BTaR34" alt="" />
            </div>
            <div className="AboutUs-Card">
                <div className="AboutUs-Circle"></div>
                <div className="AboutUs-Content">
                    <h2>Jakob Senyko</h2>
                    <p>Graduate of the September 2022 JavaScript After Hours Bootcamp from Grand Circus</p>
                    <a href="/contact">Contact Me</a>
                </div>
                <img src="https://media.licdn.com/dms/image/D4E03AQGhUU6mkjQDBg/profile-displayphoto-shrink_800_800/0/1664052980226?e=1684368000&v=beta&t=w36OcVnUK7x7vOx2Udn2uAdaHY65-_-Y2L5qg5p4InI" alt="" />
            </div>
            <div className="AboutUs-Card">
                <div className="AboutUs-Circle"></div>
                <div className="AboutUs-Content">
                    <h2>Rica Craver</h2>
                    <p>Graduate of the September 2022 JavaScript After Hours Bootcamp from Grand Circus</p>
                    <a href="/contact">Contact Me</a>
                </div>
                <img src="https://media.licdn.com/dms/image/C5603AQFYZ8ybu6J_vg/profile-displayphoto-shrink_800_800/0/1517250489985?e=1684368000&v=beta&t=4BgHHA2LbsAHl50zBNPHGx8K5HHiR49WEoNtCVJh9hk" alt="" />
            </div>
            </div>
        </div>
    );
};