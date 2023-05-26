import { useContext, useState } from "react";
import { getPercentage, ResponseObjectType } from "../api/service";
import { ResultContext, ResultContextProps } from "./Results";

function Form() {
  const [inputs, setInputs] = useState({} as InputTypes);
  const { setResponseObject } = useContext(ResultContext) as ResultContextProps;

  return (
    <form noValidate onSubmit={handleSubmit}>
      <label className="text-gun-powder-500" htmlFor="first-name">
        First Name
        <span aria-label="required" className="text-torch-red-500">
          *
        </span>
      </label>
      <input
        aria-placeholder="Enter your name or partner's name eg (Jack)"
        autoComplete="off"
        className="block border border-gun-powder-500 input p-2 rounded w-full"
        id="first-name"
        name="fname"
        onBlur={() => handleBlur(0)}
        onChange={handleChange}
        onFocus={() => handleFocus(0)}
        pattern="([a-zA-Z]|\D){3,26}"
        placeholder="Enter your name or partner's name eg (Jack)"
        required
        type="text"
        value={inputs.fname || ""}
      />
      <p aria-live="polite" className="hints mb-2 text-gun-powder-500"></p>
      <label className="text-gun-powder-500" htmlFor="second-name">
        Second Name
        <span aria-label="required" className="text-torch-red-500">
          *
        </span>
      </label>
      <input
        aria-placeholder="Enter your name or partner's name eg (Rose)"
        autoComplete="off"
        className="block border border-gun-powder-500 input p-2 rounded w-full"
        id="second-name"
        name="sname"
        onBlur={() => handleBlur(1)}
        onChange={handleChange}
        onFocus={() => handleFocus(1)}
        pattern="([a-zA-Z]|\D){3,26}"
        placeholder="Enter your name or partner's name eg (Rose)"
        required
        type="text"
        value={inputs.sname || ""}
      />
      <p aria-live="polite" className="hints mb-2 text-gun-powder-500"></p>
      <div className="flex justify-end">
        <button
          className="bg-torch-red-500 px-6 py-1 rounded text-white"
          type="submit"
        >
          See result
        </button>
      </div>
    </form>
  );

  function handleBlur(input: number): void {
    const hints = document.querySelectorAll<HTMLParagraphElement>(".hints");
    if (input === 0) {
      hints[0].textContent = "";
    } else {
      hints[1].textContent = "";
    }
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const name = event.target.name;
    const value = event.target.value;

    setInputs((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  function handleFocus(input: number): void {
    const hints = document.querySelectorAll<HTMLParagraphElement>(".hints");
    if (input === 0) {
      hints[0].textContent = "Name should be at least 3 characters long!!";
    } else {
      hints[1].textContent = "Name should be at least 3 characters long!!";
    }
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const input = document.querySelectorAll<HTMLInputElement>(".input");
    const hints = document.querySelectorAll<HTMLParagraphElement>(".hints");
    for (let i = 0; i < input.length; i++) {
      if (input[0].validity.valid && input[1].validity.valid) {
        getPercentage<ResponseObjectType>(inputs.fname, inputs.sname).then(
          (data) => setResponseObject(data)
        );
        setInputs({
          fname: "",
          sname: "",
        });
      } else if (input[i].validity.patternMismatch) {
        hints[i].textContent =
          "Name cannot be empty spaces, or contain numbers!!";
      } else if (input[i].validity.valueMissing) {
        hints[i].textContent = "Please type in a name!!";
      }
    }
  }

  interface InputTypes {
    fname: string;
    sname: string;
  }
}

export default Form;
