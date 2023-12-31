import {
  useParams,
  json,
  useRouteLoaderData,
  redirect,
} from "react-router-dom";
import EventItem from "../components/EventItem";

function EventDetailPage() {
  const data = useRouteLoaderData("event-detail");

  return (
    <>
      {/* <h1>Event Detail</h1>
      <p>Event id: {params.id}</p> */}
      <EventItem event={data.event} />
    </>
  );
}

export default EventDetailPage;

export async function loader({ request, params }) {
  const response = await fetch("http://localhost:8080/events/" + params.id);

  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected event" },
      { status: 500 }
    );
  } else {
    return response;
  }
}

export async function action({ params }) {
  const response = await fetch("http://localhost:8080/events/" + params.id, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw json({ message: "Could not delete event" }, { status: 500 });
  } else {
    return redirect("/events");
  }
}
