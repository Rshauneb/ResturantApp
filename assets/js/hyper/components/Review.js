import {h, app} from 'hyperapp'

export default function Review({state, actions}) {
  console.log(state.globalState.reviewsData[state.globalState.reviewStatus.currentReview].review);
   var currentReview = function() {
       return (
         <div>
           <p>Reviews</p>
           <h2 class="rev-title">{}</h2>
           <div class="review">
           {state.globalState.reviewsData[state.globalState.reviewStatus.currentReview].review}
           </div>
           <div class="review-person">
           {state.globalState.reviewsData[state.globalState.reviewStatus.currentReview].author}
           </div>
         </div>
     )
   }

   var leftclickBtn = function(){
      if(state.globalState.reviewStatus.currentReview == 0){
        // console.log("do nothing...1");
      } else {
        actions.reviewleftClicked()
      }
   }
   var rightclickBtn = function(){
      if(state.globalState.reviewStatus.currentReview == (state.globalState.reviewsData.length - 1)){
        // console.log("do nothing...2");
      } else {
        actions.reviewRightClicked()
      }
   }



   return(
    <section id="Review">
      <div class="container">
        <div class="col-md-8 right">
          <div class="side img">
            <img src="https://i.postimg.cc/RCLf7ZfG/cafe.jpg"/>
          </div>
        </div>
        <div class="col-md-4 left">
        {currentReview()}
          <div class="arrows">
            <i onclick={leftclickBtn} class={`fas fa-angle-left ${(state.globalState.reviewStatus.currentReview > 0) ? 'ready' : ' '}`}></i>
            <i onclick={rightclickBtn} class={`fas fa-angle-right ${(state.globalState.reviewStatus.currentReview == (state.globalState.reviewsData.length - 1)) ? '' : 'ready'}`}></i>
          </div>
        </div>
      </div>
    </section>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

// <img src="https://images.pexels.com/photos/390403/pexels-photo-390403.jpeg?auto=compress&cs=tinysrgb&h=350"/>
