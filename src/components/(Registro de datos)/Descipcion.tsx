interface Props {
  comentario: string;
  textHandle: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Descipcion: React.FC<Props> = ({ comentario, textHandle }) => {
  return (
    <>
      <div>
        <label id="descripcion">
          Descripcion (opcional):
          <textarea id="descripcion" value={comentario} onChange={textHandle} />
        </label>
      </div>
    </>
  );
};

export default Descipcion;
