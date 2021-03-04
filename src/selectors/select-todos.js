import { useSelector } from 'react-redux';

export function useSelectorTodos() {
  return useSelector((state) => state.todos);
}
