import propTypes from "prop-types";

export default function FormTextInput(props) {
  return (
    <div className="mt-1 mb-3">
      <label className="block mb-2 form-label-md">{props.label}</label>
      <input
        className="form-input-md block w-full border rounded-lg cursor-pointer  focus:outline-none"
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        defaultValue={props.initialValue}
        onChange={(e) => {
          props.handleOnChange(e.target.value);
        }}
        required={props.required}
      />
    </div>
  );
}
FormTextInput.defaultProps = {
  required: false,
};
FormTextInput.propTypes = {
  label: propTypes.string,
  id: propTypes.string,
  type: propTypes.oneOf(["text", "number", "tel", "file", "password"]),
  placeholder: propTypes.string,
  required: propTypes.bool,
};
