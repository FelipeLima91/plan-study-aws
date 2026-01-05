import { studyPlan } from './data/studyPlan';
import { CountdownBanner } from './components/CountdownBanner';
import { ExamDateForm } from './components/ExamDateForm';
import { Accordion } from './components/Accordion';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <CountdownBanner />
      <h1>Plano de Estudos AWS Certified Developer – Associate (DVA-C02)</h1>
      <p>
        Plano de 30 dias para preparação para o exame AWS Certified Developer – Associate. Inclui
        checklists e espaço para anotações.
      </p>
      <p className="alert">
        As checklists e anotações são salvas em cache localmente. Se você acessar de outro
        dispositivo ou limpar o cache, não será possível retomar o andamento do plano de estudo.
      </p>
      <ExamDateForm />
      {studyPlan.domains.map((domain) => (
        <Accordion key={domain.id} domain={domain} />
      ))}
      <Footer />
    </>
  );
}

export default App;
