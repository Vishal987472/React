import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [submittedData, setSubmittedData] = useState({
    name: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
    setFormData({
      name: "",
      email: "",    
    });   
    console.log(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <>
      <form
        className=" text-white font-bold text-lg flex items-center justify-center flex-col bg-green-300 p-5 m-5"
        action=""
      >
        <div>
          <label htmlFor="name">Name</label>
          <input
            className="p-3 m-2 border border-black rounded-full"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            className="p-3 m-2 border border-black rounded-full"
            name="email"
            value={formData.email}
            type="email"
            onChange={handleChange}
            required
          />
        </div>
        <button
          className="bg-gray-500 p-4 rounded-full m-3 w-40 "
          type="submit"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>

      <div className="text-white font-bold text-lg flex items-center justify-center flex-col bg-green-300 p-5 m-5">
        <h1 className="text-2xl">Form Data</h1>
        <div className="flex flex-col">
          <div className="flex flex-col">
            <p>Name: {submittedData.name}</p>
            <p>Email: {submittedData.email}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
