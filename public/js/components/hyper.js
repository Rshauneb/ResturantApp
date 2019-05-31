webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var actions = exports.actions = {
  reviewRightClicked: reviewRightClicked,
  reviewleftClicked: reviewleftClicked,
  intro: intro,
  showMenu: showMenu
};

function reviewRightClicked(state, actions) {
  return {
    reviewStatus: {
      currentReview: state.globalState.reviewStatus.currentReview += 1
    }
  };
}
function reviewleftClicked(state, actions) {
  return {
    reviewStatus: {
      currentReview: state.globalState.reviewStatus.currentReview -= 1
    }
  };
}

function showMenu() {}

function intro(state, actions) {
  console.log('Just ran my first action');
  return { count: state.count + 1 };
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = App;

var _hyperapp = __webpack_require__(0);

var _header = __webpack_require__(10);

var _header2 = _interopRequireDefault(_header);

var _topImg = __webpack_require__(11);

var _topImg2 = _interopRequireDefault(_topImg);

var _OurStory = __webpack_require__(6);

var _OurStory2 = _interopRequireDefault(_OurStory);

var _SpecialMenu = __webpack_require__(9);

var _SpecialMenu2 = _interopRequireDefault(_SpecialMenu);

var _RandomQuote = __webpack_require__(7);

var _RandomQuote2 = _interopRequireDefault(_RandomQuote);

var _Review = __webpack_require__(8);

var _Review2 = _interopRequireDefault(_Review);

var _ContactUS = __webpack_require__(4);

var _ContactUS2 = _interopRequireDefault(_ContactUS);

var _Footer = __webpack_require__(5);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "div",
    { "class": 'app' },
    (0, _hyperapp.h)(_header2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_topImg2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_OurStory2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_SpecialMenu2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_RandomQuote2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_Review2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_ContactUS2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_Footer2.default, { state: state, actions: actions })
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var companyInfo = {
  title: 'prime steak resturant',
  phone: '(416) 111-1111',
  location: '123 mad FROSTY LANE M7Q 3O5'
};

var specialMenuData = [{
  title: 'item1',
  description: 'fried eggs, steak baked potatoes with a side a fresh organi vegetables',
  price: 25
}, {
  title: 'item2',
  description: 'fried eggs, steak baked potatoes with a side a fresh organi vegetables',
  price: 22
}, {
  title: 'item3',
  description: 'fried eggs, steak baked potatoes with a side a fresh organi vegetables',
  price: 29
}];

var reviewsData = [{
  review: '"THIS RESTURANT IS AWESOME AND THE STAFF ARE SO POLITE!"',
  author: '- john doe',
  highlight: 'WHAT FOOD CONNOISSEURS SAY ABOUT US'
}, {
  review: '"The food is to die for"',
  author: '- jason mark',
  highlight: 'Worth dying over?'
}, {
  review: '"better than my secret reciept"',
  author: '- Mr.krabs',
  highlight: 'from the man himself'
}, {
  review: '"i think what they are doing here is amazing and i see tons of potential with this up and coming resturant"',
  author: '- gordon ramsy',
  highlight: 'good words from a veteran chef'
}];

var randomQuoteData = [{
  quote: '"Cooking Is At Once Child\'s Play And Adult Joy. And Cooking Done With Care Is An Act Of Love"',
  author: ' - Craig Claiborne'
}, {
  quote: '"All you need is love. But a little chocolate now and then doesn\'t hurt"',
  author: ' ― Charles M. Schulz'
}, {
  quote: '"Ask not what you can do for your country. Ask what’s for lunch."',
  author: ' ― Orson Welles'
}];

var globalState = exports.globalState = {
  count: 0,
  companyInfo: companyInfo,
  specialMenuData: specialMenuData,
  reviewsData: reviewsData,
  randomQuoteData: randomQuoteData,
  reviewStatus: {
    currentReview: 0
  }
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ContactUS;

var _hyperapp = __webpack_require__(0);

function ContactUS(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "ContactUS" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "h5",
        { "class": "comp-title" },
        "Contact us"
      ),
      (0, _hyperapp.h)(
        "h2",
        null,
        "Contact us"
      ),
      (0, _hyperapp.h)(
        "div",
        { "class": "box" },
        (0, _hyperapp.h)(
          "div",
          { "class": "row" },
          (0, _hyperapp.h)(
            "div",
            { "class": "col-md-6" },
            (0, _hyperapp.h)(
              "div",
              { "class": "title" },
              "Toronto, On"
            ),
            (0, _hyperapp.h)(
              "h6",
              { "class": "address" },
              state.globalState.companyInfo.location
            ),
            (0, _hyperapp.h)(
              "p",
              { "class": "email" },
              (0, _hyperapp.h)(
                "strong",
                null,
                "Email: "
              ),
              (0, _hyperapp.h)(
                "a",
                { href: "mailto:123@123.com" },
                "123@123.com"
              )
            )
          ),
          (0, _hyperapp.h)(
            "div",
            { "class": "col-md-6" },
            (0, _hyperapp.h)(
              "h6",
              null,
              "phone:"
            ),
            (0, _hyperapp.h)(
              "div",
              { "class": "title" },
              "416-111-1111"
            ),
            (0, _hyperapp.h)(
              "h6",
              null,
              "lunch service"
            ),
            (0, _hyperapp.h)(
              "p",
              null,
              "friday and sunday bookings ",
              (0, _hyperapp.h)("br", null),
              " from 12pm - 1:30pm"
            ),
            (0, _hyperapp.h)(
              "h6",
              null,
              "dinner service"
            ),
            (0, _hyperapp.h)(
              "p",
              null,
              "daily bookings from 6pm - 9:30pm"
            )
          )
        )
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Footer;

var _hyperapp = __webpack_require__(0);

function Footer(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "Footer" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "nav",
        { "class": "Fmenu" },
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Our story"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "reviews"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "special menu"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "reservations"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "contact us"
        )
      ),
      (0, _hyperapp.h)(
        "ul",
        { "class": "socialMedia" },
        (0, _hyperapp.h)(
          "li",
          null,
          (0, _hyperapp.h)(
            "a",
            { href: "http://instagram.com" },
            (0, _hyperapp.h)("i", { "class": "fab fa-instagram" })
          )
        ),
        (0, _hyperapp.h)(
          "li",
          null,
          (0, _hyperapp.h)(
            "a",
            { href: "http://facebook.com" },
            (0, _hyperapp.h)("i", { "class": "fab fa-facebook-square" })
          )
        ),
        (0, _hyperapp.h)(
          "li",
          null,
          (0, _hyperapp.h)(
            "a",
            { href: "http://twitter.com" },
            (0, _hyperapp.h)("i", { "class": "fab fa-twitter" })
          )
        ),
        (0, _hyperapp.h)(
          "li",
          null,
          (0, _hyperapp.h)(
            "a",
            { href: "http://yelp.com" },
            (0, _hyperapp.h)("i", { "class": "fab fa-yelp" })
          )
        )
      ),
      (0, _hyperapp.h)(
        "div",
        { "class": "copyright" },
        "Website Built by \xA9RshauneB"
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = OurStory;

var _hyperapp = __webpack_require__(0);

function OurStory(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "OurStory" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "div",
        { "class": "row" },
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-6" },
          (0, _hyperapp.h)(
            "h5",
            null,
            "our story"
          ),
          (0, _hyperapp.h)(
            "h2",
            null,
            "cooking is the art of adjustment"
          ),
          (0, _hyperapp.h)(
            "p",
            null,
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris elementum ullamcorper augue ac interdum. Cras efficitur augue ex, vel tincidunt enim varius et. Aliquam erat."
          ),
          (0, _hyperapp.h)(
            "div",
            { "class": "quote" },
            "\"Best steak in the city\" - ",
            (0, _hyperapp.h)(
              "strong",
              null,
              "John doe"
            )
          ),
          (0, _hyperapp.h)(
            "a",
            { href: "#", "class": "reserve-btn" },
            "Reserve"
          )
        ),
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-6" },
          (0, _hyperapp.h)("div", { "class": "video-img" })
        )
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = RandomQuote;

var _hyperapp = __webpack_require__(0);

function RandomQuote(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "randomQuote", style: {
        // backgroundColor: "red"
        backgroundImage: "url('https://i.postimg.cc/NFDHBdYZ/pasta-skillet-min.jpg')"
      } },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "h1",
        null,
        "\"Cooking is at once child's play and adult joy. And cooking done with care is an act of love\""
      ),
      (0, _hyperapp.h)(
        "span",
        { "class": "author" },
        "- Craig Claiborne"
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Review;

var _hyperapp = __webpack_require__(0);

function Review(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  console.log(state.globalState.reviewsData[state.globalState.reviewStatus.currentReview].review);
  var currentReview = function currentReview() {
    return (0, _hyperapp.h)(
      "div",
      null,
      (0, _hyperapp.h)(
        "p",
        null,
        "Reviews"
      ),
      (0, _hyperapp.h)("h2", { "class": "rev-title" }),
      (0, _hyperapp.h)(
        "div",
        { "class": "review" },
        state.globalState.reviewsData[state.globalState.reviewStatus.currentReview].review
      ),
      (0, _hyperapp.h)(
        "div",
        { "class": "review-person" },
        state.globalState.reviewsData[state.globalState.reviewStatus.currentReview].author
      )
    );
  };

  var leftclickBtn = function leftclickBtn() {
    if (state.globalState.reviewStatus.currentReview == 0) {
      // console.log("do nothing...1");
    } else {
      actions.reviewleftClicked();
    }
  };
  var rightclickBtn = function rightclickBtn() {
    if (state.globalState.reviewStatus.currentReview == state.globalState.reviewsData.length - 1) {
      // console.log("do nothing...2");
    } else {
      actions.reviewRightClicked();
    }
  };

  return (0, _hyperapp.h)(
    "section",
    { id: "Review" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "div",
        { "class": "col-md-8 right" },
        (0, _hyperapp.h)(
          "div",
          { "class": "side img" },
          (0, _hyperapp.h)("img", { src: "https://i.postimg.cc/RCLf7ZfG/cafe.jpg" })
        )
      ),
      (0, _hyperapp.h)(
        "div",
        { "class": "col-md-4 left" },
        currentReview(),
        (0, _hyperapp.h)(
          "div",
          { "class": "arrows" },
          (0, _hyperapp.h)("i", { onclick: leftclickBtn, "class": "fas fa-angle-left " + (state.globalState.reviewStatus.currentReview > 0 ? 'ready' : ' ') }),
          (0, _hyperapp.h)("i", { onclick: rightclickBtn, "class": "fas fa-angle-right " + (state.globalState.reviewStatus.currentReview == state.globalState.reviewsData.length - 1 ? '' : 'ready') })
        )
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

// <img src="https://images.pexels.com/photos/390403/pexels-photo-390403.jpeg?auto=compress&cs=tinysrgb&h=350"/>

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SpecialMenu;

var _hyperapp = __webpack_require__(0);

function SpecialMenu(_ref) {
  var state = _ref.state,
      actions = _ref.actions;


  console.log("working");

  var loopMenu = function loopMenu() {
    return state.globalState.specialMenuData.map(function (item) {
      console.log(item.title);
      return (0, _hyperapp.h)(
        "div",
        { "class": "col-md-4" },
        (0, _hyperapp.h)(
          "div",
          { "class": "box" },
          (0, _hyperapp.h)(
            "div",
            { "class": "box-img" },
            (0, _hyperapp.h)(
              "div",
              { "class": "price-circle" },
              "$",
              item.price
            )
          ),
          (0, _hyperapp.h)(
            "span",
            { "class": "title" },
            item.title
          ),
          (0, _hyperapp.h)(
            "p",
            { "class": "details" },
            item.description
          )
        )
      );
    });
  };

  return (0, _hyperapp.h)(
    "section",
    { id: "SpecialMenu" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "h5",
        { "class": "comp-title" },
        "Special Menu"
      ),
      (0, _hyperapp.h)(
        "h2",
        null,
        " Delicious Flavours of autumn"
      ),
      (0, _hyperapp.h)(
        "div",
        { "class": "row boxes" },
        loopMenu()
      ),
      (0, _hyperapp.h)(
        "a",
        { href: "#", "class": "link" },
        "view full menu"
      )
    )
  );
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

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Header;

var _hyperapp = __webpack_require__(0);

function Header(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "header",
    null,
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "div",
        { "class": "logo" },
        "logo"
      ),
      (0, _hyperapp.h)(
        "nav",
        null,
        (0, _hyperapp.h)(
          "ul",
          null,
          (0, _hyperapp.h)(
            "a",
            { href: "#" },
            "Our story"
          ),
          (0, _hyperapp.h)(
            "a",
            { href: "#" },
            "reviews"
          ),
          (0, _hyperapp.h)(
            "a",
            { href: "#" },
            "special menu"
          ),
          (0, _hyperapp.h)(
            "a",
            { href: "#" },
            "reservations"
          ),
          (0, _hyperapp.h)(
            "a",
            { href: "#" },
            "contact us"
          )
        )
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TopIMG;

var _hyperapp = __webpack_require__(0);

function TopIMG(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "topImg" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "div",
        { "class": "title" },
        (0, _hyperapp.h)(
          "h5",
          null,
          "Welcome"
        ),
        (0, _hyperapp.h)(
          "h1",
          null,
          state.globalState.companyInfo.title
        )
      ),
      (0, _hyperapp.h)(
        "div",
        { "class": "contact-info" },
        (0, _hyperapp.h)(
          "div",
          { "class": "booking" },
          "Book table directly"
        ),
        (0, _hyperapp.h)(
          "h2",
          null,
          "(416) 111-1111"
        ),
        (0, _hyperapp.h)(
          "div",
          { "class": "hours" },
          (0, _hyperapp.h)(
            "strong",
            null,
            "Mon - Friday"
          ),
          " 9AM - 11PM ",
          (0, _hyperapp.h)(
            "strong",
            null,
            "Sat"
          ),
          " closed ",
          (0, _hyperapp.h)(
            "strong",
            null,
            "sunday "
          ),
          " 12am - 7PM"
        )
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _hyperapp = __webpack_require__(0);

var _actions = __webpack_require__(1);

var _globalState = __webpack_require__(3);

var _App = __webpack_require__(2);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _hyperapp.app)({
  state: { globalState: _globalState.globalState },
  view: function view(state, actions) {
    return (0, _hyperapp.h)(_App2.default, { state: state, actions: actions });
  },
  root: document.getElementById('app'),
  actions: _actions.actions,
  events: {
    action: function action(state, actions, _ref) {
      var name = _ref.name,
          data = _ref.data;

      console.group("Action Info");
      console.log("Name:", name);
      console.log("Data:", data);
      console.groupEnd();
    },
    load: function load(state, actions) {
      actions.intro();
    }
  }
});

/***/ })
],[12]);