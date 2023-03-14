import { Box } from '@mui/material'
import React from 'react'
import QuestionCard from './QuestionCard'

const Questions = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', border: '1px solid blue', alignItems: 'center' }}>
      <QuestionCard />


    </Box>
  )
}

export default Questions
