var AuditorOnFocusTime = {
  start_date: new Date(),
  hidden: null,
  on_focus_time: 0,
  last_focus_time: null, // switch in focus
  log_on_focus_time: function (e) {
    if(document[this.hidden]) {
      var focus_change_time = (new Date()).getTime();
      this.on_focus_time += focus_change_time - this.last_focus_time;
    } else {
      this.last_focus_time = (new Date()).getTime();
    }
  },
  submit_callable: function () {
    var focus_change_time = (new Date()).getTime();
    this.on_focus_time += focus_change_time - this.last_focus_time;

    return this.on_focus_time;
  }
};

var auditor_on_focus_time = Object.create(AuditorOnFocusTime);
auditor_on_focus_time.hidden = hidden;
auditor_on_focus_time.last_focus_time = auditor_on_focus_time.start_date.getTime();

document.addEventListener(
  visibility_change,
  auditor_on_focus_time
    .log_on_focus_time
    .bind(auditor_on_focus_time),
  false);

$(document).ready(function() {
  $("#mturk_form").submit(function() {
    $("<input />")
      .attr("type", "hidden")
      .attr("name", "auditor_on_focus_time")
      .attr("value", auditor_on_focus_time.submit_callable())
      .appendTo("#mturk_form");
  });
});