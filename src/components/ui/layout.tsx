import { ReactElement } from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import * as React from "react";
import { FileUploader } from "./file-uploader";
import { Header } from "./header";
import { DataTable } from "./data-table";
import { columns } from "./colums";

type ContextType = { user: { name: string } | null };

export function Layout(): ReactElement {
  const [user, setUser] = React.useState<{ name: string } | null>(null);

  function useUser() {
    return useOutletContext<ContextType>();
  }

  const mockedData = [{ name: "cobranca.csv", date: "08/05/2024" }];

  return (
    <>
      <main className="p-6 flex flex-col gap-8 justify-center items-center h-screen">
        <a href="./" data-framer-page-link-current="true">
          <div data-framer-background-image-wrapper="true">
            <img
              decoding="async"
              src="https://framerusercontent.com/images/f0btmN2GtVDhwuoOUM5xAjorM.png"
              alt=""
            />
          </div>
        </a>
        <Header />

        <FileUploader />
        <DataTable columns={columns} data={mockedData} />
        <Outlet context={{ user } satisfies ContextType} />
      </main>
    </>
  );
}
