import { Suspense } from "react";
import RegisterForm from "@/components/RegisterPage/page";

export default function RegisterPage(){
    return (
    <Suspense fallback={<div>Carregando formulário…</div>}>
      <RegisterForm/>
    </Suspense>
  );
}