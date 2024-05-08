"use client";

import { ColumnDef } from "@tanstack/react-table";

export type UploadedFile = {
  name: string;
  date: string;
};

export const columns: ColumnDef<UploadedFile>[] = [
  {
    accessorKey: "name",
    header: "File name",
  },
  {
    accessorKey: "date",
    header: "Uploaded at",
  },
];
