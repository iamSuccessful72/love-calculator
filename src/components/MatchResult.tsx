import { useContext } from "react";
import { ResultContext, ResultContextProps } from "./Results";

function MatchResult() {
  const { responseObject, setResponseObject } = useContext(
    ResultContext
  ) as ResultContextProps;

  return (
    <div>
      {responseObject ? (
        <>
          <h2 className="font-bold text-torch-red-500 text-xl">Match Result</h2>
          <p className="flex justify-between text-gun-powder-500">
            <span className="font-bold">First Name:</span>
            <span>
              {responseObject.fname.substring(0, 1).toUpperCase() +
                responseObject.fname.slice(1)}
            </span>
          </p>
          <p className="flex justify-between text-gun-powder-500">
            <span className="font-bold">Second Name:</span>
            <span>
              {responseObject.sname.substring(0, 1).toUpperCase() +
                responseObject.sname.slice(1)}
            </span>
          </p>
          <p className="flex justify-between text-gun-powder-500">
            <span className="font-bold">Percentage:</span>
            <span>{`${responseObject.percentage}%`}</span>
          </p>
          <p className="flex justify-between text-gun-powder-500">
            <span className="font-bold">Result:</span>
            <span>{responseObject.result}</span>
          </p>
          <button
            className="border border-gun-powder-500 mt-2 px-6 py-1 rounded text-gun-powder-500"
            onClick={() => setResponseObject(null)}
            type="button"
          >
            Clear result
          </button>
        </>
      ) : null}
    </div>
  );
}

export default MatchResult;
