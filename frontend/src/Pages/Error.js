import { useRouteError } from "react-router-dom";

import PageContent from "../components/PageContent";
import MainNavigation from "../components/MainNavigation";

const ErrorPage = () => {
  const error = useRouteError();

  let title = "An error occurred! - default title.";
  let message = "Something went wrong - default message.";

  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 404) {
    message = "404 - Could not find page or resource.";
  }

  return (
    <>
      {/* <h1>An error occured!</h1> */}
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
};

export default ErrorPage;
