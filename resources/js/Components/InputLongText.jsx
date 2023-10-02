import propTypes from "prop-types";

export default function InputLongText(props) {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div className="mt-1 mb-3">
      <label className="block mb-2 form-label-md">{props.label}</label>
      <textarea
        className="textarea-md block w-full border rounded-lg cursor-pointer  focus:outline-none"
        cols="40"
        rows="10"
        id={props.id}
        type={props.type}
        defaultValue={props.initialValue}
        placeholder={props.placeholder}
        onChange={(e) => {
          props.handleOnChange(e.target.value);
        }}
        required={props.required}
      />
    </div>
  );
}
InputLongText.defaultProps = {
  required: false,
  initialValue: undefined,
};
InputLongText.propTypes = {
  label: propTypes.string,
  id: propTypes.string,
  type: propTypes.oneOf(["text", "number", "tel", "file", "password"]),
  placeholder: propTypes.string,
  required: propTypes.bool,
};
