import ProjectCard from "./ProjectCard";
import { projects } from "../Assets/assets";

export default function Projects({ isDarkMode }) {
    return (
        <div
            className={`${
                isDarkMode
                    ? "bg-slate-900 text-white"
                    : "bg-gray-50 text-slate-900"
            } min-h-screen-minus-80 py-12`}
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <header className="mb-10">
                    <h1 className="text-3xl font-bold tracking-tight">
                        Projects
                    </h1>
                    <p
                        className={`mt-2 max-w-2xl text-sm ${
                            isDarkMode ? "text-slate-300" : "text-slate-600"
                        }`}
                    >
                        A curated set of builds I’m proud of. Click through for
                        live demos and source where available.
                    </p>
                </header>

                {/* Grid */}
                <section>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {projects.map((p) => (
                            
                            <ProjectCard
                                key={p.title}
                                project={p}
                                isDarkMode={isDarkMode}
                            />
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
