import { ReactNode } from "react";

enum FileActionType {}

type ReducerAction<T, P> = {
  type: T;
  payload?: Partial<P>;
};

type Status = "success" | "fail";

type FileContextState = {
  isLoading: boolean;
  file: File | null;
  fileList: FileUploadedRecord[] | null;
};

type FileAction = ReducerAction<FileActionType, Partial<FileContextState>>;

type FileDispatch = ({ type, payload }: FileAction) => void;

type FileContextType = {
  state: FileContextState;
  dispatch: FileDispatch;
};

type FileProviderProps = { children: ReactNode };

type CreateFile = {
  formData: FormData;
};

type FileUploadedRecord = CreateFile & {
  created_at: string;
};

export type {
  FileActionType,
  FileContextState,
  FileAction,
  FileDispatch,
  FileContextType,
  FileProviderProps,
  CreateFile,
  FileUploadedRecord,
};
