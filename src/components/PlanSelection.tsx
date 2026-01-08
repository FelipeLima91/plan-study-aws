import { motion } from "framer-motion";
import { PlanConfig } from "../data/studyPlan";
import { Footer } from "./Footer";

interface PlanSelectionProps {
  plans: PlanConfig[];
  onSelectPlan: (planId: string) => void;
}

export function PlanSelection({ plans, onSelectPlan }: PlanSelectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }} // Exit to left
      transition={{ duration: 0.3 }}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        padding: "20px",
        maxWidth: "800px",
        margin: "0 auto",
        marginTop: "50px",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
        Escolha seu Plano de Estudos
      </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
        }}
      >
        {plans.map((plan) => (
          <button
            key={plan.id}
            onClick={() => onSelectPlan(plan.id)}
            style={{
              padding: "40px 20px",
              fontSize: "1.5rem",
              fontWeight: "bold",
              borderRadius: "15px",
              cursor: "pointer",
              border: "none", // Removed border
              background: plan.style.backgroundGradient, // Use gradient
              color: plan.style.color,
              transition: "transform 0.2s, box-shadow 0.2s",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "200px",
              boxShadow: "0 4px 6px rgba(0,0,0,0.2)", // Initial shadow
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.02)";
              // Glow effect using the border color
              e.currentTarget.style.boxShadow = `0 0 20px ${plan.style.borderColor}`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 4px 6px rgba(0,0,0,0.2)";
            }}
          >
            {plan.title}
          </button>
        ))}
      </div>
      <div
        style={{
          backgroundColor: "#fff9e6",
          borderRadius: "8px",
          padding: "20px",
          marginBottom: "30px",
          fontSize: "0.9rem",
          lineHeight: "1.6",
          color: "#333",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        <div
          style={{
            fontSize: "1.1rem",
            fontWeight: "bold",
            marginBottom: "10px",
            color: "#ff9900",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          📌 Aviso Importante
        </div>
        <p style={{ margin: "0 0 10px 0" }}>
          Este site foi desenvolvido como um projeto pessoal, com o objetivo de
          servir como uma ferramenta de apoio ao aprendizado. O plano de 30 dias
          de estudos é apenas um exemplo de organização como outros sites e
          cursos. Recomendamos o estudo diário de 1 hora.
        </p>
        <p style={{ margin: "0 0 10px 0" }}>
          Se você tiver mais dias disponíveis, melhor ainda — isso permite
          estudar com mais calma. Caso tenha menos dias, será necessário
          aumentar a carga diária de estudos para compensar.
        </p>
        <p style={{ margin: "0", fontWeight: "500" }}>
          Adapte o ritmo à sua realidade e bons estudos! 🚀
        </p>
      </div>
      <Footer />
    </motion.div>
  );
}
