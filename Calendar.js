import 'https://cdn.jsdelivr.net/npm/fullcalendar@6.1.4/index.global.min.js';
import 'https://cdn.jsdelivr.net/npm/@fullcalendar/google-calendar@6.0.3/index.global.min.js';
document.addEventListener("DOMContentLoaded", function () {
    var initialLocaleCode = 'en'; //Sets the default language
    var localeSelectorEl = document.getElementById('locale-selector');
    var calendarEl = document.getElementById("calendar");

    var calendar = new FullCalendar.Calendar(calendarEl, {
      locale: initialLocaleCode,
      //plugins: ['dayGrid', 'list', 'googleCalendar','listPlugin'],
      //initialView: 'listYear',
      views: {
      listDay: { buttonText: 'Day View' },
      listWeek: { buttonText: 'Week View' },
      listMonth: { buttonText: 'Month View' },
      dayGridMonth: { buttonText: 'Calendar' },

      },
      headerToolbar: {
        left: "prev,next today",
        center: "title",
        right: 'dayGridMonth listDay,listWeek,listMonth'
      },

      titleFormat: { year: 'numeric', month: 'short' },
      listDayFormat: {weekday:'long', month: 'short', day: '2-digit'},
      listDaySideFormat: false,

      googleCalendarApiKey: "AIzaSyCleR5hROa8zwK8FmFmFYa2MJ_2w_yTFkk",

      events: {
        googleCalendarId: "techhigh.us_ii29m54j9iumi3a2i6mkc5qo90@group.calendar.google.com",
        className: "gcal-event", // an option!
      },


      eventClick: function (arg) {

        // opens events in a popup window
        window.open(arg.event.url, '_blank', 'width=700,height=600');
        
        // prevents current tab from navigating
        arg.jsEvent.preventDefault();
      }
    });


    calendar.render();
    // build the locale selector's options
    calendar.getAvailableLocaleCodes().forEach(function (localeCode) {
      var optionEl = document.createElement('option');
      optionEl.value = localeCode;
      optionEl.selected = localeCode == initialLocaleCode;
      optionEl.innerText = localeCode;
      localeSelectorEl.appendChild(optionEl);
    });

    // when the selected option changes, dynamically change the calendar option
    localeSelectorEl.addEventListener('change', function () {
      if (this.value) {
        calendar.setOption('locale', this.value);
      }
    });
  });
