import "./App.css";
import "./output.css";
import About from "./components/About";
import Header from "./components/header/Header";
import Partners from "./components/Partners";
import CustomerReviews from "./components/CustomerReviews";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Header />
      <About />
      <Partners />
      <CustomerReviews />
      <Footer />
    </>
  );
}

export default App;
