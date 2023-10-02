import { useForm } from "@inertiajs/react";
import propTypes from "prop-types";
import { useEffect, useState } from "react";

export default function InputSelect(props) {
  const [choice, setChoice] = useState(props.initialValue);
  const options = [];
  props.arrData.forEach((data, index) => {
    options.push(
      <option key={index} value={data["id"]}>
        {data["name"]}
      </option>
    );
  });

  return (
    <div className="mt-1 mb-3">
      <label className="block mb-2 form-label-md">{props.label}</label>
      <select
        className={`${
          props.disabled ? "form-input-disable" : ""
        } form-input-md block w-full border rounded-lg cursor-pointer  focus:outline-none bg-gray-600`}
        id={props.id}
        onChange={(e) => {
          props.handleOnChange(e.target.value);
          setChoice(e.target.value);
        }}
        value={choice}
        disabled={props.disabled}
        required={props.required}
      >
        <option key={-1} value={-1}>
          Choose {props.label}
        </option>
        {options}
      </select>
    </div>
  );
}
InputSelect.defaultProps = {
  required: false,
  disabled: false,
  initialValue: -1,
};
InputSelect.propTypes = {
  label: propTypes.string,
  id: propTypes.string,
  placeholder: propTypes.string,
  required: propTypes.bool,
  disabled: propTypes.bool,
};
