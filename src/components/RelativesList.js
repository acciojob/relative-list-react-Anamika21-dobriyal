import React from "react";

const RelativesList = () => {
  const relatives = ["Aunt Mary", "Uncle John", "Cousin Lisa", "Grandfather"];

  return (
    <div>
      <h2>Relatives I'm Visiting This Diwali</h2>
      <ol key="relativeList">
        {relatives.map((relative, index) => (
          <li key={`relativeListItem${index + 1}`}>{relative}</li>
        ))}
      </ol>
    </div>
  );
};

export default RelativesList;
