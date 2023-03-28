import React from 'react'
import { Routes, Route } from "react-router-dom";
import Profile from '../Auth/profile';
import { GetSubjects } from '../Components/Subjects/getSubjects';
import { NotFoundPage } from '../Components/notFound.page';
import { UserArticles } from '../Components/Articles/userArticles';

export const RouteComp = () => {
  return (
    <Routes>
    <Route path="/" element={< Profile/>} />
    <Route path="/subjects" element={< GetSubjects/>} />
    <Route path="/userArticles" element={< UserArticles/>} />
    <Route path="/*" element={<NotFoundPage />} />
  </Routes>
  )
}
