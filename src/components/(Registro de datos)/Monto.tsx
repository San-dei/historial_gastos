interface Props {
  montoHandle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  cash: number;
}

const Monto: React.FC<Props> = ({ cash, montoHandle }) => {
  return (
    <>
    <label htmlFor="monto">
      Monto:
      <input
        id="monto"
        type="number"
        min={1}
        placeholder="Monto"
        onChange={montoHandle}
        value={cash}
        required
        />
        </label>
    </>
  );
};

export default Monto;
