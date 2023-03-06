// Initialize the echarts instance based on the prepared dom
var myChart = echarts.init(document.getElementById('chart'));

// Specify the configuration items and data for the chart
var option = {
    title: {
    text: 'Good & Bad'
    },
    tooltip: {},
    legend: {
    data: ['Good', 'Bad']
    },
    xAxis: {
    data: ['Good', 'Bad']
    },
    yAxis: {},
    series: [
    {
        type: 'bar',
        data: ['goodData', 'badData']
    }
    ]
};

// Display the chart using the configuration items and data just specified.
myChart.setOption(option);

var goodButton = document.getElementById('btn-good');
var badButton = document.getElementById('btn-bad');

var goodData = goodButton.value = 0;
var badData = badButton.value = 0;

goodButton.addEventListener('click', () => {
    myChart.setOption({
        series: [
            {
                name: 'Good',
                type: 'bar',
                data: [goodData ++, badData],
                color: '#4caf50',
                value: goodData
            }
        ]
    });
});

badButton.addEventListener('click', () => {
    myChart.setOption({
        series: [
            {
                name: 'Bad',
                type: 'bar',
                data: [goodData, badData ++],
                color: '#f44336',
                value: badData
            }
        ]
    });
});