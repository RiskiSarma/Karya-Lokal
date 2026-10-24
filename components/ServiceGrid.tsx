import { services } from "@/lib/data";

export default function ServiceGrid() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {services.map(({ icon: Icon, title, desc }) => (
        <div key={title} className="card">
          <div className="mb-4 grid size-11 place-items-center rounded-xl bg-soft">
            <Icon className="size-6 text-brand" aria-hidden />
          </div>
          <h3 className="mb-2 text-xl">{title}</h3>
          <p className="text-sm text-muted">{desc}</p>
        </div>
      ))}
    </div>
  );
}
