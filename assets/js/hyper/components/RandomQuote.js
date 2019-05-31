import {h, app} from 'hyperapp'

export default function RandomQuote({state, actions}) {
  return (
    <section id="randomQuote" style={{
      // backgroundColor: "red"
      backgroundImage: "url('https://i.postimg.cc/NFDHBdYZ/pasta-skillet-min.jpg')"
}}>
      <div class="container">
        <h1>"Cooking is at once child's play and adult joy. And cooking done with care is an act of love"</h1>
        <span class="author">- Craig Claiborne</span>
      </div>
    </section>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
