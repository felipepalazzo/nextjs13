import React from "react";

export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav>
        <ul>
          <li>
            <a href="">Link 1</a>
          </li>
          <li>
            <a href="">Link 2</a>
          </li>
          <li>
            <a href="">Link 3</a>
          </li>
          <li>
            <a href="">Link 4</a>
          </li>
        </ul>
      </nav>
      <div>{children}</div>
    </>
  );
}
