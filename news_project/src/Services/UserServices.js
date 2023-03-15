import axios from "axios";

const EndPoint = "https://localhost:7094/api/"; 

export const SendUserDetails = async (UserDetails) =>{
    try {
        await axios.post(`${EndPoint}users/CreateNewUser`, UserDetails);
    } catch (error) {
        console.error(error);
    }
}
//send 3 subjects to db
export const Choose3Subjects = async (UserSubjects,email) => {
    console.log("choose:",UserSubjects)
    try {
      await axios.post(`${EndPoint}subjects/userSubjects/${email}`, UserSubjects);
    } catch (error) {
      console.error(error);
    }
  };