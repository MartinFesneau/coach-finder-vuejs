export default {
  async contactCoach(context, payload) {
    const newRequest = {
      userEmail: payload.email,
      userMessage: payload.message
    };
    const response = await fetch(
      `https://vue-coach-finder-app-default-rtdb.europe-west1.firebasedatabase.app/requests/${payload.coachId}.json`,
      {
        method: 'POST',
        body: JSON.stringify(newRequest)
      }
    );
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(
        response.data.message || 'Failed to send request'
      );
      throw error;
    }

    newRequest.id = responseData.name; // l'id est enregistré sous name dans la réponse de firebase
    newRequest.coachId = payload.coachId;
    context.commit('addRequest', newRequest); // on utilise la mutation
  },

  async fetchRequests(context) {
    const coachId = context.rootGetters.userId;
    const response = await fetch(
      `https://vue-coach-finder-app-default-rtdb.europe-west1.firebasedatabase.app/requests/${coachId}.json`
    );
    const responseData = await response.json();
      console.log(responseData)
    if (!response.ok) {
      const error = new Error(
        response.data.message || 'Failed to load requests'
      );
      throw error;
    }
    const requests = [];

    for (const key in responseData) {
      const request = {
        id: key,
        coachId: coachId,
        userEmail: responseData[key].userEmail,
        userMessage: responseData[key].userMessage
      };
      requests.push(request);
    }
    context.commit('setRequests', requests);
  }
};
