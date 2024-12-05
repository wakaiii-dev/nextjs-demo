import Card from "./components/Card";

export default function Home() {
  const data = [
    { title: "Total Orders", data1: 100, data2: 10, className: "col-span-2" },
    { title: "Total Revenue", data1: 10000, data2: -1000 },
    { title: "Total Users", data1: 1000, data2: 100 },
    { title: "Total Orders", data1: 100, data2: 10, className: "row-span-2" },
    { title: "Total Revenue", data1: 10000, data2: -1000 },
    { title: "Total Users", data1: 1000, data2: 100 },
    { title: "Total Orders", data1: 100, data2: 10 },
    { title: "Total Revenue", data1: 10000, data2: -1000 },
    { title: "Total Users", data1: 1000, data2: 100, className: "col-span-2" },
    { title: "Total Orders", data1: 100, data2: 10 },
    { title: "Total Revenue", data1: 10000, data2: -1000 },
    { title: "Total Users", data1: 1000, data2: 100 },
    { title: "Total Users", data1: 1000, data2: 100 },
  ];
  return (
    <div className="p-4 grid gap-4 grid-cols-4">
      {data.map((d, i) => (
        <Card key={i} {...d} />
      ))}
    </div>
  );
}
