var textCounter = React.createClass({
  propTypes: {
    text: React.PropTypes.string
  },
  getDefaultProps: function(){
    return {
      text: ''
    }
  },
  getInitialState: function(){
    return{
      text: this.props.text
    }
  },
  _textChange: function(ev){
      this.setState({
        text: ev.target.value
      })

  },
  render: function(){
    return React.DOM.div(null,
      React.DOM.textarea({
        value: this.state.text,
        onChange: this._textChange
    }),
     React.DOM.h3(null, this.state.text.length))
  }
});

ReactDOM.render(React.createElement(textCounter, {
  text: 'Rahul'
}), document.getElementById('app'));
