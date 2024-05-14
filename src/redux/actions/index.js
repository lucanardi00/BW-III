export const GET_PROFILE_ID = "GET_PROFILE_ID";
export const GET_ALL_PROFILE = "GET_ALL_PROFILE";

export const fetchUserProfileAction = (query) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/" + query,
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
            type: GET_PROFILE_ID,
            payload: data,
          });
        }
      } else {
        console.log("error");
        throw new Error("Errore nel reperimento dei dati 😥");
      }
    } catch (error) {
      console.log("Errore nella ricerca dell'Utente", error);
    }
  };
};

export const fetchAllProfileAction = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile",
        {
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
            type: GET_ALL_PROFILE,
            payload: data,
          });
        }
      } else {
        console.log("error");
        throw new Error("Errore nel reperimento dei dati 😥");
      }
    } catch (error) {
      console.log("Errore nella ricerca dell'Utente", error);
    }
  };
};
