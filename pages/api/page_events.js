import { dateArray } from "../../helpers/date";

export default (req, res) => {
  fetch(
    `https://graph.facebook.com/kindervongestern/events?fields=description,name,place,start_time,end_time,cover&access_token=${process.env.FB_ACCESS_TOKEN}`
  ).then(async (fbRes) => {
    const response = await fbRes.json();

    // Event object array
    const eventArr = [];

    // Process data
    response.data.forEach((event) => {
      // Get time data
      const day = event.start_time.split("+")[0].split("T")[0].split("-")[2];
      const month =
        dateArray[
          event.start_time.split("+")[0].split("-")[1].replace("0", "")
        ];
      const year = event.start_time.split("+")[0].split("-")[0];
      const start_time_hours = event.start_time.split("T")[1].split(":")[0];
      const start_time_minutes = event.start_time.split("T")[1].split(":")[1];
      const end_time_hours = event.end_time
        ? event.end_time.split("T")[1].split(":")[0]
        : null;
      const end_time_minutes = event.end_time
        ? event.end_time.split("T")[1].split(":")[1]
        : null;

      // Create event object
      eventArr.push({
        id: event.id,
        data: {
          title: event.name,
          body: event.description,
          location: event.place.location,
          start: {
            day: day,
            month: month,
            year: year,
            time: `${start_time_hours}:${start_time_minutes}`,
            iso: event.start_time,
          },
          end: {
            time: end_time_hours
              ? `${end_time_hours}:${end_time_minutes}`
              : null,
          },
          imgSrc: event.cover ? event.cover.source : null,
        },
      });
    });
    res.status(200).json(eventArr);
  });
};
