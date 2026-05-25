import React, { useState, useMemo } from 'react';
import Button, { ButtonProps } from "../Button/Button";
import EmblaCarousel from "../EmblaCarousel/EmblaCarousel";
import { EmblaOptionsType } from 'embla-carousel';
import styled from 'styled-components';
import "./embla.css";
import { imageUrls } from "../../helpers/images";
import ModalGallery from "../ModalGallery/ModalGallery";


const breakpoints = {
  xxs: '400.98px',
  xs: '575.98px',
  sm: '767.98px',
  md: '991.98px',
  lg: '1199.98px',
  xl: '1600px',
};

interface GalleryProps {
  title?: string;
  onButtonClick?: () => void;
  buttonText?: string;
  buttonProps?: ButtonProps;
  textColor?: string;
  hoverTextColor?: string;
  hoverBgColor?: string;
  backgroundColor?: string;
  outlineColor?: string;
  hoverOutlineColor?: string;
}

const OPTIONS: EmblaOptionsType = {
  loop: true,
};

const GallerySection: React.FC<GalleryProps> = ({
  buttonText,
  buttonProps,
  textColor,
  hoverTextColor,
  hoverBgColor,
  backgroundColor,
  outlineColor,
  hoverOutlineColor,
  onButtonClick,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const imgFiltered = useMemo(() => imageUrls, []);

  const handleButtonClick = () => {
    if (onButtonClick) {
      onButtonClick();
    }

    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <GalleryWrapper>
      <GalleryTitleContainer />

      <ImageWrapper>
        <EmblaCarousel
          images={imgFiltered}
          options={OPTIONS}
        />
      </ImageWrapper>

      <ButtonContainer>
        <Button
          {...buttonProps}
          label={buttonText}
          $hoverBgColor={hoverBgColor}
          $color={textColor}
          $hoverTextColor={hoverTextColor}
          $backgroundColor={backgroundColor}
          $outlineColor={outlineColor}
          $hoverOutlineColor={hoverOutlineColor}
          onClick={handleButtonClick}
        />
      </ButtonContainer>

      <ModalGallery
  isOpen={isModalOpen}
  onRequestClose={handleCloseModal}
  images={imgFiltered}
/>
    </GalleryWrapper>
  );
};

const GalleryWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 25px 0;
  background-color: transparent;
  padding-bottom: 5rem;
`;

const GalleryTitleContainer = styled.div`
  z-index: 1;
  margin-top: 50px;
`;

const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0;
  overflow: hidden;
`;

const ButtonContainer = styled.div`
  max-width: 250px;
  min-width: 150px;
  margin: 20px 0;

  @media (min-width: ${breakpoints.md}) {
    min-width: 120px;
    margin: 5px 0;
  }
`;

export default GallerySection;