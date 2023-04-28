var $ = jQuery.noConflict();

$(document).ready(function () {
  $("button").click(function () {
    let x = $("#day-validation").val();
    let y = $("#month-validation").val();
    let z = $("#yers-validation").val();
    var currentYear = new Date().getFullYear();
    let isValidDay = 0;
    let isValidMonth = 0;
    let isValidYear = 0;
    const day = parseInt(x);
    const month = parseInt(y);
    const year = parseInt(z);
    // #### day Validations;
    if (isNaN(day)) {
      $(".day").removeClass("error");
      $(".day").addClass("error-empty");
      $(".form").addClass("notValid-form");
    } else if (isNaN(day) || day > 31 || day < 0) {
      $(".day").removeClass("error-empty");
      $(".day").addClass("error");
      $(".form").addClass("notValid-form");
    } else {
      $(".day").removeClass("error");
      $(".day").removeClass("error-empty");
      $(".form").removeClass("notValid-form");
      isValidDay = 1;
    }
    // #### Month Validations;
    if (isNaN(month)) {
      $(".month").removeClass("error");
      $(".month").addClass("error-empty");
      $(".form").addClass("notValid-form");
    } else if (isNaN(month) || month > 12 || month < 1) {
      $(".month").removeClass("error-empty");
      $(".month").addClass("error");
      $(".form").addClass("notValid-form");
    } else {
      $(".month").removeClass("error");
      $(".month").removeClass("error-empty");
      $(".form").removeClass("notValid-form");
      isValidMonth = 1;
    }
    // #### Year Validations;
    if (isNaN(year)) {
      $(".year").removeClass("error");
      $(".year").addClass("error-empty");
      $(".form").addClass("notValid-form");
    } else if (year > currentYear) {
      $(".year").removeClass("error-empty");
      $(".year").addClass("error");
      $(".form").addClass("notValid-form");
    } else {
      $(".year").removeClass("error");
      $(".year").removeClass("error-empty");
      $(".form").removeClass("notValid-form");
      isValidYear = 1;
    }
    if ($.inArray(month, [1, 3, 5, 7, 8, 10, 12]) < 0 && day >= 31) {
      $(".form").addClass("notValid-form");
      $(".day").addClass("error ");
      isValidDay = 0;
    } else {
      $(".day").removeClass("error");
      $(".form").removeClass("notValid-form");
      isValidDay = 1;
    }
    if (isValidDay == 1 && isValidMonth == 1 && isValidYear == 1) {
      var now = new Date();

      var years = now.getFullYear() - year;
      var months = now.getMonth() - month;
      var days = now.getDate() - day;

      if (months < 0 || (months === 0 && days < 0)) {
        years--;
        months += 12;
      }

      if (days < 0) {
        var monthDays = new Date(now.getYear(), now.getMonth(), 0).getDate();
        days += monthDays;
        months--;
      }

      $(".years-int").html(years + " ");
      $(".months-int").html(months + " ");
      $(".days-int").html(days + " ");
    } else {
      $(".years-int").html("-- ");
      $(".months-int").html("-- ");
      $(".days-int").html("-- ");
    }
  });
});
