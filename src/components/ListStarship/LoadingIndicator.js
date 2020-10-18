import React from "react";
import Loader from "react-loader-spinner";
import { usePromiseTracker } from "react-promise-tracker";

 export default function LoadingIndicator(){
  const { promiseInProgress } = usePromiseTracker();

  return (
    promiseInProgress && (
      <div
        style={{
          width: "100%",
          height: "100",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Loader type="ThreeDots" color="#f6e58d" height="100" width="100" />
      </div>
    )
  );
};
