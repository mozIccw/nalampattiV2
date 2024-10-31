// Turbidity Line Chart
var ctx1 = document.getElementById('turbidityChart').getContext('2d');
var turbidityChart = new Chart(ctx1, {
    type: 'line',
    data: {
        labels: Array.from({ length: 31 }, (_, i) => `Sample ${i + 1}`),
        datasets: [{
            label: 'Turbidity',
            data: [1.63, 7.67, 0.01, 0.03, 0.03, 0.04, 0.04, 0.04, 0.14, 0.13, 0.03, 0.5, 0.25, 0.16, 0.2, 0.23, 0.14, 0.02, 0.07, 0.12, 0.46, 0.41, 0.13, 0.29, 0.01, 0.24, 0.37, 0.1, 0.05, 0.43, 0.49],
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderWidth: 2,
            fill: true,
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'Turbidity Levels (2022)'
            }
        }
    }
});

// Grouped Bar Chart for Alkalinity and Hardness
var ctx2 = document.getElementById('barChart').getContext('2d');
var barChart = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: Array.from({ length: 31 }, (_, i) => `Sample ${i + 1}`),
        datasets: [
            {
                label: 'Alkalinity',
                data: [88.8, 177.6, 199.2, 124.8, 163.2, 213.6, 228, 158.4, 168, 130.8, 177.6, 77, 130, 12, 160, 240, 168, 108, 88, 24, 96, 216, 165.6, 104.4, 103.2, 206.4, 194.4, 187.2, 183.6, 194.4, 48],
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
            },
            {
                label: 'Hardness',
                data: [70, 148, 218, 124, 134, 242, 198, 122, 164, 118, 500, 77, 293, 216, 216, 252, 336, 109, 93.5, 96, 110.5, 230.4, 103.2, 192, 112.8, 18.48, 127.2, 117.6, 331.2, 220.8, 45.6],
                backgroundColor: 'rgba(255, 99, 132, 0.6)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            }
        ]
    },
    options: {
        responsive: true,
        scales: {
            x: {
                stacked: false
            },
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'Alkalinity vs Hardness (2022)'
            }
        }
    }
});

// Radar Chart for Chloride
var ctx3 = document.getElementById('radarChart').getContext('2d');
var radarChart = new Chart(ctx3, {
    type: 'radar',
    data: {
        labels: Array.from({ length: 31 }, (_, i) => `Sample ${i + 1}`),
        datasets: [{
            label: 'Chloride',
            data: [28.2, 63.5, 77.6, 42.3, 119.9, 211.5, 105.8, 49.4, 63.5, 28.2, 423, 91.65, 232.6, 26.085, 21.855, 77.55, 239.7, 49.35, 28.2, 28.2, 17.625, 77.55, 42.3, 35.25, 21.15, 98.7, 56.4, 63.45, 282, 162.15, 14.1],
            backgroundColor: 'rgba(30, 144, 255, 0.4)',
            borderColor: 'rgba(30, 144, 255, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Chloride Levels (2022)'
            }
        }
    }
});

// Pie Chart for pH
var ctx4 = document.getElementById('pieChart').getContext('2d');
var pieChart = new Chart(ctx4, {
    type: 'pie',
    data: {
        labels: ['7.4', '7.5', '7.6', '7.7', '7.8', '7.9', '8.0', '8.1', '8.2', '8.5'],
        datasets: [{
            data: [3, 3, 2, 4, 2, 8, 4, 3, 3, 1],
            backgroundColor: [
                'rgba(54, 162, 235, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(30, 144, 255, 0.6)',
                'rgba(70, 130, 180, 0.6)',
                'rgba(100, 149, 237, 0.6)',
                'rgba(0, 191, 255, 0.6)',
                'rgba(65, 105, 225, 0.6)',
                'rgba(0, 0, 255, 0.6)',
                'rgba(25, 25, 112, 0.6)',
                'rgba(0, 0, 139, 0.6)'
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(30, 144, 255, 1)',
                'rgba(70, 130, 180, 1)',
                'rgba(100, 149, 237, 1)',
                'rgba(0, 191, 255, 1)',
                'rgba(65, 105, 225, 1)',
                'rgba(0, 0, 255, 1)',
                'rgba(25, 25, 112, 1)',
                'rgba(0, 0, 139, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'pH Distribution (2022)'
            }
        }
    }
});

// Doughnut Chart for DO and Conductivity
var ctx5 = document.getElementById('doughnutChart').getContext('2d');
var doughnutChart = new Chart(ctx5, {
    type: 'doughnut',
    data: {
        labels: ['DO', 'Conductivity'],
        datasets: [{
            label: 'Water Quality Indicators',
            data: [
                75.7 + 76.1 + 75.7 + 76.1 + 74.3 + 74.7 + 74.9 + 73.9 + 76.3 + 76.4 + 77.5 + 74 + 73 + 70 + 71 + 72 + 69 + 68 + 69 + 68 + 58 + 75 + 71 + 82 + 68 + 74 + 71 + 75 + 75 + 69 + 73,
                342.8 + 826.7 + 1070 + 640.5 + 971.9 + 1686 + 1177 + 596 + 825.6 + 504.4 + 2386 + 461.6 + 1676 + 613.9 + 956.3 + 948.8 + 1708 + 420.5 + 376.1 + 439.7 + 469.6 + 1048 + 790.8 + 519.4 + 425.9 + 1139 + 953.9 + 957.8 + 1958 + 1488 + 206.5
            ],
            backgroundColor: [
                'rgba(65, 105, 225, 0.6)',
                'rgba(0, 0, 139, 0.6)'
            ],
            borderColor: [
                'rgba(65, 105, 225, 1)',
                'rgba(0, 0, 139, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'DO vs Conductivity (2022)'
            }
        }
    }
});