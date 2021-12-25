import { useState } from "react";

const Home = () => {
  const [items, setItems] = useState([]);
  const [todoItem, setTodoItem] = useState("");

  const handleAdd = () => {
    setItems([...items, { id: Math.random(), text: todoItem, isDone: false }]);
    setTodoItem("");
  };

  const handleRemove = (id) => {
    const _items = items.filter((item) => {
      if (item.id !== id) return item;
    });
    setItems(_items);
  };

  const handleDone = (id) => {
    const _items = items.map((item) => {
      if (item.id === id)
        return {
          ...item,
          isDone: !item.isDone,
        };
      return item;
    });
    setItems(_items);
  };

  console.log(items);
  return (
    <div className="w-3/4 mx-auto  ">
      <div className="pt-12">
        <h1 className="text-4xl">Todo App</h1>
      </div>
      <div className="pt-14">
        <input
          type="text"
          value={todoItem}
          onChange={(e) => setTodoItem(e.target.value)}
        />
        <button className="px-4" onClick={handleAdd}>
          Add Task
        </button>
      </div>
      <ul>
        {items.map(({ id, text, isDone }) => (
          <>
            <li key={id} className={`${isDone ? "done" : ""}`}>
              {text}
              <button className="px-4" onClick={() => handleRemove(id)}>
                Remove Task
              </button>
              <button className="px-4" onClick={() => handleDone(id)}>
                Finish Task
              </button>
            </li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default Home;
