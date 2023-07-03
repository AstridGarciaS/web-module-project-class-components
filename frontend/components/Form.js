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
        <h3>Add your tasks here</h3>
        <input value={input} onChange={this.handleChange} />
        <button onClick={this.handleSubmit}>Add</button>
      </form>
    );
  }
}
