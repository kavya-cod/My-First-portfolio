import React, { useEffect, useRef } from 'react';
import { X, CheckCircle, Layers, Tag, ExternalLink, AlertCircle, LineChart, Cpu, ShoppingBag } from 'lucide-react';
import type { Project } from '../data/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      modalRef.current?.focus();
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const renderIllustrativeDiagram = (type: Project['visualType']) => {
    if (type === 'ml-pipeline') {
      return (
        <div className="p-4 rounded-xl bg-[#090B12] border border-white/[0.08] space-y-3">
          <div className="flex items-center justify-between text-xs font-mono text-slate-400 pb-2 border-b border-white/[0.06]">
            <span className="flex items-center gap-1.5 text-violet-400">
              <Cpu className="w-3.5 h-3.5" />
              <span>Model Architecture & Pipeline Diagram</span>
            </span>
            <span className="text-[11px] text-amber-400/90 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
              Illustrative Diagram
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1 text-center">
            <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06]">
              <span className="text-[11px] font-mono text-cyan-300 block mb-1">Classifier 01</span>
              <h5 className="text-xs font-bold text-white">Logistic Regression</h5>
              <p className="text-[11px] text-slate-400 mt-1">Linear decision boundary baseline</p>
            </div>
            <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06]">
              <span className="text-[11px] font-mono text-violet-300 block mb-1">Classifier 02</span>
              <h5 className="text-xs font-bold text-white">Decision Tree</h5>
              <p className="text-[11px] text-slate-400 mt-1">Feature entropy & recursive splits</p>
            </div>
            <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06]">
              <span className="text-[11px] font-mono text-purple-300 block mb-1">Classifier 03</span>
              <h5 className="text-xs font-bold text-white">Random Forest</h5>
              <p className="text-[11px] text-slate-400 mt-1">Ensemble bagging & variance control</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2 p-2.5 rounded-lg bg-violet-950/20 border border-violet-500/20 text-[11px] text-slate-300">
            <span className="font-mono text-violet-300">Evaluated Diagnostics:</span>
            <span>Accuracy • Precision • Recall • F1-score • Confusion Matrix • ROC Curve • AUC</span>
          </div>
        </div>
      );
    }

    if (type === 'eda-distribution') {
      return (
        <div className="p-4 rounded-xl bg-[#090B12] border border-white/[0.08] space-y-3">
          <div className="flex items-center justify-between text-xs font-mono text-slate-400 pb-2 border-b border-white/[0.06]">
            <span className="flex items-center gap-1.5 text-cyan-400">
              <LineChart className="w-3.5 h-3.5" />
              <span>EDA Analytical Workflow Matrix</span>
            </span>
            <span className="text-[11px] text-amber-400/90 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
              Illustrative Diagram
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 text-center">
            <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.06]">
              <span className="text-[10px] text-slate-400 font-mono block">Phase 1</span>
              <span className="text-xs font-semibold text-white">Data Cleaning</span>
              <span className="text-[10px] text-slate-500 block mt-0.5">Missing & duplicates</span>
            </div>
            <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.06]">
              <span className="text-[10px] text-slate-400 font-mono block">Phase 2</span>
              <span className="text-xs font-semibold text-white">Outlier Audit</span>
              <span className="text-[10px] text-slate-500 block mt-0.5">Speed & height IQR</span>
            </div>
            <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.06]">
              <span className="text-[10px] text-slate-400 font-mono block">Phase 3</span>
              <span className="text-xs font-semibold text-white">Visualizations</span>
              <span className="text-[10px] text-slate-500 block mt-0.5">Histograms & boxes</span>
            </div>
            <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.06]">
              <span className="text-[10px] text-slate-400 font-mono block">Phase 4</span>
              <span className="text-xs font-semibold text-white">Correlations</span>
              <span className="text-[10px] text-slate-500 block mt-0.5">Heatmap patterns</span>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="p-4 rounded-xl bg-[#090B12] border border-white/[0.08] space-y-3">
        <div className="flex items-center justify-between text-xs font-mono text-slate-400 pb-2 border-b border-white/[0.06]">
          <span className="flex items-center gap-1.5 text-purple-400">
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Retail Transaction Analytics Schema</span>
          </span>
          <span className="text-[11px] text-amber-400/90 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
            Illustrative Diagram
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1 text-center">
          <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06]">
            <span className="text-[10px] text-cyan-300 font-mono block mb-1">Financial Stream</span>
            <h5 className="text-xs font-bold text-white">Revenue & Discounts</h5>
            <p className="text-[11px] text-slate-400 mt-1">Seasonal sales trends & price elasticity</p>
          </div>
          <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06]">
            <span className="text-[10px] text-violet-300 font-mono block mb-1">Product Mix</span>
            <h5 className="text-xs font-bold text-white">Categories & Items</h5>
            <p className="text-[11px] text-slate-400 mt-1">Cross-product combinations</p>
          </div>
          <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06]">
            <span className="text-[10px] text-purple-300 font-mono block mb-1">Customer Actions</span>
            <h5 className="text-xs font-bold text-white">Payments & Basket</h5>
            <p className="text-[11px] text-slate-400 mt-1">Payment modes and transaction KPIs</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        tabIndex={-1}
        className="relative w-full max-w-3xl my-8 rounded-2xl bg-[#0E111C] border border-white/[0.12] shadow-2xl shadow-black p-6 sm:p-8 space-y-6 text-left max-h-[90vh] overflow-y-auto focus:outline-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 cursor-pointer"
          aria-label="Close project details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="pr-10 space-y-2">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-violet-600/20 text-violet-300 border border-violet-500/30">
              {project.category}
            </span>
          </div>
          <h3 id="modal-project-title" className="font-heading text-2xl sm:text-3xl font-bold text-white">
            {project.title}
          </h3>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {project.fullDescription}
          </p>
        </div>

        {/* Illustrative Architecture Diagram */}
        {renderIllustrativeDiagram(project.visualType)}

        {/* Key Highlights from Resume */}
        <div className="space-y-3">
          <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold font-mono flex items-center gap-2">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>Key Accomplishments & Implementation Details</span>
          </h4>
          <div className="space-y-2">
            {project.keyHighlights.map((hl, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/[0.05] text-sm text-slate-300"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-2" />
                <span>{hl}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Workflow Methodology */}
        <div className="space-y-3">
          <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold font-mono flex items-center gap-2">
            <Layers className="w-3.5 h-3.5 text-violet-400" />
            <span>Methodology & Workflow Steps</span>
          </h4>
          <div className="grid grid-cols-1 gap-2.5">
            {project.workflowSteps.map((step, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] space-y-1"
              >
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-violet-500/10 text-violet-300 font-semibold">
                    Step {idx + 1}
                  </span>
                  <h5 className="text-sm font-semibold text-white">{step.title}</h5>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 pl-1">
                  {step.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Tags */}
        <div className="space-y-2.5">
          <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold font-mono flex items-center gap-1.5">
            <Tag className="w-3.5 h-3.5 text-slate-400" />
            <span>Technologies & Libraries</span>
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-[#141828] text-slate-200 border border-white/[0.08]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Notice on Metrics & Repositories */}
        <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-700/50 flex items-start gap-3 text-xs text-slate-400">
          <AlertCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            Note: All project descriptions and workflows strictly reflect evaluated academic and internship deliverables from Kavya's resume. Any visual metrics or charts shown are illustrative representations of the analytical pipeline.
          </p>
        </div>

        {/* Footer Actions: Repo Button (hidden if no URL provided) */}
        <div className="pt-2 flex items-center justify-between border-t border-white/[0.08]">
          <span className="text-xs text-slate-500 font-mono">
            {project.githubUrl ? 'Source available' : 'Source code repository not published in resume'}
          </span>
          <div className="flex items-center gap-3">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold bg-violet-600 text-white hover:bg-violet-500 transition-colors"
              >
                <span>View Repository</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : null}
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg text-xs font-medium text-slate-300 hover:text-white bg-white/[0.05] hover:bg-white/[0.1] transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
