export interface Task {
  _id?: String,
  owner: String,
  description: String,
  done?: boolean;
  [others: string]: any;
}