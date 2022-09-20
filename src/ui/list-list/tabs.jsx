import ListList from "./";

export default function Tabs({ items = [], ...rest }) {
  return (
    <ListList
      {...{
        items,
        ...rest,
      }}
    />
  );
}
