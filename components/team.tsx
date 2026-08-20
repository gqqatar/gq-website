import Image from "next/image";

const TEAM = [
  { src: "/images/team/member-1.jpg" },
  { src: "/images/team/member-2.jpg" },
  { src: "/images/team/member-3.jpg" },
  { src: "/images/team/member-4.jpg" },
  { src: "/images/team/member-5-sahil.jpg", name: "Sahil" },
  { src: "/images/team/member-6.jpg" },
  { src: "/images/team/member-7.jpg" },
  { src: "/images/team/member-8-bigan.jpg", name: "Bigan" },
];

export function Team() {
  return (
    <section className="relative overflow-hidden bg-navy py-28">
      <div className="blueprint-grid absolute inset-0 opacity-30" />
      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
          Our People
        </p>
        <h2 className="mt-4 max-w-2xl font-display text-4xl font-medium text-white md:text-5xl">
          Meet the team achieving your dreams.
        </h2>
        <p className="mt-5 max-w-lg text-lg text-white/70">
          Every window and door that leaves our factory passes through the
          hands of this team &mdash; measured, cut, assembled, and checked
          before it ever reaches your site.
        </p>

        <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-4">
          {TEAM.map((member) => (
            <div key={member.src} className="group">
              <div className="relative aspect-square overflow-hidden rounded-2xl">
                <Image
                  src={member.src}
                  alt={member.name ? `${member.name}, German Quality team` : "German Quality team member"}
                  fill
                  sizes="(min-width: 640px) 22vw, 45vw"
                  className="object-cover object-top transition duration-700 group-hover:scale-105"
                />
              </div>
              {member.name && (
                <p className="mt-3 text-center font-display text-sm font-medium text-white/80">
                  {member.name}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
