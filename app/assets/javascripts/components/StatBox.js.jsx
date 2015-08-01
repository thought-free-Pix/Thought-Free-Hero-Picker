//Legend titles
var LegendOptions = AppStore.getAlliedTeam();

//Data, preseeded a default starting value for axis drawing, may refactor utility later
var d = [
    [
    {axis:"Tankability",    value: 0.0},
    {axis:"Crowd Control",  value: 0.0},
    {axis:"Healing",        value: 0.0},
    {axis:"Lane Presence",  value: 0.0},
    {axis:"Damage",         value: 0.0},
    {axis:"Pushing",        value: 0.0}
    ],
];

// list of hero names in order that have their attr stat in 'd'
var dHeroNameList = [];

// Actual hero attribute data
function getAttrData(hero){
  // return hero attrs
  var attrHash = AppStore.getHeroAttr(hero);

  return [
    {axis:"Tankability",    value: attrHash["Tankability"]},
    {axis:"Crowd Control",  value: attrHash["Crowd Control"]},
    {axis:"Healing",        value: attrHash["Healing"]},
    {axis:"Lane Presence",  value: attrHash["Lane Presence"]},
    {axis:"Damage",         value: attrHash["Damage"]},
    {axis:"Pushing",        value: attrHash["Pushing"]},
  ]
}

//Updates input data to radarchart on call
function updateData(){
  while(d.length - 1 < AppStore.getAlliedTeam().length){
    // adds hero's attr to 'd' and adds hero name to 'dHeroNameList'
    var lastHero = AppStore.getAlliedTeam()[AppStore.getAlliedTeam().length - 1];
    var attrString = getAttrData(lastHero);
    dHeroNameList.push(lastHero);
    d.push(attrString);
  }
  while(d.length - 1 > AppStore.getAlliedTeam().length){
    // removes hero that was removed from 'Store' from 'd' and 'dHeroNameList'
    var removedHero = dHeroNameList.filter(function(i) {
                        return AppStore.getAlliedTeam().indexOf(i) < 0;
                      });
    d.splice(dHeroNameList.indexOf(removedHero[0]) + 1, 1);
    dHeroNameList.splice(dHeroNameList.indexOf(removedHero[0]), 1);
  }
}


var StatBox = React.createClass({
  componentWillMount: function(){
    AppStore.addChangeListener(this._onChange);
  },
  //Shows default radar chart for spacing, post-render for dom hook
  componentDidMount: function(){
    RadarChart.draw("#chart", d, LegendOptions);
  },
  componentWillUnmount: function(){
    AppStore.removeChangeListener(this._onChange);
  },
  //Updates data before drawing on change
  _onChange: function(){
    updateData();
    RadarChart.draw("#chart", d, LegendOptions);
  },

  render: function() {
      return (
      <div id="body">
        <div id="chart"></div>
      </div>
      )
  }
});
