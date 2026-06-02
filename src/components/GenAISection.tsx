import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Search, Bot, Zap, Shield, BarChart3, CheckCircle, Sparkles } from "lucide-react";

const GenAISection = () => {
  const aiModels = [
    { name: "Anthropic Claude", description: "Primary LLM for enterprise AI solutions and SDK integration" },
    { name: "OpenAI GPT", description: "GPT API integration for AI-powered feature development" },
    { name: "Google Gemini", description: "Evaluated and integrated for multimodal AI use cases" },
  ];

  const capabilities = [
    {
      icon: Search,
      title: "Retrieval Augmented Generation (RAG)",
      description: "Architected RAG pipelines combining vector embeddings, semantic search, and LLM inference to deliver accurate, context-aware knowledge retrieval over enterprise document corpora.",
    },
    {
      icon: Brain,
      title: "Prompt Engineering & Optimisation",
      description: "Designed and iterated prompt strategies — chain-of-thought, few-shot, system instruction tuning — to improve LLM response quality, consistency, and reduce hallucinations in production.",
    },
    {
      icon: Bot,
      title: "AI Agents & Workflow Automation",
      description: "Built AI agent pipelines for automated knowledge discovery, document processing, and intelligent business process automation, reducing manual effort across operational workflows.",
    },
    {
      icon: Zap,
      title: "Semantic Search & Vector Embeddings",
      description: "Implemented semantic search infrastructure using vector embeddings and similarity scoring — enabling enterprise users to retrieve conceptually relevant information beyond keyword matching.",
    },
    {
      icon: BarChart3,
      title: "LLM Evaluation & Response Optimisation",
      description: "Assessed model performance, latency, accuracy, and cost across Anthropic, OpenAI, and Gemini — selecting optimal LLMs per use case and continuously tuning output quality.",
    },
    {
      icon: Shield,
      title: "Responsible AI & Enterprise Adoption",
      description: "Evaluated AI solutions for security, data privacy, scalability, and cost considerations — driving responsible AI adoption strategies that satisfy enterprise governance and compliance requirements.",
    },
  ];

  const useCases = [
    "AI-assisted software delivery acceleration",
    "Enterprise knowledge retrieval platforms",
    "Intelligent business process automation",
    "Document analysis and summarisation",
    "Code generation and review assistance",
    "Operational efficiency improvements",
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-card/20 to-background" id="ai">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <Badge variant="outline" className="border-violet-400/50 text-violet-400 px-4 py-1 text-sm mb-4">
            <Sparkles className="w-3.5 h-3.5 mr-1.5 inline" />
            Generative AI Practice
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient">Generative AI & Enterprise AI</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Architecting and delivering AI-powered solutions that enhance software delivery, accelerate knowledge discovery, and enable intelligent business automation
          </p>
        </div>

        {/* LLM Platform Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {aiModels.map((model, index) => (
            <Card
              key={index}
              className="p-6 bg-gradient-to-br from-violet-600/20 to-fuchsia-500/15 border-violet-500/30 hover:border-violet-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/20 group text-center"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-violet-500/20 flex items-center justify-center mx-auto group-hover:bg-violet-500/30 transition-colors">
                  <Brain className="w-6 h-6 text-violet-400" />
                </div>
                <h3 className="font-bold text-base">{model.name}</h3>
                <p className="text-sm text-muted-foreground">{model.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* AI Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {capabilities.map((cap, index) => (
            <Card
              key={index}
              className="p-6 bg-card/40 backdrop-blur-sm border-primary/15 hover:border-violet-500/40 transition-all duration-500 hover:shadow-lg hover:shadow-violet-500/20 group"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-violet-500/20 rounded-lg group-hover:bg-violet-500/30 transition-colors">
                    <cap.icon className="w-5 h-5 text-violet-400" />
                  </div>
                  <h3 className="font-semibold text-sm leading-tight">{cap.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {cap.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* AI Use Cases & Impact Banner */}
        <Card className="p-8 bg-gradient-to-r from-violet-600/10 via-card/60 to-fuchsia-500/10 border-violet-500/20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">
                Enterprise AI Use Cases Delivered
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Applied Generative AI at the enterprise level — not as proof-of-concept prototypes but as production-grade solutions integrated into business-critical workflows, with rigorous evaluation of performance, latency, security, and cost.
              </p>
              <div className="space-y-2">
                {useCases.map((useCase, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-violet-400 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{useCase}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-primary uppercase tracking-widest">AI Engineering Stack</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Anthropic Claude SDK",
                  "OpenAI API",
                  "Google Gemini",
                  "RAG Pipelines",
                  "Prompt Engineering",
                  "Semantic Search",
                  "Vector Embeddings",
                  "AI Agents",
                  "LLM Evaluation",
                  "Python",
                  "FastAPI",
                  "Enterprise AI Governance",
                ].map((tag) => (
                  <Badge
                    key={tag}
                    className="px-3 py-1 text-xs bg-violet-500/20 text-violet-300 border border-violet-500/30 hover:bg-violet-500/30 transition-colors"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default GenAISection;
