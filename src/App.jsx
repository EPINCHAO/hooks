import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import FormUser from "./pages/RegisterUser/FormUser";
import Prueba from "./pages/Prueba/Prueba";
import PruebaUseCallback from "./pages/Prueba/PruebaUseCallback";
import UseRef from "./components/useRef/UseRef";
import PruebaUseReducer from "./pages/Prueba/PruebaUseReducer";
import PruebaPostListReducer from "./pages/Prueba/PruebaPostListReducer";
import PruebaCustomHook from "./pages/Prueba/PruebaCustomHook";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import OrderConfirmation from "./pages/Order/OrderConfirmation";
import NoFound from "./pages/NoFound/NoFound";
import PostList from "./pages/Post/PostList";
import PostDetail from "./pages/Post/PostDetail";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user-register" element={<FormUser />} />
        <Route path="/prueba" element={<Prueba />} />
        <Route path="/useCallback" element={<PruebaUseCallback />} />
        <Route path="/useRef" element={<UseRef />} />
        <Route path="/useReducer" element={<PruebaUseReducer />}></Route>
        <Route path="/postReduce" element={<PruebaPostListReducer />} />
        <Route path="/custom" element={<PruebaCustomHook />} />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />
        <Route path="/post" element={<PostList></PostList>}></Route>
        <Route path="/post/:postId" element={<PostDetail></PostDetail>}></Route>
        <Route path="*" element={<NoFound />}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
