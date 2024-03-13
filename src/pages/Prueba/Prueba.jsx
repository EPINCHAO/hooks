import CounterRP from "../../components/RenderProps/CounterRP";
import ProductsSection from "../../components/RenderProps/ProductsSection";
import HoverRP from "../../components/RenderProps/HoverRP";
import Contador from "../../components/RenderProps/Contador";
import Timer from "../../components/Timer/Timer";
import Posts from "../../components/Posts/Posts";

const Prueba = () => {
  return (
    <div>
      Prueba
      <ProductsSection></ProductsSection>
      <h1>Counter RP</h1>
      <Contador
        render={(count, handleIncrement) => (
          <CounterRP
            count={count}
            handleIncrement={handleIncrement}
          ></CounterRP>
        )}
      ></Contador>
      <h1>Hover RP</h1>
      <Contador
        render={(count, handleIncrement) => (
          <HoverRP count={count} handleIncrement={handleIncrement}></HoverRP>
        )}
      ></Contador>
      <Timer> </Timer>
      <Posts></Posts>
    </div>
  );
};

export default Prueba;
