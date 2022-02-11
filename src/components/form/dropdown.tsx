import * as React from "react";
import Categories from "../../models/categories";

interface Props {
  label: string;
  name: string;
  value: any;
  options: Array<any>;
  onChange: (fieldName: string, value: string) => void;
  error?: string;
}

export const Dropdown: React.FunctionComponent<Props> = (props) => {
  console.log("props", props);
  return (
    <div className={formatWrapperClass(props)}>
      <label htmlFor={props.name}>{props.label}</label>
      <select
        value={props?.value?._id}
        className="form-control"
        name={props.name}
        id={props.name}
        onChange={() => onChangeInput(props)}
      >
        {props?.options?.map((option) => {
          return (
            <option key={option._id} id={option._id} value={option._id}>
              {option.categoryDescription}
            </option>
          );
        })}
      </select>
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
