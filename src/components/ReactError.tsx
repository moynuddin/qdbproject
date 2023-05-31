import { ReactNode } from "react";
import ErrorPage from "./ErrorPage";
import { ErrorBoundary } from "react-error-boundary";

type Props = {
  children: ReactNode;
};

const ReactError = (props: Props) => {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorPage}
      onError={(error, errorInfo) => {
        console.log("Error");
        console.error(error);
        console.error(errorInfo);
      }}
      onReset={() => {
        console.log("Reloading the page");
        window.location.reload();
      }}
    >
      {props.children}
    </ErrorBoundary>
  );
};

export default ReactError;
