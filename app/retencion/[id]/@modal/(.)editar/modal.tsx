"use client";

import { useRouter } from "next/navigation";

import { Dialog, DialogContent, DialogTitle, DialogHeader, DialogDescription } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";

export function Modal(props: { children: React.ReactNode }) {
  const router = useRouter();

  const handleOpenChange = () => {
    router.back();
  };

  return (
    <Dialog defaultOpen open onOpenChange={handleOpenChange}>
      <DialogContent className="min-w-[70dvw]">
        <DialogHeader>
          <DialogTitle>Editar  </DialogTitle>
          <DialogDescription>
            ASdasdasd asdasdasd
          </DialogDescription>
        </DialogHeader>
        <Separator />
        {props.children}
      </DialogContent>
    </Dialog>
  );
}
