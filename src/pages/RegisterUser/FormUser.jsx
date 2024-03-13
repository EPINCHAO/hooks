import RegisterUser from "../../components/Form/RegisterUser";
import Counter from "../../components/HOC/Counter";
import HoverCounter from "../../components/HOC/HoverCounter";

const FormUser = () => {
  return (
    <div>
      <RegisterUser></RegisterUser>
      <Counter></Counter>
      <HoverCounter></HoverCounter>
    </div>
  );
};

export default FormUser;
