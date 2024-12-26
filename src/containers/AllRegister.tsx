"use client";

import Descipcion from "../components/(Registro de datos)/Descipcion";
import Monto from "../components/(Registro de datos)/Monto";
import DateComponent from "../components/(Registro de datos)/DateComponent";
import TipoDeGasto from "../components/(Registro de datos)/TipoDeGasto";
import useAllDataRegister from "@/hooks/(AllDataRegister)/useAllDataRegister";

const AllRegister = () => {
  const {
    saveHandle,
    montoHandle,
    textHandle,
    timeHandle,
    newValueOnInput,
    resetValue,
    textingHandle,
    resetHandle,
    filter,
    text,
    dates,
    cash,
    comentario,
  } = useAllDataRegister();
  
  return (
    <>
      <TipoDeGasto
        text={text}
        textingHandle={textingHandle}
        filter={filter}
        resetValue={resetValue}
        newValueOnInput={newValueOnInput}
      />
      <Monto cash={cash} montoHandle={montoHandle} />
      <DateComponent dates={dates} timeHandle={timeHandle} />
      <Descipcion comentario={comentario} textHandle={textHandle} />

      <button onClick={saveHandle}>Guardar Gasto</button>
      <button onClick={resetHandle}>Nuevo gasto</button>
    </>
  );
};

export default AllRegister;
