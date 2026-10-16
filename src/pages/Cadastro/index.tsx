import { useState } from "react";
import { Logotipo } from "../../components";
import CadastroPessoal from "./CadastroPessoal";
import CadastroEndereco from "./CadastroEndereco";

export default function Cadastro() {
  const [etapa, setEtapa] = useState<"pessoal" | "endereco">("pessoal");

  return (
    <>
      <Logotipo />
      {etapa === "pessoal" ? (
        <CadastroPessoal aoAvancar={() => setEtapa("endereco")} />
      ) : (
        <CadastroEndereco />
      )}
    </>
  );
}
