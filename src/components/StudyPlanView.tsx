import { PlanConfig } from '../data/studyPlan';
import { CountdownBanner } from './CountdownBanner';
import { ExamDateForm } from './ExamDateForm';
import { Accordion } from './Accordion';


interface StudyPlanViewProps {
    planConfig: PlanConfig;
    onBack: () => void;
}

export function StudyPlanView({ planConfig, onBack }: StudyPlanViewProps) {
    return (
        <>
            <CountdownBanner onBack={onBack} />
            <h1>{planConfig.title}</h1>
            <p>
                Plano de estudo preparado para {planConfig.title}. Acompanhe seu progresso abaixo.
            </p>
            <p className="alert">
                As checklists e anotações são salvas em cache localmente. Se você acessar de outro
                dispositivo ou limpar o cache, não será possível retomar o andamento do plano de estudo.
            </p>
            <ExamDateForm />
            {planConfig.data.domains.map((domain) => (
                <Accordion key={domain.id} domain={domain} />
            ))}
        </>
    );
}
