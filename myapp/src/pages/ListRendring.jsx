import React from 'react';

// function App() {
//   let isLoggedIn = false;
//   let message = isLoggedIn ? "Welcome User!" : "Please Login";

//   return (
//     <div>
//       {isLoggedIn ? (
//         <h1>Welcome User!</h1>
//       ) : (
//         <h1>Please Login</h1>
//       )}
//     </div>
//   );
// }

// export default App;



// *Q2. Show and Hide Message (5 Marks)** Create a button that toggles a message between visible and hidden. Display **"Hello, React!"** when the message is visible.

// function ToggleMessage() {
//   const [isVisible, setIsVisible] = React.useState(false);

//     const toggleMessage = () => {
//         setIsVisible(!isVisible);
//     };

//     return (
//         <div>
//             <button onClick={toggleMessage}>
//                 {isVisible ? 'Hide Message' : 'Show Message'}
//             </button>
//             {isVisible && <p>Hello, React!</p>}
//         </div>
//     );
// }


// export default ToggleMessage;
// // export default App;






// // **Q3. Pass or Fail (5 Marks)** Create a React component that stores a student's marks. If marks are 40 or above, display **"Pass"**; otherwise, display **"Fail"**.


// function StudentMarks() {
//   const [isPass, setIsPass] = React.useState(false);

//   const checkMarks = (marks) => {
//     if (marks >= 40) {
//       setIsPass(true);
//     } else {
//       setIsPass(false);
//     }
//   };

//   return (
//     <div>
//       <h2>Student Marks</h2>

//       <button onClick={() => checkMarks(60)}>
//         Check Marks
//       </button>

//       <h3>
//         {isPass ? "Pass" : "Fail"}
//       </h3>
//     </div>
//   );
// }

// export default StudentMarks;




