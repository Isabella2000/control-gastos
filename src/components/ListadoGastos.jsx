import Gasto from "./Gasto";
const ListadoGastos = ({
  gastos,
  setGastoEditar,
  eliminarGasto,
  gastosFiltrados,
  filtro,
}) => {
  return (
    <div className="listado-gastos contenedor">
      {filtro ? (
        <>
          <h2>
            {gastosFiltrados.length ? "Gastos" : "No hay gastos disponibles"}
          </h2>
          {gastosFiltrados.map((gasto) => (
            <Gasto
              eliminarGasto={eliminarGasto}
              setGastoEditar={setGastoEditar}
              key={gasto.id}
              gasto={gasto}
            />
          ))}
        </>
      ) : (
        <>
          <h2>{gastos.length ? "Gastos" : "No hay gastos disponibles"}</h2>
          {gastos.map((gasto) => (
            <Gasto
              eliminarGasto={eliminarGasto}
              setGastoEditar={setGastoEditar}
              key={gasto.id}
              gasto={gasto}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default ListadoGastos;
