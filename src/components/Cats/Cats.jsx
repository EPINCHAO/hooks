import { useEffect, useState } from "react";

const CAT_ENDPOINT_RAMDOM_FACT = "https://catfact.ninja/fact";
const CAT_PREFIX_IMAGE_URL = "https://cataas.com";
const Cats = () => {
  const [fact, setFact] = useState();
  const [imageUrl, setImageUrl] = useState();
  //const [factError, setFactError] = useState();
  useEffect(() => {
    async function getRandomFact() {
      const res = await fetch(CAT_ENDPOINT_RAMDOM_FACT);
      // todo: handle error if !res.ok
      const json = await res.json();
      setFact(json.fact);
    }
    getRandomFact();
  }, []);
  // set image change fact
  useEffect(() => {
    if (!fact) return;
    const firstWord = fact.split(" ").slice(0, 3).join(" ");
    console.log(firstWord);

    fetch(
      `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`
    )
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        const { _id } = response;
        const url = `/cat/${_id}/says/${firstWord}`;
        setImageUrl(url);
      });
  }, [fact]);

  return (
    <div>
      <h1>Cats</h1>
      <section>
        {fact && <p>{fact}</p>}
        {imageUrl && (
          <img
            src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`}
            alt={`Image extracted using the first trhee words ${fact}`}
          ></img>
        )}
      </section>
    </div>
  );
};

export default Cats;
