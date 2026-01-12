import { useState, useEffect } from 'react';
import { useLocalStorageString } from '../hooks/useLocalStorage';

interface ExamDateFormProps {
  planId: string;
}

export function ExamDateForm({ planId }: ExamDateFormProps) {
  const [examDate, setExamDate] = useLocalStorageString(`examDate-${planId}`, '');
  const [inputValue, setInputValue] = useState(examDate);
  const [isEditing, setIsEditing] = useState(!examDate);

  // Sincronizar inputValue com examDate quando carregado do localStorage
  useEffect(() => {
    setInputValue(examDate);
    setIsEditing(!examDate);
  }, [examDate]);

  const formatDate = (dateString: string): string => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });
  };

  const handleSave = () => {
    if (inputValue) {
      setExamDate(inputValue);
      setIsEditing(false);
    } else {
      alert('Por favor, insira uma data válida.');
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setInputValue(examDate);
    setIsEditing(false);
  };

  if (!isEditing && examDate) {
    return (
      <div className="exam-date-display">
        <span className="exam-date-label-display">Data da Prova:</span>
        <span className="exam-date-value clickable" onClick={handleEdit} title="Clique para editar">
          {formatDate(examDate)}
        </span>
      </div>
    );
  }

  return (
    <div className="exam-date">
      <label htmlFor="exam-date" className="exam-date-label">
        Data da Prova:
      </label>
      <div className="exam-date-input-group">
        <input
          type="date"
          id="exam-date"
          className="form-control date-input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="btn btn-primary btn-sm" onClick={handleSave}>
          <span className="btn-icon">💾</span>
          Salvar
        </button>
        {examDate && (
          <button className="btn btn-secondary btn-sm" onClick={handleCancel}>
            Cancelar
          </button>
        )}
      </div>
    </div>
  );
}
