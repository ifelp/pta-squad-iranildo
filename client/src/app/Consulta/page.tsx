import { Suspense } from "react";
import DetalhesConsulta from "@/components/Consultation/page";

export default function Consultas(){
    return (
    <Suspense fallback={<div>Carregando formulário…</div>}>
      <DetalhesConsulta/>
    </Suspense>
  );
}