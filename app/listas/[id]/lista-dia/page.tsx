"use client";
import GridContent from "@/app/_components/GridContent";
import Header from "@/app/_components/Header";

import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { SquarePlus, SlidersHorizontal, Check } from "lucide-react";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import { dados } from "@/app/_data/dados";
import TableStudents from "@/app/_components/TableStudents";
import { cn } from "@/lib/utils";
export default function ListaDia() {
  const [open, setOpen] = React.useState(false);

  const [openCb, setOpenCb] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <GridContent>
      <Header />
      <p>Adicione seu nome:</p>
      <Button
        className="flex items-center text-xl font-semibold justify-between px-8 py-6 bg-green-600"
        onClick={() => setOpen(true)}
      >
        Adicionar
        <SquarePlus />
      </Button>
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Instituições:</h2>
        <Popover open={openCb} onOpenChange={setOpenCb}>
          <PopoverTrigger asChild>
            <Button
              variant="ghost"
              role="combobox"
              aria-expanded={open}
            >
              <SlidersHorizontal />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command>
              
              <CommandList>
                <CommandEmpty>Nenhuma instituição encontrada.</CommandEmpty>
                <CommandGroup>
                  {dados.intituicoes.map((intituicoes) => (
                    <CommandItem
                      key={intituicoes.id}
                      value={intituicoes.name}
                      onSelect={(currentValue) => {
                        setValue(currentValue === value ? "" : currentValue);
                        setOpen(false);
                      }}
                    >
                      {intituicoes.name}
                      <Check
                        className={cn(
                          "ml-auto",
                          value === intituicoes.name
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
        
      </div>

      {
        value === "" ? (
          dados.intituicoes.map((intituicao) => (
            <div key={intituicao.id} className="flex flex-col justify-between">
              <h2 className="text-lg font-semibold">{intituicao.name}</h2>
              <TableStudents name={intituicao.name} />
            </div>
          ))
        ): (
          <div className="flex flex-col justify-between">
              <h2 className="text-lg font-semibold">{value}</h2>
              <TableStudents name={value} />
            </div>
        )

        
      
      }

      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Adicionar nome na lista</AlertDialogTitle>
            <AlertDialogDescription>
              Ao adicionar o nome na lista você ajuda o motorista, comição e
              demais :)
            </AlertDialogDescription>
          </AlertDialogHeader>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Nome</Label>
                <Input id="name" placeholder="Seu nome" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">Instituição</Label>
                <Select>
                  <SelectTrigger id="instituicao">
                    <SelectValue placeholder="Selecionar" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    {dados.intituicoes.map((intituicao) => (
                      <SelectItem key={intituicao.id} value={intituicao.id}>
                        {intituicao.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Label htmlFor="framework">Horário</Label>
                <Select>
                  <SelectTrigger id="horario">
                    <SelectValue placeholder="Selecionar" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    {dados.horarios.map((horarios) => (
                      <SelectItem key={horarios.id} value={horarios.id}>
                        {horarios.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </form>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction>Continuar</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </GridContent>
  );
}
