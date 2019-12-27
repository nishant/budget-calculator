// Driver
import {Expense} from "./Expense";
import {Category} from "./Category";

let categories: Array<Category> = []

categories.push(
    new Category('Insurance', new Array<Expense>(
        new Expense('Healthcare', 100)
    )),

    new Category('Subscriptions', new Array<Expense>(
        new Expense("Spotify", 10),
        new Expense("Hulu", 12.18)
    ))
)

categories.forEach(function (category) {
    console.log(category.category)
    category.expenses.forEach(function (expense) {
        console.log('  ' + expense.name)
        console.log('    ' + expense.amount)
    })
});

