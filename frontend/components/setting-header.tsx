export default function SettingHeader({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <div>
      <h1 className="text-lg">{title}</h1>
      <p className="text-base font-light text-gray">{desc}</p>
    </div>
  );
}
