


var HeroSelect = React.createClass({
  clickHandler: function(hero){
    this.setState({currentSelection: hero.name});
  },

  toAlly: function(){
    if(this.state.currentSelection !== "None"){
      AppActions.addAllied(this.state.currentSelection);
    } else {
      console.log('Select a hero first!');
    }
  },

  toEnemy: function(){
    if(this.state.currentSelection !== "None"){
      AppActions.addEnemy(this.state.currentSelection);
    } else {
      console.log('Select a hero first!');
    }
  },

  getInitialState: function(){
    return {
      currentSelection: 'None'
    };
  },

  componentWillMount: function( ) {
  },

  render: function() {
    var that = this;
    var heroes = this.props.HeroList.map(function(hero, i){
      return (
        <li key = {i}>
          <div onClick={ that.clickHandler.bind(that, hero)} >
            <HeroBox hero={hero.name} />
          </div>
        </li>
      )
    })

    return (
      <div className="selectionWrapper">
        <div className="currentSelectionContainer">
          <button onClick={ this.toAlly }>Ally</button>
          <button onClick={ this.toEnemy }>Enemy</button>
          <div>{ this.state.currentSelection }</div>
        </div>

        <ul id="categories" className="clr">
          { heroes }
        </ul>
      </div>
    )
  }
})
