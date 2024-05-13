import axios from "axios";
import { CreateFile } from "@/types";

const api = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_API_BASE_URL,
});

export class FileApi {
  async getFileList() {
    return await api.get("/file-list");
  }

  async createFile(body: CreateFile) {
    return await api.post("/file-create", body);
  }
}
