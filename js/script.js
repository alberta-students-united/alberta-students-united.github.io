

$('#navbar .navbar-nav a').on('click', function () {
    $('#navbar .navbar-nav').find('.active').removeClass('active');
    $(this).addClass('active');
});

$(document).ready(function () {
    var events = [
        {
            date: "11/6/2019",
            title: "MRU Coordination Meeting",
            url: false,
            time: "3:00 PM - 6:00 PM",
            location: "Mount Royal University, EL 1341",
            description: "Meeting for MRU students to organize. All other schools welcome.",
            important: false
        },
        {
            date: "11/7/2019",
            title: "Prep for General Assembly",
            url: false,
            time: "4:00 PM - 6:00 PM",
            location: "University of Calgary, TFDL 210",
            description: "We will provide updates for our current status and discuss the goals of the upcoming general assembly.",
            important: false
            
        },
        {
            date: "11/14/2019",
            title: "University Student Barnstorm",
            url: [ {name: "Eventbrite",
                    icon: ["fa", "fa-calendar-plus"],
                    url: "https://www.eventbrite.ca/e/79983144739"},
                   {name: "Facebook",
                    icon: ["fab", "fa-facebook-f"],
                    url: "https://www.facebook.com/events/3111634109061790/"}],
            time: "4:00 PM - 7:00 PM",
            location: "University of Calgary, Arts Lounge (SS 103)",
            description: "In light of the new provincial budget, with plenty of cuts that will affect Alberta's working-class\
                          citizens, we want to address the cuts to university funding that will increase student tuition.\
                          Please join us on November 14th so that we can immediately get to work. There is no time to waste when\
                          our future is at stake. Register now using either # or #, or both!",
            important: true
        },
        {
            date: "11/18/2019",
            title: "U of C Budget Townhall",
            url: false,
            time: "1:00 PM - 2:00 PM",
            location: "University of Calgary, MacEwan Conference and Event Centre (MSC 318)",
            description: "Please join your fellow students, faculty and staff for a discussion about the upcoming university budget. \
                          Ideas brought forward from the previous townhall (October 16th) will be assessed and reported.",
            important: false,
        },
        {
            date: "11/21/2019",
            title: "AUPE Information Picket - Fight the Cuts",
            url: [{
                name: "Facebook",
                icon: ["fab", "fa-facebook-f"],
                url: "https://www.facebook.com/events/2154501801318294/"}],
            time: "12:00 PM - 1:00 PM",
            location: "University of Calgary, Taylor Quad",
            description: "Join the resistance! Fight the cuts to university services, fight tuition hikes, fight against cuts to \
                          jobs and wages. Join the information picket at University of Calgary at the Taylor Quad, in front of the \
                          MacEwan Student Centre. Register now on #.",
            important: false
        },
        {
            date: "11/21/2019",
            title: "University Student Barnstorm (Round 2)",
            url: false,
            time: "3:00 PM - 6:00 PM",
            location: "University of Calgary, Arts Lounge (SS 103)",
            description: "Join us for our second round of barnstorming. More info coming soon.",
            important: true,
        },
        {
            date: "11/29/2019",
            title: "Hands Off Our Education - Student Protest",
            url: [{
                name: "Facebook",
                icon: ["fab", "fa-facebook-f"],
                url: "https://www.facebook.com/events/2482497711995802/"
            }],
            time: "12:30 PM - 2:30 PM",
            location: "McDougall Centre, 455 6 Street SW",
            description: "Join your fellow students in putting a face to the new cuts facing Alberta post-secondary institutions. \
                          Whether you are a current student, an academic, or a member of the public, we encourage you to attend and \
                          show your solidarity. We cannot stand silent while the government makes reckless and short-sited decisions \
                          that will affect all our futures. Register now on #.",
            important: true
        }
    ]

    var calendar = document.getElementById("calendar-content");
    var temp = document.getElementsByTagName("template")[0];
    var eventTemplate = document.getElementById("event-links");
    var currentEvent;
    var date;
    var date_num;
    var date_month;
    var date_dayOfTheWeek;
    var title;
    var time;
    var location;
    var description;
    var url;
    var eventTemplate;
    var currentEventLink;
    var eventList;

    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    var today = new Date();
    today.setHours(0, 0, 0, 0);

    for (i = 0; i < events.length; i++) {    
        currentEvent = temp.content.cloneNode(true);
        date_num = currentEvent.getElementById("date-num");
        date_month = currentEvent.getElementById("date-month");
        date_dayOfTheWeek = currentEvent.getElementById("dotw");
        title = currentEvent.getElementById("title");
        time = currentEvent.getElementById("time");
        location = currentEvent.getElementById("location");
        description = currentEvent.getElementById("description");
        eventList = currentEvent.getElementById("event-info-list")

        date = new Date(events[i].date);

        console.log(date);
        console.log(today);
        if(date >= today) {
            title.append(events[i].title);


            date_num.append(String(date.getDate()).padStart(2, '0'));
            date_month.append(date.toLocaleString("en-us", { month: "short" }).toUpperCase());
            date_dayOfTheWeek.append(" " + days[date.getDay()]);
            time.append(events[i].time);
            location.append(events[i].location);

            if (events[i].important) {
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

            if (events[i].url) {
                var descriptionBits = events[i].description.split("#")
                for (j = 0; j < events[i].url.length; j++) {
                    currentEventLink = eventTemplate.content.cloneNode(true);
                    currentEventLink.getElementById("event-icon").classList.add(events[i].url[j].icon[0]);
                    currentEventLink.getElementById("event-icon").classList.add(events[i].url[j].icon[1]);

                    currentEventLink.getElementById("event-link").href = events[i].url[j].url;
                    currentEventLink.getElementById("event-link").append(events[i].url[j].name);

                    currentEventLink.getElementById("event-icon").id = "event-icon-" + i + "-" + j;
                    currentEventLink.getElementById("event-link").id = "event-icon-" + i + "-" + j;

                    eventList.append(currentEventLink);

                    description.append(descriptionBits[j]);

                    var newLink = document.createElement("a");
                    newLink.href = events[i].url[j].url;
                    newLink.append(events[i].url[j].name);
                    events[i].description = events[i].description.replace("#", newLink);
                    description.appendChild(newLink);
                }
                description.append(descriptionBits[j]);
            } else {
                description.append(events[i].description);
            }
        }
    }
});