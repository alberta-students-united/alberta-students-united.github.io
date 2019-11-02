

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
            description: "Meeting for MRU students to organize. All other schools welcome."
        },
        {
            date: "11/7/2019",
            title: "Prep for General Assembly",
            time: "4:00 PM - 6:00 PM",
            location: "University of Calgary, TFDL 210",
            description: "We will provide updates for our current status and discuss the goals of the upcoming general assembly."
        },
        {
            date: "11/14/2019",
            title: "General Assembly",
            time: "4:00 PM - 6:00 PM",
            location: "University of Calgary, Arts Lounge",
            description: "General assembly to gather support numbers and barnstorm. "
        }
    ]

    // <div class="row row-striped">
    //     <div class="col-2 text-right">
    //         <h1 class="display-4"><span class="badge badge-secondary">06</span></h1>
    //         <h2>NOV</h2>
    //     </div>
    //     <div class="col-10">
    //         <h3 class="text-uppercase"><strong>MRU Coordination Meeting</strong></h3>
    //         <ul class="list-inline">
    //             <li class="list-inline-item"><i class="fa fa-calendar" aria-hidden="true"></i> Wednesday </li>
    //             <li class="list-inline-item"><i class="fa fa-clock" aria-hidden="true"></i> 3:00 PM - 6:00 PM</li>
    //             <li class="list-inline-item"><i class="fa fa-map-marker-alt" aria-hidden="true"></i> Mount Royal University, EL 1341</li>
    //         </ul>
    //         <p>
    //             Meeting for MRU students to organize. All other schools welcome.
    //         </p>
    //     </div>
    // </div>
    
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

        date_num.id = "date-num-" + i;
        date_month.id = "date-month-" + i;
        date_dayOfTheWeek.id = "dotw-" + i;
        title.id = "title-" + i;
        time.id = "time-" + i;
        location.id = "location-" + i;
        description.id = "description-" + i;

        calendar.appendChild(currentEvent);
    }

    // var row;
    // var left_column;
    // var right_column;
    // var h1;
    // var h2;
    // var day_span;
    // var title;
    // var ul;
    // var description;
    // var dayOfTheWeek;
    // var location;
    // var time;
    // var calendarIcon;
    // var clockIcon;
    // var locationIcon;
    // for (i = 0; i < events.length; i++) {
    //     row = document.createElement("div");
    //     left_column = document.createElement("div");
    //     right_column = document.createElement("div");
    //     h1 = document.createElement("h1");
    //     h2 = document.createElement("h2");
    //     day_span = document.createElement("span");
    //     title = document.createElement("h3");
    //     ul = document.createElement("ul");
    //     description = document.createElement("p");

    //     row.className = "row row-striped";
    //     left_column.className = "rcol-2 text-right";
    //     right_column.className = "col-10";
    //     h1.className = "display-4"
    //     day_span.className = "badge badge-secondary";
    //     title.className = "text-uppercase";
    //     ul.className = "list-inline";

    //     row.appendChild(left_column);
    //     row.appendChild(right_column);
    //     left_column.appendChild(h1);
    //     left_column.appendChild(h2);
    //     h1.appendChild(day_span);
    //     right_column.appendChild(title);
    //     right_column.appendChild(ul);
    //     right_column.appendChild(description);

    //     calendarIcon = document.createElement("i");
    //     calendarIcon.className = "fa fa-calendar";
    //     clockIcon = document.createElement("i");
    //     clockIcon.className = "fa fa-clock";
    //     locationIcon = document.createElement("i");
    //     locationIcon.className = "fa fa-map-marker-alt";

    //     calendar.appendChild(row);

    //     dayOfTheWeek = document.createElement("li");
    //     dayOfTheWeek.className = "list-inline-item";
    //     dayOfTheWeek.appendChild(calendarIcon);
    //     dayOfTheWeek.append(" Wednesday");
    //     ul.appendChild(dayOfTheWeek);

    //     location = document.createElement("li");
    //     location.className = "list-inline-item";
    //     location.appendChild(locationIcon);
    //     location.append(events[i].location);
    //     ul.appendChild(location);
    // }
});