import React from 'react';

export default class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      input: ''
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleAdd(this.state.input);
    this.setState({ input: "" });
  }

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  }

  render() {
    const { input } = this.state;

    return (
      <form>
        <h3>Instructions:</h3>
            <p>Enter a task in the input field. For example, "Finish homework".</p>
            <p>Click the "Add" button to add the task to the list of todos.</p>
            <p>To clear completed tasks from the list, Click over the task and click the "Clear" button.</p>
            <h3>Add your tasks here</h3>
        <input value={input} onChange={this.handleChange} />
        <button onClick={this.handleSubmit}>Add</button>
      </form>
    );
  }
}
