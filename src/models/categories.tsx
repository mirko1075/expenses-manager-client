export default class Categories {
  _id?: string;
  categoryDescription: string;

  constructor(_id: string, categoryDescription: string) {
    this._id = _id;
    this.categoryDescription = categoryDescription;
  }
}
