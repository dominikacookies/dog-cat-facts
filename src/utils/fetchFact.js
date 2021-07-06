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
    const { data } = await axios.get("https://dog-facts-api.herokuapp.com/api/v1/resources/dogs?number=1",  { crossdomain: true });

    return data;
  } catch (error) {
    return { error: "Failed to fetch data." };
  }
};

export {
  fetchCatFact, 
  fetchDogFact
}