import {Expense} from "./Expense";

export class Category {
    category: string
    expenses: Array<Expense>

    constructor(category: string, expenses: Array<Expense>) {
        this.category = category
        this.expenses = expenses
    }
}