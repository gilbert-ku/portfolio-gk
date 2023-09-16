
import React, { useState } from 'react';

function Blog() {
  // Define state to track whether the content is expanded
  const [isExpanded, setIsExpanded] = useState(false);

  // Content to be displayed
  const firstParagraph = (
    <div>
      <p>👋 Hello! I'm Gilbert Kutoto, a passionate software engineering student at Moringa School. With a background as a licensed insurance agent and two years of experience in life insurance at Liberty Life Kenya, I've developed a keen understanding of personalized financial planning and problem-solving through innovative solutions.</p>
    </div>
  );

  const restOfContent = (
    <>
      <p>🏆 My journey has led me to appreciate the power of technology in transforming lives. Hailing from the vibrant Kibera slum, my vision is to create technology that uplifts the community and enhances the quality of life for its residents. I'm dedicated to harnessing the potential of software engineering to make a tangible impact where it's needed most.</p>

      <p>🚀 I thrive on challenges and have honed my ability to adapt and excel in dynamic environments. My time in the insurance industry taught me the art of active listening and tailoring solutions to unique needs. Now, as a software engineering student, I'm excited to fuse these skills with cutting-edge technology to drive positive change.</p>

      <p>🌟 Let's connect! I'm eager to collaborate, learn from others, and contribute my skills to projects that align with my mission of empowerment through technology.</p>

      <p>#SoftwareEngineering #FinancialPlanning #SocialImpact #Innovation</p>
    </>
  );

  return (
    <div className="About-me">
      <img src="/images/WhatsApp Image 2023-05-07 at 15.03.42 (2).jpeg" alt="blog" width="200px" />
      <h1>About Me</h1>
      {isExpanded ? (
        <>
          {firstParagraph}
          {restOfContent}
        </>
      ) : (
        <div>
          {firstParagraph}
        </div>
      )}
      <button onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? 'Read less' : 'Read more'}
      </button>
    </div>
  );
}

export default Blog;




