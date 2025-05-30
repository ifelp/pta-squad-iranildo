'use client'
import React from 'react';
import logoCiti from "../assets/logoCiti.png";
import closeIcon from "../assets/close.png";
import {useForm, SubmitHandler} from 'react-hook-form'

const positionStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "29px"
}

const buttonStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#50E678',
    color: "#FFFFFF",
    borderRadius: '24px',
    cursor: 'pointer',
    padding: "12px 32px",
    width: "312px",
    height: "42px"
}

const inputStyle: React.CSSProperties = {
    border: "1px solid #101010",
    borderRadius: "0.5rem", 
    boxSizing: "border-box",
    width: "312px",
    height: "50px"
}

interface ModalEmailProps{
    onClose: ()=> void
}

interface Email{
    email:string
}

export default function SendEmail({onClose}: ModalEmailProps){
    const {register, formState: {errors}, handleSubmit} = useForm<Email>()

    const sendEMail: SubmitHandler<Email> = (data)=>{
        console.log('Email enviado.')
        console.log(data)
    }
return (
    <form onSubmit={handleSubmit(sendEMail)}>
    <div style={{...positionStyle,background:'white',display:'flex', justifyContent: 'center', alignItems:'center', width: "420px", height: "423px", borderRadius: "24px", padding: "48px"}}>
       
        {/* <div style={{display: "flex", justifyContent: "flex-end"}}>
            
        </div> */}

        <div style={{...positionStyle, alignItems: "center"}}>
            <div style={{display: "flex", gap: "10px"}}>
                <img src={logoCiti.src}/>
                <button style={{alignSelf: "flex-start"}} onClick={onClose}>
                    <img src={closeIcon.src}/>
                </button>
            </div>

            <div>
                <p><strong>Cadastro finalizado!</strong> Envie o<br/>comprovante para o <strong>tutor</strong></p>
            </div>
        </div>


        <div style={{display: "flex", flexDirection: "column", gap: "12px"}}>
            <label htmlFor='emailTutor' style={{fontWeight: "bold"}}>Email</label>
            <input type='email' id='emailTutor' placeholder=' Digite aqui...' style={inputStyle} 
            {...register('email', {required: 'Email do tutor é obrigatorio.'})}/>
        </div>

        <div>
            <button type="submit" style={buttonStyle}>
                Finalizar Cadastro
            </button>
        </div>

    </div>
    </form>
)}