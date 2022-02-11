import * as React from "react";
import Expense from "../models/expense";
import { Dropdown } from "../components/form/dropdown";
import { Input, Button } from "../components/form";
import Categories from "../models/categories";
import { DateInput } from "../components/form/date";

interface Props {
  expense: Expense;
  categories: Array<Categories>;
  onChange: (fieldName: string, value: string) => void;
  onSave: () => void;
}

export const ExpenseForm: React.FunctionComponent<Props> = (props) => {
  console.log("props", props);
  return (
    <form>
      <h1>Manage expense</h1>
      <Input
        name="shortDescription"
        label="Short Description"
        value={props.expense.shortDescription}
        onChange={props.onChange}
      />
      <Input
        name="description"
        label="Description"
        value={props.expense.description}
        onChange={props.onChange}
      />
      <Dropdown
        label={"Income / Expense"}
        name={"type"}
        value={props.expense.type}
        options={[
          { _id: "e", categoryDescription: "Expense" },
          { _id: "i", categoryDescription: "Income" },
        ]}
        onChange={props.onChange}
      />

      <Dropdown
        label={"Category"}
        name={"category"}
        value={props.expense.category}
        options={props.categories}
        onChange={props.onChange}
      />

      <Input
        name="source"
        label="Source"
        value={props.expense.source}
        onChange={props.onChange}
      />

      <DateInput
        name="dateOperation"
        label="Date of operation"
        value={props.expense.dateOperation?.toString()}
        onChange={props.onChange}
      />
      <Input
        name="amount"
        label="Amount"
        value={props.expense.amount.toString()}
        onChange={props.onChange}
      />

      <Button
        label="Save"
        className="btn btn-success mt-2"
        onClick={props.onSave}
      />
    </form>
  );
};
