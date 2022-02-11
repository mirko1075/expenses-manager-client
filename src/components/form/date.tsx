import * as React from "react";

interface Props {
  name: string;
  label: string;
  placeholder?: string;
  value: string | undefined;
  onChange: (fieldName: string, value: string) => void;
  error?: string;
}

export const DateInput: React.FunctionComponent<Props> = (props) => {
  console.log("props", props);
  console.log("props.value", typeof props.value);
  const dateStr = props?.value?.slice(0, props.value.indexOf("("));
  console.log("dateStr", dateStr);
  //sconst date = dateStr && new Date(dateStr, "YYYY/DD/MM");
  return (
    <div className={formatWrapperClass(props)}>
      <label htmlFor={props.name}>{props.label}</label>
      <div className="field">
        <input
          type="date"
          name={props.name}
          className="form-control"
          value={dateStr}
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
