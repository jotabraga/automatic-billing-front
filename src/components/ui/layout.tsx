import { ReactElement } from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import * as React from "react";
import { FileUploader } from "./file-uploader";
import { Header } from "./header";
import { Table, TableHeader } from "./table";

type ContextType = { user: { name: string } | null };

export function Layout(): ReactElement {
  const [user, setUser] = React.useState<{ name: string } | null>(null);

  function useUser() {
    return useOutletContext<ContextType>();
  }

  return (
    <>
      <main className="p-6 flex flex-col gap-8 justify-center items-center h-screen">
        <Header />
        <FileUploader />
        <Table />
        <TableHeader />
        <Outlet context={{ user } satisfies ContextType} />
      </main>
    </>
  );
}
