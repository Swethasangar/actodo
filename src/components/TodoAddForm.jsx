import { useState } from "react";

function AddForm(props) {
  const list = props.list;
  const setlist = props.setlist;
  const [newActivity, setNewactivity] = useState("");
  const addelement = () => {
    setlist([...list, { id: list.length + 1, Activity: newActivity }]);
    setNewactivity("");
  };
  const handletext = (eve) => {
    setNewactivity(eve.target.value);
  };
  return (
    <>
      <div>
        <h1 className="text-2xl font-medium">Manage Activities</h1>
        <input
          value={newActivity}
          type="text"
          placeholder="Next Activity?"
          className="border border-black p-1 outline-none mt-2"
          onChange={handletext}
        ></input>
        <button
          className="border border-black px-2 py-1 bg-black text-white"
          onClick={addelement}
        >
          Add
        </button>
      </div>
    </>
  );
}
export default AddForm;
