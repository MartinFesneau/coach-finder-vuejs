import { onErrorCaptured } from "vue";

export default {
  async addACoach(context, payload) {
    const userId = context.rootGetters.userId
    const coachData = {
      firstName: payload.first,
      lastName: payload.last,
      description: payload.desc,
      hourlyRate: payload.rate,
      areas: payload.areas
    };
    const response = await fetch(`https://vue-coach-finder-app-default-rtdb.europe-west1.firebasedatabase.app/coaches/${userId}.json`,{
      method: 'PUT',
      body: JSON.stringify(coachData)
    });
    // async await is equivalent to the .then method, response will be created only once we received the response

    // const responseData = await response.json();

    if (!response.ok) {
      // error
    }

    context.commit('registerCoach', {
      ...coachData,
      id: userId
    });
  },
  async loadCoaches(context) {
    const response = await fetch('https://vue-coach-finder-app-default-rtdb.europe-west1.firebasedatabase.app/coaches.json');
    const responseData = await response.json();

    if (!response.ok) {
      const error = new onErrorCaptured(response.data.message || 'Failed to fetch');
      throw error;
    }

    const coaches = [];
    for (const key in responseData) {
      const coach = {
        id: key,
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        description: responseData[key].description,
        hourlyRate: responseData[key].hourlyRate,
        areas: responseData[key].areas
      };
      coaches.push(coach);
    }
    context.commit('setCoaches', coaches);
  }
};