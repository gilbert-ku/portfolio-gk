function Contact(){
    return (
        <div className="parent-contact">
            <p className="C">CONTACT</p>
            <h1 className="C-w">Contact With Me</h1>
            
            
            <div className="contact-main">
                <div className="contact-info">
                    <img src="/images/cont-gillie.jpeg" alt="profile" width="400px" className="cont-img"/>
                    <h1>Gilbert Kutoto</h1>
                    <p>Software Developer || Insurance Advisor</p>
                    <p>WhatsApp +254726545820</p>
                    <p>Email: gilbert45ku@gmail.com</p>
                    <br />
                    <h3>FIND WITH ME </h3>
                    <ul className="icons">
                        <li><a href="https://www.linkedin.com/in/gilbert-kutoto/"><img src="/images/pngtree-linked-in-icon-png-image_3584840.jpg" alt="linkedin"  width="50px"/></a></li>
                        <li><a href="https://github.com/gilbert-ku"><img src="/images/githuh.png" alt="Github"  width="50px"/></a></li>
                        <li><a href="https://twitter.com/gilbert45dope/"><img src="/images/x.jpeg" alt="twitter"  width="50px"/></a></li>
                        <li><a href="https://wa.me/+254726545820"><img src="/images/whatsApp.jpg" alt="WhatsApp"  width="50px"/></a></li>
                    </ul>
               </div>
            
                <div className="form-container">
                    <form action="">
                        <label>YOUR NAME</label> <br />
                        <input type="text" placeholder="Enter your name" required />
                        <br />
                        <label>PHONE NUMBER</label> <br />
                        <input type="tel" placeholder="+254700000000" required />
                        <br />
                        <label>EMAIL</label><br />
                        <input type="email" placeholder="example@email.com" required />
                        <br />
                        <label>SUBJECT</label><br />
                        <input type="text" placeholder="Subject" required />
                        <br />
                        <label>YOUR MESSAGE</label><br />
                        <textarea placeholder="Message" rows="4" required></textarea>
                        <br />
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>

        
    )
}

export default Contact