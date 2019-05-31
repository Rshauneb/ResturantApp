import {h, app} from 'hyperapp'

export default function OurStory({state, actions}) {
  return (
    <section id="OurStory">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h5>our story</h5>
            <h2>cooking is the art of adjustment</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris elementum ullamcorper augue ac interdum. Cras efficitur augue ex, vel tincidunt enim varius et. Aliquam erat.</p>
            <div class="quote">"Best steak in the city" - <strong>John doe</strong></div>
            <a href="#" class="reserve-btn">Reserve</a>
          </div>
          <div class="col-md-6">
          <div class="video-img">
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
