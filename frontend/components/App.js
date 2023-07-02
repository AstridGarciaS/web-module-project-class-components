import React from 'react'

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todos: [
        {
          name: 'Organize Garage',
          id: 1528817077286, 
          completed: true
        },
        {
          name: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ]
    }
    
  }
  render() {
    const { todos } = this.state;
    return (
      <div>
        <h2>Welcome to my Todo App!</h2>
        <ul>
          {
            todos.map(todo=> {
              return (<li key={todo.id}>{todo.name} { todo.completed?<span>&#x2713;</span> : <span></span>} </li>)
            })
          }
        </ul>

        <form>
        <h2>Add your tasks here</h2>
          <input/>
          <button>Add</button>
        </form>
        <button>Clear</button>
      </div>
      
    )
  }
}
