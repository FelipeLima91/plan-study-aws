import { Day as DayType } from '../types';
import { CheckboxItem } from './CheckboxItem';
import { PostIt } from './PostIt';

interface DayProps {
  day: DayType;
}

export function Day({ day }: DayProps) {
  const getCheckboxState = (checkId: string): boolean => {
    const saved = localStorage.getItem(checkId);
    return saved === 'true';
  };

  return (
    <div className="day" id={day.id}>
      <h2>{day.title}</h2>
      <div className="checklist">
        {day.checklist.map((item) => (
          <CheckboxItem
            key={item.id}
            id={item.id}
            text={item.text}
            initialChecked={getCheckboxState(item.id)}
          />
        ))}
      </div>
      <PostIt dayId={day.id} />
    </div>
  );
}
