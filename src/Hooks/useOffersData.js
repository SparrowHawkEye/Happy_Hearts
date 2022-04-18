import { useEffect, useState } from "react";

const useOffersData = () => {
  const [offers, setOffers] = useState([]);
  useEffect(() => {
    fetch("offersData.json")
      .then((res) => res.json())
      .then((data) => setOffers(data));
  }, []);
  return [offers,setOffers];
};

export default useOffersData;