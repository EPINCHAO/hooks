import CssStyle from "../../components/CssStyle/CssStyle";
import RenderProps from "../../components/RenderProps/RenderProps";
import List from "../../components/Table/List";
import ListOfUser from "../../components/Table/ListOfUser";

const About = () => {
  return (
    <div>
      About
      <ListOfUser></ListOfUser>
      <List></List>
      <RenderProps
        render={(isFavorite) => (isFavorite ? "React" : "Vue")}
      ></RenderProps>
      <CssStyle></CssStyle>
    </div>
  );
};

export default About;
