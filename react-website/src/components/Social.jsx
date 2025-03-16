import React from "react";

const SocialShare = [
  {
    iconName: "mail",
    link: "https://twitter.com/",
  },
  { iconName: "paper", link: "https://twitter.com/" },
  {
    iconName: "linkedin",
    link: "https://www.instagram.com/",
  },
  {
    iconName: "github",
    link: "https://www.instagram.com/",
  },
  {
    iconName: "google-scholar",
    link: "https://www.instagram.com/",
  },
];
// Some icons from https://icons8.com/icons
// <a target="_blank" href="https://icons8.com/icon/pU44R9xgF3wq/google-scholar">Google Scholar</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
const Social = () => {
  return (
    <>
      <ul className="social">
        {SocialShare.map((val, i) => (
          <li key={i}>
            <a href={`${val.link}`} target="_blank" rel="noreferrer">
              <img
                className="svg"
                src={`/assets/img/svg/${val.iconName}.svg`}
                alt="social"
              ></img>
            </a>
          </li>
        ))}
      </ul>
      {/* END SOCIAL */}
    </>
  );
};

export default Social;
