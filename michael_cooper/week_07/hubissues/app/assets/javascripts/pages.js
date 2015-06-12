$(document).ready(function() {
  var issueTotals = {};
  var totalCalls = 10;
  var currentCalls = 0;
  var labels = [];
  var totals = [];

  var getTotalIssues = function(language) {
    var date = moment().format().substring(0, 10);
    $.ajax({
      url: "https://api.github.com/search/issues?q=language:" + language + " created:" + date + "",
      dataType: "jsonp"
    }).done(function(returndata) {
      currentCalls++;
      console.log(date + ": " + returndata.data.total_count + " issues in the " + language + " language.");
      issueTotals[language] = returndata.data.total_count;

      labels.push(language);
      totals.push(returndata.data.total_count);
    }).done(function() {
      if (currentCalls === 10) {
        createBarGraph(date);
      };
    });
  };

  var createBarGraph = function(date) {
    console.log(labels);
    console.log(totals);
    var data = {};
    data['labels'] = labels;
    data['datasets'] = [{
      label: ("Most common issues by language on github for " + date),
      fillColor: "rgba(151,187,205,0.5)",
      strokeColor: "rgba(151,187,205,0.8)",
      highlightFill: "rgba(151,187,205,0.75)",
      highlightStroke: "rgba(151,187,205,1)",
      data: totals
    }];

    var ctx = $("#myChart").get(0).getContext("2d");
    var myBarChart = new Chart(ctx).Bar(data);
  };

  getTotalIssues('javascript');
  getTotalIssues('ruby');
  getTotalIssues('java');
  getTotalIssues('python');
  getTotalIssues('php');
  getTotalIssues('c');
  getTotalIssues('c++');
  getTotalIssues('csharp');
  getTotalIssues('obj-c');
  getTotalIssues('perl');

});
