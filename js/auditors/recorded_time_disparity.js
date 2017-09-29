var AuditorRecordedTimeDisparity = {
  start_date: new Date(),
  hidden: null,
  on_focus_time: 0,
  last_focus_time: null, // switch in focus
  log_recorded_time_disparity: function (e) {
    if(document[this.hidden]) {
      var focus_change_time = (new Date()).getTime();
      this.on_focus_time += focus_change_time - this.last_focus_time.getTime();
    } else {
      this.last_focus_time = (new Date());
    }
  },
  submit_callable: function () {
    return ((new Date()).getTime() - this.start_date.getTime()) - this.on_focus_time;
  }
};

var auditor_recorded_time_disparity = Object.create(AuditorRecordedTimeDisparity);
auditor_recorded_time_disparity.hidden = hidden;
auditor_recorded_time_disparity.last_focus_time = auditor_recorded_time_disparity.start_date;

document.addEventListener(
  visibility_change,
  auditor_recorded_time_disparity
    .log_recorded_time_disparity
    .bind(auditor_recorded_time_disparity),
  false);

$(document).ready(function() {
  $("#mturk_form").submit(function() {
    $("<input />")
      .attr("type", "hidden")
      .attr("name", "auditor_recorded_time_disparity")
      .attr("value", auditor_recorded_time_disparity.submit_callable())
      .appendTo("#mturk_form");
  });
});