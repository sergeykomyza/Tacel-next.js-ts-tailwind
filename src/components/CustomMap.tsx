import React, { useEffect, useRef, useState } from "react";
import useLoadScript from "@/hooks/useLoadScript";
import ContactsInfoBox from "./ContactsInfoBox";

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
      var myMap1 = mapInstanceRef.current
      myMap1 = new window.ymaps.Map(mapContainerRef.current, {
        center: [latitude, longitude],
        zoom: zoom,
      });

      var myGeoObject = new ymaps.GeoObject({
          geometry: {
              type: "Point"
          },
      });

      myMap1.geoObjects
        .add(myGeoObject)
        .add(new ymaps.Placemark([latitude, longitude], {
            balloonContent: `<strong>115114, Москва, Павелецкая набережная, д. 2, стр. 2</strong>`,
            iconCaption: `Москва, Павелецкая набережная`
        },{
            preset: 'islands#blueCircleDotIconWithCaption',
            iconCaptionMaxWidth: '200'
        }));
    }
  }, [isYmapsReady, latitude, longitude, zoom]);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (

    <div ref={mapContainerRef} className="w-full h-auto lg:h-[400px]">
      <div className="relative container">
        <ContactsInfoBox />
      </div>
    </div>
  );
};

export default CustomMap;
