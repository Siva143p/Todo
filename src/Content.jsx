import React from "react";
import ClassUsing from "./ClassUsing";
import { useState } from "react";
import { BsFillEmojiSmileFill } from "react-icons/bs";

const Content = () => {
  // const [name, new_name] = useState("Hello");
  const greetChanger = () => {
    const arr = ["hey Mate!", "hello Buddy!", "what's up Buddy!", "Howdy!"];
    const randomindex = Math.floor(Math.random() * 4);

    // new_name(arr[randomindex]);

    return arr[randomindex];
  };

  const [name, new_name] = useState(() => greetChanger());

  const name_changer = () => {
    // new_name((Nname) => {
    //   return (Nname = greetChanger());
    // });
    new_name(() => greetChanger());
  };

  const details = [
    {
      name: "Siva Prasad",
      age: "20",
      Status: "Fresher",
    },
    {
      name: "John",
      age: "25",
      Status: "Front-end Dev",
    },
    {
      name: "Emily",
      age: "22",
      Status: "Designer",
    },
    {
      name: "Mathew",
      age: "26",
      Status: "Devops Engineer",
    },
  ];

  return (
    <div>
      <h1>
        {name} <BsFillEmojiSmileFill />
      </h1>
      <button onClick={() => name_changer()} style={{ cursor: "pointer" }}>
        Click
      </button>

      {details.map((detail, index) => (
        <ClassUsing
          key={index} // Provide a unique key for each rendered component
          name={detail.name}
          age={detail.age}
          status={detail.Status}
          iteration={index + 1}
        />
      ))}

      <ClassUsing name="siva" age={20} status="Fresher" />
    </div>
  );
};

export default Content;
