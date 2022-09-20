import ListList from "./";

export default function Accordian({ items = [], selectedIndex, ...rest }) {
  return (
    <ListList
      {...{
        items,
        nested: true,
        renderItem: (item, i) => renderItem(item, selectedIndex === i),
        ...rest,
      }}
    />
  );
}

function renderItem(item, active = false) {
  return (
    <div className="border border-white w-full" key={item.label}>
      <div
        className={`${
          active ? "bg-white text-gray-900" : "bg-gray-900 text-white"
        } py-2 px-6`}>
        {item.label}
      </div>
    </div>
  );
}
