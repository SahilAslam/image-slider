import ImageSlider from "./ImageSlider";

const containerStyles = {
  width: "500px",
  height: "280px",
  margin: "0 auto",
};

const headlindeStyles = {
  textAlign: "center",
  padding: "20px 0 5px 0",
};

const paragraphStyles = {
  textAlign: "center",
  padding: "0 0 20px 0",
};

function App() {
  const slides = [
    { image: "/image-1.jpg", title: "beach" },
    { image: "/image-2.jpg", title: "boat" },
    { image: "/image-3.jpg", title: "forest" },
    { image: "/image-4.jpg", title: "city" },
    { image: "/image-5.jpg", title: "italy" },
  ];

  return (
    <div>
      <h1 style={headlindeStyles}>Image Slider</h1>
      <p style={paragraphStyles}>
        This is a simple application that I build to practiced image sliding
      </p>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
}

export default App;
