# OBBO — cave à manger · Refonte site

Refonte complète de https://obbo-nantes.fr — one-page statique (HTML/CSS/JS, zéro dépendance build).

## Direction artistique — « la carte vivante »

Le site est traité comme la carte papier du restaurant : fond papier crème grainé, encre, rouge « tache de vin » tiré du logo (verre renversé), annotations manuscrites reprenant les vrais cadres accrochés en salle (« Le cœur a ses raisins », « Que le raisin ignore »).

- **Palette** : papier `#F3EDE0` / encre `#221A12` / vin `#A22333` / vin profond `#571B25` (fonds)
- **Typos** : Fraunces (display + italiques), Instrument Sans (texte), Caveat (annotations manuscrites)
- **Motifs** : entrée de dictionnaire « cave à manger n.f. », prix à points de conduite, séparateur « o o o » repris de la carte papier, tampon tournant Bib Gourmand, rond de tache de vin, grain papier SVG
- **Animations** : reveals IntersectionObserver (translateY + clip-path images — aucun zoom photo), marquee CSS, tampon rotatif. `prefers-reduced-motion` respecté.

## Contenu (100 % réel, extrait du site + PDF carte)

- Bib Gourmand Michelin 2025, « sang neuf » 2023, Trophée Sommelier Grand Ouest 2020
- Carte été 2026 complète (déjeuner 23/26 €, assiettes du soir avec prix, Menu Découverte 58 €)
- Cave : ~100 domaines, régions + noms de domaines réels, médaille d'argent Star Wine List
- Adresse 10 allée des Tanneurs, horaires d'été, tram 50 Otages, parking Talensac
- Réservation + bons cadeaux → Tiptoque (module du client)

## Photos

6 photos HD récupérées du site (originaux 3000–5000 px, redimensionnées 1800 px) — crédit **Nina Ducleux** (mentionné en footer/galerie).

**À demander au client** : photos paysage (façade, comptoir de la cave, service en salle, mains/équipe en cuisine) — tout le stock actuel est en portrait.

**À vérifier avec le client** : lien bon cadeau (pointé vers Tiptoque), horaires hors été, page CGV (lien actuel vers l'ancien site).

## Fichiers

- `index.html` — one-page (SEO : title/meta/OG, JSON-LD Restaurant, sitemap, robots)
- `styles.css`, `main.js`
- `assets/img/` photos + logo · `assets/pdf/` cartes téléchargeables

## Lancer en local

```bash
cd ~/obbo-site && python3 -m http.server 8745
# → http://localhost:8745
```
