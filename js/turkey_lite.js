var auditors = {
  'before_typing_delay': true,
  'clicks_total': true,
  'focus_changes_total': true,
  'keypresses_total': true,
  'mouse_movement_total': true,
  'on_focus_time': true,
  'pastes_total': true,
  'recorded_time_disparity': true,
  'scrolled_pixels_total': true,
  'total_task_time': true,
  'within_typing_delay': true,
  'url': true,
  'user_agent': true
}

for (name in auditors) {
  if (auditors[name]) {
    $('<script />')
      .attr('type', 'text/javascript')
      .attr('src', 'js/auditors' + name + '.js')
      .appendTo('head')
  }
}