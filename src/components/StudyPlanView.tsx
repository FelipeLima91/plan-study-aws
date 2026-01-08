import { motion } from 'framer-motion';
import { PlanConfig } from '../data/studyPlan';
import { CountdownBanner } from './CountdownBanner';
import { ExamDateForm } from './ExamDateForm';
import { Accordion } from './Accordion';
import { Footer } from './Footer';

interface StudyPlanViewProps {
    planConfig: PlanConfig;
    onBack: () => void;
}

const containerVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.3,
            when: "beforeChildren",
            staggerChildren: 0.1
        }
    },
    exit: { opacity: 0, x: 50, transition: { duration: 0.3 } }
};

export function StudyPlanView({ planConfig, onBack }: StudyPlanViewProps) {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <CountdownBanner onBack={onBack} planId={planConfig.id} />
            <h1>{planConfig.title}</h1>
            <p>
                Plano de estudo preparado para {planConfig.title}. Acompanhe seu progresso abaixo.
            </p>
            <p className="alert">
                As checklists e anotações são salvas em cache localmente. Se você acessar de outro
                dispositivo ou limpar o cache, não será possível retomar o andamento do plano de estudo.
            </p>
            <ExamDateForm planId={planConfig.id} />
            {planConfig.data.domains.map((domain) => (
                <Accordion key={domain.id} domain={domain} />
            ))}
            <Footer config={planConfig.footerConfig} />
        </motion.div>
    );
}
