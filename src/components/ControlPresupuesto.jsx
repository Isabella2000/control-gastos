import { useEffect, useState } from "react";
import { formatearCantidad } from "../helpers/index.js";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ControlPresupuesto = ({
  gastos,
  setGastos,
  presupuesto,
  setPresupuesto,
  setIsValidPresupuesto
}) => {
  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0);
  const [porcentaje, setPorcentaje] = useState(0);

  useEffect(() => {
    const totalGastado = gastos.reduce(
      (total, gasto) => gasto.cantidad + total,
      0
    );
    setGastado(totalGastado);
    const totalDisponible = presupuesto - totalGastado;

    const nuevoPorcentaje = (
      ((presupuesto - totalDisponible) / presupuesto) *
      100
    ).toFixed(2);
    setDisponible(totalDisponible);
    setTimeout(() => {
      setPorcentaje(nuevoPorcentaje);
    }, 1000);
  }, [gastos]);

  const handleResetApp = () => {
    const resultado = confirm("¿Deseas resetear presupuestos y gastos?");
    if (resultado) {
      setGastos([]);
      setPresupuesto(0);
      setIsValidPresupuesto(false)
    } else {
      console.log("ño");
    }
  };

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <CircularProgressbar
          value={porcentaje}
          text={`${porcentaje}% gastado`}
          styles={buildStyles({
            textSize: "200px",
            textColor: porcentaje < 100 ? "#DC26262" : "#3b82f6",
            pathColor: porcentaje < 100 ? "#DC26262" : "#3b82f6",
            trailColor: "#f5f5f5",
          })}
        />
      </div>
      <div className="contenido-presupuesto">
        <button className="reset-app" type="button" onClick={handleResetApp}>
          Resetear app
        </button>
        <p>
          <span>Presupuesto: </span>
          {formatearCantidad(presupuesto)}
        </p>
        <p className={`${disponible < 0 ? "negativo" : ""}`}>
          <span>Disponible: </span>
          {formatearCantidad(disponible)}
        </p>
        <p>
          <span>Gastado: </span>
          {formatearCantidad(gastado)}
        </p>
      </div>
    </div>
  );
};

export default ControlPresupuesto;
