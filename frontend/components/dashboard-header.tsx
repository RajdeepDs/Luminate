export interface DashboardHeaderProps {
  title: string;
  desc: string;
}
export default function DashboardHeader({ title, desc }: DashboardHeaderProps) {
  return (
    <>
      <h1 className="text-3xl font-medium tracking-tighter">{title}</h1>
      <p className="tracking-tight text-gray-500">{desc}</p>
    </>
  );
}
