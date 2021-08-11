import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import "./charts.css";
import axios from "axios";

const Charts = () => {
  const [chartData, setChartData] = useState({});

  const graf = () => {
    let puntos = [];
    let descrip = [];
    let url =
      "http://localhost:8080/usuario/puntaje/" +
      localStorage.getItem("NombreUsuario");
    axios
      .get(url)
      .then((res) => {
        console.log(res);
        for (const dataObj of res.data) {
          puntos.push(parseInt(dataObj.puntaje));
          descrip.push(dataObj.descripcionPuntaje);
        }
        setChartData({
          labels: descrip,
          datasets: [
            {
              label: "puntajes",
              data: puntos,
              backgroundColor: "#2d609b73",
              borderWidth: 4,
            },
          ],
        });
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(puntos, descrip);
  };
  useEffect(() => {
    graf();
  }, []);

  const options = {
    maintainAspectRatio: false,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            min: 0,
            max: 7,
          },
        },
      ],
    },
  };

  return (
    <div className="o-bar-chart">
      <Line data={chartData} height={400} width={600} options={options} />
    </div>
  );
};

export default Charts;
