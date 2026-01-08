import { motion } from 'framer-motion';
import { PlanConfig } from '../data/studyPlan';
import { Footer } from './Footer';

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
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                padding: '20px',
                maxWidth: '800px',
                margin: '0 auto',
                marginTop: '50px'
            }}
        >
            <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Escolha seu Plano de Estudos</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                {plans.map((plan) => (
                    <button
                        key={plan.id}
                        onClick={() => onSelectPlan(plan.id)}
                        style={{
                            padding: '40px 20px',
                            fontSize: '1.5rem',
                            fontWeight: 'bold',
                            borderRadius: '15px',
                            cursor: 'pointer',
                            border: 'none', // Removed border
                            background: plan.style.backgroundGradient, // Use gradient
                            color: plan.style.color,
                            transition: 'transform 0.2s, box-shadow 0.2s',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            minHeight: '200px',
                            boxShadow: '0 4px 6px rgba(0,0,0,0.2)', // Initial shadow
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'scale(1.02)';
                            // Glow effect using the border color
                            e.currentTarget.style.boxShadow = `0 0 20px ${plan.style.borderColor}`;
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'scale(1)';
                            e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.2)';
                        }}
                    >
                        {plan.title}
                    </button>
                ))}
            </div>
            <Footer />
        </motion.div>
    );
}
