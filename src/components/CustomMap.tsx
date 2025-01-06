import React, { useEffect, useRef, useState } from "react";
import useLoadScript from "@/hooks/useLoadScript";

interface CustomMapProps {
  latitude: number;
  longitude: number;
  zoom?: number;
}

const CustomMap: React.FC<CustomMapProps> = ({ latitude, longitude, zoom = 10 }) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null); // Храним экземпляр карты
  const [isYmapsReady, setIsYmapsReady] = useState(false); // API готово
  const [error, setError] = useState<string | null>(null); // Для обработки ошибок

  const isScriptLoaded = useLoadScript(
    "https://api-maps.yandex.ru/2.1/?lang=ru_RU"
  );

  useEffect(() => {
    const checkYmaps = async () => {
      if (isScriptLoaded && typeof window !== "undefined") {
        try {
          if (window.ymaps && typeof window.ymaps.ready === "function") {
            window.ymaps.ready(() => {
              setIsYmapsReady(true); // Помечаем, что API готово
            });
          } else {
            // Если ymaps ещё не доступен, пробуем снова через короткий таймаут
            setTimeout(checkYmaps, 100);
          }
        } catch (err) {
          setError("Не удалось загрузить Yandex Maps API.");
        }
      }
    };

    checkYmaps();
  }, [isScriptLoaded]);

  useEffect(() => {
    if (isYmapsReady && mapContainerRef.current && !mapInstanceRef.current) {
      mapInstanceRef.current = new window.ymaps.Map(mapContainerRef.current, {
        center: [latitude, longitude],
        zoom: zoom,
      });

      // Добавляем метку
      const placemark = new window.ymaps.Placemark([latitude, longitude], {
        hintContent: "Местоположение",
        balloonContent: "Это пример метки",
      });

      mapInstanceRef.current.geoObjects.add(placemark);
    }
  }, [isYmapsReady, latitude, longitude, zoom]);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return <div ref={mapContainerRef} style={{ width: "100%", height: "400px" }} />;
};

export default CustomMap;
