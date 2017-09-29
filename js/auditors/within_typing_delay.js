var AuditorWithinTypingDelay = {
  start_date: new Date(),
  within_typing_delay: null,
  typing_delay: 10000, // milliseconds
  log_keydown_typing_event: function (e) {
    if (!this.within_typing_delay
      && e.keyCode >= 65
      && e.keyCode <= 90) {
      this.within_typing_delay =
        (new Date().getTime() - this.start_date.getTime()) < this.typing_delay;
    }
  },
  submit_callable: function () {
    return this.within_typing_delay;
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
