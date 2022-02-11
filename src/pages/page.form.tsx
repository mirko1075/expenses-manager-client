import * as React from "react";
import Categories from "../models/categories";
import Expense from "../models/expense";
import { ExpenseForm } from "./expensesForm";

interface IProps {
  expense: Expense;
  categories: Array<Categories>;
  onChange: (fieldName: string, value: string) => void;
  onSave: () => void;
}

export const ExpensePage: React.FunctionComponent<IProps> = (props: IProps) => {
  console.log("props", props);
  return (
    <ExpenseForm
      expense={props.expense}
      onChange={props.onChange}
      onSave={props.onSave}
      categories={props.categories}
    />
  );
};
