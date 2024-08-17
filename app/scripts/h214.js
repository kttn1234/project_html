$(document).ready(function () {
  // chartjs
  const Utils = ChartUtils.init()
  Chart.defaults.backgroundColor = '#fff';
  Chart.defaults.borderColor = 'rgba(255,255,255, 0.15)';
  Chart.defaults.color = '#fff';

  // animation
  // let easing = helpers.easingEffects.easeOutQuad;


// data
  const data = [];
  const data2 = [];
  let prev = 100;
  let prev2 = 80;
  for (let i = 0; i < 1000; i++) {
    prev += 5 - Math.random() * 10;
    data.push({x: i, y: prev});
    prev2 += 5 - Math.random() * 10;
    data2.push({x: i, y: prev2});
  }

  var dataMedia = {
    datasets: [{
      borderColor: Utils.CHART_COLORS.red,
      borderWidth: 1,
      radius: 0,
      data: data,
    },
    {
      borderColor: Utils.CHART_COLORS.blue,
      borderWidth: 1,
      radius: 0,
      data: data2,
    }]
  };

  var optionsMedia ={
    // animation,
    interaction: {
      intersect: false
    },
    plugins: {
      legend: false,
      title: {
        display: true,
        // text: () => easing.name
      }
    },
    scales: {
      y: {
        position: 'right'
      },
      x: {
        type: 'linear',
        display: false
      }
    }
  };
  new Chart('chartMedia', {
    type: 'line',
    options: optionsMedia,
    data: dataMedia
  });

});
