import {h, app} from 'hyperapp'

export default function Header({state, actions}) {
  return (
    <header>
    <div class="container">
      <div class="logo">logo</div>
        <nav>
          <ul>
            <a href="#">Our story</a>
            <a href="#">reviews</a>
            <a href="#">special menu</a>
            <a href="#">reservations</a>
            <a href="#">contact us</a>
          </ul>
        </nav>
      </div>
    </header>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
