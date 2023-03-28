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
export const Choose3Subjects = async (subjects,email) => {
    console.log("choose:",subjects)
    try {
      await axios.post(`${EndPoint}users/userSubjects/${email}/${subjects}`);
    } catch (error) {
      console.error(error);
    }
  };

  export const GetArticleForEachUser = async (email) =>{
    try {
      let response = await axios.get(`${EndPoint}users/getArticlesForUser/${email}`);
      if(response.status === 200)
      {
        return response.data;
      }
    } catch (error) {
      console.error(error);
    }
  }