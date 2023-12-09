import React from 'react';
import { Typography, Container } from '@mui/material';
import {Link} from "react-router-dom";
import {Navigation} from "../../types/constants";

const MainPage = () => {
  return (
    <Container
      maxWidth="sm"
    >
      <Typography
        variant='h2'
      >
        Главная
      </Typography>
      <Link to={Navigation.Search}>
        Поиск
      </Link>
    </Container>
  );
};

export default MainPage;
