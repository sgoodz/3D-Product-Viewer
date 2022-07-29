import { useState } from "react";

const DropdownComponent = () => {
  const [treatmentOption, setTreatmentOption] = useState();
  return (
    <div>
      <select
        id="treatments"
        value={treatmentOption}
        onChange={(e) => setTreatmentOption(e.target.value)}
      >
        <option id="1">Option 1</option>
        <option id="2">Option 2</option>
      </select>
      <h1>Selected Option: {treatmentOption}</h1>
    </div>
  );
};

export default DropdownComponent;
