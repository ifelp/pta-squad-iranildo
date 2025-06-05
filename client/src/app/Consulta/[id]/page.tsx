"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Gato from "../../../assets/gato.svg";
import Cachorro from "../../../assets/cachorro.svg"
import Cavalo from "../../../assets/cavalo.svg"
import Girafa from "../../../assets/girafa.svg"
import Ovelha from "../../../assets/ovelha.svg"
import Porco from "../../../assets/porco.svg"
import Arrow from "../../../assets/arrow.svg";
import Task from "../../../assets/task_alt.svg";
import ArrowBack from "../../../assets/arrow_back.svg";
import Link from "next/link";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import ModalConsulta from "@/components/Modal Consulta";
import api from "@/services/api";

type Consulta = {
  data: string;
  hora: string;
  tipoConsulta: string;
  medicoResponsavel: string;
};

export default function DetalhesConsulta() {
  const [tipoConsulta, setTipoConsulta] = useState("Vacinação");
  const [medicoResponsavel, setMedicoResponsavel] = useState("Dr. José Carlos");
  const [descricaoProblema, setDescricaoProblema] = useState("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries");
  const [nome, setNome] = useState("Luna");
  const [nomeTutor, setNomeTutor] = useState("Lucas Gomes");
  const [especie, setEspecie] = useState("Gato");
  const [idade, setIdade] = useState("5 anos");
  const [pacienteID, setPacienteID] = useState("");
  const [consultas, setConsultas] = useState<Consulta[]>([]);
  

  const especieToImage: Record<string, any> = {
    Gato: Gato,
    Cachorro: Cachorro,
    Cavalo: Cavalo,
    Girafa: Girafa,
    Ovelha: Ovelha,
    Porco: Porco,
  };

  

  
  const searchParams = useSearchParams()
  const modal = searchParams.get('modal')
  const params = useParams();
  const consultaId = params.id
  
  const router = useRouter()

  
  const handleClick = ()=>{
    router.push('?modal=preview', {scroll: false})
  }
  
  const close = ()=>{
    router.back()
  }

  useEffect(() => {
    
    const fetchDadosConsulta = async () => {
      try{
        const response = await api.get(`/consulta/${consultaId}`)
        
        const { tipoConsulta, medicoResponsavel, descricaoProblema, pacienteID } = response.data;
        setTipoConsulta(tipoConsulta);
        setMedicoResponsavel(medicoResponsavel);
        setDescricaoProblema(descricaoProblema);
        setPacienteID(pacienteID);
    
        console.log(response.data);

        try{
          const responsePet = await api.get(`/pet/${pacienteID}`)

          const {nome, nomeTutor, especie, idade } = responsePet.data
          setNome(nome);
          setNomeTutor(nomeTutor);
          setEspecie(especie.charAt(0).toUpperCase() + especie.slice(1).toLowerCase());
          setIdade(idade);

          console.log(responsePet.data);

          try{
            const consultasPet = await api.get(`/consultas/pet/${pacienteID}`)
            setConsultas(consultasPet.data);

            console.log(consultasPet.data)
          } catch (error){
            console.error("Erro ao buscar as consultas do pet", error)
          }

        } catch(error){
          console.error("Erro ao buscar os dados do pet", error)
        }
      } catch (error){
        console.error("Erro ao buscar os detalhes da consulta", error)
      }
    }

    fetchDadosConsulta();
  }, [consultaId])



  return (
    <div style={{ padding: "38px", display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
      <div style={{ flex: "1 1 500px", maxWidth: "800px", paddingLeft: "120px", position: "relative" }}>
        <Link href='/Atendimento'>
        <div style={{ marginBottom: "34px", display: "flex", alignItems: "center", marginLeft: "-16px" }}>
          <Image src={Arrow} alt="Seta" style={{ transform: "translateY(10%) rotate(270deg)" }} width={50}></Image>
          <span style={{ fontSize: "42px", fontWeight: "bold", marginLeft: "10px" }}>Detalhes da Consulta</span>
        </div>
        </Link>
        <h3 style={{ fontSize: "24px", fontWeight: 800, textDecoration: "bold" }}>Paciente</h3>
        <div style={{ display: "flex", alignItems: "center", gap: "20px", margin: "16px 0" }}>
          <Image src={especieToImage[especie]} alt="Animal" width={295} height={299} />
          <div style={{ display: "flex", flexDirection: "column", gap: "100px" }}>
            <div>
              <p style={{ fontWeight: "bold", fontSize: "24px", margin: 0 }}>{nome}</p>
              <p style={{ margin: 0, fontSize: "24px" }}>{idade}</p>
            </div>
            <div style={{ marginBottom: "16px" }}>
              <p style={{ margin: 0 }}>{nomeTutor}</p>
              <p style={{ margin: 0 }}>{medicoResponsavel}</p>
            </div>
          </div>
        </div>
        <div style={{ marginBottom: "16px" }}>
          <p style={{ fontWeight: 600, marginBottom: "6px" }}>Descrição do problema:</p>
          <p style={{ lineHeight: 1.5 }}>{descricaoProblema}</p>
        </div>
        <div style={{ marginBottom: "32px" }}>
          <p style={{ fontWeight: 600, marginBottom: "6px", display: "inline" }}>Tipo de consulta:</p>
          <span style={{ background: "#aae1ff", color: "black", padding: "6px 16px", borderRadius: "6px", fontSize: "14px", marginLeft: "16px" }}>{tipoConsulta}</span>
        </div>
        <div style={{ border: "1px solid #ccc", borderRadius: "16px", padding: "24px", marginBottom: "80px" }}>
          <p style={{ fontWeight: 600, textAlign: "center", marginBottom: "12px" }}>Deseja realizar outra consulta?</p>
          <button onClick={handleClick} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", backgroundColor: "#30E07F", color: "white", padding: "12px", border: "none", borderRadius: "24px", fontWeight: 600, fontSize: "14px", width: "100%", cursor: "pointer" }}>
            <Image src={Task} alt="Check" width={20} height={20} /> Agendamento
          </button>
        </div>
        {modal === 'preview' && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-30 backdrop-blur-sm">
          <ModalConsulta onClose={close} pacienteID={pacienteID}/>
          </div>
        )}
      </div>
      <div style={{ flex: "1 400px", maxWidth: "600px", marginTop: "80px", marginRight: "200px" }}>
        <h3 style={{ fontWeight: 600, fontSize: "30px" }}>Histórico de Consultas</h3>
        <div style={{ background: "#ffffff", border: "1px dashed #d9d9d9", borderRadius: "16px", padding: "16px", marginTop: "30px", display: "flex", flexDirection: "column", gap: "30px" }}>
          {consultas.map((consulta, index) => (
            <div key={index} style={{ backgroundColor: "#f0f0f0", padding: "12px", borderRadius: "12px", display: "flex", justifyContent: "space-between", alignItems: "center", boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.05)" }}>
              <div style={{ lineHeight: 1.3, backgroundColor: "#ffffff", padding: "8px 8px", borderRadius: "17%" }}>
                <p style={{ fontWeight: 600, margin: 0 }}>{consulta.data}</p>
                <p style={{ fontWeight: 600, margin: 0 }}>{consulta.hora}</p>
              </div>
              <p style={{ fontWeight: 600, margin: 0 }}>{consulta.tipoConsulta}</p>
              <p style={{ margin: 0 }}>{consulta.medicoResponsavel}</p>
              <Image src={ArrowBack} alt="Arrow" width={20} height={16} style={{ transform: "rotate(180deg)" }} />
            </div>
          ))
        }
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 768px) {
          div { padding: 20px; flex-direction: column; align-items: center; }
          div > div:first-child { padding-left: 0; max-width: 100%; }
          div > div:last-child { margin-right: 0; margin-top: 40px; max-width: 100%; }
          h3 { text-align: center; }
          button { width: 100%; }
        }
        @media (max-width: 480px) {
          div { padding: 10px; }
          div > div:first-child { padding-left: 0; }
          div > div:last-child { margin-top: 20px; }
          h3 { font-size: 24px; }
          span { font-size: 12px; }
        }
      `}</style>
    </div>
  );
}