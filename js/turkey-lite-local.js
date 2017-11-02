var auditors = {
  "before_typing_delay": true,
  "clicks_specific": true,
  "clicks_total": true,
  "focus_changes": true,
  "focus_changes_total": true,
  "keypresses_specific": true,
  "keypresses_total": true,
  "mouse_movement_specific": true,
  "mouse_movement_total": true,
  "on_focus_time": true,
  "pastes_specific": true,
  "pastes_total": true,
  "recorded_time_disparity": true,
  "scrolled_pixels_specific": true,
  "scrolled_pixels_total": true,
  "total_task_time": true,
  "within_typing_delay": true,
  "url": true,
  "user_agent": true
}

$("<script />")
  .attr("type", "text/javascript")
  .attr("src", "js/turkey-lite/js/resources/jquery.ba-throttle-debounce.min.js")
  .appendTo("head");

$("<script />")
  .attr("type", "text/javascript")
  .attr("src", "js/turkey-lite/js/resources/visibility_changes.js")
  .appendTo("head");

for (var name in auditors) {
  if (auditors[name]) {
    $("<script />")
      .attr("type", "text/javascript")
      .attr("src", "js/turkey-lite/js/auditors/" + name + ".js")
      .appendTo("head");
  }
}
