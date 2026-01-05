import { useLocalStorageBoolean } from '../hooks/useLocalStorage';

interface CheckboxItemProps {
  id: string;
  text: string;
  initialChecked: boolean;
}

export function CheckboxItem({ id, text, initialChecked }: CheckboxItemProps) {
  const [checked, setChecked] = useLocalStorageBoolean(id, initialChecked);

  return (
    <label className="custom-checkbox">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        className="checkbox-input"
      />
      <span className="checkbox-custom"></span>
      <span className="checkbox-label">{text}</span>
    </label>
  );
}
