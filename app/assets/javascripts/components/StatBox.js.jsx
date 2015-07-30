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

//Temporary random data generator for testing chart updating
function randomData(){
  return [
    {axis:"Tankability",    value: Math.random().toFixed(2)},
    {axis:"Crowd Control",  value: Math.random().toFixed(2)},
    {axis:"Healing",        value: Math.random().toFixed(2)},
    {axis:"Lane Presence",  value: Math.random().toFixed(2)},
    {axis:"Damage",         value: Math.random().toFixed(2)},
    {axis:"Pushing",        value: Math.random().toFixed(2)},
  ]
}

//Updates input data to radarchart on call
function updateData(){
  while(d.length - 1 < AppStore.getAlliedTeam().length){
    var randomVal = randomData();
    d.push(randomVal);
  } 
  while(d.length - 1 > AppStore.getAlliedTeam().length){
    d.pop();
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