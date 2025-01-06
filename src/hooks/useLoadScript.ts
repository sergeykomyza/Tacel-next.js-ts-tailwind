import { useEffect, useState } from "react";

const useLoadScript = (url: string) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (document.querySelector(`script[src="${url}"]`)) {
      setLoaded(true); // Скрипт уже загружен
      return;
    }

    const script = document.createElement("script");
    script.src = url;
    script.async = true;
    script.onload = () => setLoaded(true);
    document.head.appendChild(script);

    return () => {
      // Скрипт не удаляем, так как он нужен для работы карты
    };
  }, [url]);

  return loaded; // Возвращаем статус загрузки
};

export default useLoadScript;
