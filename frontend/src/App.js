import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import Home from "./screens/Home";
import Product from "./screens/Product";

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Container className="p-5">
          <Route path="/" component={Home} exact />
          <Route path="/product/:id" component={Product} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
