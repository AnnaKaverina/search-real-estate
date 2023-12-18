import React, { SetStateAction, useState, Dispatch } from 'react';
import { styled } from '@mui/system';
import {Slider as BaseSlider, sliderClasses} from "@mui/material";
import { SliderOwnProps, Typography } from '@mui/material';

const Slider = styled(BaseSlider)(
  ({ value }) => `
  & .${sliderClasses.thumb} {
    &:before {
      content: '${typeof value === 'object' ? String(value[0]) : ''}';
      position: absolute;
      min-width: 100px;
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

const Wrapper = styled('div')({
  marginTop: '20px'
})

interface ProgressInput {
  min: number
  max: number
  minimalDistance: number
  title: string
  unitTitle: string
  thumbs: number[]
  setThumbs: Dispatch<SetStateAction<number[]>>
}

const ProgressInput = ({ min, max, minimalDistance, title, unitTitle, thumbs, setThumbs }: ProgressInput) => {


  const onChange: SliderOwnProps['onChange'] = (_, values) => {
    const [left, right] = values as number[]
    if (thumbs[0] !== left) {
      setThumbs((prevState) => [Math.min(left, right - minimalDistance), prevState[1]])
    }
    if (thumbs[1] !== right) {
      setThumbs((prevState) => [prevState[0], Math.max(right, left + minimalDistance)])
    }
  }

  return (
    <Wrapper>
      <Typography>
        {title}
      </Typography>
      <Slider
        value={thumbs}
        min={min}
        max={max}
        marks={[{ value: min, label: `${min} ${unitTitle}` }, { value: max, label: `${max} ${unitTitle}` }]}
        step={minimalDistance}
        onChange={onChange}
        disableSwap
      />
    </Wrapper>
  
  );
};

export default ProgressInput;
