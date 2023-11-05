export default function PageHeader({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <>
      <div className="">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p className="text-base font-light text-gray">{desc}</p>
      </div>
      <div className="my-8 h-[1px] w-full bg-gray" />
    </>
  );
}
