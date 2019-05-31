import {h, app} from 'hyperapp'

export default function SpecialMenu({state, actions}) {

console.log("working")

  var loopMenu = function(){
     return state.globalState.specialMenuData.map(function(item){
      console.log(item.title);
      return(
        <div class="col-md-4">
          <div class="box">
          <div class="box-img">
            <div class="price-circle">${item.price}</div>
            </div>
            <span class="title">{item.title}</span>
            <p class="details">{item.description}</p>
          </div>
        </div>
      )
    })
  }


  return (
    <section id="SpecialMenu">
      <div class="container">
        <h5 class="comp-title">Special Menu</h5>
        <h2> Delicious Flavours of autumn</h2>
        <div class="row boxes">
          {loopMenu()}
        </div>
        <a href="#" class="link">view full menu</a>
      </div>
    </section>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>


// <div class="col-md-4">
// <div class="box">
// <div class="box-img">
// <div class="price-circle">$25</div>
// </div>
// <span class="title">Super BBQ Grill No smoke</span>
// <p class="details">fried eggs, steak baked potatoes with a side a fresh organi vegetables</p>
// </div>
// </div>
