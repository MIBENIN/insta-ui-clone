const InputField = ({ type, id, placeholder, label }) => {
  return (
    <div className="form-floating mb-2">
      <input
        type={type}
        className="form-control"
        id={id}
        placeholder={placeholder}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default InputField;
