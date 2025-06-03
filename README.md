# Portfolio React Pro – Animé & Responsive

Un template de portfolio moderne et animé pour les développeurs créatifs, combinant un design inspiré de l'anime avec des fonctionnalités professionnelles. Construit avec React, Tailwind CSS, et Framer Motion pour des animations fluides.

## Pour qui ?

- Développeurs juniors cherchant à se démarquer
- Étudiants en développement web
- Freelances souhaitant une vitrine professionnelle
- Passionnés d'anime et de design créatif

## Technologies

- ⚛️ React 18 avec TypeScript
- 🎨 Tailwind CSS pour le styling
- 🎬 Framer Motion pour les animations
- 🌓 Mode sombre/clair
- 📱 Design responsive
- 🎯 React Router pour la navigation
- 🗃️ Supabase pour la base de données

## Fonctionnalités

### 🎯 Pages Complètes
- **Accueil** : Hero section animée avec présentation
- **Projets** : Galerie filtrable avec animations
- **À propos** : Présentation détaillée et compétences
- **Contact** : Formulaire de contact interactif

### ✨ Design & UX
- Animations fluides et professionnelles
- Thème sombre/clair persistant
- Fond particules interactif
- Design responsive optimisé
- Micro-interactions sur les éléments

### 🛠 Personnalisation
- Configuration centralisée des projets
- Système de couleurs personnalisable
- Composants réutilisables
- Structure modulaire

## Installation

1. Clonez le repository :
```bash
git clone [votre-repo]
cd portfolio-react-pro
```

2. Installez les dépendances :
```bash
npm install
```

3. Lancez le serveur de développement :
```bash
npm run dev
```

## Configuration de Supabase

### 1. Création du Projet Supabase

1. Créez un compte sur [Supabase](https://supabase.com)
2. Créez un nouveau projet depuis le dashboard
3. Notez vos clés d'API :
   - URL du projet
   - Clé anon/public
   - Clé service_role (pour les migrations)

### 2. Configuration des Variables d'Environnement

Créez un fichier `.env` à la racine du projet :

```env
VITE_SUPABASE_URL=votre_url_projet
VITE_SUPABASE_ANON_KEY=votre_cle_anon
```

### 3. Structure de la Base de Données

Exécutez les migrations SQL suivantes dans l'éditeur SQL de Supabase :

```sql
-- Création de la table des messages
CREATE TABLE messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Activation de RLS (Row Level Security)
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;

-- Politique pour l'insertion de messages
CREATE POLICY "Allow public message creation"
ON messages FOR INSERT
TO public
WITH CHECK (true);

-- Politique pour la lecture des messages (admin uniquement)
CREATE POLICY "Allow authenticated reads"
ON messages FOR SELECT
TO authenticated
USING (auth.role() = 'authenticated');
```

### 4. Intégration dans le Code

Le client Supabase est déjà configuré dans le projet. Pour l'utiliser :

```typescript
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

// Exemple d'insertion de message
const { data, error } = await supabase
  .from('messages')
  .insert([
    {
      name: 'John Doe',
      email: 'john@example.com',
      subject: 'Hello',
      message: 'Test message'
    }
  ]);
```

## Personnalisation

### Projets
Modifiez `src/config/projects.ts` pour ajouter/modifier vos projets :

```typescript
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link: string;
  featured?: boolean;
}
```

### Contenu
- Informations personnelles : `src/config/projects.ts` (profileData)
- Textes des pages : Fichiers dans `src/pages/`
- Liens sociaux : `src/config/projects.ts` (socialLinks)

### Thème
Personnalisez les couleurs et le design dans `tailwind.config.js` :

```javascript
theme: {
  extend: {
    colors: {
      primary: { ... },
      secondary: { ... },
      accent: { ... }
    }
  }
}
```

## Déploiement

Le projet est prêt pour le déploiement sur Vercel ou Netlify :

1. Créez un compte sur [Vercel](https://vercel.com) ou [Netlify](https://netlify.com)
2. Connectez votre repository
3. Suivez les instructions de déploiement

N'oubliez pas de configurer les variables d'environnement Supabase dans votre plateforme de déploiement.

## Licence

MIT License

Copyright (c) 2024

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.