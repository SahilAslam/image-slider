import ImageSlider from "./ImageSlider";

function App() {
  const slides = [
    { image: "/image-1.jpg", title: "beach" },
    { image: "/image-2.jpg", title: "boat" },
    { image: "/image-3.jpg", title: "forest" },
    { image: "/image-4.jpg", title: "city" },
    { image: "/image-5.jpg", title: "italy" },
  ];

  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
  }

  return (
    <div>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
}

export default App
