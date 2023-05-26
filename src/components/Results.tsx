import { SetStateAction, createContext } from "react";
import { ResponseObjectType } from "../api/service";

export interface ResultContextProps {
  responseObject: ResponseObjectType | null;
  setResponseObject: React.Dispatch<SetStateAction<ResponseObjectType | null>>;
}

export const ResultContext = createContext<ResultContextProps | null>(null);
