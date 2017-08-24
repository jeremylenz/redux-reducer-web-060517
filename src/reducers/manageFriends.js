export function manageFriends(state, action){
  switch(action.type) {
    case 'ADD_FRIEND':
      return {friends: [...state.friends, action.friend]}
    case 'REMOVE_FRIEND':
      let friends = [...state.friends]
      let friendToRemove = state.friends.find(friend => friend.id === action.id)
      let idx = state.friends.indexOf(friendToRemove)
      friends.splice(idx, 1)
      return { friends }


    default:
      return state;
  }
}
