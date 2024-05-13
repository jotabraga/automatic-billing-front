"use client";

import { ColumnDef } from "@tanstack/react-table";

export type UploadedFile = {
  name: string;
  status: string;
  created_at: string;
};

export const columns: ColumnDef<UploadedFile>[] = [
  {
    accessorKey: "name",
    header: "File name",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "created_at",
    header: "Uploaded at",
  },
];
