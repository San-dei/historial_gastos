import useAllDataRegister from "@/hooks/(AllDataRegister)/useAllDataRegister";
import { LiaExchangeAltSolid } from "react-icons/lia";
import { IoIosCloseCircleOutline } from "react-icons/io";
import style from "../../styles/modal.module.css";

interface Props{
  showModal: () => void
}

const Modal: React.FC<Props> = ({showModal}) => {
  const {
    changeCategory,
    activeInput,
    text,
    filter,
    disableButton,
    textingHandle,
    allHandle,
    hidenHandle,
  } = useAllDataRegister();


  return (
    <>
      <div className={style.modal_conteiner}>
          <button onClick={showModal} className={style.modal_close}>
            <IoIosCloseCircleOutline />
          </button>
        <div className={style.modal}>
          {activeInput && (
            <div className={style.modal_input_conteiner}>
              <input
                id="buscador"
                type="text"
                placeholder="Categorias..."
                value={text}
                onChange={textingHandle}
                required
                className={style.modal_input}
              />
            </div>
          )}
          <div className={style.modal_categorias_conteiner}>
            {filter.map((item, index) => (
              <div key={index} className={style.modal_categorias}>
                <div className={style.modal_order}>
                  <button
                    onClick={() => allHandle(item.categoria)}
                    disabled={disableButton}
                    className={style.modal_button}
                  >
                    {item.categoria}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={style.modal_change_conteiner}>
          {changeCategory && (
            <button onClick={hidenHandle} className={style.modal_change}>
              <LiaExchangeAltSolid className={style.modal_icon_change} />
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Modal;
