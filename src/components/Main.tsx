import { useState } from "react";
import { ResponseObjectType } from "../api/service";
import { ResultContext } from "./Results";
import Form from "./Form";
import MatchResult from "./MatchResult";

function Main() {
  const [responseObject, setResponseObject] =
    useState<ResponseObjectType | null>(null);

  return (
    <main className="bg-white font-kanit min-h-screen p-4">
      <div className="lg:w-2/4 md:w-3/4 mx-auto 2xl:w-2/5">
        <h1 className="font-bold text-2xl text-torch-red-500">
          Love Calculator
        </h1>
        <ResultContext.Provider value={{ responseObject, setResponseObject }}>
          <Form />
          <MatchResult />
        </ResultContext.Provider>
      </div>
    </main>
  );
}

export default Main;
