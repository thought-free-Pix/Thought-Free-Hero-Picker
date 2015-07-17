var HeroIndex = React.createClass({

  render: function () {
    var that = this;
    var heroList = this.props.heros.map(function(hero, i){
      return (
        <li key={i}>
          <img class="heroImage" src="https://d1i1jxrdh2kvwy.cloudfront.net/Images/Heroes/Portraits/Murky.png"></img>
          <div>{hero}</div>
        </li>
      )
    });

    return (
      <div>
        <h3>Heros Index</h3>
      </div>
    )
  },

});
