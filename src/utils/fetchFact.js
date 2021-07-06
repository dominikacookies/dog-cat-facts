import axios from "axios";

const fetchCatFact = async () => {
  try {
    const { data } = await axios.get("https://catfact.ninja/fact");
    return data.fact;

  } catch (error) {
    return { error: "Failed to fetch data." };
  }
};

const fetchDogFact = async () => {
  try {
    const { data } = await axios.get("https://cors-anywhere.herokuapp.com/https://dog-facts-api.herokuapp.com/api/v1/resources/dogs?number=1",
     {headers: {"Access-Control-Allow-Origin" : "*", 'Access-Control-Allow-Credentials':true}});
     return data[0].fact;
     
  } catch (error) {
    return { error: "Failed to fetch data." };
  }
};

export {
  fetchCatFact, 
  fetchDogFact
}