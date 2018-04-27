
export function logPlugin(store) {
    store.subscribe((mutation, state) => {
        console.log(mutation, state);
    })
};
