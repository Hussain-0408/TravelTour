// import React, { useEffect, useState } from "react";
// import { Button } from "reactstrap";
// import axios from "axios";
// // import '../Components/Assignment.css'

// function ProductsPage() {
//     let [users, setUsers] = useState(null);
//     const fetchdata = async () => {
//         try {
//             let response = await axios.get("http://localhost:3007/fetchdata");
//             console.log(response.data);
//             setUsers(response.data);
//         } catch (err) {
//             console.log(err);
//         }
//     };
//     useEffect(() => {
//         fetchdata();
//     },[] );
//     return (
//         <div>
//             <table className="head" style={{ width: "1200px", border:"2px solid black"}} >
//                 <tr>
//                     <th className="item">id</th>
//                     <th className="item">Email</th>
//                     <th className="item">password</th>
//                     <th className="item">Address</th>
//                     <th className="item">State</th>
//                     <th> update    </th>
//                     <th>  delete </th>
//                 </tr>

//                 {users &&
//                     users.map((item) => (
//                         // <table className="body d-flex" style={{ border: "2px solid black", width: "500px" }}>
//                         <tbody style={{border:"1px solid black"}}>
//                             <tr>
//                                 <td >{item.id}</td>
//                                 <td >{item.email}</td>
//                                 <td className="item">{item.password}</td>
//                                 <td className="item">{item.address}</td>
//                                 <td className="item">{item.state}</td>
//                                 <td>
//                                     <Button id="button1">update</Button>
//                                 </td>
//                                 <td>
//                                     {" "}
//                                     <Button id="button2">delete</Button>
//                                 </td>
//                             </tr>
//                         </tbody>

//                     ))}
//             </table>
//         </div>
//     );
// }

// export default ProductsPage;