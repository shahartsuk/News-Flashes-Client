import { useAuth0 } from '@auth0/auth0-react';
import React,{useEffect, useState} from 'react';
import { ArticleCard } from './articleCard';

export const ArticlesForeachUser=()=> {
    const[articles,setArticles]=useState();
    const{user} = useAuth0();

    const  handleArticles= async()=> {
     let UserArticles= await GetArticlesForUser(user.email);
     setArticles(UserArticles);
    };

useEffect(()=>{handleArticles();},[]);



    return (
        <div>
            {articles.map(a=>{
                <ArticleCard
                 Title={a.Title} 
                 LinkImage={a.LinkImage}
                  Description={a.Description} 
                  WebLink={a.WebLink}
                   />
            })

            }
        </div>
    );
}

