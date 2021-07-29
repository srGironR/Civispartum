import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import "./charts.css";
import axios from 'axios';

const Charts = () => {

    const [chartData, setChartData] = useState({});

    const graf = () => {
        let puntos = [];
        let descrip = [];
        let url = 'http://localhost:8080/usuario/puntaje/'+localStorage.getItem("NombreUsuario");
        axios.get(url)
        .then(res => {
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
                  backgroundColor: '#2D609A',
                  borderWidth: 4
                }
              ]
            });
          })
          .catch(err => {
            console.log(err);
          });
        console.log(puntos, descrip);
      };
      useEffect(() => {
        graf();
      }, []);

    return (
        <div className="o-bar-chart">

                <Bar data = {chartData}
                    height={400}
                    width={600}
                    backgroundColor={"#2D609A"}
                    options={{
                        maintainAspectRaatio: false,
                    }}
                />
        </div>
    )
}

export default Charts;