
function calcWin(){
  return {
    suggestions: AppStore.getSuggestions()
  }
}

var SuggestionBox = React.createClass({
  getInitialState: function(){
    return calcWin();
  },

  clickHandler: function(hero){
    AppActions.addAllied(hero);
  },

  componentWillMount: function(){
    AppStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function(){
    AppStore.removeChangeListener(this._onChange);
  },

  _onChange: function(){
    this.setState(calcWin());
  },

  render: function(){
    var cutSuggestions = this.state.suggestions.slice(0,5);
    var that = this;

    var suggestionList = cutSuggestions.map(function(heroname, i){
        return (
          <li key = {i}>
            <div className="SuggestionBoxEntry" onClick = { that.clickHandler.bind(that, heroname) }>
              <HeroBox hero={heroname} />
              <p>{i+1}</p>
            </div>
          </li>
        )
      })

    return (
    <div className="">
      <ul>
        { suggestionList }
      </ul>
    </div>
    )
  },

});
