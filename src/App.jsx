import React, { useEffect, useState } from "react";
import Card from "./components/card/Card";
import { data } from "autoprefixer";

const App = () => {
  const [cardData, setCardData] = useState();

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setCardData(data));
  }, []);

  cardData?.map((card) => {
    console.log(card.company);
  });

  return <div className="p-5 bg-bgColor font-league-spartan"></div>;
};

export default App;
