import * as React from "react";
import TableRow from "./TableRow";
import Expenses from "../models/expense";
import Categories from "../models/categories";
import BaseService from "../services/api.service";
interface IProps {}
interface IState {
  lstExpenses: Array<Expenses>;
  isReady: Boolean;
  hasError: Boolean;
}

class Index extends React.Component<IProps, IState> {
  public state: IState = {
    lstExpenses: new Array<Expenses>(),
    isReady: false,
    hasError: false,
  };
  constructor(props: IProps) {
    super(props);
    this.state = {
      isReady: false,
      lstExpenses: Array<Expenses>(),
      hasError: false,
    };
  }

  public componentDidMount() {
    BaseService.getAll<Expenses>("/expenses").then((rp) => {
      console.log("rp", rp);
      if (rp.Status) {
        const data = rp.Data;
        const lstExpenses = new Array<Expenses>();

        (data || []).forEach((p: any) => {
          lstExpenses.push(
            new Expenses(
              p._id,
              p.type,
              p.shortDescription,
              p.source,
              p.category,
              p.description,
              p.dateOperation,
              p.amount
            )
          );
        });

        this.setState({ lstExpenses: lstExpenses });
        this.setState({ isReady: true });
      } else {
        this.setState({ isReady: true });
        this.setState({ hasError: true });
        console.log("Messages: " + rp.Messages);
        console.log("Exception: " + rp.Exception);
      }
    });
  }

  public tabRow = () => {
    if (!this.state.isReady) {
      return (
        <tr>
          <td colSpan={6} className="text-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </td>
        </tr>
      );
    }
    if (this.state.hasError) {
      return (
        <tr>
          <td colSpan={6} className="text-center">
            <div className="alert alert-danger" role="alert">
              An error occurred!
            </div>
          </td>
        </tr>
      );
    }

    return this.state.lstExpenses.map(function (object, i) {
      return <TableRow key={i} index={i + 1} expense={object} />;
    });
  };

  public render(): React.ReactNode {
    return (
      <div>
        <h3 className="text-center">Expenses List</h3>
        <table className="table-striped table" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Type</th>
              <th>Date</th>
              <th>Short descr</th>
              <th>Description</th>
              <th>Source</th>
              <th>Amount</th>
              <th className="text-center" colSpan={2}>
                Action
              </th>
            </tr>
          </thead>
          <tbody>{this.tabRow()}</tbody>
        </table>
      </div>
    );
  }
}
export default Index;
