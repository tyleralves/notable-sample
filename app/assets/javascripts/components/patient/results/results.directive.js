angular
  .module('app')
  .directive('resultsChart', ResultsChartDirective);

function ResultsChartDirective(PatientsService) {
  function link(scope) {
    console.log(PatientsService.patient);

    scope.$watch(function() {
      return PatientsService.patient;
    }, function(newVal, oldVal) {
      // Makes sure patient object is populated before attempting to draw chart
      if(Object.keys(newVal).length) {
        window.chart = new Highcharts.Chart({
          title: {
            text: 'Results'
          },
          chart: {
            renderTo: 'results-chart',
            height: 400,
            type: 'bar'
          },
          xAxis: {
            categories: PatientsService.patient.results.map(function(item) {
              return item.combination;
            })
          },
          yAxis: {
            title: {
              text: 'Score'
            }
          },
          series: [{
            name: 'Test Run 1',
            data: PatientsService.patient.results.map(function(item) {
              item.name = item.combination;
              item.y = item.score;
              return item;
            })
          }]
        });
      }
    }, true);



  }

  return {
    restrict: 'E',
    link: link,
    template: "<div id='results-chart'>{{results}}</div>"
  };
}

ResultsChartDirective.$inject = ['PatientsService'];
