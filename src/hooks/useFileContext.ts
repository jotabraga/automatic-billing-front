import { FileContextState, FileUploadedRecord } from "@/types";
import { createContext, useContext, useReducer } from "react";

export enum FileActionType {
  updateFileList = "UPDATE_FILE_UPLOAD_LIST",
  addRecordToFileList = "UPDATE_FILE",
}

type ReducerAction<T, P> = {
  type: T;
  payload: Partial<P>;
};

type FileAction = ReducerAction<FileActionType, Partial<FileContextState>>;

export const FileContextInitialValues: FileContextState = {
  file: {} as File,
  isLoading: false,
  fileList: [] as FileUploadedRecord[],
};

export function reducer(state: FileContextState, action: FileAction) {
  switch (action.type) {
    case FileActionType.updateFileList:
      return { ...state, fileList: action.payload.fileList ?? state.fileList };

    case FileActionType.addRecordToFileList:
      return { ...state };
    default:
      return state;
  }
}

export function useFile() {
  const [state, dispatch] = useReducer(reducer, FileContextInitialValues);
  return { state, dispatch };
}

export const FileContext = createContext({});

export const useFileContext = () => useContext(FileContext);
