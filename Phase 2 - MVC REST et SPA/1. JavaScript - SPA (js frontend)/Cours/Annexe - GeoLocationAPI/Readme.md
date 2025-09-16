# API Geolocation

L’API Geolocation permet d’obtenir la position géographique de l’utilisateur via le navigateur. Elle est très utile pour les applications web interactives nécessitant la localisation.

> ATTENTION L'api GEOLOCATION NE FONCTONNE PAS SUR FIREFOX. Mieux vaux utiliser Google Chrome.

## Exemple rapide

```js
navigator.geolocation.getCurrentPosition(
    (position) => {
        console.log('Latitude:', position.coords.latitude);
        console.log('Longitude:', position.coords.longitude);
    },
    (error) => {
        console.error('Erreur de géolocalisation:', error);
    }
);
```

## getPosition

La méthode `getCurrentPosition()` récupère la position actuelle de l’utilisateur une seule fois.

```js
navigator.geolocation.getCurrentPosition(
    successCallback,
    errorCallback,
    {
        enableHighAccuracy: true, // plus précis mais plus lent
    }
);
```

## watchPosition

La méthode `watchPosition()` surveille la position de l’utilisateur en temps réel et déclenche un rappel à chaque changement.

```js



const watchId = navigator.geolocation.watchPosition(
    (position) => {
        console.log('Nouvelle position:', position.coords);
    },
    (error) => {
        console.error(error);
    }
);

// Pour arrêter la surveillance :
// navigator.geolocation.clearWatch(watchId);
```

## Requête openmeteo à partir de watchPosition

On peut utiliser la position pour interroger une API météo comme Open-Meteo.

```js
navigator.geolocation.watchPosition(async (position) => {
    const { latitude, longitude } = position.coords;
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;
    const response = await fetch(url);
    const data = await response.json();
    console.log('Météo actuelle:', data.current_weather);
});
```

## Leaflet exemple

Leaflet est une bibliothèque JS pour afficher des cartes interactives. Exemple d’intégration avec la géolocalisation :

```html
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>

<div id="map" style="height: 400px;"></div>
<script>
    const map = L.map('map').setView([48.8584, 2.2945], 13); // Paris par défaut
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

    navigator.geolocation.watchPosition((position) => {
        const { latitude, longitude } = position.coords;
        console.log('Latitude:', latitude, 'Longitude:', longitude);

        map.setView([latitude, longitude], 13);
        L.marker([latitude, longitude]).addTo(map)
            .bindPopup('Vous êtes ici').openPopup();
    });
</script>
```

1. Executer le code précedent dans Google Chrome et sortez dehors avec votre PC pour voir si la carte vous localise bien. :)