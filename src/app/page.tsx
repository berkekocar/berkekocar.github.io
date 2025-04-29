// app/page.tsx
import { Github, Linkedin, Mail } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--color-bg)] text-[var(--color-accent)] flex flex-col items-center justify-center p-6">
      
      {/* Header */}
      <h1 className="text-2xl font-bold text-[var(--color-primary)] mb-2">
       Erdogan Berke Kocar
      </h1>



      {/* Content */}
      <div className="max-w-2xl space-y-4 text-center text-base md:text-lg">
        <p>
          Pre-Sales Engineer at Datadog, with expertise as an AWS Cloud Architect specializing in Containers and Serverless technologies.
        </p>
        <p>
          I help Datadog customers adopt DevSecOps best practices by bridging observability, security, and cloud-native architecture.
        </p>
        <p>
          Passionate about Kubernetes, container security, and enabling engineering teams to build reliable, scalable platforms with confidence.
        </p>
      </div>

      {/* Social Icons */}
      <div className="mt-10 flex items-center gap-8 text-[var(--color-primary)]">
        <a
          href="https://www.linkedin.com/in/berkekocar/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:underline"
        >
          <Linkedin className="h-5 w-5" />
          <span>LinkedIn</span>
        </a>

        <a
          href="https://github.com/berkekocar"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:underline"
        >
          <Github className="h-5 w-5" />
          <span>GitHub</span>
        </a>

        <a
          href="mailto:your.email@example.com"
          className="flex items-center gap-2 hover:underline"
        >
          <Mail className="h-5 w-5" />
          <span>Email</span>
        </a>
      </div>
    </main>
  );
}
