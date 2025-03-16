import React from "react";

const Intro = () => {
  const introContent = {
    image: "assets/img/slider/banner.jpg",
    name: "Cheryl Lao",
    designation: "Software Developer",
    text: (
      <>
        <p>
        I love exploring how immersive technologies like VR can inspire and facilitate creativity. From publishing research on VR interactions during my master's to working on the engineering behind those experiences, I want to help build tools that enable novel interactions with immersive technologies. 
        </p>
        <p>
        Let's connect and chat about XR, HCI, or your latest craft idea! 😄
        </p>
      </>
    ),
  };

  return (
    <>
      <div className="top_author_image">
        <img src={introContent.image} alt="about" />
      </div>
      <div className="about_title">
        <h3>{introContent.name}</h3>
        <span>{introContent.designation}</span>
      </div>
      <div className="about_text">{introContent.text}</div>
    </>
  );
};

export default Intro;
