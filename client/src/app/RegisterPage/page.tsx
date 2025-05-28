'use client'
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import ovelha from "../../assets/ovelha.png";
import gato from "../../assets/gato.png";
import porco from "../../assets/porco.png";
import vaca from "../../assets/vaca.png";
import cavalo from "../../assets/cavalo.png";
import cachorro from "../../assets/cachorro.png";
import seta from "../../assets/arrow.png";

export default function RegisterForm() {
    const { register, handleSubmit, formState: {errors}, setValue} = useForm();
    const [selectedAnimal, setSelectedAnimal] = useState<string | null>(null);

    const animalOptions = [
        {name: "Ovelha", src: ovelha},
        {name: "Gato", src: gato},
        {name: "Porco", src: porco},
        {name: "Vaca", src: vaca},
        {name: "Cavalo", src: cavalo},
        {name: "Cachorro", src: cachorro},
    ]

    const handleAnimalSelect = (animalType: string) => {
    setSelectedAnimal(animalType);
    setValue('animal_type', animalType);
};
    const inputStyle: React.CSSProperties = {
        border: "1px solid #101010",
        padding: "0.625rem",
        borderRadius: "0.5rem",
        width: "100%",
        boxSizing: "border-box",
    };

    const inputPosition: React.CSSProperties = {
        display: "flex",
        flex: 1,
        flexDirection: "column",
        gap: "0.75rem",
    }

    return (
        <form style={{display: "flex", flexDirection: "column", gap: "24px", padding: "1rem 0.1rem", maxWidth: "80rem", margin: "1rem auto"}}>
            <div style={{display: "flex", gap: "13px"}}>
                <button>
                    <img src={seta.src}/>
                </button>
                <h1 style={{fontSize: "48px", fontWeight: "700", gap: "32px"}}>Cadastro</h1>
            </div>


            <div style={{display:"flex", gap: " 1.5rem"}}>

                <div style={inputPosition}>
                    <label htmlFor="patientName" style={{fontWeight: "bold"}}>Nome do Paciente: </label>
                    <input type="text" id="patientName" name="patient_name" placeholder="Digite aqui..." style={inputStyle}/>
                </div>

                <div style={inputPosition}>
                    <label htmlFor="tutorName" style={{fontWeight: "bold"}}>Nome do Tutor: </label>
                    <input type="text" id="tutorName" name="tutor_name" placeholder="Digite aqui..." style={inputStyle}/>
                </div>

            </div>

            <div style={{ ...inputPosition, flex: 'unset' }}>
                <p style={{ fontWeight: 'bold' }}>Qual a espécie do paciente?</p>
            </div>

            <div style={{display: "flex", justifyContent: "left", flexWrap: "wrap", gap: "3.75rem"}}>
                {animalOptions.map((animal) => (
                    <button key={animal.name} type="button" onClick={() => handleAnimalSelect(animal.name)} style={{
                        backgroundColor: animal.name === selectedAnimal ? '#d9d9d9' : 'transparent',
                        padding: '0.625rem',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        width: "7.5rem",
                        height: "7.5rem",
                    }}>
                        <img src={animal.src.src} alt={animal.name} />
                    </button>
                ))}
            </div>

            <div style={{display:"flex", gap: " 1.5rem"}}>

                <div style={inputPosition}>
                    <label htmlFor="patientAge" style={{fontWeight: "bold"}}>Idade do Paciente: </label>
                    <input type="number" id="patientAge" name="patient_age" min={0} placeholder="Digite aqui..." style={inputStyle}/>
                </div>

                <div style={inputPosition}>
                    <label htmlFor="consultationType" style={{fontWeight: "bold"}}>Tipo de Consulta: </label>
                    <select id="consultationType" style={inputStyle}>
                        <option value="" disabled selected>Selecione aqui...</option>
                    </select>
                </div>
            </div>

            <div style={{display:"flex", gap: " 1.5rem"}}>

                <div style={inputPosition}>
                    <label htmlFor="doctorName" style={{fontWeight: "bold"}}>Médico Responsável: </label>
                    <input type="text" id="doctorName" name="doctor_name" placeholder="Digite aqui..." style={inputStyle}/>
                </div>

                <div style={inputPosition}>
                    <label htmlFor="serviceDate" style={{fontWeight: "bold"}}>Data do Atendimento: </label>
                    <input type="date" id="serviceDate" name="service_date" style={inputStyle}/>
                </div>

                <div style={inputPosition}>
                    <label htmlFor="serviceHour" style={{fontWeight: "bold"}}>Horário do Atendimento: </label>
                    <input type="time" id="serviceHour" name="service_hour" style={inputStyle}/>
                </div>

            </div>

            <div style={inputPosition}>
                <label htmlFor="problemDescription" style={{fontWeight: "bold"}}>Descrição do Problema: </label>
                <textarea
                    id="problemDescription"
                    name="problem_description"
                    placeholder="Descreva o problema aqui..."
                    rows={4}
                    style={{...inputStyle, height: "unset"}}
                ></textarea>
            </div>

            <button type="submit" style={{ display: "flex", alignSelf: "flex-end", padding: '12px 40px', backgroundColor: '#50E678', color: "#FFFFFF", borderRadius: '24px', cursor: 'pointer', marginTop: '41px', width: "205px", height: "48px"}}>
                Finalizar Cadastro
            </button>

        </form>
    )
}
