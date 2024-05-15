export const GET_DETAILS_EXPERIENCE = "GET_DETAILS_EXPERIENCE";
export const MOD_DETAILS_EXPERIENCE = "MOD_DETAILS_EXPERIENCE";
export const DELETE_DETAILS_EXPERIENCE = "DELETE_DETAILS_EXPERIENCE";

export const fetchGetDetailsExperience = (userId, expId) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${expId}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQzMWFlOTU1NjIxYTAwMTVjMTVmZDIiLCJpYXQiOjE3MTU2NzM4MzMsImV4cCI6MTcxNjg4MzQzM30.ri-G1Ow1lNp8ezUcHFJPFvJs5VRkCvBr3P-y85XpdAw",
          },
        }
      );
      if (response.ok) {
        let data = await response.json();
        console.log(data);

        if (data) {
          dispatch({
            type: GET_DETAILS_EXPERIENCE,
            payload: data,
          });
        }
      } else {
        console.log("error");
        throw new Error("Error fetching data 😥");
      }
    } catch (error) {
      console.log("Error fetching user data", error);
    }
  };
};
export const fetchModDetailsExperience = (userId, expId) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${expId}`,
        {
          method: "PUT",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQxYzAxZTE2N2U1MzAwMTVmYTY5NzciLCJpYXQiOjE3MTU1ODUwNTUsImV4cCI6MTcxNjc5NDY1NX0.oMCLB4PAEReTiWGPS97aY6U0owrc4rQySh7kmp9695Y",
          },
        }
      );
      if (response.ok) {
        let data = await response.json();
        console.log(data);

        if (data) {
          dispatch({
            type: MOD_DETAILS_EXPERIENCE,
            payload: data,
          });
        }
      } else {
        console.log("error");
        throw new Error("Error fetching data 😥");
      }
    } catch (error) {
      console.log("Error fetching user data", error);
    }
  };
};
export const fetchDeleteDetailsExperience = (userId, expId) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${expId}`,
        {
          method: "DELETE",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQxYzAxZTE2N2U1MzAwMTVmYTY5NzciLCJpYXQiOjE3MTU1ODUwNTUsImV4cCI6MTcxNjc5NDY1NX0.oMCLB4PAEReTiWGPS97aY6U0owrc4rQySh7kmp9695Y",
          },
        }
      );
      if (response.ok) {
        let data = await response.json();
        console.log(data);

        if (data) {
          dispatch({
            type: DELETE_DETAILS_EXPERIENCE,
            payload: data,
          });
        }
      } else {
        console.log("error");
        throw new Error("Error fetching data 😥");
      }
    } catch (error) {
      console.log("Error fetching user data", error);
    }
  };
};
