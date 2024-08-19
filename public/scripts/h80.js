$(document).ready(function () {
  //  chartjs
  const Utils = ChartUtils.init()
  Chart.defaults.backgroundColor = '#fff';
  Chart.defaults.borderColor = 'rgba(255,255,255, 0.15)';
  Chart.defaults.color = '#fff';
  var NUM_DATA = 130;
  var NUM_CFG = {count: NUM_DATA, min: 0, max: 0.2};

  var dataMonthly = {
    // labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    labels: ["Jul 2024"],
    // labels: Utils.months({count: NUM_DATA}),
    datasets: [
      {
        label: "Postings",
        backgroundColor: "#de314a",
        borderColor: "#ffffff",
        borderWidth: 0,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        // data: Utils.numbers(NUM_CFG),
      },
      {
        label: "Sent Comments",
        backgroundColor: "#f78c5a",
        borderColor: "#ffffff",
        borderWidth: 0,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        // data: Utils.numbers(NUM_CFG),
      },
      {
        label: "Chat Messages",
        backgroundColor: "#ffe76b",
        borderColor: "#ffffff",
        borderWidth: 0,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        // data: Utils.numbers(NUM_CFG),
      },
      {
        label: "Media Items",
        backgroundColor: "#319cce",
        borderColor: "#ffffff",
        borderWidth: 0,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        // data: Utils.numbers(NUM_CFG),
      },
    ]
  };

  var dataYearly = {
    // labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    labels: ["2024"],
    // labels: Utils.months({count: NUM_DATA}),
    datasets: [
      {
        label: "Postings",
        backgroundColor: "#de314a",
        borderColor: "#ffffff",
        borderWidth: 0,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        // data: Utils.numbers(NUM_CFG),
      },
      {
        label: "Sent Comments",
        backgroundColor: "#f78c5a",
        borderColor: "#ffffff",
        borderWidth: 0,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        // data: Utils.numbers(NUM_CFG),
      },
      {
        label: "Chat Messages",
        backgroundColor: "#ffe76b",
        borderColor: "#ffffff",
        borderWidth: 0,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        // data: Utils.numbers(NUM_CFG),
      },
      {
        label: "Media Items",
        backgroundColor: "#319cce",
        borderColor: "#ffffff",
        borderWidth: 0,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        // data: Utils.numbers(NUM_CFG),
      },
    ]
  };

  var dataDaily = {
    // labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    labels: ["Jul 2024"],
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    datasets: [
      {
        label: "Postings",
        backgroundColor: "#de314a",
        borderColor: "#ffffff",
        borderWidth: 0,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        // data: Utils.numbers(NUM_CFG),
      },
      {
        label: "Sent Comments",
        backgroundColor: "#f78c5a",
        borderColor: "#ffffff",
        borderWidth: 0,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        // data: Utils.numbers(NUM_CFG),
      },
      {
        label: "Chat Messages",
        backgroundColor: "#ffe76b",
        borderColor: "#ffffff",
        borderWidth: 0,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        // data: Utils.numbers(NUM_CFG),
      },
      {
        label: "Media Items",
        backgroundColor: "#319cce",
        borderColor: "#ffffff",
        borderWidth: 0,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        // data: Utils.numbers(NUM_CFG),
      },
    ]
  };

  var NUM_DATA_HOURS = 130;
  var NUM_CFG_HOURS = {count: NUM_DATA, min: 0, max: 0.2};
  var dataHourly = {
    // labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    // labels: ["Jul 2024"],
    labels: ["00 - 01", "01 - 02", "02 - 03", "03 - 04",  "04 - 05","05 - 06", "06 - 07", "07 - 08", "08 - 09","09 - 10", "10 - 11", "11 - 12", "12 - 13", "13 - 14", "14 - 15", "15 - 16", "16 - 17", "17 - 18", "18 - 19","19 - 20", "20 - 21", "21 - 22", "22 - 23", "23 - 24"],
    datasets: [
      {
        label: "Postings",
        backgroundColor: "#de314a",
        borderColor: "#ffffff",
        borderWidth: 0,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        // data: Utils.numbers(NUM_CFG_HOURS),
      },
      {
        label: "Sent Comments",
        backgroundColor: "#f78c5a",
        borderColor: "#ffffff",
        borderWidth: 0,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        // data: Utils.numbers(NUM_CFG_HOURS),
      },
      {
        label: "Chat Messages",
        backgroundColor: "#ffe76b",
        borderColor: "#ffffff",
        borderWidth: 0,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        // data: Utils.numbers(NUM_CFG_HOURS),
      },
      {
        label: "Media Items",
        backgroundColor: "#319cce",
        borderColor: "#ffffff",
        borderWidth: 0,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        // data: Utils.numbers(NUM_CFG_HOURS),
      },
    ]
  };

  

  var optionsMonthly = {
    responsive: true, 
    maintainAspectRatio: false,
    scales: {
      y: {
        // stacked: true,
        grid: {
          display: true,
          // color: "#f7f7f7",
          // drawOnChartArea: false,
          drawTicks: false,
        },
        ticks: {
          stepSize: 0.2,
          suggestedMin: 0,  
          suggestedMax: 10,  
        },
             
      },
      x: {
        grid: {
          display: true,
        }
      }
    },
    plugins: {
      title: {
        display: true,
        text: 'Monthly',
        align: 'start'
      }
    }
  };

  var optionsYearly = {
    responsive: true, 
    maintainAspectRatio: false,
    scales: {
      y: {
        grid: {
          display: true,
          // color: "#f7f7f7",          
        },
        ticks: {
          stepSize: 0.2,
          suggestedMin: 0,  
          suggestedMax: 10,  
        }        
      },
      x: {
        grid: {
          display: true
        }
      }
    },
    plugins: {
      title: {
        display: true,
        text: 'Yearly',
        align: 'start'
      }
    }
  };

  var optionsDaily = {
    responsive: true, 
    maintainAspectRatio: false,
    scales: {
      y: {
        grid: {
          display: true,
          // color: "#f7f7f7",
        },
        ticks: {
          stepSize: 0.2,
          suggestedMin: 0,  
          suggestedMax: 10,  
        }        
      },
      x: {
        grid: {
          display: true
        },
        ticks: {
          maxRotation: 30,
          minRotation: 30,            
        }
      }
    },
    plugins: {
      title: {
        display: true,
        text: 'Daily',
        align: 'start'
      }
    }
  };

  var optionsHourly = {
    responsive: true, 
    maintainAspectRatio: false,
    scales: {
      y: {
        grid: {
          display: true,
          // color: "#f7f7f7",
          drawTicks: false,
        },
        ticks: {
          stepSize: 0.2,
          suggestedMin: 0,  
          suggestedMax: 10,  
        },
             
      },
      x: {
        grid: {
          display: true,
        },
        ticks: {
          maxRotation: 30,
          minRotation: 30,
        }
      }
    },
    plugins: {
      title: {
        display: true,
        text: 'Hourly',
        align: 'start'
      }
    }
  };
  

  
 
  if($(".chart-date").length) {
    new Chart('chartMonthly', {
      type: 'bar',
      options: optionsMonthly,
      data: dataMonthly
    });
    new Chart('chartYearly', {
      type: 'bar',
      options: optionsYearly,
      data: dataYearly
    });

    new Chart('chartDaily', {
      type: 'bar',
      options: optionsDaily,
      data: dataDaily
    });

    new Chart('chartHourly', {
      type: 'bar',
      options: optionsHourly,
      data: dataHourly
    });
  }

 

});
