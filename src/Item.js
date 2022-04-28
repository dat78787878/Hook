import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import useFetch from "./useFetch";

const Item = () => {
  const context = useContext(ThemeContext);
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");
  return (
    <div className={context.theme}>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </div>
  );
};

export default Item;
