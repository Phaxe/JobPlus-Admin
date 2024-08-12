import React from "react";
function InputForm({
  labelName,
  inputPlaceholder,
  formik,
  name,
  inputType,
  astrix,
  inputClass,
  disabledInput,
  maxLength

}) {
  return (
    <div className={`${inputClass} flex flex-col relative mt-4`}>
      <label htmlFor={name} className="py-2 ">
        {labelName}
        <span className="text-red-500">{astrix}</span>
      </label>
      <input
      disabled={disabledInput}
        type={inputType}
        id={name}
        name={name}
        placeholder={inputPlaceholder}
        maxLength={maxLength}
        
        className={`border rounded  h-14 w-full px-2 `}
        required={true}
        value={formik.values[name]}
        onChange={formik.handleChange}
      />
      <span className="text-red-500 py-2">
        {formik.errors[name] ? <div>{formik.errors[name]}</div> : null}
      </span>
    </div>
  );
}

export default InputForm;
