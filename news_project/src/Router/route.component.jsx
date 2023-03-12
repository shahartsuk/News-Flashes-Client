import React from 'react'
import { Routes, Route } from "react-router-dom";
import Profile from '../Auth/profile';
import { GetSubjects } from '../Components/getSubjects';
import { NotFoundPage } from '../Components/notFound.page';

export const RouteComp = () => {
  return (
    <Routes>
    <Route path="/" element={< Profile/>} />
    <Route path="/subjects" element={< GetSubjects/>} />
    <Route path="/*" element={<NotFoundPage />} />
  </Routes>
  )
}
