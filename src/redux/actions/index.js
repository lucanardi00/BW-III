export const GET_PROFILE_ID = "GET_PROFILE_ID";

export const fetchUserProfileAction = (query) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/" + query,
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
