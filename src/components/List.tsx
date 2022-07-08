import React from "react";

interface IProps {
  people: {
    name: string;
    age: number;
    url: string;
    note: string;
  }[];
}

const List: React.FC<IProps> = () => {
  return (
    <div>
      <h1>I AM A LIST</h1>
    </div>
  );
};

export default List;
