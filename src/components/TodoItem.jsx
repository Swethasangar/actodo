function TodoItem(props) {
  const list = props.passlist;
  const setlist = props.passsetlist;
  const handleDelete = (rid) => {
    var templist = list.filter((item) => {
      if (item.id === rid) {
        return false;
      } else {
        return true;
      }
    });
    setlist(templist);
  };
  return (
    <div className="flex justify-between">
      <p className="mt-1">
        {props.index + 1}.{props.activity}
      </p>
      <button className="text-blue-900" onClick={() => handleDelete(props.id)}>
        Delete
      </button>
    </div>
  );
}
export default TodoItem;
