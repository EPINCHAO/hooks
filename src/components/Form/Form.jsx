import { useContext, useState } from "react";
import PersonContext from "../../context/PersonContext";

const Form = () => {
  const [course, setCourse] = useState("");
  const [description, setDescription] = useState("");
  const [country, setCountry] = useState("USA");
  const [aggrement, setAggrement] = useState(false);
  const [gender, setGender] = useState("");

  const value = useContext(PersonContext);

  const handleChange = (event) => {
    if (event.target.name === "course") {
      setCourse(event.target.value);
    }
    if (event.target.name === "description") {
      setDescription(event.target.value);
    }
    if (event.target.name === "country") {
      setCountry(event.target.value);
    }
    if (event.target.name === "aggrement") {
      const { checked } = event.target;

      console.log("checked " + checked);

      setAggrement((aggrement) => ({
        ...aggrement, // <-- shallow copy previous state
        Active: checked, // <-- set new Active checked value
      }));
    }

    if (event.target.name === "gender") {
      setGender(event.target.value);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(course);
    console.log(description);
    console.log(aggrement.Active);
    console.log(country);
    console.log(gender);
  };

  return (
    <div>
      Form
      <form onSubmit={handleSubmit}>
        <label> Course:</label>
        <input
          type="text"
          name="course"
          value={course}
          onChange={handleChange}
        />
        <br />
        <label>Description:</label>
        <textarea
          name="description"
          value={description}
          onChange={handleChange}
        ></textarea>
        <br />
        <label>Country</label>
        <select name="country" value={country} onChange={handleChange}>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
          <option value="Canada">Canada</option>
        </select>
        <br />
        <label> Aggrement </label>
        <input
          type="checkbox"
          name="aggrement"
          checked={aggrement.Active}
          onChange={handleChange}
        />
        <br />
        <label>Gender:</label>
        <input
          type="radio"
          name="gender"
          value="male"
          onChange={handleChange}
        />
        <input
          type="radio"
          name="gender"
          value="female"
          onChange={handleChange}
        />
        <input
          type="radio"
          name="gender"
          value="others"
          onChange={handleChange}
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <p> Person</p>
      <p>Nombre: {value.name}</p>
    </div>
  );
};

export default Form;
