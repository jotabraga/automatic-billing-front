import { ReactElement } from "react";
import { Outlet } from "react-router-dom";
import * as React from "react";
import { FileUploader } from "../uploader/file-uploader";
import { Header } from "../commons/header";
import { DataTable } from "../table/data-table";
import { columns } from "../table/colums";
import { FileApi } from "@/hooks/useFileApi";
import { FileUploadedRecord } from "@/types";

export function Layout(): ReactElement {
  // const [state, dispatch] = useFileContext();
  const [filesList, setFilesList] = React.useState<FileUploadedRecord[] | null>(
    []
  );

  const api = new FileApi();

  React.useEffect(() => {
    api
      .getFileList()
      .then((response) => {
        setFilesList(response.data);
      })
      .catch((error) => console.error(error.message));
  }, []);

  return (
    <>
      <main className="p-6 flex flex-col gap-8 justify-center items-center h-screen">
        <a href="./" data-framer-page-link-current="true">
          <div
            className="fixed top-10 left-10"
            data-framer-background-image-wrapper="true"
          >
            <img
              className="h-10"
              decoding="async"
              src="https://framerusercontent.com/images/f0btmN2GtVDhwuoOUM5xAjorM.png"
              alt=""
            />
          </div>
        </a>
        <Header />

        <FileUploader />
        <DataTable columns={columns} data={filesList} />
        <Outlet context={[filesList, setFilesList]} />
      </main>
    </>
  );
}
