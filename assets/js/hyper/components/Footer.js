import {h, app} from 'hyperapp'

export default function Footer({state, actions}) {
  return (
    <section id="Footer">
      <div class="container">
          <nav class="Fmenu">
            <a href="#">Our story</a>
            <a href="#">reviews</a>
            <a href="#">special menu</a>
            <a href="#">reservations</a>
            <a href="#">contact us</a>
          </nav>
          <ul class="socialMedia">
            <li><a href="http://instagram.com"><i class="fab fa-instagram"></i></a></li>
            <li><a href="http://facebook.com"><i class="fab fa-facebook-square"></i></a></li>
            <li><a href="http://twitter.com"><i class="fab fa-twitter"></i></a></li>
            <li><a href="http://yelp.com"><i class="fab fa-yelp"></i></a></li>
          </ul>

          <div class="copyright">Website Built by ©RshauneB</div>
      </div>
    </section>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
