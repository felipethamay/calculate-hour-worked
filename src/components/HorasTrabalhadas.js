import React, { useState } from "react";
import "./HorasTrabalhadas.css";

function HorasTrabalhadas() {
  const [horaEntrada1, setHoraEntrada1] = useState("");
  const [horaSaida1, setHoraSaida1] = useState("");
  const [horaEntrada2, setHoraEntrada2] = useState("");
  const [horaSaida2, setHoraSaida2] = useState("");

  const calcularHorasTrabalhadas = () => {
    const entrada1 = new Date(`01/01/2022 ${horaEntrada1}`);
    const saida1 = new Date(`01/01/2022 ${horaSaida1}`);
    const entrada2 = new Date(`01/01/2022 ${horaEntrada2}`);
    const saida2 = new Date(`01/01/2022 ${horaSaida2}`);

    const diferenca1 = Math.abs(saida1 - entrada1);
    const diferenca2 = Math.abs(saida2 - entrada2);
    const totalHoras = (diferenca1 + diferenca2) / (1000 * 60 * 60);

    return totalHoras.toFixed(2);
  };

  return (
    <div className="container">
      <h1>Calculadora de Horas Trabalhadas</h1>
      <div>
        <label htmlFor="entrada1">Hora de Entrada 1:</label>
        <input
          type="time"
          id="entrada1"
          value={horaEntrada1}
          onChange={(e) => setHoraEntrada1(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="saida1">Hora de Saída 1:</label>
        <input
          type="time"
          id="saida1"
          value={horaSaida1}
          onChange={(e) => setHoraSaida1(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="entrada2">Hora de Entrada 2:</label>
        <input
          type="time"
          id="entrada2"
          value={horaEntrada2}
          onChange={(e) => setHoraEntrada2(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="saida2">Hora de Saída 2:</label>
        <input
          type="time"
          id="saida2"
          value={horaSaida2}
          onChange={(e) => setHoraSaida2(e.target.value)}
        />
      </div>

      <div>
        <button className="calcular-btn" onClick={() => alert(`Horas trabalhadas: ${calcularHorasTrabalhadas()} horas`)}>
          Calcular
        </button>
      </div>
    </div>
  );
}

export default HorasTrabalhadas;