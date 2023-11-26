import { useParams } from "react-router-dom";

function EventDetailPage() {
  const params = useParams();

  return (
    <>
      <h1>Event Detail</h1>
      <p>Event id: {params.id}</p>
    </>
  );
}

export default EventDetailPage;
