// import React, { useEffect } from 'react';
// import 'firebase/auth';


// const FirebaseAuth = ({ onSuccess }) => {
//   useEffect(() => {
//     const uiConfig = {
//       signInSuccessUrl: onSuccess,
//       signInOptions: [
//         firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//         firebase.auth.EmailAuthProvider.PROVIDER_ID,
//       ],
//       tosUrl: '<your-tos-url>',
//       privacyPolicyUrl: '<your-privacy-policy-url>'
//     };
//     const ui = new firebaseui.auth.AuthUI(firebase.auth());
//     ui.start('#firebaseui-auth-container', uiConfig);
//     return () => {
//       ui.delete();
//     };
//   }, [onSuccess]);

//   return (
//     <div>
//       <h1>Welcome</h1>
//       <div id="firebaseui-auth-container"></div>
//     </div>
//   );
// };

// export default FirebaseAuth;
