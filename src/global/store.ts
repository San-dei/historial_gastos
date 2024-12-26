import { create } from "zustand";

export type StateObject = {
  id: number;
  monto: number;
  fecha: string;
  descripcion: string;
  tipoDeGasto: string | undefined;
};

interface DataExpensive {
  monto: number[];
  fecha: string[];
  descripcion: string[];
  tipoDeGasto: string[];
  objList: StateObject[];

  fnMonto: (x: number) => void;
  fnFecha: (x: string) => void;
  fnDescripcion: (x: string) => void;
  fnTipoDeGasto: (x: string) => void;
  fnRenderList: (x: StateObject) => void;
  fnDelete: (x: number) => void;
}

const useData = create<DataExpensive>()((set) => ({
  monto: [],
  fecha: [],
  descripcion: [],
  tipoDeGasto: [],
  objList: [],

  fnMonto: (x) =>
    set((state) => {
      const updateMonto = [...state.monto, x];
      if (x >= 1) {
        console.log("Nuevo array monto:", updateMonto);
        return { monto: updateMonto };
      } else {
        alert("Debes ingresar un número mayor a 0 (cero)");
        return { monto: [] };
      }
    }),

  fnFecha: (x) =>
    set((state) => {
      const updateFecha = [...state.fecha, x];
      console.log("Nuevo array fecha:", updateFecha);

      if (x !== "") {
        return { fecha: updateFecha };
      } else {
        alert("Debes ingresar una fecha");
        return { fecha: [] };
      }
    }),

  fnDescripcion: (x) =>
    set((state) => {
      const updateComentario = [...state.descripcion, x];
      console.log("Nuevo array descripción:", updateComentario);
      if (x !== "") {
        return { descripcion: updateComentario };
      } else {
        return { descripcion: [] };
      }
    }),

  fnTipoDeGasto: (x) =>
    set((state) => {
      const updateTipoGasto = [...state.tipoDeGasto, x];
      console.log("Nuevo array tipo de gasto:", updateTipoGasto);
      return { tipoDeGasto: updateTipoGasto };
    }),

  fnRenderList: (x) =>
    set((state) => {
      const updateObj = [...state.objList, x];
      for (let i = 0; i < updateObj.length; i++) {
        updateObj[i].id = i;
      }
      console.log("Nueva lista de objetos:", updateObj);
      return { objList: updateObj };
    }),

  fnDelete: (x) =>
    set((state) => {
      const comparationToDelet = state.objList.filter((item) => item.id !== x);
      return { objList: comparationToDelet };
    }),
}));

export default useData;
