// Here I am working to create Redux store using vanilla JavaScript
// credit: this is inspired by the Udacity React Courese on Udacity. I am using the lesson as a guide wherever I make mistakes or run into a brain fart.

// Redux Store is a combination of the State Tree and a few methods that can a) access the state b) listen for changes to the state c) update the state.


function createStore () {

  let state;
  
  const getState = () => state
  
  return {
    getState
  }

}
