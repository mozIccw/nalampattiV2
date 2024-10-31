document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('multiSeriesPieChart').getContext('2d');
    const multiSeriesPieChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: [
                'Farmers with Diseases',
                'Farmers without Diseases',
                'Homemakers with Diseases',
                'Homemakers without Diseases',
                'Unemployed with Diseases',
                'Unemployed without Diseases',
                'Small Business Owners with Diseases',
                'Small Business Owners without Diseases',
                'Professionals with Diseases',
                'Professionals without Diseases'
            ],
            datasets: [
                {
                    label: 'Farmers',
                    data: [143, 258],
                    backgroundColor: ['#9c081b', '#04718c'],
                    hoverOffset: 4
                },
                {
                    label: 'Homemakers',
                    data: [5, 16],
                    backgroundColor: ['#cf152d', '#0fb0d9'],
                    hoverOffset: 4
                },
                {
                    label: 'Unemployed due to aging',
                    data: [3, 2],
                    backgroundColor: ['#ed586c', '#64d2ed'],
                    hoverOffset: 4
                },
                {
                    label: 'Small scale business owners',
                    data: [7, 16],
                    backgroundColor: ['#eb8a97', '#92d1e0'],
                    hoverOffset: 4
                },
                {
                    label: 'Professional (Salaried)',
                    data: [4, 12],
                    backgroundColor: ['#f2bdc4', '#c5e5ed'],
                    hoverOffset: 4
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        generateLabels: function(chart) {
                            const labels = [];
                            chart.data.datasets.forEach((dataset, datasetIndex) => {
                                dataset.backgroundColor.forEach((color, colorIndex) => {
                                    labels.push({
                                        text: datasetIndex % 2 === 0 ? 'With Disease' : 'Without Disease',
                                        fillStyle: color,
                                        strokeStyle: color,
                                        datasetIndex: datasetIndex,
                                        index: colorIndex
                                    });
                                });
                            });
                            return labels;
                        },
                        boxWidth: 20,
                        padding: 10
                    }
                },
                title: {
                    display: true,
                    text: 'Exposure to Pesticides Vs Diseases across Occupations',
                    font: {
                        size: 16,
                        weight: 'bold'
                    },
                    color: '#061a3a'
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.raw;
                            return `${label}: ${value} Individuals`;
                        }
                    }
                }
            }
        }
    });
});
