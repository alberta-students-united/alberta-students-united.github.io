

$('#navbar .navbar-nav a').on('click', function () {
    $('#navbar .navbar-nav').find('.active').removeClass('active');
    $(this).addClass('active');
});

$(document).ready(function () {
    var events = [
        {
            date: "11/6/2019",
            title: "MRU Coordination Meeting",
            time: "3:00 PM - 6:00 PM",
            location: "Mount Royal University, EL 1341",
            description: "Meeting for MRU students to organize. All other schools welcome.",
            important: false
        },
        {
            date: "11/7/2019",
            title: "Prep for General Assembly",
            time: "4:00 PM - 6:00 PM",
            location: "University of Calgary, TFDL 210",
            description: "We will provide updates for our current status and discuss the goals of the upcoming general assembly.",
            important: false
            
        },
        {
            date: "11/14/2019",
            title: "General Assembly",
            time: "4:00 PM - 6:00 PM",
            location: "University of Calgary, Arts Lounge",
            description: "General assembly to gather support numbers and braindstorm. ",
            important: true
        }
    ]

    var calendar = document.getElementById("calendar-content");
    var temp = document.getElementsByTagName("template")[0];
    var currentEvent;
    var date;
    var date_num;
    var date_month;
    var date_dayOfTheWeek;
    var title;
    var time;
    var location;
    var description;

    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    for (i = 0; i < events.length; i++) {    
        currentEvent = temp.content.cloneNode(true);
        date_num = currentEvent.getElementById("date-num");
        date_month = currentEvent.getElementById("date-month");
        date_dayOfTheWeek = currentEvent.getElementById("dotw");
        title = currentEvent.getElementById("title");
        time = currentEvent.getElementById("time");
        location = currentEvent.getElementById("location");
        description = currentEvent.getElementById("description");

        title.append(events[i].title);
        date = new Date(events[i].date);
        date_num.append(String(date.getDate()).padStart(2, '0'));
        date_month.append(date.toLocaleString("en-us", { month: "short" }).toUpperCase());
        date_dayOfTheWeek.append(" " + days[date.getDay()]);
        time.append(events[i].time);
        location.append(events[i].location);
        description.append(events[i].description);

        if(events[i].important) {
            date_num.classList.add("important-event");
        }

        date_num.id = "date-num-" + i;
        date_month.id = "date-month-" + i;
        date_dayOfTheWeek.id = "dotw-" + i;
        title.id = "title-" + i;
        time.id = "time-" + i;
        location.id = "location-" + i;
        description.id = "description-" + i;

        calendar.appendChild(currentEvent);
    }
});