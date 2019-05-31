import {h, app} from 'hyperapp'

export default function TopIMG({state, actions}) {
  return (
    <section id="topImg">
      <div class="container">
        <div class="title">
          <h5>
            Welcome
          </h5>
          <h1>
          {state.globalState.companyInfo.title}
          </h1>
        </div>
        <div class="contact-info">
          <div class="booking">Book table directly</div>
          <h2>(416) 111-1111</h2>
          <div class="hours">
            <strong>Mon - Friday</strong> 9AM - 11PM <strong>Sat</strong> closed <strong>sunday </strong> 12am - 7PM
          </div>
        </div>
      </div>
    </section>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
