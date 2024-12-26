import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav>
        {/* <span>
          Logo
        </span>

        <button>Burger</button> */}

        <header>
          <ul>
            <Link href={"/analisisVisual"}>
              <li>Analisis Visual</li>
            </Link>
            <Link href={"/categoriasDeGastos"}>
              <li>Categorias de Gastos</li>
            </Link>
            <Link href={"/exportarDatos"}>
              <li>Inicio</li>
            </Link>
            <Link href={"/filtrosYBusquedas"}>
              <li>Filtros y Busquedas</li>
            </Link>
            <Link href={"/historial"}>
              <li>Historial</li>
            </Link>
            <Link href={"/presupuesto"}>
              <li>Presupuesto</li>
            </Link>
            <Link href={"/registroDeGastos"}>
              <li>Resgistro de Datos</li>
            </Link>
          </ul>
        </header>
      </nav>
    </>
  );
};

export default Navbar;
