interface Props {
  dates: string;
  timeHandle: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const DateComponent: React.FC<Props> = ({ dates, timeHandle }) => {
  return (
    <>
      <div>
        <label htmlFor="dateOfExpensive">Fecha del Gasto:</label>
        <input
          type="date"
          value={dates}
          onChange={timeHandle}
          id="dateOfExpensive"
          required
        />
      </div>
    </>
  );
};

export default DateComponent;
