import React from 'react';

const Cita = ({cita}) => (
    <div className="media mt-3">
        <div className="media-body">
            <h3 className="mt-0">{cita.mascota}</h3>
            <p className="card-text"><b>Dueño: </b>{cita.propietario}</p>
            <p className="card-text"><b>Fecha: </b>{cita.fecha}</p>
            <p className="card-text"><b>Hora: </b>{cita.hora}</p>
            <p className="card-text"><b>Sintomas: </b></p>
            <p className="card-text">{cita.sintomas}</p>
        </div>
    </div>
);

export default Cita;