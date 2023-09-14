function Contact(){
    return (
        <div className="main-contact">
            <p>CONTACT</p>
            <h1>Contact With Me</h1>

            <div className="contact-info">
                <img src="/images/contact-me.jpg" alt="profile" width="400px"/>
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
            <div>
                <form action="">
                    <label>YOUR NAME</label> <br />
                        <input type="text" placeholder="Enter your name"/>
                        <br />
                    <label>PHONE NUMBER</label> <br />
                        <input type="number"placeholder="+254700000000" />
                        <br />
                    <label >EMAIL</label><br />
                        <input type="email" placeholder="examp@email.com"/>
                        <br />
                    <label >SUBJECT</label><br />
                        <input type="text"placeholder="subject" />
                        <br />
                    <label >YOUR MESSAGE</label><br />
                        <input type="message" placeholder="Message"/>

                </form>
            </div>
        </div>

        
    )
}

export default Contact