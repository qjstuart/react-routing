import { Link } from "react-router-dom";

const DUMMY_EVENTS = [
  {
    id: "e1",
    title: "Akai Showcase Event",
    description:
      "An interactive workshop with Akai's latest and greatest rack samplers!",
  },
  {
    id: "e2",
    title: "Local DJs Night",
    description:
      "A cozy gettogether featuring some of Malta's local selectors.",
  },
];

function EventsPage() {
  return (
    <>
      <h1>Events</h1>
      <ul>
        {DUMMY_EVENTS.map((event) => <li key={event.id}><Link to={event.id}>{event.title}</Link></li>)}
      </ul>
    </>
  );
}

export default EventsPage;
