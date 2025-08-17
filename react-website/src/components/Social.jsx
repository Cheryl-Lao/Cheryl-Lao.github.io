import React from "react";

const SocialShare = [
  {
    iconName: "mail",
    link: "mailto:cheryl.lao@outlook.com",
  },
  { iconName: "paper", link: `assets/documents/Cheryl_Lao_SWE_Resume.pdf` },
  {
    iconName: "linkedin",
    link: "https://www.linkedin.com/in/cheryllao/",
  },
  {
    iconName: "github",
    link: "https://github.com/Cheryl-Lao",
  },
  {
    iconName: "google-scholar",
    link: "https://scholar.google.ca/citations?user=-l3l2rYAAAAJ&hl=en&oi=ao",
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
