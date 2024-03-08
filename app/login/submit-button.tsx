"use client";

import { useFormStatus } from "react-dom";
import { type ComponentProps } from "react";
import { motion } from "framer-motion";

type Props = ComponentProps<"button"> & {
  pendingText?: string;
};

export function SubmitButton({ children, pendingText, ...props }: Props) {
  const { pending, action } = useFormStatus();

  const isPending = pending && action === props.formAction;

  return (
    <motion.button whileHover={{ scale: 1.04 }}>
      <button {...props} type="submit" aria-disabled={pending}>
        {isPending ? pendingText : children}
      </button>
    </motion.button>
  );
}
