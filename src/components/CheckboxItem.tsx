import { useStudyPlan } from '../contexts/StudyPlanContext';

interface CheckboxItemProps {
  id: string;
  text: string;
}

export function CheckboxItem({ id, text }: CheckboxItemProps) {
  const { inputValues, toggleItem } = useStudyPlan();
  const checked = inputValues[id] || false;

  return (
    <label className="custom-checkbox">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={() => toggleItem(id)}
        className="checkbox-input"
      />
      <span className="checkbox-custom"></span>
      <span className="checkbox-label">{text}</span>
    </label>
  );
}
