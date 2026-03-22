interface ProductWidgetProps {
  title: string;
  value: string | number;
}

export default function ProductWidget({ title, value }: ProductWidgetProps) {
  return (
    <div className="aspect-3/1 md:aspect-2/1 lg:aspect-3/1 rounded-xl bg-gray-900 p-6 flex flex-col justify-center">
      <h3 className="text-sm font-medium text-white">{title}</h3>
      <p className="text-3xl font-bold mt-2 text-white">{value}</p>
    </div>
  );
}
