import { ReactElement } from "react";
import { Outlet } from "react-router-dom";
import * as React from "react";
import { FileUploader } from "../uploader/file-uploader";
import { Header } from "../commons/header";
import { DataTable } from "../table/data-table";
import { columns } from "../table/colums";
import { FileApi } from "@/hooks/useFileApi";
import { useFileContext, FileActionType } from "@/hooks/useFileContext";

export function Layout(): ReactElement {
  const { state, dispatch } = useFileContext();

  const api = new FileApi();

  const fetchFileList = async () => {
    await api.getFileList().then((response) => {
      dispatch({
        type: FileActionType.updateFileList,
        payload: { fileList: response.data },
      });
    });
  };

  React.useEffect(() => {
    fetchFileList();
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
        <DataTable columns={columns} data={state.fileList} />
        <Outlet context={[state.fileList]} />
      </main>
    </>
  );
}
