import { FileContextState, FileUploadedRecord } from "@/types";
import { createContext, useContext, useReducer } from "react";

enum FileActionType {
  updateFileUploadList = "UPDATE_FILE_UPLOAD_LIST",
  updateFile = "UPDATE_FILE",
}

type ReducerAction<T, P> = {
  type: T;
  payload?: Partial<P>;
};

type FileAction = ReducerAction<FileActionType, Partial<FileContextState>>;

export const FileContextInitialValues: FileContextState = {
  file: {} as File,
  isLoading: false,
  fileList: [] as FileUploadedRecord[],
};

export function reducer(state: FileContextState, action: FileAction) {
  switch (action.type) {
    case FileActionType.updateFile:
      return { ...state };
    case FileActionType.updateFileUploadList:
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

export function useCountContext() {
  return useContext(FileContext);
}
