import React from 'react';
import { styled } from '@mui/system';
import {Slider as BaseSlider, sliderClasses} from "@mui/material";

const Slider = styled(BaseSlider)(
  ({ value }) => `
  & .${sliderClasses.thumb} {
    &:before {
      content: '${typeof value === 'object' ? String(value[0]) : ''}';
      position: absolute;
      min-width: 50px;
      height: 30px;
      border-radius: 3px;
      top: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: white;
    }
  }
  & .${sliderClasses.thumb} ~ .${sliderClasses.thumb} {
    &:before {
      content: '${typeof value === 'object' ? String(value[1]) : ''}';
    }
  }
`,
);

const ProgressInput = () => {
  return (
    <Slider
      value={[3, 7_000_000]}
      defaultValue={[0, 5_000_000]}
      min={0}
      max={10_000_000}
      marks={[{ value: 0, label: '0 руб.' }, { value: 10_000_000, label: '10 млн. руб.' }]}
    />
  );
};

export default ProgressInput;