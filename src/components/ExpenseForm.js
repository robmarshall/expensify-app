import React from 'react';

export default class ExpenseForm extends React.Component {

    state = {
        description: '',
        note: '',
        amount: ''
    }

    onDescriptionChange = (e) => {
        const description = e.target.description;
        this.setState(() => ({ description }));
    }

    onNoteChange = (e) => {
        const note = e.target.note;
        this.setState(() => ({ note }));
    }

    onAmountChange = (e) => {
        const amount = e.target.value;
        if ( amount.match(/^\d*(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }
    }

    render() {
        return (
            <div>
                <form>
                    <input
                        type="text"
                        placeholder="description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input
                        type="text"
                        placeholder="amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <textarea
                        placeholder="Add a note"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    ></textarea>
                    <button

                    >Add Expense</button>
                </form>
            </div>
        )
    }
}
