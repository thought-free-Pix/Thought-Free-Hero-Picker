var HeroItemWrapper = React.createClass({
  render: function() {
    return <li key={this.props.key}>{this.props.data.attributes.name}</li>
  }
});


var Hello = React.createClass({

  componentWillMount: function() {
    var that = this;
    this.props.collection.on('sync add remove', function () {
      that.forceUpdate();
    });
  },

  render: function () {
    var heros = this.props.collection.models.map(function(hero, i) {
      return (
          <HeroItemWrapper key={hero.id} data={hero}/>
      )
    })

    return (
      <div>
        <ul>
          {heros}
        </ul>
      </div>
    );
  }

});
