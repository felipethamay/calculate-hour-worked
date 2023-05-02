import React, { useState } from "react";
import moment from 'moment';
import InputMask from "react-input-mask";
import "./HorasTrabalhadas.css";

function HorasTrabalhadas() {
  const [timeEntries, setTimeEntries] = useState([
    { id: 1, start: '', end: '' },
    { id: 2, start: '', end: '' }
  ]);

  const addTimeEntry = () => {
    const newId = timeEntries[timeEntries.length - 1].id + 1;
    setTimeEntries([...timeEntries, { id: newId, start: '', end: '' }]);
  };

  const handleTimeChange = (id, field, value) => {
    setTimeEntries(prevEntries => prevEntries.map(entry => {
      if (entry.id === id) {
        return { ...entry, [field]: value };
      }
      return entry;
    }));
  };

  const calculateTotalHours = () => {
    let totalHours = 0;
    timeEntries.forEach(entry => {
      const start = moment(entry.start, 'HH:mm');
      const end = moment(entry.end, 'HH:mm');
      if (start.isValid() && end.isValid()) {
        const hours = moment.duration(end.diff(start)).asHours();
        totalHours += hours;
      }
    });
    const formattedHours = moment.utc(totalHours * 60 * 60 * 1000).format('HH:mm');
    return formattedHours;
  };

  return (
    <div className="container">
      <h1>Calculadora de Horas Trabalhadas</h1>
      {timeEntries.map(entry => (
        <div key={entry.id} className="time-entry">
          <label htmlFor={`start${entry.id}`}>Entrada:</label>
          <InputMask
            mask="99:99"
            maskChar={null}
            value={entry.start}
            onChange={e => handleTimeChange(entry.id, 'start', e.target.value)}
          />
          <label htmlFor={`end${entry.id}`}>Saída:</label>
          <InputMask
            mask="99:99"
            maskChar={null}
            onChange={e => handleTimeChange(entry.id, 'end', e.target.value)}
            value={entry.end}
          />
        </div>
      ))}
      <button onClick={addTimeEntry}>Adicionar Horário</button>
      <h2>Total de Horas Trabalhadas: {calculateTotalHours()}</h2>
    </div>
  );
}

export default HorasTrabalhadas;