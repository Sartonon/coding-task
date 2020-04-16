// Tässä kaksi eri versiota, jotka palauttavat vähän erilaiset tulokset
// mutta molemmat mielestäni täyttää tehtäväannon ehdot

// Tämä versio laittaa avaimet, jotka sisältävät uuden objektin,
// taulukon perälle sellaisessa järjestyksessä että tehtävän ehdot ymmärtääkseni täyttyvät
function getKeys2(json) {
  if (typeof json === "string") return [];

  const leafArray = [];
  const keyArray = [];

  function iterateJSON(json) {
    for (const key in json) {
      if (json.hasOwnProperty(key)) {
        if (typeof json[key] == "object") {
          if (!Array.isArray(json)) {
            keyArray.push(key);
          }
          iterateJSON(json[key]);
        } else if (!Array.isArray(json)) {
          leafArray.push(key);
        }
      }
    }
  }
  iterateJSON(json);

  return [...leafArray, ...keyArray.reverse()];
}

// Tämä versio laittaa avaimen heiti sen sisältämien objektin avaimien perään
function getKeys(json, keys) {
  if (!Array.isArray(keys)) {
    keys = [];
  }
  if (Array.isArray(json)) {
    // käsitellään array rekursiivisesti
    for (const e of json) {
      getKeys(e, keys);
    }
  } else if (typeof json == "object") {
    // käsitellään objekti joka ei ole array rekursiivisesti
    for (const property in json) {
      if (json.hasOwnProperty(property)) {
        getKeys(json[property], keys); // ensin tehdään rekursiokutsu, joka lisää alipuun avaimet keys-kentän alkuun
        keys.push(property); // tämän jälkeen lisätään alipuun juuren avain
      }
    }
  }
  return keys;
}

module.exports = {
  getKeys2,
  getKeys,
};
