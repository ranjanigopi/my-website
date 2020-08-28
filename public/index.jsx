const Greeting = (props) => (
    <span className='greeting'>
        First react code {props.content}
    </span>
);

const Home = () => (
    <div id='main-page'>
        hello
        <Greeting  content='yay!'/>
        <Greeting  content='yaVayy!'/>
    </div>
)

ReactDOM.render(
    <Home/>,
    document.getElementById('main')
)
