import React, { useEffect, useState } from "react";
import Card from "./components/card/Card";

const App = () => {
  const [cardData, setCardData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("./data.json")
      .then((response) => response.json())
      .then((data) => {
        setCardData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Render a loading indicator while fetching data
  }

  const cardElements = cardData.map((card) => (
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
      isNew={card.new} // Rename "new" prop to "isNew" to avoid conflict with reserved word
      isFeatured={card.featured} // Rename "featured" prop to "isFeatured" for clarity
    />
  ));

  return (
    <div className="p-5 bg-bgColor font-league-spartan">
      <div className="rounded-md p-7 shadow-2xl bg-white lg:w-4/5 mx-auto lg:flex-row lg:items-center"></div>
      {cardElements}
    </div>
  );
};

export default App;
