import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "../components/CatImage.module.css";

const CatImage = () => {
  const [cats, setCats] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchCats = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://api.thecatapi.com/v1/images/search"
      );
      setCats(response.data[0].url);
    } catch (error) {
      console.error("Cats not come", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCats();
  }, []);

  return (
    <div>
      <div className={styles.catBlock}>
        <h1>Cats coming...</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <img className={styles.catImage} src={cats} alt="Some cat" />
        )}
      </div>
      <button onClick={fetchCats}>New Cat</button>
    </div>
  );
};

export default CatImage;
