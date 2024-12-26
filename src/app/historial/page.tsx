"use client";
import useData from "@/global/store";

const Historial: React.FC = () => {
  const { objList, fnDelete } = useData();



  return (
    <>
      <div>
        {objList.map((item, index) => {
          return (
            <div key={index}>
              <div>
                <div>
                  <span>Monto</span>
                  {item.monto}
                </div>
                <div>
                  <span>Fecha</span>
                  {item.fecha}
                </div>
                <div>
                  <span>Categoria</span>
                  {item.tipoDeGasto}
                </div>
                <div>
                  <span>Descripcion</span>
                  {item.descripcion}
                </div>
                <div>
                  <button onClick={() => fnDelete(item.id)}>
                    Eliminar Gasto
                  </button>
                </div> 
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Historial;

/* Muestra columnas como:
Categoría
Monto
Fecha
Descripción
Agrega un botón para eliminar un gasto y configura una acción en Zustand para manejarlo. */
