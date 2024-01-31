import React, { useEffect, useState } from "react";
import Card from "./components/card/Card";

const App = () => {
  const [cardData, setCardData] = useState();

  useEffect(() => {
    fetch("./data.json")
      .then((response) => response.json())
      .then((data) => setCardData(data));
  }, []);

  const cardElements = cardData?.map((card) => {
    return (
      <Card
        key={card.id}
        company={card.company}
        position={card.position}
        role={card.role}
        level={card.level}
        postedAt={card.postedAt}
        contract={card.contract}
        location={card.location}
        languages={card.languages}
        logo={card.logo}
      />
    );
  });
  return (
    <div className="p-5 bg-bgColor font-league-spartan">{cardElements}</div>
  );
};

export default App;
