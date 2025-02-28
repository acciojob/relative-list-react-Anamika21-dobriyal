import React from 'react'

const App = () => {
  const [relatives, setRelatives] = useState([""]);

  const addRelative = () => {
    setRelatives([...relatives, ""]);
  };

  const updateRelative = (index, value) => {
    const updatedRelatives = [...relatives];
    updatedRelatives[index] = value;
    setRelatives(updatedRelatives);
  };
  return (
    <div id="main" className="p-4 border-2 border-black max-w-md mx-auto text-center">
               {/* Do not remove the main div */}

    <h1 className="text-xl font-bold mb-4">Diwali Shopping List</h1>
      <ol key="relativeList" className="list-decimal text-left pl-5">
        {relatives.map((relative, index) => (
          <li key={`relativeListItem${index + 1}`} className="mb-2">
            <input
              type="text"
              value={relative}
              onChange={(e) => updateRelative(index, e.target.value)}
              className="border p-2 rounded w-full"
              placeholder={`Relative ${index + 1}`}
            />
          </li>
        ))}
      </ol>
      <button
        onClick={addRelative}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Add Relative
      </button>
    </div>
  );
};

export default App;
