var event = {
  name: "Pricing Review",
  organizer: "Starlab UK",
  duration: 15,
  description: "Our team will meet with you to review pricing options.",
  date: new Date(),
  time: "9:00",
  attendees: []
};

sessionStorage.setItem("eventObj", JSON.stringify(event));
