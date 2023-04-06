import React, { Component } from "react";

export class Task extends Component {
  constructor() {
    super();
    console.log("constructor", constructor);
    this.state = {
      myArray: [
        {
          id : 1,
          name: "Book",
          description: "User interface Design Guide",
          isCompleted: "false",
        },
        {
          id : 2,
          name: "laptop",
          description: "Hp Brand",
          isCompleted: "false",
        },
        {
          id : 3,
          name: "Mobile Phone",
          description: "Oneplus",
          isCompleted: "false",
        },
        {
          id : 4,
          name: "Fan",
          description: "Crompton",
          isCompleted: "false",
        },
        {
          id : 5,
          name: "Pen",
          description: "Reynolds",
          isCompleted: "false",
        },
      ],
      fillter: "false",
    };
  }
  componentDidMount() {
    console.log("componentDidMount", this.state);
  }
  componentDidUpdate(prevState) {
    console.log("componentDidUpdate", this.state);
    if (prevState.isCompleted !== this.state.myArray.isCompleted) {
      console.log("Check Box is Checked", this.state.myArray);
    }
  }
  getClickedBox = (id) => {
    const newArray = [...this.state.myArray]; // create a copy of the current array
    newArray[id].isCompleted =
      newArray[id].isCompleted === "true" ? "false" : "true"; // update the isCompleted property of the clicked task
    this.setState({ myArray: newArray }); // update the state with the new array
  };

  getFillteredData() {
    this.setState({ filter: !this.state.filter });
    //   const fillteredArray = this.state.myArray.filter(
    //     (item) => item.isCompleted === true
    //   );
    //   this.setState({fillteredArray})
  }
  render() {
    console.log("render");
    return (
      <div>
        <input type="checkbox" onChange={() => this.getFillteredData()}></input>
        {this.state.myArray
          .filter((item) =>
            this.state.filter ? item.isCompleted === "true" : true
          )
          .map((item,id) => (
            <div key={id}>
              <p>
                <b>Name : </b> {item.name} , <b>Description : </b>
                {item.description} ,<b>IsCompleted : </b> {item.isCompleted}
                <input
                  type="checkbox"
                  checked={item.isCompleted === "true"}
                  onChange={() => this.getClickedBox(item.id - 1)}></input>
              </p>
            </div>
          ))}
      </div>
    );
  }
}

export default Task;


