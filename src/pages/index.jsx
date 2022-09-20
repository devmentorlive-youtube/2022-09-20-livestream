import { useState } from "react";
import Tabs from "@/ui/list-list/tabs";

export default function Homepage() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const items = [
    {
      label: "home",
      Component: Nav1,
    },
    {
      label: "about",
      Component: Nav2,
    },
    {
      label: "conact",
      Component: Nav3,
    },
  ];

  return (
    <div className="mt-16 container mx-auto">
      <Tabs {...{ items, selectedIndex, onChange: setSelectedIndex }} />
    </div>
  );
}

function Nav1({}) {
  return <div>comp 1</div>;
}

function Nav2({}) {
  return <div>comp 2</div>;
}

function Nav3({}) {
  return <div>comp 3</div>;
}
