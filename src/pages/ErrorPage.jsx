import { useRouteError } from "react-router-dom";

export default function () {
    const error = useRouteError();

    return (
        <div id="error-page">
            <h3>Something went wrong!</h3>
            <p>An unexpected error has occured</p>
            <br />
            <p><i>{error.statusText || error.message}</i></p>
        </div>
    )
}