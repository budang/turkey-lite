var AuditorClicksTotal = {
  clicks_total: 0,
  log_click_event: function (e) {
    this.clicks_total += 1;
  },
  submit_callable: function () {
    return this.clicks_total;
  }
};

var auditor_clicks_total = Object.create(AuditorClicksTotal);

$(document).ready(function() {
  $(document).click(
    auditor_clicks_total
      .log_click_event
      .bind(auditor_clicks_total));

  $("#mturk_form").submit(function() {
    $("<input />")
      .attr("type", "hidden")
      .attr("name", "auditor_clicks_total")
      .attr("value", auditor_clicks_total.submit_callable())
      .appendTo("#mturk_form");
  });
});