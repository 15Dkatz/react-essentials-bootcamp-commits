console.log('hi');

const element = React.createElement('div', null, 'React element!');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);
