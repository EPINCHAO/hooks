import { useNavigate } from "react-router-dom";
import Cats from "../../components/Cats/Cats";
import Form from "../../components/Form/Form";
import Login from "../../components/Login/Login";
import PersonContext from "../../context/PersonContext";

const Person = {
  name: "John",
  email: "john@example.com",
  password: "<PASSWORD>",
  confirmPassword: "<PASSWORD>",
  firstName: "John",
  lastName: "Doe",
  bornDate: "1990-01-01",
};
const Home = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/order-confirmation");
  };
  return (
    <div>
      <h1>Home</h1>

      <Login></Login>

      <Cats></Cats>
      <PersonContext.Provider value={Person}>
        <Form></Form>
      </PersonContext.Provider>
      <button onClick={handleNavigate}>Place Order</button>
    </div>
  );
};

export default Home;
