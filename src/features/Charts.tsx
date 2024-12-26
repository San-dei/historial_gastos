'use client';

import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"; // Importar los elementos necesarios
import { useEffect, useState } from "react";
import useData from "@/global/store";

interface Props {
  name: string;
  monto: number;
}

ChartJS.register(ArcElement, Tooltip, Legend);

const Charts = () => {
  const [categories, setCategories] = useState<Props[]>([]);
  const { objList } = useData();

  useEffect(() => {
    const updateObject = objList.map((item) => ({
      name: item.tipoDeGasto!,
      monto: item.monto,
    }));
    setCategories(updateObject);
  }, [objList]);

  const data = {
    labels: categories.map((category) => category.name),
    datasets: [
      {
        label: "Gastos",
        data: categories.map((category) => category.monto),
        backgroundColor: [
          "#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#FFC300", "#DAF7A6",
          "#581845", "#C70039", "#900C3F", "#FF5733", "#33FFC3", "#FFBD33",
          "#8C33FF", "#33FF57", "#FF3380", "#3380FF", "#80FF33", "#FF8333",
          "#3375FF", "#75FF33", "#33FF75", "#FF3375", "#3380FF", "#8033FF",
          "#33FF80", "#FFC833", "#FF33C8", "#8CFF33", "#338CFF", "#FF338C",
          "#B8FF33", "#33B8FF", "#FFB833", "#A6FF33", "#33A6FF", "#FFA633",
          "#DAFF33", "#33DAFF", "#FFDA33", "#FFC3DA", "#C3FFDA", "#DAC3FF",
          "#C3DAFF", "#FFC3A6", "#A6C3FF", "#DA33FF", "#FF33DA", "#33DAFF",
          "#DAFF33", "#FFDADA", "#33FFDA", "#DA33FF", "#33FFC8", "#C833FF",
          "#FFC833", "#C8FF33", "#33C8FF", "#FFC8DA", "#DAFFC8", "#C8DAFF",
          "#FFDAC8", "#A6C833", "#33A6C8", "#C8A633", "#FFA6C8", "#C8FFA6",
          "#A6FFC8", "#DAC833", "#33DAC8", "#C8DA33", "#A633DA", "#33A633",
          "#DAFFA6", "#A6DAFF", "#33A6DA", "#DA33A6", "#A633FF", "#33A633",
          "#FFDADA", "#FF3333", "#33FF33", "#3333FF", "#FF33FF", "#33FFFF",
          "#FFFF33", "#C8C8FF", "#FFC8C8", "#C8FFC8", "#FF75DA", "#DA75FF",
        ],
        hoverOffset: 4,
      },
    ],
  };

  return <>
  <div style={{ width: "300px", height: "300px" }}
  >

  <Doughnut data={data} />;
  </div>
  </>
};

export default Charts;
