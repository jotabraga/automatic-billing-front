import { useState } from "react";
import { FileApi } from "@/hooks/useFileApi";
import { FileActionType, useFileContext } from "@/hooks/useFileContext";

const FileUploader = () => {
  const { state, dispatch } = useFileContext();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: any) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleFileUpload = async () => {
    const formData = new FormData();
    formData.append("file", selectedFile as Blob);

    const api = new FileApi();
    const headers = {
      "Content-Type": "multipart/form-data",
    };

    const response = await api.uploadFile(formData, headers);
    let newList = [state.fileList];
    if (response.data) newList = [response.data, ...state.fileList];

    console.log(newList);
    dispatch({
      type: FileActionType.updateFileList,
      payload: { fileList: newList },
    });
  };

  return (
    <div className="flex flex-col gap-6">
      <div>
        <label htmlFor="file" className="sr-only">
          Choose a file
        </label>
        <input
          className="w-0.1 h-0.1 opacity-0 overflow-hidden absolute -z-1 inputfile cursor-pointer"
          id="file"
          type="file"
          accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel,text/csv"
          onChange={handleFileChange}
        />
        <label
          htmlFor="file"
          className="border-green-800 border text-center w-40 text-green-800 px-4 py-2 inline-block cursor-pointer rounded-lg font-semibold"
        >
          Choose a file
        </label>
      </div>
      {selectedFile && (
        <section>
          <p className="pb-6">File details:</p>
          <ul>
            <li>Name: {selectedFile.name}</li>
            <li>Type: {selectedFile.type}</li>
            <li>Size: {selectedFile.size} bytes</li>
          </ul>
        </section>
      )}

      {selectedFile && (
        <button
          onClick={handleFileUpload}
          className="rounded-lg bg-green-800 text-white px-4 py-2 border-none font-semibold w-40"
        >
          Upload the file
        </button>
      )}
    </div>
  );
};

export { FileUploader };
