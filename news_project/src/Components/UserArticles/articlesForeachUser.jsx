import { useAuth0 } from '@auth0/auth0-react';
import React,{useEffect, useState} from 'react';
import { GetArticleForEachUser } from '../../Services/UserServices';
import { ArticleCard } from './articleCard';

export const ArticlesForeachUser=()=> {
    const[articles,setArticles]=useState([]);
    const{user} = useAuth0();

    const  handleArticles= async()=> {
     let UserArticles= await GetArticleForEachUser(user.email);
     setArticles(UserArticles);
    };

useEffect(()=>{handleArticles();},[]);

console.log("check articles for user", articles);
    return (
        <div>
            {articles.length > 0 && articles.map((a)=>{
                <ArticleCard
                 Title={a.title} 
                 LinkImage={a.linkImage}
                  Description={a.description} 
                  WebLink={a.webLink}
                   />
            })

            }
        </div>
    );
}

