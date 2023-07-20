import { useState } from "react";
const Hook = () => {

  const [someVar, setSomeVar] = useState(0);
  const changeSomeVar = () =>{setSomeVar(someVar+1)}

  return (
    <div className="Hook">
      <h4>useState</h4>
      <div>{someVar}</div>
      <button onClick={changeSomeVar}>Add</button>
    </div>
  )
};

export default Hook;
