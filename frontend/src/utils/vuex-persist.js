export default function (store) {

  const persistState = (state) => {
    const { auth, ...rest } = state;
    return rest;
  };

  if (typeof localStorage !== 'undefined' && localStorage.getItem('vuex')) {
    try {
      const persistedState = JSON.parse(localStorage.getItem('vuex'));
      const currentState = store.state;
      
      const mergedState = {
        ...currentState,
        ...persistedState,
        auth: currentState.auth
      };
      
      store.replaceState(mergedState);
    } catch (e) {
      console.error('Failed to parse persisted Vuex state:', e);
    }
  }

  store.subscribe((mutation, state) => {
    const stateToPersist = persistState(state);
    localStorage.setItem('vuex', JSON.stringify(stateToPersist));
  });
}
