import Link from "next/link";
import GridContent from "./_components/GridContent";

export default function Home() {
  return (
    <GridContent>
      <p>Adicione seu nome:</p>
      <Link href="/listas/123/lista-dia">add</Link>
    </GridContent>
  );
}
