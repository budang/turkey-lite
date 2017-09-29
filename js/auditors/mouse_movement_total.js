var AuditorMouseMovementTotal = {
  mouse_movement_total: 0,
  log_mousemove_event: function (e) {
    this.mouse_movement_total += 1;
  },
  submit_callable: function () {
    return this.mouse_movement_total;
  }
};

var auditor_mouse_movement_total = Object.create(AuditorMouseMovementTotal);

$(window).mousemove(
  $.debounce(250, function(e) {
    auditor_mouse_movement_total
      .log_mousemove_event
      .bind(auditor_mouse_movement_total)();
  })
);

$(document).ready(function() {
  $("#mturk_form").submit(function() {
    $("<input />")
      .attr("type", "hidden")
      .attr("name", "auditor_mouse_movement_total")
      .attr("value", auditor_mouse_movement_total.submit_callable())
      .appendTo("#mturk_form");
  });
});