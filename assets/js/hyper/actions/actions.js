export const actions = {
  reviewRightClicked,
  reviewleftClicked,
  intro,
  showMenu
}

function reviewRightClicked (state, actions) {
  return (
    {
      reviewStatus: {
      currentReview: state.globalState.reviewStatus.currentReview += 1
      }
    }
  )
}
function reviewleftClicked (state, actions) {
  return (
    {
      reviewStatus: {
      currentReview: state.globalState.reviewStatus.currentReview -= 1
      }
    }
  )
}

function showMenu(){
}

function intro(state, actions){
  console.log('Just ran my first action' )
  return (
    {count: state.count + 1}
  )
}
