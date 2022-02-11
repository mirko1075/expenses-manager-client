import React from "react";
import { Link } from "react-router-dom";
import Expenses from "../models/expense";
import BaseService from "../services/api.service";

function Del(Id?: string) {
  BaseService.delete("/expenses", {
    id: Id,
  }).then((rp: { Status: any; Messages: string; Exception: string }) => {
    if (rp.Status) {
      window.location.reload();
    } else {
      console.log("Messages: " + rp.Messages);
      console.log("Exception: " + rp.Exception);
    }
  });
}

interface IProps {
  expense: Expenses;
  index: Number;
}

const TableRow: React.FunctionComponent<IProps> = (props) => {
  console.log("props", props);
  const date: Date = new Date();
  return (
    <tr>
      <td>{props.expense.type === "e" ? "+" : "-"}</td>
      <td>
        {date.getDay() + "/" + date.getMonth() + "/" + date.getUTCFullYear()}
      </td>
      <td>{props.expense.shortDescription}</td>
      <td>{props.expense.description}</td>
      <td>{props.expense.source}</td>
      <td>{props.expense.amount}</td>
      <td>
        <Link to={"/edit/" + props.expense._id} className="btn btn-primary">
          Edit
        </Link>
      </td>
      <td>
        <button
          onClick={() => Del(props.expense._id)}
          className="btn btn-danger"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};
export default TableRow;
