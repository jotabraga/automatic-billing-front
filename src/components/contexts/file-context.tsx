import { useReducer, useContext, createContext } from "react";

type FileContextState = {
  isLoading: boolean;
  file: File | null;
  fileList: Partial<FileContextState> | null;
};

const FileContextInitialValues: FileContextState = {
  file: {} as File,
  isLoading: false,
  fileList: [] as Partial<FileContextState>,
};

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

const CountContext = createContext({});

export function useCount() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return { state, dispatch };
}

export function CountProvider({ children }) {
  const countData = useCount();
  return (
    <CountContext.Provider value={countData}>{children}</CountContext.Provider>
  );
}

export function useCountContext() {
  return useContext(CountContext);
}

// import { ReactNode, createContext, useContext, useReducer } from "react";
// import { FileUploadedRecord } from "@/types";

// enum FileActionType {
//   updateFileUploadList = "UPDATE_FILE_UPLOAD_LIST",
//   updateFile = "UPDATE_FILE",
// }

// type ReducerAction<T, P> = {
//   type: T;
//   payload?: Partial<P>;
// };

// type FileContextState = {
//   isLoading: boolean;
//   file: File | null;
//   fileList: FileUploadedRecord[] | Partial<FileContextState> | null; // & {} You can add more information about the challenge inside this type
// };

// type FileAction = ReducerAction<FileActionType, Partial<FileContextState>>;

// type FileDispatch = ({ type, payload }: FileAction) => void;

// type FileContextType = {
//   state: FileContextState;
//   dispatch: FileDispatch;
// };

// type FileProviderProps = { children: ReactNode };

// export const FileContextInitialValues: FileContextState = {
//   file: {} as File,
//   isLoading: false,
//   fileList: [],
// };

// const FileContext = createContext({} as FileContextType);

// const FileReducer = (
//   state: FileContextState = FileContextInitialValues,
//   action: FileAction
// ): FileContextState => {
//   switch (action.type) {
//     case FileActionType.updateFileUploadList: {
//       return {
//         ...state,
//         fileList: action.payload || state.fileList,
//       };
//     }
//     default: {
//       throw new Error(`Unhandled action type: ${action.type}`);
//     }
//   }
// };

// export const FileProvider = ({ children }: FileProviderProps) => {
//   const [state, dispatch] = useReducer(
//     FileReducer,
//     FileContextInitialValues as FileContextState
//   );

//   return (
//     <FileContext.Provider value={{ state, dispatch }}>
//       {children}
//     </FileContext.Provider>
//   );
// };

// export const useFileContext = () => {
//   const context = useContext(FileContext);

//   if (context === undefined)
//     throw new Error("useFileContext must be used within a FileProvider");

//   return context;
// };
