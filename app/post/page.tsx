"use client";
import { useState } from "react";
import Button from "./button";

export default function PostPage() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>this is post page</h1>
      <p>{count}</p>
      <Button onClick={() => setCount(count + 1)} />
    </div>
  );
}
