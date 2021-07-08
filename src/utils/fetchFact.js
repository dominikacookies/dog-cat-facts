import axios from "axios";
import jQuery from "jquery"


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

    const { data } = await axios.get("https://radiant-stream-08604.herokuapp.com/https://dog-api.kinduff.com/api/facts?number=1",
     {headers: {"Access-Control-Allow-Origin" : "*", 'Access-Control-Allow-Credentials':true}});
    
    console.log(data)

     return data.facts[0];

  } catch (error) {
    console.log(error)
    return { error: "Failed to fetch data." };
  }
};

export {
  fetchCatFact, 
  fetchDogFact
}