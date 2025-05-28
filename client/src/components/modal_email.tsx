'use client'
import React, { useState } from 'react';
import logoCiti from "../assets/logoCiti.png";
import closeIcon from "../assets/close.png";

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

export default function SendEmail(){
return (
    <div style={{...positionStyle, width: "420px", height: "423px", borderRadius: "24px", padding: "48px"}}>
       
        {/* <div style={{display: "flex", justifyContent: "flex-end"}}>
            
        </div> */}

        <div style={{...positionStyle, alignItems: "center"}}>
            <div style={{display: "flex", gap: "10px"}}>
                <img src={logoCiti.src}/>
                <button style={{alignSelf: "flex-start"}}>
                    <img src={closeIcon.src}/>
                </button>
            </div>

            <div>
                <p><strong>Cadastro finalizado!</strong> Envie o<br/>comprovante para o <strong>tutor</strong></p>
            </div>
        </div>



        <div style={{display: "flex", flexDirection: "column", gap: "12px"}}>
            <label htmlFor='emailTutor' style={{fontWeight: "bold"}}>Email</label>
            <input type='email' id='emailTutor' name='email_tutor' placeholder=' Digite aqui...' style={inputStyle}/>
        </div>

        <div>
            <button type="submit" style={buttonStyle}>
                Finalizar Cadastro
            </button>
        </div>

    </div>
)}