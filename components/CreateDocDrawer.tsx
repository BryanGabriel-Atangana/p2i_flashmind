"use client";
import * as React from "react";
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import ColorGrid from "./ColorGrid";

const colors = [];

export function DrawerDemo() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Ajouter un document</DrawerTitle>
            <DrawerDescription>
              Tips 💡 : Les documents sont important pour organiser vos
              flashcards
            </DrawerDescription>
          </DrawerHeader>
          <div className="px-4 pb-0">
            <label htmlFor="dotTtitle"></label>
            <input
              name="docTitle"
              type="text"
              placeholder="Nom du document"
              className="w-full"
            />
          </div>
          <div>
            {/* Colors */}
            <ColorGrid />
          </div>

          <DrawerFooter>
            <Button>Ajouter</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
