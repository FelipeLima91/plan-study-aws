import { useStudyPlan } from '../contexts/StudyPlanContext';

interface CheckboxItemProps {
  id: string;
  text: string;
}

export function CheckboxItem({ id, text }: CheckboxItemProps) {
  const { inputValues, toggleItem } = useStudyPlan();
  const checked = inputValues[id] || false;

  return (
    <label className="flex items-center gap-3 cursor-pointer py-1 px-2 -ml-2 rounded hover:bg-base-200 transition-colors">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={() => toggleItem(id)}
        className="checkbox checkbox-warning checkbox-sm"
      />
      <span className="text-base leading-relaxed">{text}</span>
    </label>
  );
}
