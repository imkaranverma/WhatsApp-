import React from "react";
import { InputLabel as Label } from "@mui/material";
import { useFormContext, Controller } from "react-hook-form";

export interface LabelProps {
  name: string;
  className?: string;
  children?: React.ReactNode;
}

export default function InputLabel({ name, children }: LabelProps) {
  const { control } = useFormContext();

  return <Controller name={name} control={control} render={({ field, fieldState: {} }) => <Label {...field}>{children}</Label>} />;
}
