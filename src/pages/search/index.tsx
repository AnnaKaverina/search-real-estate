import React from 'react';
import { Typography, Container } from '@mui/material';
import ProgressInput from "../../components/progress-input";

const MainPage = () => {

  return (
    <Container
      maxWidth="sm"
    >
      <Typography
        variant='h2'
      >
        Поиск
      </Typography>
      <ProgressInput />
    </Container>
  );
};

export default MainPage;
