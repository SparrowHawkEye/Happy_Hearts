import React from "react";
import useOffersData from "../../../Hooks/useOffersData";

import Offer from "../Offer/Offer";


const Offers = () => {
  const [offers, setOffersData] = useOffersData([]);
  return (
    <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
      <h2 className="text-5xl font-extrabold text-center mb-8">
        {" "}
        What I can Offer
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ">
        {offers.map((offer) => (
          <Offer key={offer.id} offer={offer}></Offer>
        ))}
      </div>
    </div>
  );
};

export default Offers;
