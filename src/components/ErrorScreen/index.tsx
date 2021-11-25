import React from 'react';

import { Button } from '@mui/material';

import errorImg from '../../assets/error/errorImg.jpg';
import {
  ErrorImage,
  ErrorMessage,
  ErrorStatus,
  ErrorText,
  ErrorWrapper,
  ImageWrapper,
  Screen
} from './styled';

interface Props {
  errorMessage: string;
}

const refreshPage = () => {
  window.location.reload();
};

const ErrorScreen = ({ errorMessage }: Props): JSX.Element => {
  return (
    <Screen>
      <ErrorWrapper>
        <ImageWrapper>
          <ErrorImage src={errorImg} alt="error image" />
        </ImageWrapper>
        <ErrorText>
          <ErrorMessage>Oops! Something went wrong... </ErrorMessage>
          <ErrorStatus>An {errorMessage} occurred</ErrorStatus>
          <Button variant="contained" size="large" onClick={refreshPage}>
            Refresh page
          </Button>
        </ErrorText>
      </ErrorWrapper>
    </Screen>
  );
};

export default ErrorScreen;
