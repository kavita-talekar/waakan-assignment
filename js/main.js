$(function () {
  var form = $("#registration");
  form.validate({
    errorPlacement: function errorPlacement(error, element) {
      element.before(error);
    },
    rules: {},
  });
  // Applied form steps
  form.children("#form-total").steps({
    headerTag: "h2",
    bodyTag: "section",
    transitionEffect: "fade",
    enableAllSteps: true,
    stepsOrientation: "vertical",
    autoFocus: true,
    transitionEffectSpeed: 500,
    titleTemplate: '<div class="title">#title#</div>',
    labels: {
      previous: "<small>Previous</small>",
      next: "<small>Next</small>",
      finish: "<small>Save</small>",
      current: "",
    },
    onStepChanging: function (event, currentIndex, newIndex) {
      form.validate().settings.ignore = ":disabled,:hidden";
      return form.valid();
    },
    onFinishing: function (event, currentIndex) {
      form.validate().settings.ignore = ":disabled";
      return form.valid();
    },
    onFinished: function (event, currentIndex) {
      alert("Thank you. Your data submitted successfully!");
      //form.submit();
    },
  });

  // Applied calander
  $("#dob")
    .dcalendarpicker()
    .on("dateselected", function (e) {
      var birthDay = e.date;
      var DOB = new Date(birthDay);
      var today = new Date();
      var age = today.getTime() - DOB.getTime();
      age = Math.floor(age / (1000 * 60 * 60 * 24 * 365.25));
      $("#age").val(age);
    });
});

function showDesc(id) {
  $(id).show();
}

function hideDesc(id) {
  $(id).hide();
}
