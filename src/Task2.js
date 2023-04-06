import { useState, useEffect } from "react";

const Task2 = () => {
  const [myArray, setMyArray] = useState([
    {
      id: 1,
      name: "Book",
      description: "User interface Design Guide",
      isCompleted: false,
    },
    {
      id: 2,
      name: "Laptop",
      description: "Hp Brand",
      isCompleted: false,
    },
    {
      id: 3,
      name: "Mobile Phone",
      description: "Oneplus",
      isCompleted: false,
    },
    {
      id: 4,
      name: "Fan",
      description: "Crompton",
      isCompleted: false,
    },
    {
      id: 5,
      name: "Pen",
      description: "Reynolds",
      isCompleted: false,
    },
  ]);
  const [filter, setFilter] = useState(false);
  const [sortState, setSortState] = useState("none");

  useEffect(() => {
    console.log("ComponentDidMount");
  }, []);

  useEffect(() => {
    console.log("ComponentDidUpdate",myArray);
  }, [myArray]);

  const getClickedBox = (id) => {
    const newArray = [...myArray]; // create a copy of the current array
    newArray[id].isCompleted = !newArray[id].isCompleted; // toggle the isCompleted property of the clicked task
    setMyArray(newArray); // update the state with the new array
  };

  const getFilteredData = () => {
    setFilter(!filter);
  };

  const deleteData =  (id) =>{
    const newArray = myArray.filter((item)=>
        item.id!== id )
    setMyArray(newArray); 
  }
  const sortingData = (order) => {
    const sort = [...myArray];
    if (order === "asc") {
      sort.sort((a, b) => (a.name > b.name ? 1 : -1));
    } else if (order === "desc") {
      sort.sort((a, b) => (a.name < b.name ? 1 : -1));
    }
    setMyArray(sort);
  };

  return (
    <div>
      <input type="checkbox" onChange={() => getFilteredData()}></input>
      {myArray
        .filter((item) => (filter ? item.isCompleted : true))
        .map((item) => (
          <div key={item.id}>
            <p>
              <b>Name : </b> {item.name} , <b>Description : </b>
              {item.description} ,<b>IsCompleted : </b> {item.isCompleted ? "true" : "false"}
              <input
                type="checkbox"
                checked={item.isCompleted}
                onChange={() => getClickedBox(item.id - 1)}
              ></input>
              <button onClick={()=>deleteData(item.id)}>Delete </button> 
            </p>
          </div>
        ))}
       <select onChange={(e) => sortingData(e.target.value)}>
            <option value="none">Sort By</option>
            <option value="asc">Ascending Order</option>
            <option value="desc">Descending Order</option>
        </select>
    </div>
  );
};

export default Task2;
