import { FileContext, useFile } from "@/hooks/fileReducer";
import { ReactNode } from "react";

interface FileProviderProps {
  children: ReactNode;
}

export function FileProvider({ children }: FileProviderProps) {
  const fileData = useFile();
  return (
    <FileContext.Provider value={fileData}>{children}</FileContext.Provider>
  );
}
