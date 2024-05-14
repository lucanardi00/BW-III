// export const updatePhotoProfileAction = (userId, photoData) => {
//   return async () => {
//     try {
//       const formData = new FormData();
//       formData.append("photo", photoData);

//       const response = await fetch(
//         `https://striveschool-api.herokuapp.com/api/profile/${userId}/picture/`,
//         {
//           method: "POST",
//           headers: {
//             Authorization:
//               "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQxYzAxZTE2N2U1MzAwMTVmYTY5NzciLCJpYXQiOjE3MTU1ODUwNTUsImV4cCI6MTcxNjc5NDY1NX0.oMCLB4PAEReTiWGPS97aY6U0owrc4rQySh7kmp9695Y",
//           },
//           body: formData,
//         }
//       );
//       if (response.ok) {
//         const data = await response.json();
//         console.log(data);
//       } else {
//         console.log("error");
//         throw new Error("Errore nell'aggiornamento della foto del profilo 😥");
//       }
//     } catch (error) {
//       console.log("Errore nell'aggiornamento della foto del profilo", error);
//     }
//   };
// };
