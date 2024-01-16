import { useEffect, useState } from "react";
import Header from "./components/Header";
import ListadoGastos from "./components/ListadoGastos";
import Modal from "./components/Modal";
import { generarId } from "./helpers";
import IconoNuevoGasto from "./img/nuevo-gasto.svg";
import Filtro from "./components/Filtro";
import moneda2 from "./img/moneda2.png";
import moneda3 from "./img/moneda3.png";

function App() {
  const [gastos, setGastos] = useState(
    localStorage.getItem("gastos")
      ? JSON.parse(localStorage.getItem("gastos"))
      : []
  );
  const [presupuesto, setPresupuesto] = useState(
    Number(localStorage.getItem("presupuesto")) ?? 0
  );
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);

  const [filtro, setFiltro] = useState("");
  const [gastosFiltrados, setGastosFiltrados] = useState([]);
  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);

  const [gastoEditar, setGastoEditar] = useState({});

  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      setModal(true);
      setTimeout(() => {
        setAnimarModal(true);
      }, 500);
    }
  }, [gastoEditar]);

  useEffect(() => {
    localStorage.setItem("presupuesto", presupuesto ?? 0);
  }, [presupuesto]);

  useEffect(() => {
    const presupuestoLS = Number(localStorage.getItem("presupuesto")) ?? 0;
    if (presupuestoLS > 0) {
      setIsValidPresupuesto(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("gastos", JSON.stringify(gastos) ?? []);
  }, [gastos]);

  useEffect(() => {
    if (filtro) {
      const gastosFiltrados = gastos.filter(
        (gasto) => gasto.categoria === filtro
      );
      setGastosFiltrados(gastosFiltrados);
    }
  }, [filtro]);

  const handleNuevoGasto = () => {
    setModal(true);
    setGastoEditar({});
    setTimeout(() => {
      setAnimarModal(true);
    }, 500);
  };

  const guardarGasto = (gasto) => {
    if (gasto.id) {
      const gastosActualizados = gastos.map((gastoState) =>
        gasto.id === gastoState.id ? gasto : gastoState
      );
      setGastos(gastosActualizados);
      setGastoEditar({});
    } else {
      gasto.id = generarId();
      gasto.fecha = Date.now();
      setGastos([...gastos, gasto]);
    }
    setAnimarModal(false);
    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  const eliminarGasto = (id) => {
    const gastosActualizados = gastos.filter((gasto) => gasto.id !== id);
    setGastos(gastosActualizados);
  };

  return (
    <div>
      <div className={modal ? "fijar" : ""}>
        <Header
          gastos={gastos}
          setGastos={setGastos}
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          isValidPresupuesto={isValidPresupuesto}
          setIsValidPresupuesto={setIsValidPresupuesto}
        />
        {isValidPresupuesto && (
          <>
            <main>
              <Filtro filtro={filtro} setFiltro={setFiltro} />
              <ListadoGastos
                eliminarGasto={eliminarGasto}
                setGastoEditar={setGastoEditar}
                gastos={gastos}
                filtro={filtro}
                gastosFiltrados={gastosFiltrados}
              />
            </main>
            <div className="nuevo-gasto">
              <img
                src={IconoNuevoGasto}
                alt="Icono Nuevo Gasto"
                onClick={handleNuevoGasto}
              />
            </div>
          </>
        )}
        {modal && (
          <Modal
            setModal={setModal}
            animarModal={animarModal}
            setAnimarModal={setAnimarModal}
            guardarGasto={guardarGasto}
            gastoEditar={gastoEditar}
            setGastoEditar={setGastoEditar}
          />
        )}
      </div>
      <footer>
        <div className="  bounce">
          <img src={moneda2} alt="moneda 2" width={100} />
        </div>
        <div className="  bounce">
          <img src={moneda3} alt="moneda 3" width={100} />
        </div>
        <h3>Isabella Collante Mendez</h3>
        <div className="cat rotate-tr">
          ** /| _ ╱|、<br />
          ( •̀ㅅ •́  )<br />
          ＿ノ ヽ ノ＼＿ <br />
          /　`/ ⌒Ｙ⌒ Ｙ　 \<br />
          ( 　(三ヽ人　 /　 　|<br />
          |　ﾉ⌒＼ ￣￣ヽ　 ノ<br />
          ヽ＿＿＿＞､＿＿／<br />
          ｜( 王 ﾉ〈 <br />
          /ﾐ`ー―彡\ <br />
        </div>
        <div className="  bounce">
          <img src={moneda2} alt="moneda 2" width={100} />
        </div>
        <div className="  bounce">
          <img src={moneda3} alt="moneda 3" width={100} />
        </div>
      </footer>
    </div>
  );
}

export default App;
