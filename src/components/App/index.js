import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { useSelectorTodos } from '../../selectors/select-todos';
import todosAction from '../../reducers/todos/actions';

function App() {
  const initialData = { name: '', active: true };
  const todos = useSelectorTodos();
  const dispatch = useDispatch();

  const [data, setData] = useState(initialData);

  const handleChange = (e) => {
    const { name, type } = e.target;
    const value = type === 'checkbox' ? e.target.checked : e.target.value;
    setData((state) => ({ ...state, [name]: value }));
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: todosAction.Add, payload: data });
    setData({ ...initialData });
  };

  return (
    <div>
      <div>
        {JSON.stringify(todos)}
        <form onSubmit={onHandleSubmit}>
          <label>
            Name:
            <input name="name" value={data.name} onChange={handleChange} />
          </label>
          <label>
            Active:
            <input
              type="checkbox"
              name="active"
              checked={data.active}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
      <div>
        {todos && todos.map((todo, i) => <div key={i}>{todo.name}</div>)}
      </div>
    </div>
  );
}

export default App;
