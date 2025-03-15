import React from "react";

const PersonalInfo = () => {
  const personalInfoContent = [
    {
      id: 1,
      colClass: "left",
      info: [
        {
          id: 1,
          name: "Birthday",
          content: "01.07.1990",
        },
        {
          id: 2,
          name: "Age",
          content: "32",
        },
        {
          id: 3,
          name: "Address",
          content: "Ave 11, New York, USA",
        },
        {
          id: 4,
          name: "Email",
          content: (
            <>
              <a href="mailto:tokyo@gmail.com">tokyo@gmail.com</a>
            </>
          ),
        },
        {
          id: 5,
          name: "Phone",
          content: (
            <>
              <a href="tel:+77 022 177 05 05">+77 022 177 05 05</a>
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
          name: "Nationality",
          content: "USA",
        },
        {
          id: 2,
          name: "Study",
          content: "Univercity of Texas",
        },
        {
          id: 3,
          name: "Degree",
          content: "Master",
        },
        {
          id: 4,
          name: "Interest",
          content: "Playing Football",
        },
        {
          id: 5,
          name: "Freelance",
          content: "Available",
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
