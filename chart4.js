var ctx4 = document.getElementById('polarChart').getContext('2d');
var polarChart = new Chart(ctx4, {
    type: 'polarArea',
    data: {
        labels: ['No Direct Exposure', 'Field worker', 'Pesticide Applicator', 'Mixes and handles'],
        datasets: [{
            label: 'Exposure to Pesticides',
            data: [1067, 360, 83, 28],
            backgroundColor: [
                'rgba(0, 181, 204, 0.6)',
                'rgba(44, 130, 201, 0.6)',
                'rgba(30, 81, 123, 0.6)',
                'rgba(40, 67, 135, 0.6)'
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',  // Light Blue
                'rgba(75, 192, 192, 1)',  // Aqua Blue
                'rgba(30, 144, 255, 1)',  // Dodger Blue
                'rgba(70, 130, 180, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Exposure to Pesticides',
                font: {
                    size: 16,
                    weight: 'bold'
                },
                color: '#061a3a'
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        let label = context.label || '';
                        let value = context.raw;
                        return `${label}: ${value} Individuals`; // Add "Individuals" after the value
                    }
                }
            },
            legend: {
                position: 'bottom', // Position the legend at the bottom
            }
        },
        scales: {
            r: {
                ticks: {
                    backdropColor: 'rgba(255, 255, 255, 0.6)', // Background color behind tick labels
                    color: '#333' // Tick label color
                },
                grid: {
                    color: 'rgba(0, 0, 0, 0.1)' // Grid line color
                }
            }
        }
    }
});
