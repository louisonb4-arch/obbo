# LEGAL-TODO — OBBO, cave à manger

> **Ne pas mettre en ligne avant d'avoir traité la section 1.**
> État au 17 juillet 2026. Aucune donnée n'a été inventée : tout ce qui n'a pas pu être
> vérifié à une source est marqué `[à fournir]` et apparaît **en surbrillance rose sur le
> site lui-même**, exprès — pour qu'un trou se voie au lieu de se combler avec une
> supposition.

---

## 1. Bloquant avant la mise en ligne

### 1.1 Identité de l'éditeur (`mentions-legales.html`)

| Donnée | État |
|---|---|
| Capital social | **manquant** — obligatoire pour une SARL, ne figure dans aucun registre public |
| RCS | **à confirmer** — « RCS Nantes 902 439 728 » est la forme attendue, non vérifiée à une source |
| Directeur de la publication | **manquant** — la société a **deux gérants** (Guillaume Claireau, Antoine Gaudin) : lequel des deux assume la fonction ? |
| E-mail | **manquant** — apparaît dans les mentions légales, la confidentialité et le bloc accessibilité |

Le téléphone (**02 55 10 39 23**) est repris du site actuel : il est déjà renseigné partout.

### 1.2 Hébergeur (article 6 III-1 LCEN — obligatoire)

Nom, adresse, téléphone et site de l'hébergeur. **Aucun hébergeur définitif n'est arrêté**,
donc les quatre champs sont vides dans `mentions-legales.html`, et la durée de conservation
des journaux de connexion est vide dans `confidentialite.html`.

Une fois l'hébergeur retenu, vérifier s'il implique un **transfert hors UE** (section
correspondante de `confidentialite.html`).

> Le site actuel `obbo-nantes.fr` tourne sous **Apache / PHP 8.2** — ce n'est pas cette
> refonte. L'hébergeur de la refonte est à décider.

### 1.3 Vérifier avant publication

```bash
grep -rn "à fournir\|à confirmer" *.html    # ne doit plus rien renvoyer
```

### 1.4 Les CGV et la page Contact vont tomber

Le pied de page renvoie vers deux adresses de l'**ancien** site :

- `obbo-nantes.fr/conditions-generales-de-ventes` — CGV réelles et détaillées (tarifs, TVA,
  acompte 30 %, privatisation, no-show et empreinte bancaire, bons d'échange, rétractation)
- `obbo-nantes.fr/contact`

**Si cette refonte remplace l'ancien site sur le même domaine, ces deux adresses cessent de
répondre et la maison perd ses CGV.** Trois options, à trancher avec le client :

1. reprendre le texte des CGV existantes dans une page `cgv.html` de ce site ;
2. les conserver ailleurs et corriger le lien ;
3. les retirer — **déconseillé** : la maison vend des privatisations et des bons cadeaux,
   ces CGV ont un objet réel.

> **Contradiction à corriger côté maison** : les CGV actuelles désignent **Zenchef** comme
> outil de réservation, alors que le site pointe vers **Tiptoque**. L'un des deux est faux.

### 1.5 Photographies

Le crédit **Nina Ducleux** est repris du site existant et affiché en pied de page et dans
les mentions légales. **L'étendue de la cession de droits (support, durée, territoire) n'est
pas documentée** et doit être confirmée. Les personnes reconnaissables sur les images doivent
avoir donné leur autorisation au titre du droit à l'image.

---

## 2. Ce qui a été vérifié (et n'est donc pas à redemander)

Relevé le **17 juillet 2026** au registre national des entreprises via l'API publique
`recherche-entreprises.api.gouv.fr` :

- Dénomination : **OBBO**
- Forme : **SARL** (code INSEE 5499 — société à responsabilité limitée)
- Siège : **10 allée des Tanneurs, 44000 Nantes**
- SIREN : **902 439 728** · SIRET siège : **902 439 728 00012**
- TVA : **FR17902439728**
- APE : **56.10A — Restauration traditionnelle**
- Immatriculation : **11 août 2021**
- Gérants : **Guillaume Claireau**, **Antoine Gaudin**
- Coordonnées GPS du siège : **47.2191803, -1.5571205**
- État administratif : **actif**

> **Autre entité, même adresse** : `OBBO COMPAGNIE (OBBO CIE)`, SIREN **994 557 775**,
> immatriculée le 27/11/2025, APE 46.34Z (commerce de gros de boissons), 10 allée des
> Tanneurs. **Le site est édité au nom d'OBBO** (le restaurant). À confirmer si c'est bien
> l'entité éditrice, et non OBBO Compagnie.

Les coordonnées GPS ne sont pas encore dans le JSON-LD de `index.html` — à compléter si l'on
veut le champ `geo`.

---

## 3. Pages légales : ce qui a été créé, et ce qui ne l'a pas été

### Créées

| Page | Pourquoi |
|---|---|
| `mentions-legales.html` | Obligatoire (art. 6 III LCEN) pour tout site édité par une société. |
| `confidentialite.html` | Transparence RGPD sur les journaux de l'hébergeur et les liens sortants, même sans collecte. Contient la section cookies (ancre `#cookies`). |

> **L'ancien site n'a aucune mention légale** — ni `/mentions-legales`, ni
> `/politique-de-confidentialite` (testé : 404). C'est un manquement à l'article 6 LCEN
> qui existe aujourd'hui et que cette refonte comble.

### Volontairement non créées

| Page | Pourquoi pas |
|---|---|
| **CGV** | Ce site ne vend rien : réservations et bons cadeaux partent en lien sortant vers Tiptoque, qui encaisse sur son propre site. Les CGV de la maison existent déjà — voir § 1.4, c'est un problème de lien, pas de rédaction. |
| **CGU** | Aucun compte, aucun contenu déposé par l'utilisateur, aucun service interactif. Sans objet. |
| **Droit de rétractation** | Pas de vente à distance depuis ce site. |
| **Bannière de consentement cookies** | Voir § 4. |

---

## 4. Cookies, traceurs, données

### Ce que le site fait réellement — vérifié le 17 juillet 2026 dans le navigateur

| | |
|---|---|
| Cookies déposés | **aucun** |
| Stockage local | **aucun** — `localStorage.length === 0`, aucun `sessionStorage` |
| Mesure d'audience | **aucune** |
| Requêtes vers des tiers | **aucune** — vérifié : `performance.getEntriesByType('resource')` ne renvoie que des ressources de l'origine du site |
| Formulaires | **aucun** |
| Comptes utilisateurs | **aucun** |
| Newsletter | **aucune** |
| Paiement | **aucun** |

### Pourquoi il n'y a pas de bannière

L'article 82 de la loi Informatique et Libertés impose le consentement **avant tout dépôt de
cookie non strictement nécessaire**. Aucun cookie n'étant déposé, il n'y a rien à consentir.
Une bannière serait une gêne sans objet. C'est un choix argumenté, pas un oubli.

**Ce qui déclencherait l'obligation d'en poser une :**

- ajouter Google Analytics, Matomo (en mode non exempté), un pixel Meta ou tout traceur ;
- **intégrer une carte Google Maps en `<iframe>`** (aujourd'hui l'itinéraire est un simple
  lien sortant, exprès) ;
- **intégrer le module Tiptoque** dans les pages (aujourd'hui c'est un lien sortant, exprès) ;
- intégrer une vidéo, un widget Instagram ou Facebook ;
- **recharger les polices depuis Google Fonts** — voir ci-dessous.

Dans ces cas : dispositif Refuser / Accepter / Personnaliser, refus aussi simple que
l'acceptation, aucun dépôt avant consentement, lien permanent de modification du choix dans
le pied de page.

### Polices — ce qui a changé le 17 juillet 2026

Le site chargeait **Fraunces, Instrument Sans et Caveat depuis `fonts.googleapis.com` et
`fonts.gstatic.com`**. Chaque visite transmettait donc l'adresse IP du visiteur à Google,
sans consentement — le point précis sur lequel la CNIL et plusieurs autorités européennes
ont sanctionné des éditeurs.

Les trois familles sont désormais **auto-hébergées** dans `assets/font/` (licence SIL OFL
1.1, sous-ensembles latin + latin-ext, polices variables, ~488 Ko). Les `<link>` vers Google
ont été retirés d'`index.html` et les `@font-face` ajoutés en tête de `styles.css`.

**Test de non-régression :** ouvrir l'onglet Réseau, filtrer sur « third-party ». Le compte
doit rester à zéro.

---

## 5. À vérifier après la mise en ligne

- [ ] `grep -rn "à fournir\|à confirmer" *.html` ne renvoie plus rien
- [ ] Le lien CGV du pied de page répond (voir § 1.4)
- [ ] Le lien Contact du pied de page répond (voir § 1.4)
- [ ] `robots.txt` et `sitemap.xml` pointent le vrai domaine
- [ ] Le site est déclaré dans Google Search Console
- [ ] La fiche Google Business est cohérente avec les horaires du site
- [ ] Aucune requête tierce dans l'onglet Réseau
- [ ] `document.cookie` est vide
