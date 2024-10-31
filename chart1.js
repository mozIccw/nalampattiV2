var ctx = document.getElementById('lineChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Hypertension', 'Diabetes', 'Stomach Ulcer', 'Heart Attack', 'Hypercholesterol', 'Covid-19', 'Hyper_or_Hypothyr', 'Kidney_stones', 'Kidney Failure'],
        datasets: [{
            label: 'Disease Count',
            data: [202, 151, 133, 47, 43, 39, 25, 13, 4],
            backgroundColor: [
                'rgba(45, 171, 235, 1)'
            ],
            borderColor: 'rgb(6, 26, 58)',

            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,  // Allow custom aspect ratio
        aspectRatio: 1,
        scales: {
           x: {
              title: {
                 display: true,
                 text: 'Disease Type', // X-axis title
                 font: {
                    size: 12
                 },
                 color: '#061a3a'
              }
           },
           y: {
               title: {
                    display: true,
                    text: 'Number of Disease Occurrences', // Y-axis title
                    font: {
                        size: 12
                    },
                    color: '#061a3a'
               }
           }
        },
        plugins: {
            title: {
                display: true,
                text: 'Disease Count of the Surveyed Population', // Chart title text
                position: 'top', // Position at the top
                align: 'center',  // Center-align the title
                font: {
                    size: 16,
                    weight: 'bold'
                },
                color: '#061a3a' // Title color
            },
            tooltip: {
                enabled: true,
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                titleFont: {
                    size: 14
                },
                bodyFont: {
                    size: 12
                },
                callbacks: {
                    label: function(context) {
                        let label = context.dataset.label || '';
                        if (label) {
                            label += ': ';
                        }
                        label += context.raw + ' Individuals'; // Add "People" after the value
                        return label;
                    }
                },
                bodySpacing: 5,
                padding: 10,
                cornerRadius: 5,
                mode: 'nearest', // Show the nearest point's data
                intersect: false, // Display tooltips even if hovering in between points
            },
            legend: {
              display: false
            }
        },
        animation: {
            duration: 1000, // Animation duration in milliseconds
            easing: 'easeOutBounce', // Type of animation easing
        },
        hover: {
            mode: 'nearest', // Show nearest point details when hovered
            intersect: true
        }
    }
});