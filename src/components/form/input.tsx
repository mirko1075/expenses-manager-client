import * as React from "react";

interface Props {
  name: string;
  label: string;
  placeholder?: string;
  value: any;
  onChange: (fieldName: string, value: string) => void;
  error?: string;
}

export const Input: React.FunctionComponent<Props> = (props) => {
  console.log("props", props);
  console.log("props.value", props.value);
  return (
    <div className={formatWrapperClass(props)}>
      <label htmlFor={props.name}>{props.label}</label>
      <div className="field">
        <input
          type={
            props.name === "dateOperation"
              ? "date"
              : props.name === "amount"
              ? "number"
              : "text"
          }
          name={props.name}
          className="form-control"
          placeholder={props.placeholder}
          value={
            props.value
              ? props.name === "dateOperation"
                ? new Date(props.value)
                : props.value
              : ""
          }
          onChange={onChangeInput(props)}
        />
      </div>
      <div className="help-block">{props.error}</div>
    </div>
  );
};

const formatWrapperClass = (props: Props) => {
  const wrapperClass = "form-group";

  return props.error ? `${wrapperClass} has-error` : wrapperClass;
};

const onChangeInput =
  (props: Props) => (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange(e.target.name, e.target.value);
  };
