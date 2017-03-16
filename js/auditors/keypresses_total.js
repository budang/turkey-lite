var AuditorKeypressesTotal = {
  keypresses_total: 0,
  log_keypress_event: function (e) {
    this.keypresses_total += 1;
  },
  submit_callable: function () {
    return {
      'count': this.keypresses_total
    };
  }
};

var auditor_keypresses_total = Object.create(AuditorKeypressesTotal);

$(document).ready(function() {
  $(document).keyup(
    auditor_keypresses_total
      .log_keypress_event
      .bind(auditor_keypresses_total));
});