"use client";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Image from "next/image";
import logoCiti from "../../assets/logoCiti.png";
import Arrow from "../../assets/arrow.svg";
import api from "@/services/api";

interface ModalConsultaProps {
  onClose: () => void;
  pacienteID: string;
}

interface FormData {
  tipoConsulta: string;
  medicoResponsavel: string;
  data: string;
  hora: string;
  descricaoProblema: string;
}

export default function ModalConsulta({ onClose, pacienteID }: ModalConsultaProps) {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit:SubmitHandler<Omit<FormData, "pacienteID">> = async (mdata) => {

    try{
      const response = await api.post("/consulta", {...mdata, pacienteID});
    console.log("Dados enviados:", mdata, pacienteID);
    } catch (error){
      console.error("Erro ao enviar dados");
    }
  };

  return (
    <>
      <div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)", backgroundColor: "white", borderRadius: "20px", maxWidth: "95vw", width: "800px", padding: "32px", boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)", zIndex: 999, overflowY: "auto", maxHeight: "90vh" }}>
        <button onClick={onClose} style={{ position: "absolute", top: "20px", right: "20px", background: "none", border: "none", fontSize: "24px", cursor: "pointer" }}>×</button>

        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center", marginBottom: "24px" }}>
          <Image src={logoCiti} alt="Logo Citi" width={180} height={60} />
        </div>

        <p style={{ textAlign: "center", fontSize: "18px", marginBottom: "24px" }}>
          <strong>O pet já está cadastrado no sistema!</strong> Preencha os dados da <strong>consulta</strong>
        </p>

        <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          
          <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "space-between", flexDirection: "row" }}>
            <div style={{ flex: "1 1 100%", maxWidth: "calc(50% - 8px)", display: "flex", flexDirection: "column", minWidth: "250px", position: "relative" }}>
              <label style={{ marginBottom: "6px", fontWeight: 600 }}>Tipo de consulta</label>
              <select {...register("tipoConsulta", { required: true })} style={{ padding: "12px", paddingRight: "64px", borderRadius: "8px", border: "1px solid #333", appearance: "none" }}>
                <option value="">Selecione aqui</option>
                <option value="retorno">Retorno</option>
                <option value="vacina">Vacina</option>
                <option value="exame">Exame</option>
              </select>
              <Image src={Arrow} alt="Ícone Personalizado" width={24} height={24} style={{ position: "absolute", top: "67%", right: "12px", transform: "translateY(-50%) rotate(180deg)", pointerEvents: "none" }}/>
            </div>

            <div style={{ flex: "1 1 100%", maxWidth: "calc(50% - 8px)", display: "flex", flexDirection: "column", minWidth: "250px" }}>
              <label style={{ marginBottom: "6px", fontWeight: 600 }}>Médico Responsável</label>
              <input {...register("medicoResponsavel", { required: true })} placeholder="Digite aqui..." style={{ padding: "12px", borderRadius: "8px", border: "1px solid #333" }} />
            </div>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "space-between", flexDirection: "row" }}>
            <div style={{ flex: "1 1 100%", maxWidth: "calc(50% - 8px)", display: "flex", flexDirection: "column", position: "relative", minWidth: "250px" }}>
              <label style={{ marginBottom: "6px", fontWeight: 600 }}>Data do atendimento</label>
              <input {...register("data", { required: true})} type="date" placeholder="dd/mm/aa" style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid #333" }} />
            </div>

            <div style={{ flex: "1 1 100%", maxWidth: "calc(50% - 8px)", display: "flex", flexDirection: "column", position: "relative", minWidth: "250px" }}>
              <label style={{ marginBottom: "6px", fontWeight: 600 }}>Horário do atendimento</label>
              <input {...register("hora", { required: true, pattern: { value: /^([0-1]\d|2[0-3]):([0-5]\d)$/, message: "Formato inválido (hh:mm)" }})} type="time" placeholder="00:00" style={{ width: "100%", padding: "12px 12px 12px 12px", borderRadius: "8px", border: "1px solid #333" }} />
            </div>
          </div>

          <button type="submit" style={{ marginTop: "20px", padding: "14px", backgroundColor: "#30E07F", color: "white", border: "none", borderRadius: "24px", fontWeight: "bold", fontSize: "16px", cursor: "pointer", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
            Finalizar cadastro
          </button>
        </form>
      </div>

      <style jsx global>{`
        @media (max-width: 768px) {
          div[style*="justify-content: space-between"] {
            flex-direction: column !important;
          }
          div[style*="maxWidth: calc(50% - 8px)"] {
            max-width: 100% !important;
          }
        }
      `}</style>
    </>
  );
}