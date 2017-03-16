var AuditorUserAgent = {
  uas: "",
  get_user_agent: function() {
    this.uas = navigator.userAgent;
  },
  submit_callable: function() {
    return {
      "user_agent" : this.uas
    };
  }
}

var auditor_user_agent = Object.create(AuditorUserAgent);

$(document).ready(function() {
  auditor_user_agent.get_user_agent();

  $(':submit').click(function() {
    $('#mturk_form').submit(function() {
      $('<input />')
        .attr('type', 'hidden')
        .attr('name', 'auditor_user_agent')
        .attr('value', auditor_user_agent.submit_callable())
        .appendTo('#mturk_form');
      return true;
    });
  });
});