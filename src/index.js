import Nerv from 'nervjs'; // import nervjs
// create a component to hold Hello Message
class HelloMessage extends Nerv.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}
//Render our element into  with id .
Nerv.render(
  <HelloMessage name="Nerv" />,
  document.getElementById('app')
);

