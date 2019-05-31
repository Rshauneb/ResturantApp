import {h, app} from 'hyperapp'
import Header from "./header.js"
import TopIMG from "./topImg.js"
import OurStory from "./OurStory.js"
import SpecialMenu from "./SpecialMenu.js"
import RandomQuote from "./RandomQuote.js"
import Review from "./Review.js"
import ContactUS from "./ContactUS.js"
import Footer from "./Footer.js"


export default function App({state, actions}) {
  return (
    <div class={'app'}>
    <Header state={state} actions={actions}/>
    <TopIMG state={state} actions={actions}/>
    <OurStory state={state} actions={actions}/>
    <SpecialMenu state={state} actions={actions}/>
    <RandomQuote state={state} actions={actions}/>
    <Review state={state} actions={actions}/>
    <ContactUS state={state} actions={actions}/>
    <Footer state={state} actions={actions}/>

    </div>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
