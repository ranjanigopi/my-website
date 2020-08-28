const Greeting = (props) => React.createElement(
    'span', { className: 'greeting' },
    'First react code ' + props.content
);

const Home = () => React.createElement(
    'div', { id: 'main-page' }, [
        'hello',
        React.createElement(
            Greeting, { content: 'yay!' }
        ),
        React.createElement(
            Greeting, { content: 'yaVayy!' }
        ),
    ]
)

ReactDOM.render(
    React.createElement(
        Home
    ),
    document.getElementById('main')
)