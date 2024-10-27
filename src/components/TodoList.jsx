import { useState } from "react";
import TodoItem from "./TodoItem";
function TodoList(props) {
 const list = props.list
 const setlist = props.setlist
  return (
    <div className="bg-[#C5DECD] border rounded-md py-2 px-2 flex-grow mt-1">
      <h1 className="text-2xl font-medium mt-1">Today's Activity</h1>
      {list.length === 0 ? (
        <p className="mt-1">You haven't added any activity yet</p>
      ) : (
        ""
      )}
      {list.map((items, index) => {
        return (
          <TodoItem
            id={items.id}
            activity={items.Activity}
            index={index}
            passlist={list}
            passsetlist={setlist}
          />
        );
      })}
    </div>
  );
}
export default TodoList;
