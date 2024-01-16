import NuevoPresupuesto from "./NuevoPresupuesto";
import ControlPresupuesto from "./ControlPresupuesto";
import billete from "../img/billete.png";
import moneda1 from "../img/moneda1.png";
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
          <h1 className="titulo-principal">Planificador de Gastos </h1>
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
          <div className="bloque1">
            <div className="bloque contenedor ">
              <h1 className="titulo-home">Planificador de Gastos</h1>
              <p>
                Con nosotros, podrás ingresar tu presupuesto, realizar un
                seguimiento de tus gastos y visualizarlos para identificar áreas
                donde puedes ahorrar dinero.
              </p>

            </div>
            <div className="bento-imagen">
              <img
                src={billete}
                className="billete bounce"
                alt="imagen de cartera"
              />
            </div>
          </div>
          <div className="moneda4 bounce">
            <img src={moneda4} alt="moneda 4" width={50} />
          </div>
          <div className="bloque2">
            <h2>¿Quieres controlar tus gastos y alcanzar tus objetivos financieros?</h2>
            <div className="contenido">
              <NuevoPresupuesto
                presupuesto={presupuesto}
                setPresupuesto={setPresupuesto}
                setIsValidPresupuesto={setIsValidPresupuesto}
              />
              <div className="lista">
                <ul>
                  <li>Ingresar tu presupuesto y realizar un seguimiento de tus gastos.</li>
                  <li>Visualizar tus gastos para identificar áreas donde puedes ahorrar dinero.</li>
                  <li>Obtener informes sobre tus gastos para ayudarte a tomar decisiones financieras informadas.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
