import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useState } from "react";
import { GetArticleForEachUser } from "../../Services/UserServices";

export const UserArticles = () => {
  const { user } = useAuth0();
  const [articles, setArticles] = useState([]);

  const HandleUserArticles = async () => 
  {
    let articlesDB = await GetArticleForEachUser(user.email);
    setArticles(articlesDB)
  };

  useEffect(()=>{
    HandleUserArticles();
  },[])

  console.debug("Check user articles",articles);
  
  return <div></div>;
};
