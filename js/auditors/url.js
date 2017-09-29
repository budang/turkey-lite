var AuditorURL = {
  get_url: function() {
    this.url = window.location.href;
  },
  submit_callable: function() {
    return this.url;
  }
};

var auditor_url = Object.create(AuditorURL);

$(document).ready(function() {
  auditor_url.get_url();

  $("#mturk_form").submit(function() {
    $("<input />")
      .attr("type", "hidden")
      .attr("name", "auditor_url")
      .attr("value", auditor_url.submit_callable())
      .appendTo("#mturk_form");
  });
});