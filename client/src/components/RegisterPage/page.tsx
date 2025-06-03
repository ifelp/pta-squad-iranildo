"use client";

import React, { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import ovelha from "../../assets/ovelha.png";
import gato from "../../assets/gato.png";
import porco from "../../assets/porco.png";
import vaca from "../../assets/vaca.png";
import cavalo from "../../assets/cavalo.png";
import cachorro from "../../assets/cachorro.png";
import seta from "../../assets/arrow.png";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import SendEmail from "@/components/modal_email";
import api from "@/services/api";

interface MatchFormData{
    nome: string
    nomeTutor: string
    idade: number
    especie: string
    tipoConsulta: string
    medicoResponsavel: string
    data: string
    hora: string
    descricaoProblema?: string
}


export default function RegisterForm() {
    const { register, handleSubmit, formState: {errors}, setValue, getValues} = useForm<MatchFormData>();
    const [selectedAnimal, setSelectedAnimal] = useState<string | null>(null);
    // const [pacienteID, setPacienteID] = useState()
    const router = useRouter()
    const searchParams = useSearchParams()
    const modal = searchParams.get('modal')

    const handleClick = ()=>{
        router.push('?modal=preview', {scroll: false})
    }
    const close = ()=>{
        router.back()
    }

    const animalOptions = [
        {name: "Ovelha", src: ovelha},
        {name: "Gato", src: gato},
        {name: "Porco", src: porco},
        {name: "Vaca", src: vaca},
        {name: "Cavalo", src: cavalo},
        {name: "Cachorro", src: cachorro},
    ]

    const options = [
        'Primeira consulta',
        'Retorno',
        'Vacinação',
        'Check-up'
    ]

    const handleAnimalSelect = (animalType: string) => {
    setSelectedAnimal(animalType);
    setValue('especie', animalType);
};

    const submitForm: SubmitHandler<MatchFormData> = async(mdata)=> {

        const nomeT = getValues('nomeTutor');
        const {nome,nomeTutor,idade,especie } = mdata
        const {tipoConsulta, medicoResponsavel, data,hora,descricaoProblema} = mdata

        const response = await api.post('/pet', {
            nome,
            nomeTutor,
            especie,
            idade
        });

        console.log(response.data.id)

        const pacienteID = response.data.id

        await api.post('/consulta', {
            tipoConsulta,
            medicoResponsavel,
            data,
            hora,
            descricaoProblema,
            pacienteID
        })
        console.log('Informação enviada')
    }
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
        <form onSubmit={handleSubmit(submitForm)} style={{display: "flex", flexDirection: "column", gap: "24px", padding: "1rem 0.1rem", maxWidth: "80rem", margin: "1rem auto"}}> 
            <div style={{display: "flex", gap: "13px"}}>
                <Link href='/Atendimento'>
                <button type="button" style={{cursor: 'pointer'}}>
                    <img src={seta.src} style={{pointerEvents: 'none'}}/>
                </button>
                </Link>
                <h1 style={{fontSize: "48px", fontWeight: "700", gap: "32px"}}>Cadastro</h1>
            </div>


            <div style={{display:"flex", gap: " 1.5rem"}}>

                <div style={inputPosition}>
                    <label htmlFor="patientName" style={{fontWeight: "bold"}}>Nome do Paciente: </label>
                    <input type="text" id="patientName" placeholder="Digite aqui..." style={inputStyle}
                    {...register('nome', {required: 'Nome do pet é obrigatório.'})}/>
                    {
                    errors.nome && (
                        <p className="text-red-600 text-sm">{errors.nome.message}</p>
                    )
                }
                </div>

                <div style={inputPosition}>
                    <label htmlFor="tutorName" style={{fontWeight: "bold"}}>Nome do Tutor: </label>
                    <input type="text" id="tutorName" placeholder="Digite aqui..." style={inputStyle}
                    {...register('nomeTutor', {required: 'Nome do tutor é obrigatório.'})} />
                    {
                    errors.nomeTutor && (
                        <p className="text-red-600 text-sm">{errors.nomeTutor.message}</p>
                    )
                }
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
                    <input type="number" id="patientAge" min={0} placeholder="Digite aqui..." style={inputStyle} 
                    {...register('idade', {required: 'Idade do pet é obrigatória.'})}/>
                    {
                    errors.idade && (
                        <p className="text-red-600 text-sm">{errors.idade.message}</p>
                    )
                }
                </div>

                <div style={inputPosition}>
                    <label htmlFor="consultationType" style={{fontWeight: "bold"}}>Tipo de Consulta: </label>
                    <select id="consultationType" style={inputStyle} {...register('tipoConsulta', {required: 'Tipo da consulta é obrigatório.'})}>
                        <option value="" disabled selected>Selecione aqui...</option>
                        {options.map((opts,index)=>(
                            <option value={options[index]} selected>{options[index]}</option>
                        ))}
                    </select>
                    {
                    errors.tipoConsulta && (
                        <p className="text-red-600 text-sm">{errors.tipoConsulta.message}</p>
                    )
                }
                </div>
            </div>

            <div style={{display:"flex", gap: " 1.5rem"}}>

                <div style={inputPosition}>
                    <label htmlFor="doctorName" style={{fontWeight: "bold"}}>Médico Responsável: </label>
                    <input type="text" id="doctorName" placeholder="Digite aqui..." style={inputStyle}
                    {...register('medicoResponsavel', {required: 'Médico responsável é obrigatório.'})}/>
                    {
                    errors.medicoResponsavel && (
                        <p className="text-red-600 text-sm">{errors.medicoResponsavel.message}</p>
                    )
                }
                </div>

                <div style={inputPosition}>
                    <label htmlFor="serviceDate" style={{fontWeight: "bold"}}>Data do Atendimento: </label>
                    <input type="date" id="serviceDate" style={inputStyle} 
                    {...register('data', {required: 'Data de atendimento é obrigatória.'})}/>
                    {
                    errors.data && (
                        <p className="text-red-600 text-sm">{errors.data.message}</p>
                    )
                }
                </div>

                <div style={inputPosition}>
                    <label htmlFor="serviceHour" style={{fontWeight: "bold"}}>Horário do Atendimento: </label>
                    <input type="time" id="serviceHour" style={inputStyle} 
                    {...register('hora', {required: 'Hora do atendimento é obrigatória.'})}/>
                    {
                    errors.hora && (
                        <p className="text-red-600 text-sm">{errors.hora.message}</p>
                    )
                }
                </div>

            </div>

            <div style={inputPosition}>
                <label htmlFor="problemDescription" style={{fontWeight: "bold"}}>Descrição do Problema: </label>
                <textarea
                    id="problemDescription"
                    placeholder="Descreva o problema aqui..."
                    rows={4}
                    style={{...inputStyle, height: "unset"}}
                    {...register('descricaoProblema')}
                ></textarea>
            </div>

            <button type="submit" onClick={handleClick} style={{ display: "flex", alignSelf: "flex-end", padding: '12px 40px', backgroundColor: '#50E678', color: "#FFFFFF", borderRadius: '24px', cursor: 'pointer', marginTop: '41px', width: "205px", height: "48px"}}>
                Finalizar Cadastro
            </button>

            {(modal === 'preview') && 
                (<div className="flex justify-center items-center fixed inset-0 bg-gray-500 bg-opacity-30 backdrop-blur-sm">
                    <SendEmail name={getValues('nomeTutor')} onClose={close}/>
                </div>)
            }

        </form>
    )
}
