import axios from "axios";
import { CreateFile } from "@/types";

const api = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_API_BASE_URL,
});

export class FileApi {
  async getFileList() {
    return await api.get("/file-list");
  }

  async uploadFile(body: any, headers: Record<string, string> = {}) {
    const config = {
      headers: { ...headers },
    };
    return await api.post("/file-upload", body, config);
  }
}
