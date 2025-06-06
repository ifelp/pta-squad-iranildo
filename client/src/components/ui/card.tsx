import React from 'react';
import type { StaticImageData } from 'next/image'; 
import Image from 'next/image';

import alarmImg from '../../assets/alarm.png';
import gatoImg from '../../assets/gato.png';
import cachorroImg from '../../assets/cachorro.png';
import ovelhaImg from '../../assets/ovelha.png';
import cavaloImg from '../../assets/cavalo.png';
import porcoImg from '../../assets/porco.png';
import vacaImg from '../../assets/vaca.png';

type TabType = 'historico' | 'agendamento';
type EventoType = 'primeira-consulta' | 'retorno' | 'check-up' | 'vacinacao';

interface PetData{
  nome: string,
  nomeTutor: string,
  especie: string
}

interface CardProps {
  tab: TabType;
  tipoConsulta: string,
  paciente: PetData,
  medicoResponsavel: string,
  data: string,
  hora: string,
}

function getBackgroundColor(tab: TabType, tipoEvento?: string): string {
  if (tab === 'agendamento') return '#F0F0F0';

  const historicoCores: Record<string, string> = {
    'Primeira Consulta': '#BFB5FF',
    'Retorno': 'rgba(255, 100, 25, 0.6)',
    'Check-up': '#9CFF95',
    'Vacinação': '#AAE1FF',
  };

  return tipoEvento ? historicoCores[tipoEvento] : '#FFFFFF';
}

function noYear(date: string){
  const [dia, mes, ano] = date.split('/')

  return (dia + '/' + mes)
}

function getEspecieImage(especie: string): StaticImageData {
  const especieMap: Record<string, StaticImageData> = {
    gato: gatoImg,
    cachorro: cachorroImg,
    ovelha: ovelhaImg,
    cavalo: cavaloImg,
    porco: porcoImg,
    vaca: vacaImg,
  };

  return especieMap[especie.toLowerCase()] || gatoImg;
}

function Card({
  tab,
  data,
  hora,
  paciente,
  medicoResponsavel,
  tipoConsulta,
}: CardProps) {
  const bgColor = getBackgroundColor(tab, tipoConsulta);
  const especieImg = getEspecieImage(paciente.especie);
  const novadata = noYear(data)

  return (
    <div className="flex justify-center font-sf py-8">
      <div
        className="relative flex items-center rounded-xl p-6 w-[435px] h-auto"
        style={{ backgroundColor: bgColor }}
      >
        {/* Caixa de data e horário à esquerda */}
        <div className="absolute left-[20px] top-1/2 transform -translate-y-1/2 bg-white rounded-xl px-3 py-2 text-sm text-black font-source flex flex-col items-center gap-1 w-50 shadow-md">
          <Image src={alarmImg} alt="Alarm" width={16} height={16} />
          <span className="font-bold text-center">{novadata}</span>
          <span className="font-bold text-center">{hora}</span>
        </div>

        {/* Conteúdo principal */}
        <div className="flex flex-1 justify-between pl-11 items-center w-full min-h-[80px]">
          {/* Paciente/Responsável + Doutor centralizados verticalmente */}
           <div className="ml-10 flex items-center text-sm font-medium gap-1">
            <p className="text-black font-semibold text-base">{paciente.nome}</p>
            <span>/</span>
            <p>{paciente.nomeTutor}</p>
            <span>ㅤ</span>
            <p className="text-black">{medicoResponsavel}</p>
          </div>


          {/* Espécie e evento */}
          <div className="flex flex-col items-center">
            <Image src={especieImg} alt="Espécie" width={64} height={64} />
            <div className="bg-white rounded-full px-3 py-1 text-sm text-black font-source mt-1">
              {tipoConsulta}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export type { CardProps };
export default Card;