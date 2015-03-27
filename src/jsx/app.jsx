var React = require('react/addons'),
    Select = require('react-select');
var DATA = require('./data.jsx');
var App = React.createClass({
  getInitialState: function() {
    return {
      options: [],
      members: [],
      before_event_count: 0,
      after_event_count:  0,
    };
  },
  onLabelClick: function (data, event) {
    console.log(data);
  },
  onChange: function (data, event) {
    console.log(data);
  },
  render: function() {
    var cx = React.addons.classSet;
    return <section>
		Hello world
    </section>
  }
});

React.render(
  <App/>,
  document.getElementById('app')
);
