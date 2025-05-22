import React from "react";
import { useLoaderData, useParams } from "react-router";

const TipDetails = () => {
  const { id } = useParams();
  const detailsTip = useLoaderData();
  console.log(detailsTip);
  console.log(id);
  return (
    <div>
      <p>this is tip details</p>
    </div>
  );
};

export default TipDetails;
