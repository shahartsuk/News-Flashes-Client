import axios from "axios";

const EndPoint = "https://localhost:7094/api/"; 

// get subjuects from DB
export const GetSubjectsFromServer = async () => {
  try {
    let response = await axios.get(`${EndPoint}subjects/GetSubjects`);
    if (response.status === 200) return response.data;
  } catch (error) {
    console.log(error);
  }
};


