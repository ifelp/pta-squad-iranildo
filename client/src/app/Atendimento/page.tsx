"use client";

import React, { useState } from "react";
import Card from "@/components/ui/card";
import { CardProps } from "@/components/ui/card";
import Filters from "@/components/Filters/filters";


const AtendimentoPage = () => {
  const [tab, setTab] = useState<'historico' | 'agendamento'>('historico');
  const [search, setSearch] = useState('');
  const [dateStart, setDateStart] = useState('');
  const [dateEnd, setDateEnd] = useState('');


  const atendimentosMock: CardProps[] = [
    {
      tab,
      tipoEvento: 'primeira-consulta',
      paciente: 'Luna',
      responsavel: 'João Alves',
      doutor: 'Dr. José Carlos',
      especie: 'gato',
      evento: 'Primeira Consulta',
      data: '18/02',
      horario: '13:00',
    },
    {
      tab,
      tipoEvento: 'vacinacao',
      paciente: 'Luna',
      responsavel: 'João Alves',
      doutor: 'Dr. José Carlos',
      especie: 'gato',
      evento: 'Vacinação',
      data: '18/02',
      horario: '13:00',
    },
    {
      tab,
      tipoEvento: 'retorno',
      paciente: 'Luna',
      responsavel: 'João Alves',
      doutor: 'Dr. José Carlos',
      especie: 'gato',
      evento: 'Retorno',
      data: '25/03',
      horario: '13:00',
    },
  ];

  const atendimentosFiltrados = atendimentosMock.filter((item) => {
  const nomeMatches = item.doutor.toLowerCase().includes(search.toLowerCase());
  const dataInicioValida = dateStart ? new Date(item.data) >= new Date(dateStart) : true;
  const dataFimValida = dateEnd ? new Date(item.data) <= new Date(dateEnd) : true;
  const tipoTabCorreto = item.tab === tab;

  return nomeMatches && dataInicioValida && dataFimValida && tipoTabCorreto;
});

  return (
    <div className="p-6 space-y-4 text-sm">
      {/* Título */}
      <h1 className="text-3xl font-bold text-gray-800">Atendimento</h1>

      {/* Filtros */}
      <Filters
        onSearch={setSearch}
      />

      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Tabs Histórico/Agendamento */}
        <div className="flex gap-2">
            <button
            className={`px-4 py-2 rounded-full border text-sm ${tab === 'historico' ? 'bg-gray-300 font-bold' : ''}`}
            onClick={() => setTab('historico')}
            >
            Histórico
            </button>
            <button
            className={`px-4 py-2 rounded-full border text-sm ${tab === 'agendamento' ? 'bg-gray-300 font-bold' : ''}`}
            onClick={() => setTab('agendamento')}
            >
            Agendamento
            </button>
        </div>

        {/* Inputs de data à direita */}
        <div className="flex gap-2">
            <input
            type="date"
            value={dateStart}
            onChange={(e) => setDateStart(e.target.value)}
            className="border px-3 py-1 rounded text-sm"
            />
            <input
            type="date"
            value={dateEnd}
            onChange={(e) => setDateEnd(e.target.value)}
            className="border px-3 py-1 rounded text-sm"
            />
        </div>
        </div>


      {/* Grid de Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {atendimentosFiltrados.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>

      {/* Botão Nova Consulta */}
      <div className="flex justify-end">
        <button className="bg-green-500 text-white px-4 py-2 rounded-full text-sm hover:bg-green-600 transition">
          Nova Consulta
        </button>
      </div>
    </div>
  );
};

export default AtendimentoPage;