import { useState, useEffect } from 'react';

export function useCountdown(examDate: string | null): string {
  const [countdownText, setCountdownText] = useState<string>('Insira a data da prova abaixo.');

  useEffect(() => {
    if (!examDate) {
      setCountdownText('Insira a data da prova abaixo.');
      return;
    }

    const updateCountdown = () => {
      const now = new Date();
      const targetDate = new Date(examDate);
      const timeDiff = targetDate.getTime() - now.getTime();

      if (timeDiff > 0) {
        const daysLeft = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        setCountdownText(`Faltam ${daysLeft} dias para a prova!`);
      } else {
        setCountdownText('A prova já ocorreu!');
      }
    };

    // Atualizar imediatamente
    updateCountdown();

    // Atualizar a cada minuto
    const interval = setInterval(updateCountdown, 60 * 1000);

    return () => {
      clearInterval(interval);
    };
  }, [examDate]);

  return countdownText;
}
