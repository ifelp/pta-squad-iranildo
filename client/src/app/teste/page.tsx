// pages/teste.tsx
import React from 'react';
import Card from '@/components/ui/card'; // ajuste esse caminho se necessário

export default function PaginaDeTeste() {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <Card
        tab="historico"
        tipoEvento="vacinacao"
        data="01/06"
        horario="10:00"
        paciente="Bolinha"
        responsavel="Maria"
        doutor="Dra. Carla"
        especie="coelho"
        evento="Vacinação"
      />
    </div>
  );
}
