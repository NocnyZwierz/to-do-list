import Container from "./components/Container/Container";
import NavBar from "./components/NavBar/NavBar"
import Home from "./components/Home/Home";
import Favorite from "./components/Favorite/Favorite";
import About from "./components/About/About";
import { Routes, Route } from 'react-router-dom';
import NotFound from "./components/NotFound/NotFound";
import List from "./components/List/List";


function App() {
  return (
    <main>
      <NavBar/>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/list/:id" element={<List />} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </Container>
    </main>
  );
}

export default App;
