import { ChangeEvent, useState } from "react";
import { FileApi } from "@/hooks/useFileApi";

const FileUploader = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: any) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileUpload = () => {
    const formData = new FormData();
    formData.append("file", selectedFile);

    const api = new FileApi();

    const headers = {
      "Content-Type": "multipart/form-data",
    };

    api
      .uploadFile(formData, headers)
      .then((response) => {
        // Tratar a resposta do servidor, se necessário
        console.log("Arquivo enviado com sucesso:", response.data);
      })
      .catch((error: any) => {
        // Tratar erros de requisição, se necessário
        console.error("Erro ao enviar arquivo:", error);
      });
  };

  return (
    <div className="flex flex-col gap-6">
      <div>
        <label htmlFor="file" className="sr-only">
          Choose a file
        </label>
        <input
          id="file"
          type="file"
          accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel,text/csv"
          onChange={handleFileChange}
        />
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
          className="rounded-lg bg-green-800 text-white px-4 py-2 border-none font-semibold"
        >
          Upload the file
        </button>
      )}
    </div>
  );
};

export { FileUploader };
