import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">WanderLust</h3>
              <p className="text-gray-400 mb-4">
                An Airbnb inspired property listing and booking platform with
                secure authentication, CRUD for listings/reviews, Mapbox
                integration, and Cloudinary-based image uploads.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Node.js", "EJS", "MongoDB", "JWT", "Passport.js"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://wanderlust-trail.onrender.com"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →{" "}
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">HorizonHub</h3>
              <p className="text-gray-400 mb-4">
                A responsive weather widget integrating the OpenWeatherMap API
                to display real-time weather updates, including temperature,
                humidity, and other key metrics.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React.js", "CSS", "Material UI", "JavaScript"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://horizonhub-fevj.onrender.com"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →{" "}
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">ConvoFy</h3>
              <p className="text-gray-400 mb-4">
                A scalable video conferencing app with real-time video calling,
                in-room chat, screen sharing, JWT authentication, and host-level
                controls. Modular design ensures performance and
                maintainability.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React.js", "Node.js", "Socket.IO", "WebRTC", "JWT"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://convofy.onrender.com"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
