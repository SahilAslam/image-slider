import { useState } from "react";

const slideStyle = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundSize: "cover",
    backgroundPosition: "center",
};

const sliderStyle = {
    position: "relative",
    height: "100%",
}

const rightArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  right: "32px",
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
};

const leftArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  left: "32px",
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
};

const dotContainerStyles = {
  display: "flex",
  flexPosition: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px"
}

const dotStyles = {
  cursor: "pointer",
  fontSize: "20px"
}

const currentDotStyles = {
  color: "orange",
  cursor: "pointer",
  
}

const ImageSlider = ({ slides = [{}] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [index, setIndex] = useState(0)

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setIndex(newIndex)
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastIndex = currentIndex === slides.length - 1;
    const newIndex = isLastIndex ? 0 : currentIndex + 1;
    setIndex(newIndex)
    setCurrentIndex(newIndex);
  };

  const goToSlide = (index) => {
    setIndex(index)
    setCurrentIndex(index)
  }

  return (
    <div style={sliderStyle}>
      <div>
        <div onClick={goToPrevious} style={leftArrowStyles}>
          ❰
        </div>
        <div onClick={goToNext} style={rightArrowStyles}>
          ❱
        </div>
      </div>
      <img src={slides[currentIndex].image} style={slideStyle} />
      <div style={dotContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <div style={slideIndex === index ? currentDotStyles : dotStyles} key={slideIndex} onClick={() => goToSlide(slideIndex)}>
            ●
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider