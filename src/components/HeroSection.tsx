import { motion } from 'framer-motion';
import { PlanConfig } from '../data/studyPlan';

interface HeroSectionProps {
  plans: PlanConfig[];
  onSelectPlan: (planId: string) => void;
}

export function HeroSection({ plans, onSelectPlan }: HeroSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative isolate min-h-screen flex items-center justify-center overflow-hidden bg-white"
    >
      {/* Top-right decorative gradient blob (blue/indigo) */}
      <div
        className="absolute -top-40 right-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-800 to-blue-400 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      {/* Bottom-left decorative gradient blob (orange/amber) */}
      <div
        className="absolute inset-x-0 top-[calc(100%-20rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-40rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-orange-500 to-amber-300 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      {/* Main content */}
      <div className="mx-auto max-w-4xl px-6 py-24 text-center sm:py-32 lg:py-40">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="font-sans text-2xl font-bold tracking-tight text-black sm:text-4xl lg:text-5xl"
        >
          Seu Plano de Estudos AWS
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-7 text-black sm:text-lg"
        >
          Organize seus estudos com planos estruturados de 30 dias, acompanhe seu progresso e
          conquiste sua certificação AWS com confiança.
        </motion.p>

        {/* Plan selection buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6"
        >
          {plans.map((plan) => (
            <button
              key={plan.id}
              onClick={() => onSelectPlan(plan.id)}
              className="group relative w-full overflow-hidden rounded-xl px-6 py-3 text-base font-semibold text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-amber-500/25 sm:w-auto"
              style={{
                background: plan.style.backgroundGradient,
              }}
            >
              {/* Hover glow overlay */}
              <span className="absolute inset-0 bg-white/0 transition-all duration-300 group-hover:bg-white/10" />
              <span className="relative">{plan.title}</span>
            </button>
          ))}
        </motion.div>

        {/* Notice box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mx-auto mt-16 max-w-2xl rounded-2xl border border-black/10 bg-white/60 p-6 text-left backdrop-blur-lg"
        >
          <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-black">
            📌 Aviso Importante
          </div>
          <p className="mb-2 text-sm leading-relaxed text-black">
            Este site foi desenvolvido como um projeto pessoal, com o objetivo de servir como uma
            ferramenta de apoio ao aprendizado. O plano de 30 dias de estudos é apenas um exemplo de
            organização como outros sites e cursos. Recomendamos o estudo diário de 1 hora.
          </p>
          <p className="mb-2 text-sm leading-relaxed text-black">
            Se você tiver mais dias disponíveis, melhor ainda — isso permite estudar com mais calma.
            Caso tenha menos dias, será necessário aumentar a carga diária de estudos para
            compensar.
          </p>
          <p className="text-sm font-medium text-black">
            Adapte o ritmo à sua realidade e bons estudos! 🚀
          </p>
        </motion.div>

        {/* Footer links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-12 text-xs text-black"
        >
          <p>Versão 2.1.0 - Feito com ❤️ por Felipe Lima</p>
          <p className="mt-1">
            <a
              href="https://github.com/FelipeLima91/plan-study-aws"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black underline transition-colors hover:text-gray-600"
            >
              GitHub
            </a>
            {' | '}
            <a
              href="https://www.linkedin.com/in/felipe-lima-de-oliveira/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black underline transition-colors hover:text-gray-600"
            >
              LinkedIn
            </a>
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
