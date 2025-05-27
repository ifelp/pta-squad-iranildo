"use client";

import React, { useState } from "react";
import Image from "next/image";
import Cat from "../../../../mobile/src/assets/cat.svg";
import Arrow from "../../assets/arrow.svg";
import Task from "../../assets/task_alt.svg";
import ArrowBack from "../../assets/arrow_back.svg";

export default function DetalhesConsulta() {
  const [consultaTipo, setConsultaTipo] = useState("Vacinação");
  const [nomePet, setNomePet] = useState("Luna");
  const [idadePet, setIdadePet] = useState("5 anos");
  const [nomeDono, setNomeDono] = useState("Lucas Gomes");
  const [nomeMedico, setNomeMedico] = useState("Dr. José Carlos");

  return (
    <div style={{ padding: "38px", display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
      <div style={{ flex: "1 1 500px", maxWidth: "800px", paddingLeft: "120px", position: "relative" }}>
        <div style={{ marginBottom: "34px", display: "flex", alignItems: "center", marginLeft: "-16px" }}>
          <Image src={Arrow} alt="Seta" style={{ transform: "translateY(10%) rotate(270deg)" }} width={50}></Image>
          <span style={{ fontSize: "42px", fontWeight: "bold", marginLeft: "10px" }}>Detalhes da Consulta</span>
        </div>
        <h3 style={{ fontSize: "24px", fontWeight: 800, textDecoration: "bold" }}>Paciente</h3>
        <div style={{ display: "flex", alignItems: "center", gap: "20px", margin: "16px 0" }}>
          <Image src={Cat} alt="Gato" width={295} height={299} />
          <div style={{ display: "flex", flexDirection: "column", gap: "100px" }}>
            <div>
              <p style={{ fontWeight: "bold", fontSize: "24px", margin: 0 }}>{nomePet}</p>
              <p style={{ margin: 0, fontSize: "24px" }}>{idadePet}</p>
            </div>
            <div style={{ marginBottom: "16px" }}>
              <p style={{ margin: 0 }}>{nomeDono}</p>
              <p style={{ margin: 0 }}>{nomeMedico}</p>
            </div>
          </div>
        </div>
        <div style={{ marginBottom: "16px" }}>
          <p style={{ fontWeight: 600, marginBottom: "6px" }}>Descrição do problema:</p>
          <p style={{ lineHeight: 1.5 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.</p>
        </div>
        <div style={{ marginBottom: "32px" }}>
          <p style={{ fontWeight: 600, marginBottom: "6px", display: "inline" }}>Tipo de consulta:</p>
          <span style={{ background: "#aae1ff", color: "black", padding: "6px 16px", borderRadius: "6px", fontSize: "14px", marginLeft: "16px" }}>{consultaTipo}</span>
        </div>
        <div style={{ border: "1px solid #ccc", borderRadius: "16px", padding: "24px", marginBottom: "80px" }}>
          <p style={{ fontWeight: 600, textAlign: "center", marginBottom: "12px" }}>Deseja realizar outra consulta?</p>
          <button style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", backgroundColor: "#30E07F", color: "white", padding: "12px", border: "none", borderRadius: "24px", fontWeight: 600, fontSize: "14px", width: "100%", cursor: "pointer" }}>
            <Image src={Task} alt="Check" width={20} height={20} /> Agendamento
          </button>
        </div>
      </div>
      <div style={{ flex: "1 400px", maxWidth: "600px", marginTop: "80px", marginRight: "200px" }}>
        <h3 style={{ fontWeight: 600, fontSize: "30px" }}>Histórico de Consultas</h3>
        <div style={{ background: "#ffffff", border: "1px dashed #d9d9d9", borderRadius: "16px", padding: "16px", marginTop: "30px", display: "flex", flexDirection: "column", gap: "30px" }}>
          {[1, 2, 3, 4].map((_, i) => (
            <div key={i} style={{ backgroundColor: "#f0f0f0", padding: "12px", borderRadius: "12px", display: "flex", justifyContent: "space-between", alignItems: "center", boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.05)" }}>
              <div style={{ lineHeight: 1.3, backgroundColor: "#ffffff", padding: "8px 8px", borderRadius: "17%" }}>
                <p style={{ fontWeight: 600, margin: 0 }}>18/02</p>
                <p style={{ fontWeight: 600, margin: 0 }}>13:00</p>
              </div>
              <p style={{ fontWeight: 600, margin: 0 }}>Primeira Consulta</p>
              <p style={{ margin: 0 }}>{nomeMedico}</p>
              <Image src={ArrowBack} alt="Arrow" width={20} height={16} style={{ transform: "rotate(180deg)" }} />
            </div>
          ))}
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