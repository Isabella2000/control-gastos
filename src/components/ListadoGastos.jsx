import Gasto from './Gasto'
const ListadoGastos = ({ gastos, setGastoEditar }) => {
  return (
    <div className='listado-gastos contenedor'>
      <h2>{gastos.length ? "Gastos" : "no hay gastos aun"}</h2>
      {gastos.map(gasto => (
        <Gasto
          setGastoEditar={setGastoEditar}
          key={gasto.id}
          gasto={gasto}
        />
      ))}
    </div>
  )
}

export default ListadoGastos