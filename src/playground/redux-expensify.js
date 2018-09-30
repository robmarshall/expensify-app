import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

const addExpense = (
    {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

// Expenses reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type){
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ]
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id)
        default:
            return state;
    }
}

// Filters Reducer

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startdate: undefined,
    endDate: undefined,
};

const filtersReducer = ( state = filtersReducerDefaultState, action) => {
    switch (action.type){
        default:
            return state;
    }
}

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    console.log(store.getState());
});

const expenseOne = store.dispatch( addExpense({ description: 'Rent', amount: 100 }) );
const expenseTwo = store.dispatch( addExpense({ description: 'Horse', amount: 340 }) );

store.dispatch( removeExpense({ id: expenseOne.expense.id }) );

const demoState = {
    expenses: [{
        id: 'sdfsdfdss',
        description: 'Jan Rent',
        note: 'This is a long note for payement',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startdate: undefined,
        endDate: undefined,
    }
};

const user = {
    name: 'Jen',
    age: 24
};

console.log({
    ...user
});
