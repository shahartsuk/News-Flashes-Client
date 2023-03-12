import axios from "axios";

const EndPoint = "http://localhost:5163/";

// send BusinessCompany user to server and add to db
export const GetSubjectsFromServer = async () => {
  try {
    let response = await axios.get(`${EndPoint}api/Subjects/GetSubjects`);
    if (response.status === 200) return response.data;
  } catch (error) {
    console.log(error);
  }
};