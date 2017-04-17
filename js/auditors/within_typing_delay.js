var AuditorWithinTypingDelay = {
  start_date: new Date(),
  first_typing_event_date: null,
  typing_delay: 10000, // milliseconds
  log_keydown_typing_event: function (e) {
    if (!this.first_typing_event_date
      && e.keyCode >= 65
      && e.keyCode <= 90) {
      this.first_typing_event_date = new Date();
    }
  },
  submit_callable: function () {
    return 
      this.first_typing_event_date
      ?
      ((this.first_typing_event_date.getTime() -
        this.start_date.getTime()) < this.typing_delay).toString()
      :
      null;
  }
};

var auditor_within_typing_delay = Object.create(AuditorWithinTypingDelay);

$(document).ready(function() {
  $(document).keydown(
    auditor_within_typing_delay
      .log_keydown_typing_event
      .bind(auditor_within_typing_delay));

  $("#mturk_form").submit(function() {
    $("<input />")
      .attr("type", "hidden")
      .attr("name", "auditor_within_typing_delay")
      .attr("value", auditor_within_typing_delay.submit_callable())
      .appendTo("#mturk_form");
  });
});