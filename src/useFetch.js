import { useEffect, useState } from "react";

export const useFetch = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(
      "https://raw.githubusercontent.com/Danilovesovic/zadatak_json/master/data.json"
    )
      .then((response) => response.json())
      .then((options) => {
        setData(options);
        setLoading(false);
      });
  }, []);

  return { data, loading };
};
