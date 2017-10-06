AuditorBeforeTypingDelay = {
  start_date: new Date(),
  first_typing_event_date: null,
  log_keydown_typing_event: function (e) {
    // there has not yet been a typing event recorded
    // and this typing event qualifies for recording
    // because it is one of the letters of the alphabet
    if (!this.first_typing_event_date && e.key.length === 1
      && !e.ctrlKey && !e.metaKey && !e.altKey) {
      this.first_typing_event_date = new Date();
    }
  },
  log_paste_typing_event: function(e) {
    if (!this.first_typing_event_date) {
      this.first_typing_event_date = new Date();
    }
  },
  submit_callable: function () {
    var val = this.first_typing_event_date
      ?
      this.first_typing_event_date.getTime() - this.start_date.getTime()
      :
      null;

    return val;
  }
};

var auditor_before_typing_delay = Object.create(AuditorBeforeTypingDelay);

$(document).ready(function() {
  $("input:text, textarea")
    .keydown(
      auditor_before_typing_delay
        .log_keydown_typing_event
        .bind(auditor_before_typing_delay))
    .bind(
      "paste",
      auditor_before_typing_delay
        .log_paste_typing_event
        .bind(auditor_before_typing_delay));

  $("#mturk_form").submit(function() {
    $("<input />")
      .attr("type", "hidden")
      .attr("name", "auditor_before_typing_delay")
      .attr("value", auditor_before_typing_delay.submit_callable())
      .appendTo("#mturk_form");
  });
});
