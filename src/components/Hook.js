import { useState } from "react";
const Hook = () => {

  const [someVar, setSomeVar] = useState(0);
  const changeSomeVar = () =>{setSomeVar(45)}

  return (
    <div className="Hook">
      <div>{someVar}</div>
      <button onClick={changeSomeVar}>Add</button>
    </div>
  )
};

export default Hook;
