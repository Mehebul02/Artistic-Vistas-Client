import { useRouteError } from "react-router-dom";
import error404 from '../assets/404/404.gif'
const ErrorPage = () => {
    const error = useRouteError();
  console.error(error);
    return (
        <div className="flex justify-center items-center h-screen">
            <div id="error-page">
     <img src={error404} alt="" />
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
        </div>
    );
};

export default ErrorPage;