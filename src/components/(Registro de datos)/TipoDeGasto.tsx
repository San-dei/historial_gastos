import { Categoria } from "@/hooks/(AllDataRegister)/useAllDataRegister";
import Modal from "./Modal";
import useOpenOrClose from "@/hooks/(AllDataRegister)/useOpenOrClose";

interface Props {
  text: string;
  textingHandle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  filter: Categoria[];
  resetValue: () => void;
  newValueOnInput: (x: string) => void;
}

const TipoDeGasto: React.FC<Props> = () => {
  const {show, showModal} = useOpenOrClose()

  return (
    <>
      <div>
        <label htmlFor="buscador">
          Categoria de Gasto:{" "}
          <button onClick={showModal}>Buscar Categorias</button>
          {show ? (
            <Modal
            showModal={showModal}
            />
          ) : ''}
        </label>
      </div>
    </>
  );
};

export default TipoDeGasto;
