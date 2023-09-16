import React from "react";

const Gasto = ({ gasto }) => {
  const { nombre, cantidad, categoria, fecha } = gasto;
  return (
    <div className="gasto sombra">
      <div className="contenido-gasto">
        <div className="descripcion-gasto">
          <p className="categoria">{categoria}</p>
          <p className="nombre-gasto">{nombre}</p>
          <p className="categoria">{cantidad}</p>
          <p className="categoria">{fecha}</p>
        </div>
      </div>
    </div>
  );
};

export default Gasto;
