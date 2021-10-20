import React, { useEffect } from 'react'

type Todo = {
  userId: number
  id: number
  title: string
  completed: boolean
}

const getJSON = (url: string): Promise<void> => {
  return fetch(url)
    .then<Todo>((response) => response.json())
    .then((result) => console.log(JSON.stringify(result, null, 2)))
}

const loadTodo = () => {
  return getJSON('https://jsonplaceholder.typicode.com/todos/1')
}

const App = (): JSX.Element => {
  useEffect(() => {
    console.log(loadTodo())
  }, [])

  return (
    <div className="App">
      <header>
        <p>Ahoj</p>
      </header>
    </div>
  )
}

export default App
