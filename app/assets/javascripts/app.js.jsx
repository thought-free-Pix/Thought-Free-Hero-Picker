function getAllHeroes(){
  return ({
    HeroList: AppStore.getHeroArray(),
    AlliedTeam: {
      TeamComp: AppStore.getAlliedTeam(),
      Add: AppActions.addAllied,
      Remove: AppActions.removeAllied,
      Title: 'Allied Team',
    },
    EnemyTeam: {
      TeamComp: AppStore.getEnemyTeam(),
      Add: AppActions.addEnemy,
      Remove: AppActions.removeEnemy,
      Title: 'Enemy Team',
    }
  })
};



var App = React.createClass({

  getInitialState: function( ) {
    return getAllHeroes();
  },

  componentWillMount: function( ) {
    this.setState(getAllHeroes());
  },
  componentWillUnmount: function( ) {
  },

  render: function( ) {

    return (
      <div className="pageWrapper">

        <NavigationBar />
        <div className="SuggestionBox">
          <h3> Recommendations </h3>
          <SuggestionBox />
        </div>

        <div className="teamWrapper">
          <div className="allyContainer teamContainer">
            <Team team={this.state.AlliedTeam} />
          </div>


          <div className="enemyContainer teamContainer">
            <Team team={this.state.EnemyTeam} />
          </div>
        </div>

        <div>
          <HeroSelect HeroList = {this.state.HeroList} />
        </div>

    </div>
    )
  }
});


var ready = function () {
  React.render(
    <App />,
    document.getElementById('app')
  );
};

$(document).ready(ready);
