import React from "react";
import Card from "./components/card/Card";

const App = () => {
  const data = [
    {
      title: "JavaScript Developer",
      profile: "MyHome",
    },
    {
      title: "Frontend Developer",
      profile: "Shortly",
    },
    {
      title: "UI/UX Designer",
      profile: "Account",
    },
    {
      title: " Designer",
    },
  ];

  const card = data.map((item) => {
    return <Card key={item.title} title={item.title} profile={item.profile} />;
  });

  return <div className="p-5 bg-bgColor font-league-spartan">{card}</div>;
};

export default App;
