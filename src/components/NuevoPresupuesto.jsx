import { useState } from "react";
import Mensaje from "./Mensaje";

const NuevoPresupuesto = ({
  presupuesto,
  setPresupuesto,
  setIsValidPresupuesto,
}) => {
  const [mensaje, setMensaje] = useState("");

  const handlePresupuesto = (e) => {
    e.preventDefault();

    if (!presupuesto || presupuesto < 0) {
      setMensaje("No es un presupesto valido");
      return;
    }
    setMensaje("");
    setIsValidPresupuesto(true);
  };

  return (
    <div className="cuadro">
      <form className="formCuadro" onSubmit={handlePresupuesto}>
        <label>Definir Presupuesto</label>
        <input
          type="number"
          className="input-presupuesto"
          placeholder="Añade un presupuesto"
          value={presupuesto}
          onChange={(e) => setPresupuesto(Number(e.target.value))}
        />
        <input type="submit" value="Guardar" className="boton float" />
        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
      </form>
    </div>
  );
};

export default NuevoPresupuesto;
