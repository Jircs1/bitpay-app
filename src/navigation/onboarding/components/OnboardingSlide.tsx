import { useTheme } from '@react-navigation/native';
import React, {ReactElement} from 'react';
import styled from 'styled-components/native';
import {
  ImageContainer,
  SubTextContainer,
  TextContainer,
  TitleContainer,
} from '../../../components/styled/Containers';
import {
  Disclaimer,
  H3,
  Paragraph,
  TextAlign,
} from '../../../components/styled/Text';

interface OnboardingSlide {
  title: string;
  text: string;
  subText?: string;
  img: () => ReactElement;
}

const SlideContainer = styled.View`
  background: transparent;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const OnboardingSlide = ({item}: {item: OnboardingSlide}) => {
  const {title, text, subText, img} = item;
  const theme = useTheme();
  const themedText = { color: theme.colors.text };

  return (
    <SlideContainer>
      <ImageContainer>{img()}</ImageContainer>
      <TitleContainer>
        <TextAlign align={'center'} style={themedText}>
          <H3>{title}</H3>
        </TextAlign>
      </TitleContainer>
      <TextContainer>
        <TextAlign align={'center'} style={themedText}>
          <Paragraph>{text}</Paragraph>
        </TextAlign>
      </TextContainer>
      {subText && (
        <SubTextContainer>
          <TextAlign align={'center'} style={themedText}>
            <Disclaimer>{subText}</Disclaimer>
          </TextAlign>
        </SubTextContainer>
      )}
    </SlideContainer>
  );
};

export default OnboardingSlide;
