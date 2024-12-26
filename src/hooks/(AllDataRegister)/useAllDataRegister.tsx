import { ChangeEvent, useEffect, useState } from "react";
import { categorias } from "@/constants/categorias";
import useData from "@/global/store";

export interface Categoria {
  categoria: string;
}

export interface UseAllDataRegisterReturn {
  saveHandle: () => void;
  hidenHandle: () => void;
  allHandle: (x: string) => void;
  montoHandle: (e: ChangeEvent<HTMLInputElement>) => void;
  textHandle: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  timeHandle: (e: ChangeEvent<HTMLInputElement>) => void;
  newValueOnInput: (item: string) => void;
  resetValue: () => void;
  textingHandle: (e: ChangeEvent<HTMLInputElement>) => void;
  resetHandle: () => void;

  filter: Categoria[];
  result: Categoria[];
  text: string;
  dates: string;
  cash: number;
  comentario: string;
  activeInput: boolean;
  changeCategory: boolean;
  hidenCategory: boolean;
  disableButton: boolean;
}

const useAllDataRegister = (): UseAllDataRegisterReturn => {
  const {
    fnRenderList,
    fnMonto,
    fnDescripcion,
    fnFecha,
    fnTipoDeGasto,
    tipoDeGasto,
  } = useData();

  //AllRegister
  const [comentario, isComentario] = useState<string>("Sin comentario");
  const [cash, isCash] = useState<number>(1);
  const [dates, isDates] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [result, setResult] = useState<Categoria[]>([]);

  //Modal
  const [activeInput, isActiveInput] = useState<boolean>(true);
  const [changeCategory, isChangeCategory] = useState<boolean>(false);
  const [hidenCategory, isHidenCategory] = useState<boolean>(true);
  const [disableButton, isDisableButton] = useState<boolean>(false);

  //Modal
  const hidenHandle = () => {
    isChangeCategory(!changeCategory);
    isHidenCategory(!hidenCategory);
    isActiveInput(!activeInput);
    isDisableButton(!disableButton);
    resetValue();
    tipoDeGasto.pop();
  };

  const allHandle = (item: string) => {
    isChangeCategory(!changeCategory);
    isActiveInput(!activeInput);
    fnTipoDeGasto(item);
    newValueOnInput(item);
    isDisableButton(!disableButton);
  };

  //AllRegister
  const resetHandle = () => {
    setText("");
    isDates("");
    isComentario("Sin comentarios");
    isCash(1);
    isDisableButton(!disableButton);
  };

  useEffect(() => {
    setResult(categorias);
  }, []);

  const filter =
    text.length >= 0
      ? result.filter((item) =>
          item.categoria.toLowerCase().includes(text.toLowerCase())
        )
      : [];

  const textingHandle = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const resetValue = () => {
    setText("");
  };

  const newValueOnInput = (item: string) => {
    setText(item);
  };

  const timeHandle = (e: ChangeEvent<HTMLInputElement>) => {
    isDates(e.target.value);
  };

  const textHandle = (e: ChangeEvent<HTMLTextAreaElement>) => {
    isComentario(e.target.value);
  };

  const montoHandle = (e: ChangeEvent<HTMLInputElement>) => {
    isCash(Number(e.target.value));
  };

  const saveHandle = () => {
    fnMonto(cash);
    fnDescripcion(comentario);
    fnFecha(dates);

    const newObjList = {
      id: 0,
      monto: cash,
      fecha: dates,
      descripcion: comentario,
      tipoDeGasto: tipoDeGasto.at(-1)
    };

    fnRenderList(newObjList);
  };

  return {
    saveHandle,
    montoHandle,
    textHandle,
    timeHandle,
    newValueOnInput,
    resetValue,
    textingHandle,
    resetHandle,
    hidenHandle,
    allHandle,

    filter,
    result,
    text,
    dates,
    cash,
    comentario,
    activeInput,
    changeCategory,
    hidenCategory,
    disableButton,
  };
};

export default useAllDataRegister;
