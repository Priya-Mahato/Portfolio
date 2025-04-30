import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const programmingLanguages = ["JavaScript", "Java"];

  const frontendTechnologies = [
    "HTML",
    "CSS",
    "TailwindCSS",
    "JavaScript",
    "React.js",
  ];

  const backendAndDatabases = ["Node.js", "Express.js", "MongoDB"];

  const devToolsAndTechnologies = [
    "Docker",
    "Git Bash",
    "GitHub",
    "Hoppscotch",
    "Jest",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              A dedicated developer with experience in full-stack web
              development and backend systems. Proficient in modern frameworks
              and real-time technologies, with a focus on creating scalable,
              efficient, and user-friendly solutions. Driven to make a valuable
              impact and continually advance within the tech industry.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">
                  Programming Languages
                </h3>
                <div className="flex flex-wrap gap-2">
                  {programmingLanguages.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">
                  Frontend Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {frontendTechnologies.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend & Databases</h3>
                <div className="flex flex-wrap gap-2">
                  {backendAndDatabases.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">
                  Dev Tools & Environments
                </h3>
                <div className="flex flex-wrap gap-2">
                  {devToolsAndTechnologies.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 📘 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>B.Tech in Computer Science & Engineering </strong> -
                  OmDayal Group of Institutions, Howrah (2021-25)
                </li>
                <li>
                  <strong>Class XII [CBSE] </strong> - Delhi Public School,
                  Durgapur
                  <br />
                  Year of Completion - 2021
                </li>
                <li>
                  <strong>Class X [CBSE] </strong> - Delhi Public School,
                  Durgapur
                  <br />
                  Year of Completion - 2019
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    Intern at Hindalco Industries Ltd (Aditya Birla Grp), Ranchi
                    (Aug - Sep 2024)
                  </h4>
                  <br />
                  <p>
                    Built the "Instrument Maintenance System" to streamline
                    calibration and maintenance for the Instrument Department,
                    featuring history tracking, scheduling, and automated
                    reports.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
