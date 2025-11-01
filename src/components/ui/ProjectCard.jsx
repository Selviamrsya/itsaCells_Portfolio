import React from "react";

const toolIcon = (tool) => {
  return `/assets/tools/${tool}.png`;
};

export default function ProjectCard({ project, showSeeMore = true }) {
  if (!project) {
    return (
      <div className="flex flex-col h-full bg-[#fffafc] rounded-xl p-1 lg:p-2 items-center justify-center border border-pink-200">
        <div className="text-pink-300 font-medium">No page</div>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex flex-col bg-white rounded-lg p-2 border-2 border-pink-100 shadow-sm overflow-hidden">
      <h3 className="text-xl font-bold text-olive-600 mb-2">{project.name}</h3>
      <div className="mb-3 rounded overflow-hidden bg-gray-100">
        <img src={project.image} alt={project.name} className="w-full h-32 object-cover" />
      </div>
      <p className="text-xs text-gray-700 mb-3 overflow-y-auto max-h-[90px]">{project.description}</p>

      <div className="flex items-center gap-2 mb-3 mt-auto">
        {project.tools.map((t) => (
          <img key={t} src={toolIcon(t)} alt={t} className="w-7 h-7" />
        ))}
      </div>

      <div className="mt-auto flex items-center justify-between">
        {showSeeMore ? (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="bg-olive-300 px-3 py-1 rounded-full text-xs font-semibold text-white shadow hover:shadow-lg transition-shadow"
          >
            See More
          </a>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
