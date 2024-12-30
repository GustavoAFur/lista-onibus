import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { dados } from "../_data/dados";

import { Trash2 } from "lucide-react";

export default function TableStudents({ name }: { name: string }) {
  // Filtra os dados pela instituição correspondente
  const filteredRota = dados.rota.filter((rota) => rota.nomeIntituicao === name);

  // Retorna vazio se não houver dados para exibir
  if (filteredRota.length === 0) {
    return <p className="text-center text-gray-500">Nenhum dado encontrado.</p>;
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>N°</TableHead>
          <TableHead className="w-[150px]">Nome</TableHead>
          <TableHead>Horário</TableHead>
          <TableHead className="text-center">Ação</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {filteredRota.map((rota, index) => (
          <TableRow key={index}>
            <TableCell>{index+1}</TableCell>
            <TableCell className="font-medium"> {rota.nomeAluno.substring(0, 15)}</TableCell>
            <TableCell>{rota.horario}</TableCell>
            <TableCell>
              {rota.idAluno === dados.userid && (
                <Trash2
                  className="cursor-pointer text-red-500 hover:text-red-700"
                  onClick={() => console.log("Excluir aluno:", rota.idAluno)}
                />
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
