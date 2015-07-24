var HeroIndex = React.createClass({

  componentWillMount: function() {
    var that = this;
    this.props.heros.on('sync add remove', function () {
      that.forceUpdate();
    });
  },

  render: function () {
    var that = this;
    var heroList = this.props.heros.models.map(function(hero, i){
      return (
        <li key={i}>
          <img className="heroImage" src="https://d1i1jxrdh2kvwy.cloudfront.net/Images/Heroes/Portraits/Murky.png"></img>

        </li>
      )
    });

    return (
      <div>
        <h3>Heros Index</h3>
        <ul>{heroList}</ul>
      </div>
    )
  },

});
