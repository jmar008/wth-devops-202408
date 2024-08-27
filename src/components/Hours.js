import React from "react";

    const Hours = () => {

        const shelterHours = [
            { day: "lunes", open: "10:00", close: "16:00" },
            { day: "martes", open: "10:00", close: "16:00" },
            { day: "mircoles", open: "10:00", close: "16:00" },
            { day: "jueves", open: "10:00", close: "16:00" },
            { day: "viernes", open: "10:00", close: "16:00" },
            { day: "sabado", open: "9:00", close: "20:00" },
            { day: "domingo", open: "9:00", close: "20:00" },
    
        ]

        const today = new Date().toLocaleDateString('es-ES', { weekday: 'long' });

        const todayHours = shelterHours.find((day) => day.day === today);
        return (
            <div id="hours">
                <h2>
                Horario de hoy
                </h2>
                <p> <span style={{ textTransform: 'capitalize' }}>{todayHours.day}</span> {todayHours.open} - {todayHours.close}</p>
            </div>
        )
    }

export default Hours;