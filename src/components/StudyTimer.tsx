import { useState, useRef, useEffect, useCallback } from 'react';
import { Timer, Play, Pause, RotateCcw, X, Plus, Eye, EyeOff } from 'lucide-react';

export function StudyTimer() {
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [remainingSeconds, setRemainingSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [showWidget, setShowWidget] = useState(true);
  const [customMinutes, setCustomMinutes] = useState('');
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const endTimeRef = useRef<number | null>(null);
  const modalRef = useRef<HTMLDialogElement>(null);

  const clearTimer = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  useEffect(() => {
    return () => clearTimer();
  }, [clearTimer]);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        if (!endTimeRef.current) return;

        const now = Date.now();
        const remaining = Math.round((endTimeRef.current - now) / 1000);

        if (remaining <= 0) {
          setRemainingSeconds(0);
          clearTimer();
          setIsRunning(false);
          setIsFinished(true);
        } else {
          setRemainingSeconds(remaining);
        }
      }, 1000);
    } else {
      clearTimer();
    }
    return () => clearTimer();
  }, [isRunning, clearTimer]);

  useEffect(() => {
    if (remainingSeconds > 0) {
      setIsFinished(false);
    }
  }, [remainingSeconds]);

  const setPreset = (minutes: number) => {
    clearTimer();
    setIsRunning(false);
    setIsFinished(false);
    setTotalSeconds(minutes * 60);
    setRemainingSeconds(minutes * 60);
    endTimeRef.current = null;
  };

  const addTime = (minutes: number) => {
    const added = minutes * 60;
    setTotalSeconds((prev) => prev + added);
    setRemainingSeconds((prev) => prev + added);
    if (endTimeRef.current) {
      endTimeRef.current += added * 1000;
    }
    setIsFinished(false);
  };

  const handleCustomSet = () => {
    const mins = parseInt(customMinutes, 10);
    if (!isNaN(mins) && mins > 0) {
      setPreset(mins);
      setCustomMinutes('');
    }
  };

  const handleStart = () => {
    if (remainingSeconds > 0) {
      endTimeRef.current = Date.now() + remainingSeconds * 1000;
      setIsRunning(true);
    }
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    clearTimer();
    setIsRunning(false);
    setIsFinished(false);
    setRemainingSeconds(totalSeconds);
    endTimeRef.current = null;
  };

  const closeModal = () => {
    modalRef.current?.close();
  };

  const handleStop = () => {
    clearTimer();
    setIsRunning(false);
    setIsFinished(false);
    setTotalSeconds(0);
    setRemainingSeconds(0);
    endTimeRef.current = null;
    closeModal();
  };

  const openModal = () => {
    modalRef.current?.showModal();
  };

  const minutes = Math.floor(remainingSeconds / 60);
  const seconds = remainingSeconds % 60;
  const progress = totalSeconds > 0 ? ((totalSeconds - remainingSeconds) / totalSeconds) * 100 : 0;
  const isActive = totalSeconds > 0;

  // Color stages: normal → yellow (≤5min) → red (≤1min) → error pulse (finished)
  const getUrgencyClass = (variant: 'widget' | 'display') => {
    if (isFinished) {
      return variant === 'widget'
        ? 'bg-error text-error-content animate-pulse'
        : 'bg-error/10 border-2 border-error animate-pulse';
    }
    if (remainingSeconds > 0 && remainingSeconds <= 60) {
      return variant === 'widget'
        ? 'bg-base-200 text-error border-2 border-error'
        : 'bg-base-200 border-2 border-error';
    }
    if (remainingSeconds > 0 && remainingSeconds <= 300) {
      return variant === 'widget'
        ? 'bg-base-200 text-warning border-2 border-warning'
        : 'bg-base-200 border-2 border-warning';
    }
    return variant === 'widget'
      ? 'bg-base-200 text-base-content border border-base-300'
      : 'bg-base-200 border-2 border-base-300';
  };

  return (
    <>
      {/* Floating Widget — fixed top-right */}
      {isActive && showWidget && (
        <div
          className={`fixed top-4 right-4 z-[999] cursor-pointer rounded-xl shadow-lg px-4 py-2 flex items-center gap-2 transition-all duration-300 hover:scale-105 ${getUrgencyClass('widget')}`}
          onClick={openModal}
        >
          <Timer className="h-4 w-4" />
          <span className="countdown font-mono text-lg">
            <span
              style={{ '--value': minutes } as React.CSSProperties}
              aria-live="polite"
              aria-label={`${minutes} minutos`}
            >
              {minutes}
            </span>
            :
            <span
              style={{ '--value': seconds, '--digits': 2 } as React.CSSProperties}
              aria-live="polite"
              aria-label={`${seconds} segundos`}
            >
              {seconds}
            </span>
          </span>
          {isRunning && <span className="badge badge-xs badge-success animate-pulse" />}
        </div>
      )}

      {/* Modal */}
      <dialog id="study_timer_modal" ref={modalRef} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-lg flex items-center gap-2">
              <Timer className="h-5 w-5" />
              Cronômetro de Estudo
            </h3>
            <div className="flex items-center gap-1">
              <button
                className="btn btn-sm btn-ghost btn-square tooltip tooltip-left"
                data-tip={showWidget ? 'Ocultar widget' : 'Exibir widget'}
                onClick={() => setShowWidget(!showWidget)}
              >
                {showWidget ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
              </button>
              <button className="btn btn-sm btn-ghost btn-square" onClick={closeModal}>
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Timer Display */}
          <div
            className={`flex flex-col items-center py-8 rounded-2xl mb-6 transition-all duration-300 ${getUrgencyClass('display')}`}
          >
            <span
              className={`countdown font-mono text-6xl ${
                isFinished ? 'text-error' : 'text-base-content'
              }`}
            >
              <span
                style={{ '--value': minutes } as React.CSSProperties}
                aria-live="polite"
                aria-label={`${minutes} minutos`}
              >
                {minutes}
              </span>
              :
              <span
                style={{ '--value': seconds, '--digits': 2 } as React.CSSProperties}
                aria-live="polite"
                aria-label={`${seconds} segundos`}
              >
                {seconds}
              </span>
            </span>
            {totalSeconds > 0 && (
              <progress
                className={`progress w-48 mt-4 ${isFinished ? 'progress-error' : 'progress-primary'}`}
                value={progress}
                max="100"
              />
            )}
          </div>

          {/* Finished toast */}
          {isFinished && (
            <div className="alert alert-error mb-4">
              <span className="font-medium">⏰ Tempo esgotado! Bom trabalho!</span>
            </div>
          )}

          {/* Preset Buttons */}
          <div className="mb-4">
            <p className="text-sm font-medium mb-2 opacity-70">Definir tempo:</p>
            <div className="flex flex-wrap gap-2">
              <button className="btn btn-sm btn-outline" onClick={() => setPreset(15)}>
                15 min
              </button>
              <button className="btn btn-sm btn-outline" onClick={() => setPreset(30)}>
                30 min
              </button>
              <button className="btn btn-sm btn-outline" onClick={() => setPreset(60)}>
                1 hora
              </button>
            </div>
          </div>

          {/* Add Time Buttons */}
          <div className="mb-4">
            <p className="text-sm font-medium mb-2 opacity-70">Adicionar tempo:</p>
            <div className="flex flex-wrap gap-2">
              <button className="btn btn-sm btn-ghost" onClick={() => addTime(10)}>
                <Plus className="h-3 w-3" /> 10 min
              </button>
              <button className="btn btn-sm btn-ghost" onClick={() => addTime(30)}>
                <Plus className="h-3 w-3" /> 30 min
              </button>
            </div>
          </div>

          {/* Custom Input */}
          <div className="mb-6">
            <p className="text-sm font-medium mb-2 opacity-70">Tempo personalizado:</p>
            <div className="flex gap-2">
              <input
                type="number"
                className="input input-bordered input-sm w-24"
                placeholder="Min"
                min="1"
                value={customMinutes}
                onChange={(e) => setCustomMinutes(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleCustomSet()}
              />
              <button className="btn btn-sm btn-primary" onClick={handleCustomSet}>
                Definir
              </button>
            </div>
          </div>

          {/* Widget visibility toggle */}
          <div className="mb-4 flex items-center gap-2">
            <label className="label cursor-pointer gap-2">
              <span className="label-text text-sm">Exibir cronômetro na tela</span>
              <input
                type="checkbox"
                className="toggle toggle-sm toggle-primary"
                checked={showWidget}
                onChange={() => setShowWidget(!showWidget)}
              />
            </label>
          </div>

          {/* Controls */}
          <div className="flex justify-center gap-3">
            {!isRunning ? (
              <button
                className="btn btn-primary"
                onClick={handleStart}
                disabled={remainingSeconds === 0}
              >
                <Play className="h-4 w-4" /> Iniciar
              </button>
            ) : (
              <button className="btn btn-warning" onClick={handlePause}>
                <Pause className="h-4 w-4" /> Pausar
              </button>
            )}
            <button className="btn btn-ghost" onClick={handleReset} disabled={totalSeconds === 0}>
              <RotateCcw className="h-4 w-4" /> Resetar
            </button>
            <button
              className="btn btn-ghost text-error"
              onClick={handleStop}
              disabled={totalSeconds === 0}
            >
              <X className="h-4 w-4" /> Encerrar
            </button>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>fechar</button>
        </form>
      </dialog>
    </>
  );
}
