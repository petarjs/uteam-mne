import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddQuestion from '../components/Questions/AddQuestion'
import EditQuestion from '../components/Questions/EditQuestion'
import QuestionsList from '../components/Questions/QuestionsList'

const QuestionsPage = () => {
  return (
    <Routes>
      <Route path="" element={<QuestionsList />} />
      <Route path="new" element={<AddQuestion />} />
      <Route path=":id/edit" element={<EditQuestion />} />
    </Routes>
  )
}

export default QuestionsPage
