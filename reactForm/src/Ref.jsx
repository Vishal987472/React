import React, { useRef } from "react";
import { useEffect } from "react";

function Ref() {
  const nameRef = useRef(null);

  useEffect(() => {
    nameRef.current.focus();
  }, []);

    const handleChange = (e) => {
        console.log(nameRef.current.value);
    };
  return (
    <>
      <div>
        <input
          className="bg-blue-200 p-3 rounded-full"
          type="text"
          name="name"
          id=""
          ref={nameRef}
        />
        <button type="submit" className="bg-orange-300 m-2 p-3 rounded-full" onClick={handleChange}>Submit</button>
      </div>
    </>
  );
}
export default Ref;
