var AuditorFocusChangesTotal = {
  start_date: new Date(),
  hidden: null,
  focus_changes_total: 0,
  log_focus_changes_total: function (e) {
    if(document[this.hidden]) {
      this.focus_changes_total += 1;
    }
  },
  submit_callable: function () {
    return this.focus_changes_total;
  }
};

var auditor_focus_changes_total = Object.create(AuditorFocusChangesTotal);
auditor_focus_changes_total.hidden = hidden;

document.addEventListener(
  visibility_change,
  auditor_focus_changes_total
    .log_focus_changes_total
    .bind(auditor_focus_changes_total),
  false);

$(document).ready(function() {
  $("#mturk_form").submit(function() {
    $("<input />")
      .attr("type", "hidden")
      .attr("name", "auditor_focus_changes_total")
      .attr("value", auditor_focus_changes_total.submit_callable())
      .appendTo("#mturk_form");
  });
})