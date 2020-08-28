const Greeting = props => /*#__PURE__*/ React.createElement("span", {
    className: "greeting"
}, "First react code ", props.content);

const Home = () => /*#__PURE__*/ React.createElement("div", {
    id: "main-page"
}, "hello", /*#__PURE__*/ React.createElement(Greeting, {
    content: "yay!"
}), /*#__PURE__*/ React.createElement(Greeting, {
    content: "yaVayy!"
}));

ReactDOM.render( /*#__PURE__*/ React.createElement(Home, null), document.getElementById('main'));