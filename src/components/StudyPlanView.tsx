import { motion } from 'framer-motion';
import { PlanConfig } from '../data/studyPlan';
import { CountdownBanner } from './CountdownBanner';
import { ExamDateForm } from './ExamDateForm';
import { Accordion } from './Accordion';
import { Footer } from './Footer';
import { StudyPlanProvider, useStudyPlan } from '../contexts/StudyPlanContext';

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

export function StudyPlanView(props: StudyPlanViewProps) {
    return (
        <StudyPlanProvider planConfig={props.planConfig}>
            <StudyPlanContent {...props} />
        </StudyPlanProvider>
    );
}

function StudyPlanContent({ planConfig, onBack }: StudyPlanViewProps) {
    const { totalProgress } = useStudyPlan();

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
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px', gap: '20px', flexWrap: 'wrap' }}>
                <div style={{ flex: '0 1 auto' }}>
                    <ExamDateForm planId={planConfig.id} />
                </div>
                
                <div className="general-progress-compact" style={{ flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', minWidth: '200px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '5px' }}>
                        <strong style={{ fontSize: '0.9em', opacity: 0.8 }}>Progresso Geral</strong>
                        <span style={{ fontSize: '1.5em', fontWeight: 'bold' }}>{totalProgress}%</span>
                    </div>
                    <div style={{ width: '100%', maxWidth: '250px', height: '8px', background: 'rgba(0,0,0,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                        <div 
                            style={{ 
                                height: '100%', 
                                width: `${totalProgress}%`, 
                                background: planConfig.style.backgroundGradient || '#4caf50',
                                transition: 'width 0.3s ease'
                            }} 
                        />
                    </div>
                </div>
            </div>
            {planConfig.data.domains.map((domain) => (
                <Accordion key={domain.id} domain={domain} planId={planConfig.id} />
            ))}
            <Footer config={planConfig.footerConfig} />
        </motion.div>
    );
}
