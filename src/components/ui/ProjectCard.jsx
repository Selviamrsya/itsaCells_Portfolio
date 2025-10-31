// src/components/ui/ProjectCard.jsx
import React from "react";

const toolIcon = (tool) => {
  // asumsikan kamu punya icon di src/assets/icons/<tool>.png
  return `/src/assets/icons/${tool}.png`;
};

export default function ProjectCard({ project, showSeeMore = true }) {
  if (!project) {
    // kosong: tampilkan kertas kosong
    return (
      <div className="w-full h-full bg-[rgba(255,255,255,0.95)] rounded-lg p-6 flex items-center justify-center border border-pink-200">
        <div className="text-pink-300 font-medium">No page</div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-white rounded-lg p-6 border-2 border-pink-100 shadow-sm overflow-hidden">
      <h3 className="text-2xl font-bold text-olive-600 mb-3">{project.name}</h3>
      <div className="mb-4 rounded overflow-hidden bg-gray-100">
        <img src={project.image} alt={project.name} className="w-full h-40 object-cover" />
      </div>
      <p className="text-sm text-gray-700 mb-3">{project.description}</p>

      <div className="flex items-center gap-2 mb-4">
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
            className="bg-olive-300 px-4 py-2 rounded-full text-sm font-semibold text-white shadow"
          >
            See More
          </a>
        ) : (
          <div />
        )}

        <div className="text-xs text-gray-500">Github</div>
      </div>
    </div>
  );
}
