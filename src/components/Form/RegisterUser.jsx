import { useState } from "react";

const RegisterUser = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    bornDate: "",
    agree: false,
  });
  const handleChange = (e) => {
    //   if (e.target.name === "firstName") {
    //     setUserData((oldData) => ({ ...oldData, firstName: e.target.value }));
    //   }
    //   if (e.target.name === "lastName") {
    //     setUserData((oldData) => ({ ...oldData, lastName: e.target.value }));
    //   }
    //   if (e.target.name === "name") {
    //     setUserData((oldData) => ({ ...oldData, name: e.target.value }));
    //   }
    //   if (e.target.name === "email") {
    //     setUserData((oldData) => ({ ...oldData, email: e.target.value }));
    //   }
    //   if (e.target.name === "password") {
    //     setUserData((oldData) => ({ ...oldData, password: e.target.value }));
    //   }
    //   if (e.target.name === "confirmPassword") {
    //     setUserData((oldData) => ({
    //       ...oldData,
    //       confirmPassword: e.target.value,
    //     }));
    //   }
    //   if (e.target.name === "bornDate") {
    //     setUserData((oldData) => ({ ...oldData, bornDate: e.target.value }));
    //   }
    setUserData((oldData) => ({ ...oldData, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setUserData((oldData) => ({ ...oldData, agree: true }));
    console.log(userData);
  };
  return (
    <div>
      <h1>RegisterUser</h1>
      <form onSubmit={handleSubmit}>
        <label> Nombre: </label>
        <input
          type="text"
          name="firstName"
          value={userData.firstName}
          onChange={handleChange}
        />{" "}
        <br />
        <label> Apellido: </label>
        <input
          type="text"
          name="lastName"
          value={userData.lastName}
          onChange={handleChange}
        />{" "}
        <br />
        <label> Nombre Usuario: </label>
        <input
          type="text"
          name="name"
          value={userData.name}
          onChange={handleChange}
        />{" "}
        <br />
        <label> Email: </label>
        <input
          type="text"
          name="email"
          value={userData.email}
          onChange={handleChange}
        />
        <br />
        <label> Password: </label>
        <input
          type="text"
          name="password"
          value={userData.password}
          onChange={handleChange}
        />
        <br />
        <label> Confirmar Password: </label>
        <input
          type="text"
          name="confirmPassword"
          value={userData.confirmPassword}
          onChange={handleChange}
        />
        <br />
        <label> Fecha de Nacimiento: </label>
        <input
          type="text"
          name="bornDate"
          value={userData.bornDate}
          onChange={handleChange}
        />
        <br />
        <input type="submit" value="Guardar"></input>
      </form>
    </div>
  );
};

export default RegisterUser;
