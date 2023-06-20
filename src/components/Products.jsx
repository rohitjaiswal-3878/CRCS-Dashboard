import React from "react";
import { Link } from "react-router-dom";

export default function Products() {
  return (
    <div>
      this is product page
      <Link to="/" className="underline">
        go to Dashboard page
      </Link>
    </div>
  );
}
