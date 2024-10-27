import AddForm from "./TodoAddForm";
import TodoList from "./TodoList";
import { useState } from "react";
function TodoContainer() {
  const [list, setlist] = useState([]);
  return (
    <section className="flex gap-10 flex-wrap">
      <AddForm list={list} setlist={setlist}/>
      <TodoList list={list} setlist={setlist}/>
    </section>
  );
}
export default TodoContainer;
