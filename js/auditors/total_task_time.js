var AuditorTotalTaskTime = {
  start_date: new Date(),
  submit_callable: function() {
    return {
      'milliseconds': (new Date()).getTime() - this.start_date.getTime()
    };
  }
};

var auditor_total_task_time = Object.create(AuditorTotalTaskTime);