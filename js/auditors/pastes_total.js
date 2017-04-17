var AuditorPastesTotal = {
  pastes_total: 0,
  log_paste_event: function (e) {
    this.pastes_total += 1;
  },
  submit_callable: function () {
    return this.pastes_total;
  }
};

var auditor_pastes_total = Object.create(AuditorPastesTotal);

$(document).ready(function() {
  $(document).bind(
    "paste",
    auditor_pastes_total
      .log_paste_event
      .bind(auditor_pastes_total));

  $("#mturk_form").submit(function() {
    $("<input />")
      .attr("type", "hidden")
      .attr("name", "auditor_pastes_total")
      .attr("value", auditor_pastes_total.submit_callable())
      .appendTo("#mturk_form");
  });
});