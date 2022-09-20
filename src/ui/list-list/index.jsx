export default function ListList({
  selectedIndex = 0,
  items = [],
  nested = false,
  renderItem = (item) => <div>{item.label}</div>,
  onChange = () => {},
}) {
  const WrappedComponent = items[selectedIndex]?.Component;
  return (
    <div>
      <div className="flex items-center gap-3 w-1/4">
        {items.map((item, i) => (
          <div key={i} onClick={() => onChange(i)}>
            {renderItem(item, i)}
          </div>
        ))}
      </div>
      {!nested && (
        <div className="p-4">{WrappedComponent && <WrappedComponent />}</div>
      )}
    </div>
  );
}
