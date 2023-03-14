import axios from "axios";

const EndPoint = "https://localhost:7094/api/"; 

// get subjuects from DB
export const GetSubjectsFromServer = async () => {
  try {
    let response = await axios.get(`${EndPoint}Subjects/GetSubjects`);
    if (response.status === 200) return response.data;
  } catch (error) {
    console.log(error);
  }
};


//send 3 subjects to db
export const Choose3Subjects = async (UserSubjects) => {
  console.log("choose:",UserSubjects)
  try {
    await axios.post(`${EndPoint}`, UserSubjects);
  } catch (error) {
    console.error(error);
  }
};