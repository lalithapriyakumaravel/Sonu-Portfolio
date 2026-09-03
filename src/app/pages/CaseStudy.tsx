import { useEffect } from "react";
import { useParams, Navigate, Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import { getProject } from "../data/projects";
import { Reveal } from "../components/ui/motion-primitives";
import { ProjectLayout } from "../components/ProjectLayout";
import { WTBooksCaseStudy } from "./casestudies/WTBooksCaseStudy";
import { GTColorMixerCaseStudy } from "./casestudies/GTColorMixerCaseStudy";
import { XionGroceryCaseStudy } from "./casestudies/XionGroceryCaseStudy";
import { SuperIdCardMakerCaseStudy } from "./casestudies/SuperIdCardMakerCaseStudy";
import { EatCirclerCaseStudy } from "./casestudies/EatCirclerCaseStudy";
import { XionAdminCaseStudy } from "./casestudies/XionAdminCaseStudy";
import { DagaDevelopersCaseStudy } from "./casestudies/DagaDevelopersCaseStudy";
import { LondonWasteRemovalCaseStudy } from "./casestudies/LondonWasteRemovalCaseStudy";
import { NatureCandyCaseStudy } from "./casestudies/NatureCandyCaseStudy";
import { MindmaxCaseStudy } from "./casestudies/MindmaxCaseStudy";

export default function CaseStudy() {
  const { id } = useParams();
  const project = id ? getProject(id) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) return <Navigate to="/projects" replace />;

  let content;
  if (project.id === "wt-books") {
    content = <WTBooksCaseStudy project={project} />;
  } else if (project.id === "gt-colour-mixer") {
    content = <GTColorMixerCaseStudy project={project} />;
  } else if (project.id === "xion-grocery") {
    content = <XionGroceryCaseStudy project={project} />;
  } else if (project.id === "super-id-card-maker") {
    content = <SuperIdCardMakerCaseStudy project={project} />;
  } else if (project.id === "eat-circler") {
    content = <EatCirclerCaseStudy project={project} />;
  } else if (project.id === "xion-admin") {
    content = <XionAdminCaseStudy project={project} />;
  } else if (project.id === "daga-developers") {
    content = <DagaDevelopersCaseStudy project={project} />;
  } else if (project.id === "london-waste-removal") {
    content = <LondonWasteRemovalCaseStudy project={project} />;
  } else if (project.id === "nature-candy") {
    content = <NatureCandyCaseStudy project={project} />;
  } else if (project.id === "mindmax") {
    content = <MindmaxCaseStudy project={project} />;
  } else {
    content = <ProjectLayout project={project} />;
  }

  return (
    <article className="relative">
      {/* Back button fixed or absolute depending on layout */}
      <div className="absolute top-10 left-6 lg:left-10 z-50">
        <Reveal>
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 font-mono-jb text-[0.72rem] uppercase tracking-[0.16em] text-white/70 hover:text-white transition-colors"
          >
            <ArrowLeft
              size={14}
              className="transition-transform group-hover:-translate-x-1"
            />
            All work
          </Link>
        </Reveal>
      </div>

      {content}
    </article>
  );
}
