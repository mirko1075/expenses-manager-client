import Categories from "./categories";

export default class Expenses {
  _id?: string;
  type: string;
  shortDescription: string;
  source: string;
  category: Categories | null;
  description: string;
  dateOperation: Date | null | undefined;
  amount: number;

  constructor(
    _id: string,
    type: string,
    shortDescription: string,
    source: string,
    category: Categories | null,
    description: string,
    dateOperation: Date,
    amount: number
  ) {
    this._id = _id;
    this.type = type;
    this.shortDescription = shortDescription;
    this.source = source;
    this.category = category;
    this.description = description;
    this.dateOperation = dateOperation;
    this.amount = amount;
  }
}
