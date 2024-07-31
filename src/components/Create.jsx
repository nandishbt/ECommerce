import { nanoid } from "nanoid";
import React, { useContext, useState } from "react";
import { ProductContext } from "../utils/Context";

const Create = () => {
  const [image, setImage] = useState("");
  const [title, settitle] = useState("");
  const [category, setcategory] = useState("");
  const [price, setprice] = useState(0);
  const [description, setdescription] = useState("");

 const[products,setproducts] = useContext(ProductContext)

  const submithandle = (e) => {
    e.preventDefault();
    // save to db
    const obj = {id:nanoid(), image, title, category, price, description };

    setImage("");
    settitle("");
    setcategory("");
    setprice(0);
    setdescription("");

    setproducts([...products, obj])

    localStorage.setItem("product",JSON.stringify([...products, obj]));

   

    
  };

  return (
    <div className="w-full h-screen p-[5%] flex justify-center ">
      <form className="w-1/2" onSubmit={submithandle}>
        <input
          type="text"
          className="w-full bg-zinc-100 px-10 py-3 text-xl font-semibold mb-5"
          placeholder="Image link"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <input
          type="text"
          className="w-full  bg-zinc-100 px-10 py-3 text-xl font-semibold mb-5"
          placeholder="title"
          value={title}
          onChange={(e) => settitle(e.target.value)}
        />

        <div className="w-full flex justify-between">
          <input
            type="text"
            className="w-[49%]  bg-zinc-100 px-10 py-3 text-xl font-semibold mb-5"
            placeholder="category"
            value={category}
            onChange={(e) => setcategory(e.target.value)}
          />

          <input
            type="number"
            className="w-[49%]   bg-zinc-100 px-10 py-3 text-xl font-semibold mb-5"
            placeholder="price"
            value={price}
            onChange={(e) => setprice(e.target.value)}
          />
        </div>

        <textarea
          rows={10}
          className="w-full border border-slate-200 bg-zinc-100 px-10 py-3 text-xl font-semibold mb-2"
          placeholder="description"
          value={description}
          onChange={(e) => setdescription(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-blue-400  px-10 py-3 text-xl font-semibold text-white hover:bg-blue-500 hover:cursor-pointer"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default Create;
