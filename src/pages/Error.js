import MainNavigation from "../components/MainNavigation";

function Error() {
  return (
    <>
      <MainNavigation />
      <main>
        <h1>Page not found...</h1>
        <p>The page you are looking for does not exist!</p>
      </main>
    </>
  );
}

export default Error;
