"use client";

import { useRouter } from "next/navigation";
import { X } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { PageProps } from "./page";

export default function RetencionTable(props: PageProps) {
  const router = useRouter();
  return (
    <section className="grid gap-4">
      <div className="grid gap-2">
        <h1 className="font-semibold leading-none tracking-tight">
          Elements of the table
        </h1>
        <div className="rounded-lg border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Column 1</TableHead>
                <TableHead>Column 2</TableHead>
                <TableHead className="text-right">Column 3</TableHead>
                <TableHead className="text-right">Column 4</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {props.elements.map((element) => (
                <TableRow
                  key={element.id}
                  onMouseDown={() =>
                    router.push(`/retencion/${element.id}/editar`)
                  }
                  className="cursor-pointer"
                >
                  <TableCell className="py-2">
                    {element.numero}
                  </TableCell>
                  <TableCell className="py-2">
                    {element.fecha.toISOString()}
                  </TableCell>
                  <TableCell className="py-2 text-right">
                    {String(element.monto)}
                  </TableCell>
                  <TableCell className="py-2 text-right">
                    <Button
                      size="icon"
                      variant="ghost"
                      className="size-10"
                      onClick={(e) => e.stopPropagation()}
                      title="Eliminar comprobante de retención"
                    >
                      <X className="size-5 text-red-500" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
              {props.elements.length === 0 && (
                <TableRow>
                  <TableCell colSpan={4} className="text-center">
                    No hay elementos aquí
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
}
