var AuditorFocusChanges = {
  start_date: new Date(),
  hidden: null,
  focus_changes: [],
  log_focus_changes: function (e) {
    if(document[this.hidden]) {
      var focus_change_time = (new Date()).getTime();
      this.focus_changes.push({ 'time' : focus_change_time - this.start_date.getTime() });
    }
  },
  submit_callable: function () {
    return this.focus_changes;
  }
};

var auditor_focus_changes = Object.create(AuditorFocusChanges);
auditor_focus_changes.hidden = hidden;

document.addEventListener(
  visibility_change,
  auditor_focus_changes
    .log_focus_changes
    .bind(auditor_focus_changes),
  false);

$(document).ready(function() {
  $("#mturk_form").submit(function() {
    $("<input />")
      .attr("type", "hidden")
      .attr("name", "auditor_focus_changes")
      .attr("value", auditor_focus_changes.submit_callable())
      .appendTo("#mturk_form");
  });
})
