import { ErrorMessage, Field } from "formik";

export const TextField = ({ label, name, type }) => {
  return (
    <div className="mb-2">
      <label htmlFor={name}>{label}</label>
      <div className="my-2 relative">
        <Field
          className="p-3 w-full outline-none bg-slate-100 border border-slate-300 focus:border-slate-500"
          id={name}
          name={name}
          type={type}
        />
        <p className="absolute -bottom-4 text-red-600 text-xs">
          <ErrorMessage name={name} />
        </p>
      </div>
    </div>
  );
};

export const TextArea = ({ label, name, ...rest }) => {
  return (
    <div className="mb-2">
      <label htmlFor={name}>{label}</label>
      <div className="my-2 relative">
        <Field
          as="textarea"
          rows="5"
          className="p-3 w-full outline-none bg-slate-100 border border-slate-300 focus:border-slate-500"
          id={name}
          name={name}
          {...rest}
        />
        <p className="absolute -bottom-4 text-red-600 text-xs">
          <ErrorMessage name={name} />
        </p>
      </div>
    </div>
  );
};

export const SelectField = ({ label, name, type, placeholder, options }) => {
  return (
    <div className="mb-2">
      <label htmlFor={name}>{label}</label>
      <div className="my-2 relative">
        <Field
          as="select"
          name={name}
          id={name}
          className="p-3 w-full outline-none bg-slate-100 border border-slate-300 focus:border-slate-500"
        >
          <option
            value=""
            className="text-slate-400"
            defaultValue={true}
            hidden
          >
            {placeholder}
          </option>
          {options.map((option, i) => (
            <option key={i} value={option}>
              {option}
            </option>
          ))}
        </Field>
        <p className="absolute -bottom-4 text-red-600 text-xs">
          <ErrorMessage name={name} />
        </p>
      </div>
    </div>
  );
};
