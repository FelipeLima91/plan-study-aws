import { useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { Save } from 'lucide-react';

interface PostItNote {
  id: string;
  text: string;
  createdAt: number;
}

interface PostItProps {
  dayId: string;
}

export function PostIt({ dayId }: PostItProps) {
  const [postIts, setPostIts] = useLocalStorage<PostItNote[]>(`${dayId}-postits`, []);
  const [inputText, setInputText] = useState('');

  // Função para detectar e converter URLs em links
  const formatTextWithLinks = (text: string): (string | JSX.Element)[] => {
    // Regex melhorado para detectar URLs (http, https, www, e links sem protocolo)
    const urlRegex = /(https?:\/\/[^\s]+|www\.[^\s]+|[a-zA-Z0-9-]+\.[a-zA-Z]{2,}[^\s]*)/g;
    const parts: (string | JSX.Element)[] = [];
    let lastIndex = 0;
    let match;
    let key = 0;

    while ((match = urlRegex.exec(text)) !== null) {
      // Adicionar texto antes do link
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index));
      }

      // Adicionar o link
      let url = match[0];
      if (!url.startsWith('http://') && !url.startsWith('https://')) {
        url = 'https://' + url;
      }

      parts.push(
        <a key={key++} href={url} target="_blank" rel="noopener noreferrer" className="postit-link">
          {match[0]}
        </a>,
      );

      lastIndex = match.index + match[0].length;
    }

    // Adicionar texto restante
    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }

    return parts.length > 0 ? parts : [text];
  };

  const handleSave = () => {
    if (inputText.trim()) {
      const newPostIt: PostItNote = {
        id: `${Date.now()}-${Math.random()}`,
        text: inputText.trim(),
        createdAt: Date.now(),
      };
      setPostIts([...postIts, newPostIt]);
      setInputText('');
    }
  };

  const handleDelete = (id: string) => {
    setPostIts(postIts.filter((note) => note.id !== id));
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
      handleSave();
    }
  };

  return (
    <div className="postit-container">
      <div className="postit-input-section">
        <strong>Anotações:</strong>
        <div className="postit-input-wrapper flex-col w-full">
          <textarea
            className="form-control postit-textarea w-full"
            placeholder="Escreva suas anotações aqui..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={handleKeyPress}
            rows={3}
          />
          <div className="flex justify-between items-center w-full">
            <button
              className="btn btn-primary btn-sm"
              onClick={handleSave}
              disabled={!inputText.trim()}
            >
              <Save size={16} className="mr-1" />
              Salvar
            </button>
            <div className="text-xs opacity-60 flex items-center gap-1 px-1">
              Pressione <kbd className="kbd kbd-xs">Ctrl</kbd> +{' '}
              <kbd className="kbd kbd-xs">Enter</kbd> para salvar
            </div>
          </div>
        </div>
      </div>

      <div className="postit-notes-grid">
        {postIts.map((note) => (
          <div key={note.id} className="postit-note">
            <button
              className="postit-delete"
              onClick={() => handleDelete(note.id)}
              aria-label="Deletar nota"
            >
              ×
            </button>
            <div className="postit-content">{formatTextWithLinks(note.text)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
