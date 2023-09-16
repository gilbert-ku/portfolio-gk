import React, { useState } from 'react';

function Portfolio() {
  // State to track the selected feedback type
  const [feedbackType, setFeedbackType] = useState('anonymous');

  // State to track the visibility of the name input
  const [isNameVisible, setIsNameVisible] = useState(false);

  // Function to handle changes in the feedback type dropdown
  const handleFeedbackTypeChange = (event) => {
    const selectedType = event.target.value;
    setFeedbackType(selectedType);

    // Show/hide the name input based on the selected feedback type
    setIsNameVisible(selectedType === 'named');
  };
    return (
        <div className="main-portfolio">
            <p className="p-P">Portfolio</p>
                <h1 className="h-H">Welcome to my Portfolio</h1>
                    <div className="cards">
                        <img src="/images/Screenshot from 2023-09-15 13-32-57.png" alt="School Home Page" width="600px"/>
                            <div className="card-description">
                                <h1 className="header-link"><a href="https://github.com/gilbert-ku/phase-1-one--school_project-">School Website</a></h1>
                                    <p>Our International School's website is a dynamic online platform that reflects our commitment to providing an outstanding educational experience. Built using modern web technologies, our website leverages HTML, CSS, JavaScript, and JSON to offer a user-friendly and engaging browsing experience.</p>
                                        <h3>Here's a brief description of the technologies used:</h3>
                                            <ol>
                                                <li><strong>HTML (Hypertext Markup Language):</strong> HTML forms the backbone of our website, structuring content, and ensuring proper organization. It is responsible for the layout and presentation of text, images, and multimedia elements.</li>
                                                <li><strong>CSS (Cascading Style Sheets): </strong>CSS, is used to define the visual style and layout of our website. It helps create a visually appealing and consistent design across different pages and devices.</li>
                                                <li><strong>JavaScript: </strong>JavaScript is employed to add interactivity and functionality to our website. It enables features such as interactive forms, image sliders, and dynamic content loading. JavaScript is crucial for creating a seamless user experience.</li>
                                                <li><strong>JSON (JavaScript Object Notation): </strong> JSON is used for data interchange and storage. It helps manage and structure various types of information on the website, such as course listings, event schedules, and contact details. JSON allows for efficient retrieval and presentation of data.</li>
                                            </ol>
                            </div>
                    </div>

                       {/* ************** */} <br />

                       <div className="cards">
                        
                            <div className="card-description">
                                <h1 className="header-link"> <a href="https://github.com/gilbert-ku/Go-Trave">Go Travel</a></h1>
                                    <p>GOTRAVEL is a tourism-centric project developed using the React programming language. It serves as a one-stop platform dedicated to enhancing the travel experience for both tourists and local tourism operators. Our mission is to simplify trip planning by providing reliable information on tourist services, attractions, and sceneries, filling the void left by major websites like TripAdvisor.</p>
                                        <h3>Key features of GOTRAVEL include:</h3>
                                            <ol>
                                                <li>Comprehensive listings of tourist services, ensuring travelers have access to a wide range of options.</li>
                                                <li>Detailed information on tourist attractions and scenic spots, helping travelers make informed decisions.</li>
                                                <li>A user-friendly dashboard designed specifically for tourist business owners, making it easy for them to showcase their offerings and receive reviews.</li>
                                                <li>Client-friendly filtering options for search, enabling users to find the perfect travel experiences that suit their preferences.</li>
                                            </ol>
                                        <p>With React as our chosen programming language, we've built a modern and dynamic platform to bridge the gap between tourists and local tourism companies, creating a seamless travel planning and booking experience for all.</p>
                            </div>
                            <img src="/images/Screenshot from 2023-09-15 13-36-30.png" alt="Go Travel" width="600px"/>

                        </div>

                        {/* *********************************** */} <br />
                        <div className="cards">
                        <img src="/images/Screenshot from 2023-09-15 13-39-03.png" alt="school database" width="600px"/>
                            <div className="card-description">
                                <h1 className="header-link"><a href="https://github.com/gilbert-ku/schooldb-cli-project"> School Management CLI App with Python and SQLAlchemy</a></h1>
                                    <p>Welcome to the School Management CLI App! This command-line application, built using Python and SQLAlchemy, empowers you to efficiently manage student and teacher records, courses, enrollments, and grades within a school database.</p>
                                        <h3>Features:</h3>
                                            <ol>
                                                <li>Add Student: Easily insert new student records into the database, including personal information.</li>
                                                <li>Add Teacher: Create teacher profiles, complete with personal information and subjects taught.</li>
                                                <li>Add Course: Effortlessly generate new courses and assign teachers to them.</li>
                                                <li>Enroll Student in Course: Enroll students in specific courses, ensuring accurate course tracking.</li>
                                                <li>Record Grade: Keep track of student performance by recording grades for their respective courses.</li>
                                                <li>Query Students: Retrieve and display student records using customized search criteria.</li>
                                                <li>Query Teachers: Access teacher records, view their details, and perform searches for specific information.</li>
                                            </ol>
                            </div>
                    </div>

    <div className="feedback-form">
        <form action="" method="post">
          {/* Dropdown for feedback type */}
          <label htmlFor="feedback-type">Select Feedback Type:</label>
          <select
            name="feedback-type"
            id="feedback-type"
            value={feedbackType}
            onChange={handleFeedbackTypeChange}
          >
            <option value="anonymous">Send anonymous feedback</option>
            <option value="named">Enter Your Name</option>
          </select>
          {/* <br /> */}

          {/* Input field for the name (only shown if "Enter Your Name" is selected) */}
          {isNameVisible && (
            <div>
              <label htmlFor="name">Your Name:</label>   
              {/* <br /> */}
              <input type="text" id="name" name="name" placeholder="Enter your name" />
            </div>
          )}

          {/* Textarea for feedback message */}
          {/* <label htmlFor="feedback-message">Feedback:</label> */}
          <textarea
            id="feedback-message"
            name="feedback-message"
            placeholder="Message"
            rows="4"
            required
          ></textarea>

          {/* Submit button */}
          <br />
          <input type="submit" value="Submit Feedback" className="feedbackbtn"/>
        </form>
    </div>
        </div>
        
        
    )
}

export default Portfolio