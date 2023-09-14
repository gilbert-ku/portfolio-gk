

function Home(){
    return (
        <>
            <div className="main-body">
                <div className="introduction">
                    <h1>Hi, 👋👋</h1>
                    <p>I am a </p>
                    <h2>Student/Software engineer</h2>
                    <br />
                    <p>I am a full-stack Software developer and a iu/ux deginer. I am currently learning back-end framework (Flask) at Moringa school.</p>
                    <button>Download Resume</button>
                </div>
                    
                <br />

                <div className="image">
                    <>
                        <img src="/images/linkedIn_profile-removebg (1).png" alt="Image 1" />
                    </>
                </div>
                
            </div>


            <div links-to-media>
                <div className="social-media">
                    <h2>Let's connect</h2>
                    <ul className="icons">
                        <li><a href="https://www.linkedin.com/in/gilbert-kutoto/"><img src="/images/pngtree-linked-in-icon-png-image_3584840.jpg" alt="linkedin"  width="50px"/></a></li>
                        <li><a href="https://github.com/gilbert-ku"><img src="/images/githuh.png" alt="Github"  width="50px"/></a></li>
                        <li><a href="https://twitter.com/gilbert45dope/"><img src="/images/x.jpeg" alt="twitter"  width="50px"/></a></li>
                        <li><a href="https://wa.me/+254726545820"><img src="/images/whatsApp.jpg" alt="WhatsApp"  width="50px"/></a></li>
                    </ul>
                </div>
                <div className="coding-tools">
                    <h2>Proficient in </h2>
                    <ul className="coding">
                        <li><img src="/images/front.png" alt="linkedin"  width="50px"/></li>
                        <li><img src="/images/react.png" alt="React"  width="50px"/></li>
                        <li><img src="/images/python.png" alt="twitter"  width="50px"/></li>
                        <li><img src="/images/sql.jpeg" alt="WhatsApp"  width="50px"/></li>
                        <li><img src="/images/flask-python.png" alt="twitter"  width="50px"/></li>
                        <li><img src="/images/Figma-1-logo.png" alt="WhatsApp"  width="50px"/></li>
                    </ul>
                </div>
            </div>

        </>
        
    )
}

export default Home

