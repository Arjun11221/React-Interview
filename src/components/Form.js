// import { useState } from "react";

import { useState } from "react";

// const Form = () => {
//   const [obj, setObj] = useState({
//     name : "",
//     age : "",
//     city : ""
//   });

//   const getValue = (e) => {
//     setObj({
//       ...obj,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleClick = (e) => {
//     e.preventDefault();
//     console.log(obj);
//     setObj({
//         name : "",
//         age : "",
//         city : ""
//     });
//   };

//   return (
//     <div>
//       <form onSubmit={handleClick}>
//         <input
//           placeholder="Name.."
//           name="name"
//           type="text"
//           value={obj.name}
//           onChange={getValue}
//         />
//         <br />
//         <br />
//         <input
//           placeholder="Age.."
//           name="age"
//           value={obj.age}
//           onChange={getValue}
//           type="number"
//         />
//         <br />
//         <br />
//         <input
//           placeholder="City.."
//           name="city"
//           value={obj.city}
//           onChange={getValue}
//           type="text"
//         />
//         <br />
//         <br />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default Form;

const Form = () => {
  const [obj, setObj] = useState({
    name: "",
    age: null,
    city: "",
  });

  const handleClick = (e) => {
    e.preventDefault();

    console.log(obj);
    setObj({
      name: "",
      age: null,
      city: "",
    });
  };

  const getValue = (e) => {
    setObj({
      ...obj,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div style={{ marginTop: "50px" }}>
      <form onSubmit={handleClick}>
        <label>Name </label>
        <input type="text" name="name" onChange={getValue} value={obj.name} />
        <br />
        <br />
        <label>Age </label>
        <input type="number" name="age" onChange={getValue} value={obj.age} />
        <br />
        <br />
        <label>City </label>
        <input type="text" name="city" onChange={getValue} value={obj.city} />
        <br />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
