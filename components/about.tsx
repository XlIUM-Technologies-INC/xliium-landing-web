"use client";

export default function About() {
  const teamMembers = [
    {
      name: "Xiaohong Xu",
      role: "Technical Lead & Full-Stack Developer",
      image: "xiaohong.jpg",
    },
    {
      name: "Shuyang (Daphne) Liu",
      role: "Client Success & Project Manager",
      image: "/daphne.png",
    },
    {
      name: "Hakim Nshimiyimana",
      role: "SEO Specialist & Content Strategist",
      image: "/hakim.jpg",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
            Meet Our Team
          </h2>
          <div className="h-1 w-16 bg-primary mx-auto mb-8" />
          <p className="text-lg text-foreground leading-relaxed mb-6 max-w-3xl mx-auto">
            We are a small, technical team based in Canada focused on delivering
            practical results for local businesses. With deep expertise in
            full-stack development and SEO, we understand what it takes to build
            websites that work.
          </p>
          <p className="text-lg text-foreground leading-relaxed max-w-3xl mx-auto">
            We believe in clear communication, transparency, and long-term
            relationships. We work together as a family to help your business
            succeed online.
          </p>
        </div>

        <div className="overflow-x-auto pb-4 -mx-6 px-6 scroll-smooth">
          <div className="flex gap-8 md:gap-12 justify-center min-w-min">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center flex-shrink-0"
              >
                <div className="mb-6">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover shadow-lg"
                  />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-muted-foreground font-medium">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
