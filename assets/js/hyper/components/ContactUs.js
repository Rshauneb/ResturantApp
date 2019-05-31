import {h, app} from 'hyperapp'

export default function ContactUS({state, actions}) {
  return (
    <section id="ContactUS">
      <div class="container">
        <h5 class="comp-title">Contact us</h5>
        <h2>Contact us</h2>

        <div class="box">
          <div class="row">
            <div class="col-md-6">
              <div class="title">Toronto, On</div>
              <h6 class="address">{state.globalState.companyInfo.location}</h6>
              <p class="email"><strong>Email: </strong><a href="mailto:123@123.com">123@123.com</a></p>
            </div>
            <div class="col-md-6">
              <h6>phone:
              </h6>
              <div class= "title">416-111-1111</div>
              <h6>lunch service</h6>
              <p>friday and sunday bookings <br/> from 12pm - 1:30pm</p>
              <h6>dinner service</h6>
              <p>daily bookings from 6pm - 9:30pm</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
