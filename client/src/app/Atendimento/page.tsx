"use client";

import { getConsultas} from "@/services/Consulta"
import React, { useState, useEffect } from "react";
import Card from "@/components/ui/card";
import Filters from "@/components/Filters/filters";
import Link from "next/link";

interface ConsultaData {
  id: string,
  tipoConsulta: string,
  medicoResponsavel: string,
  data: string,
  hora: string,
  paciente: PetData
}

interface PetData{
  nome: string,
  nomeTutor: string,
  especie: string
}

/* Ideia de código:

  importe api de services/api ✔️
  importe useEffect junto com o useState lá em cima ✔️

  faça uma interface com os dados que vão ser mostrados no card (inclua o id): ✔️

  interface CardData{✔️
    dado: tipo
    ...
  }

  dentro da página:

  faça um useState pra gerenciar o estado da variável que irá receber os dados do backend (ela precisa ser do tipo CardData[] (Um array do tipo CardData))✔️

  useEffect(()=>{
    async function getData(){
      const response = await api.get('/rota-do-backend')

      setCards(response.data)
      console.log('Chegou!')
    }
  })

  na parte onde os cards estão sendo renderizados, tem um atendimentosFiltrados.map, apenas substitua atendimentosFiltrados pela variável que está recebendo as consultas no backend

  após isso, substitua os nomes das variáveis dentro do map pelas as que você definiu na interface

  CardData.map((card, i)=> {
    <algumacoisa key={i} nome={card.nome} ...>
  })

*/ 


const AtendimentoPage = () => {
  const [tab, setTab] = useState<'historico' | 'agendamento'>('historico');
  const [search, setSearch] = useState('');
  const [dateStart, setDateStart] = useState('');
  const [dateEnd, setDateEnd] = useState('');
  const [consultas, setConsultas] = useState<ConsultaData[]>([]);

  useEffect(() => {
    const fetchConsultas = async () => {
      try {
        const data = await getConsultas();
        setConsultas(data);
        console.log(consultas)
      } catch (error) {
        setConsultas([]);
      }
    }

    fetchConsultas()
  })

  return (
    <div className="pt-6 px-32 space-y-4 text-sm gap-8">
      <div className="flex flex-col w-full h-[180px] gap-2">
        {/* Título */}
        <h1 className="text-5xl font-bold text-gray-800">Atendimento</h1>

        {/* Filtros */}
        <Filters
          onSearch={setSearch}
          />
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-3 h-[40px]">
        {/* Tabs Histórico/Agendamento */}
        <div className="flex gap-2 bg-[#F0F0F0] justify-center rounded-[12px] w-[243px] h-[48px]">
            <button
            className={`px-4 py-2 rounded-[12px] text-sm ${tab === 'historico' ? 'bg-white font-bold' : ''}`}
            onClick={() => setTab('historico')}
            >
            Agendamento
            </button>
            <button
            className={`px-4 py-2 rounded-[12px] text-sm ${tab === 'agendamento' ? 'bg-white font-bold' : ''}`}
            onClick={() => setTab('agendamento')}
            >
            Histórico
            </button>
        </div>

        {/* Inputs de data à direita */}
        <div className="flex gap-2 h-full">
            <input
            type="date"
            value={dateStart}
            onChange={(e) => setDateStart(e.target.value)}
            className="border px-3 py-1 rounded text-sm h-full"
            />
            <input
            type="date"
            value={dateEnd}
            onChange={(e) => setDateEnd(e.target.value)}
            className="border px-3 py-1 rounded text-sm h-full"
            />
        </div>
        </div>

      <div className="flex flex-wrap gap-12 w-full">
      {/* Grid de Cards */}
        {tab === 'agendamento' && 
        consultas.filter((value)=> {
          return new Date(value.data) < new Date()
        }).map((item, index) => (
          <Link href={`/Consulta/${item.id}`}>
          <Card tab={tab} key={index} {...item} />
          </Link>
        )) }
        {
        tab === 'historico' && 
        consultas.filter((value)=> {
          return new Date(value.data) > new Date()
        }).map((item, index) => (
          <Link href={`/Consulta/${item.id}`}>
          <Card tab={tab} key={index} {...item} />
          </Link>
        ))
        }
      </div>

      {/* Botão Nova Consulta */}
      <div className="flex justify-end">
        <Link href='/RegisterRender'>
        <button className="bg-green-500 w-[205px] h-[48px] text-white px-4 py-2 rounded-full text-sm hover:bg-green-600 transition">
          Nova Consulta
        </button>
        </Link>
      </div>
    </div>
  );
};

export default AtendimentoPage;