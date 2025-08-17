import React from "react";

const PersonalInfo = () => {
  const personalInfoContent = [
    {
      id: 1,
      colClass: "left",
      info: [
        {
          id: 1,
          name: "Email",
          content: (
            <>
              <a href="mailto:cheryl.lao@outlook.com">cheryl.lao[at]outlook.com</a>
            </>
          ),
        },
        {
          id: 2,
          name: "Resume",
          content: (
            <>
              <a href="assets/documents/Cheryl_Lao_SWE_Resume.pdf">Click here!</a>
            </>
          ),
        },
      ],
    },
    {
      id: 2,
      colClass: "right",
      info: [
        {
          id: 1,
          name: "Linkedin",
          content: (
            <>
              <a href="https://www.linkedin.com/in/cheryllao/">linkedin.com/in/cheryllao/</a>
            </>
          ),
        },
        {
          id: 2,
          name: "Github",
          content: (
            <>
              <a href="https://github.com/Cheryl-Lao">github.com/Cheryl-Lao</a>
            </>
          ),
        },

      ],
    },
  ];
  return (
    <>
      {personalInfoContent.map((item) => (
        <div className={item.colClass} key={item.id}>
          <div className="tokyo_tm_info">
            <ul>
              {item?.info?.map((value) => (
                <li key={value.id}>
                  <span>{value.name}:</span>
                  <span>{value.content}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default PersonalInfo;
