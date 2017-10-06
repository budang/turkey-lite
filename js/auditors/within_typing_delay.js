AuditorWithinTypingDelay = {
  start_date: new Date(),
  first_typing_event_date: null,
  typing_delay: 10000, // milliseconds
  log_keydown_typing_event: function (e) {
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
      (this.first_typing_event_date.getTime() - this.start_date.getTime())
        < this.typing_delay		
      :
      null;
 
    return val;
  }
};

var auditor_within_typing_delay = Object.create(AuditorWithinTypingDelay);

$(document).ready(function() {
  $("input:text, textarea")
    .keydown(
      auditor_within_typing_delay
        .log_keydown_typing_event
        .bind(auditor_within_typing_delay))
    .bind(
      "paste",
      auditor_within_typing_delay
        .log_paste_typing_event
        .bind(auditor_within_typing_delay));

  $("#mturk_form").submit(function() {
    $("<input />")
      .attr("type", "hidden")
      .attr("name", "auditor_within_typing_delay")
      .attr("value", auditor_within_typing_delay.submit_callable())
      .appendTo("#mturk_form");
  });
});
