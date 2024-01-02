import NuevoPresupuesto from "./NuevoPresupuesto";
import ControlPresupuesto from "./ControlPresupuesto";
import cartera from "../img/cartera.png";
import moneda1 from "../img/moneda1.png";
import moneda2 from "../img/moneda2.png";
import moneda3 from "../img/moneda3.png";
import moneda4 from "../img/moneda4.png";
import moneda5 from "../img/moneda5.png";

const Header = ({
  gastos,
  setGastos,
  presupuesto,
  setPresupuesto,
  isValidPresupuesto,
  setIsValidPresupuesto,
}) => {
  return (
    <header>
      {isValidPresupuesto ? (
        <>
          <h1 className="h1">Planificador de Gastos </h1>
          <ControlPresupuesto
            gastos={gastos}
            setGastos={setGastos}
            presupuesto={presupuesto}
            setPresupuesto={setPresupuesto}
            setIsValidPresupuesto={setIsValidPresupuesto}
          />
        </>
      ) : (
        <div className="inicio">
          <div className="moneda1 bounce">
            <img src={moneda1} alt="moneda 1" width={100} />
          </div>
          <div className="bloque1 fade-in-top">
            <div className="bloque contenedor ">
              <h1>Planificador de Gastos </h1>
              <p>
                Con nosotros, podrás ingresar tu presupuesto, realizar un
                seguimiento de tus gastos y visualizarlos para identificar áreas
                donde puedes ahorrar dinero.
              </p>
              <NuevoPresupuesto
                presupuesto={presupuesto}
                setPresupuesto={setPresupuesto}
                setIsValidPresupuesto={setIsValidPresupuesto}
              />
            </div>
            <div>
              <img
                src={cartera}
                className="bounce"
                width={900}
                height={800}
                alt="imagen de cartera"
              />
            </div>
          </div>
          <div className="moneda2 bounce">
            <img src={moneda2} alt="moneda 2" width={100} />
          </div>
          <div className="moneda3 bounce">
            <img src={moneda3} alt="moneda 3" width={100} />
          </div>
          <div className="moneda4 bounce">
            <img src={moneda4} alt="moneda 4" width={50} />
          </div>
          <div className="moneda5 bounce">
            <img src={moneda5} alt="moneda 5" width={100} />
            <div>Isabella Collante Mendez u.u</div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
