export const GET_EXPERIENCE_ID = "GET_EXPERIENCE_ID";
export const IS_LOADING = "IS_LOADING";
export const IS_ERROR = "IS_ERROR";
export const POST_EXPERIENCE = "POST_EXPERIENCE";

export const fetchExperiences = (userId) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`,
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQxYzAxZTE2N2U1MzAwMTVmYTY5NzciLCJpYXQiOjE3MTU1ODUwNTUsImV4cCI6MTcxNjc5NDY1NX0.oMCLB4PAEReTiWGPS97aY6U0owrc4rQySh7kmp9695Y`,
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch experiences");
      }
      const data = await response.json();
      dispatch({
        type: GET_EXPERIENCE_ID,
        payload: data,
      });

      dispatch({
        type: IS_LOADING,
        payload: false,
      });
    } catch (error) {
      dispatch({
        type: IS_ERROR,
        payload: false,
      });
      console.log(error);
      dispatch({
        type: IS_LOADING,
        payload: false,
      });
    }
  };
};

// export const fetchToPost = (userId) => {
//   return async (dispatch) => {
//     try {
//       const response = await fetch(
//         `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`,
//         {
//           method: "POST",
//           body: JSON.stringify(),
//           headers: {
//             "Content-Type": "application/json",

//             Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQxYzAxZTE2N2U1MzAwMTVmYTY5NzciLCJpYXQiOjE3MTU1ODUwNTUsImV4cCI6MTcxNjc5NDY1NX0.oMCLB4PAEReTiWGPS97aY6U0owrc4rQySh7kmp9695Y`,
//           },
//         }
//       );
//       if (!response.ok) {
//         throw new Error("Failed to fetch experiences");
//       }
//       const data = await response.json();
//       dispatch({
//         type: POST_EXPERIENCE,
//         payload: data,
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };
