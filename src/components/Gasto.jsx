import {
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";
import { formatearFecha } from "../helpers/index";
import { formatearCantidad } from "../helpers/index.js";

import IconoAhorro from "../img/icono_ahorro.svg";
import IconoCasa from "../img/icono_casa.svg";
import IconoGastos from "../img/icono_gastos.svg";
import IconoOcio from "../img/icono_ocio.svg";
import IconoComida from "../img/icono_comida.svg";
import IconoSalud from "../img/icono_salud.svg";
import IconoSuscripciones from "../img/icono_suscripciones.svg";

const Gasto = ({ gasto, setGastoEditar, eliminarGasto }) => {
  const { nombre, cantidad, categoria, fecha, id } = gasto;

  const diccionarioIconos = {
    ahorro: IconoAhorro,
    comida: IconoComida,
    casa: IconoCasa,
    gastos: IconoGastos,
    ocio: IconoOcio,
    salud: IconoSalud,
    suscripciones: IconoSuscripciones,
  };
  const leadingActions = () => (
    <leadingActions className="swipe-action__leading  swipeable-list">
      <SwipeAction onClick={() => setGastoEditar(gasto)}>Editar</SwipeAction>
    </leadingActions>
  );

  const trailingActions = () => (
    <trailingActions className="swipe-action__trailing swipe-action">
      <SwipeAction destructive={true} onClick={() => eliminarGasto(id)}>
        Eliminar
      </SwipeAction>
    </trailingActions>
  );

  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <div className="gasto sombra">
          <div className="contenido-gasto">
            <img src={diccionarioIconos[categoria]} alt="Icono Gasto" />
            <div className="descripcion-gasto">
              <p className="categoria">{categoria}</p>
              <p className="nombre-gasto">{nombre}</p>
              <p className="fecha-gasto">
                Agregado el: <span>{formatearFecha(fecha)}</span>
              </p>
            </div>
          </div>
          <p className="cantidad-gasto">{formatearCantidad(cantidad)}</p>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  );
};

export default Gasto;
