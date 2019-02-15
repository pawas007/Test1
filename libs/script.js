$(document).ready(function() {
  // timer

  function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    };
  }

  function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector(".days");
    var hoursSpan = clock.querySelector(".hours");
    var minutesSpan = clock.querySelector(".minutes");
    var secondsSpan = clock.querySelector(".seconds");

    function updateClock() {
      var t = getTimeRemaining(endtime);

      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
      minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
      secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);

      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
  }

  var deadline = "January 01 2018 00:00:00 GMT+0300"; //for Ukraine
  var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000); // for endless timer
  initializeClock("clockdiv", deadline);

  // Timer
  // navigations Anchors

  $(document).ready(function() {
    $("nav").on("click", "a", function(event) {
      event.preventDefault();

      var id = $(this).attr("href"),
        top = $(id).offset().top;

      $("body,html").animate({ scrollTop: top }, 1500);
    });
  });
  // navigations Anchors
  // navigation BTN for tablet-phone
  $(".menu-icon").click(function() {
    $(this).toggleClass("active");
    $(".main_nav").toggle();
  });
  // navigationBTN for tablet-phone
  // navigation adaptive
  if (screen.width < 600) {
    $(".main_nav").hide();
  } else {
    $(".main_nav").show();
  }
  // navigation adaptive
  // btn to top
  var btnTop = $("#btn");
  var proc = parseInt($(document).height());
  $(window).on("scroll", function() {
    if ($(window).scrollTop() >= Math.floor(proc * 0.4)) {
      btnTop.fadeIn();
    } else {
      btnTop.fadeOut();
    }
  });

  btnTop.on("click", function() {
    $("html,body").animate(
      {
        scrollTop: 0
      },
      900
    );
  });
  // btn to top
// FORM ON BUTTON
$("form").submit(function () {
  // Получение ID формы
  var formID = $(this).attr('id');
  // Добавление решётки к имени ID
  var formNm = $('#' + formID);
  $.ajax({
      type: "POST",
      url: 'mail.php',
      data: formNm.serialize(),
      success: function (data) {
          // Вывод текста результата отправки
          $(formNm).html(data); 
      },
      error: function (jqXHR, text, error) {
          // Вывод текста ошибки отправки
          $(formNm).html(error);         
      }
  });
  return false;
});
// FORM ON BUTTON
// FORM  MAIN
$("form").submit(function () {
  // Получение ID формы
  var formID = $(this).attr('id');
  // Добавление решётки к имени ID
  var formNm = $('#' + formID);
  $.ajax({
      type: "POST",
      url: 'mail.php',
      data: formNm.serialize(),
      success: function (data) {
          // Вывод текста результата отправки
          $(formNm).html(data); 
      },
      error: function (jqXHR, text, error) {
          // Вывод текста ошибки отправки
          $(formNm).html(error);         
      }
  });
  return false;
});

$("main_form").submit(function () {
  // Получение ID формы
  var formID = $(this).attr('id');
  // Добавление решётки к имени ID
  var formNm = $('#' + formID);
  $.ajax({
      type: "POST",
      url: 'main-form.php',
      data: formNm.serialize(),
      success: function (data) {
          // Вывод текста результата отправки
          $(formNm).html(data); 
      },
      error: function (jqXHR, text, error) {
          // Вывод текста ошибки отправки
          $(formNm).html(error);         
      }
  });
  return false;
});

$("bottom-form").submit(function () {
  // Получение ID формы
  var formID = $(this).attr('id');
  // Добавление решётки к имени ID
  var formNm = $('#' + formID);
  $.ajax({
      type: "POST",
      url: 'bottom-form.php',
      data: formNm.serialize(),
      success: function (data) {
          // Вывод текста результата отправки
          $(formNm).html(data); 
      },
      error: function (jqXHR, text, error) {
          // Вывод текста ошибки отправки
          $(formNm).html(error);         
      }
  });
  return false;
});

});
