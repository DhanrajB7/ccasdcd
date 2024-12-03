// components/Home.jsx
import React from 'react';
import './../styles/Home.css';


function Home() {
    return (
        <section id="home" className="home-section">
            <div className="home-content">
                <h1>Dhanraj Bhalala</h1>
                <h2>Software Developer</h2>
                <p>Welcome to my personal portfolio website!</p>
                <div className="profile-image-container">
                    <img src="https://media.licdn.com/dms/image/v2/D4E03AQHtLVG9Od25kg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1679593509330?e=1738195200&v=beta&t=UxnBUnmpRpC5FUdNTDY05VAEp04m1SeijDfoLbDYNEY" alt="Dhanraj Bhalala" className="profile-image" />
                </div>
            </div>
        </section>
    );
}

export default Home;
