var AuditorTotalTaskTime = {
  start_date: new Date(),
  submit_callable: function() {
    return (new Date()).getTime() - this.start_date.getTime();
  }
};

var auditor_total_task_time = Object.create(AuditorTotalTaskTime);

$(document).ready(function() {
  $("#mturk_form").submit(function() {
    $("<input />")
      .attr("type", "hidden")
      .attr("name", "auditor_total_task_time")
      .attr("value", auditor_total_task_time.submit_callable())
      .appendTo("#mturk_form");
  });
});