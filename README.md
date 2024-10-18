# Bot Twitter Automatique

Ce projet consiste à créer un bot qui tweete automatiquement des messages en utilisant l'API de Twitter. Il est construit avec Python et utilise la bibliothèque `Tweepy` pour interagir avec l'API.

## Objectif

Le bot a pour objectif de publier des tweets à des intervalles réguliers ou en réponse à des événements prédéfinis. Par exemple, il pourrait tweeter des citations, des nouvelles ou tout autre type de contenu en fonction de vos besoins.

## Prérequis

Avant de pouvoir exécuter ce projet, vous devez avoir :

1. Un compte développeur Twitter : [Inscription ici](https://developer.twitter.com/en/apps).
2. Des clés API et des tokens d'accès Twitter (générés après la création de l'application Twitter).
3. Python installé sur votre machine (version 3.x recommandée).
4. Les dépendances Python installées via `pip`.

## Installation

1. Clonez ce dépôt sur votre machine locale :

    ```bash
    git clone https://github.com/votre-utilisateur/bot-twitter-automatique.git
    cd bot-twitter-automatique
    ```

2. Installez les dépendances nécessaires :

    ```bash
    pip install -r requirements.txt
    ```

3. Créez un fichier `.env` pour stocker vos informations d'identification Twitter :

    ```
    CONSUMER_KEY=VotreConsumerKey
    CONSUMER_SECRET=VotreConsumerSecret
    ACCESS_TOKEN=VotreAccessToken
    ACCESS_TOKEN_SECRET=VotreAccessTokenSecret
    ```

## Utilisation

Le fichier principal du projet contient le script Python qui publie automatiquement des tweets. Voici un exemple simple d'utilisation :

```python
import tweepy
import os
from dotenv import load_dotenv

# Charger les variables d'environnement
load_dotenv()

# Authentification avec les clés API Twitter
auth = tweepy.OAuthHandler(os.getenv('CONSUMER_KEY'), os.getenv('CONSUMER_SECRET'))
auth.set_access_token(os.getenv('ACCESS_TOKEN'), os.getenv('ACCESS_TOKEN_SECRET'))
api = tweepy.API(auth)

# Fonction pour tweeter automatiquement
def tweet_auto(message):
    api.update_status(message)

# Exemple d'utilisation
tweet_auto("Ceci est un tweet automatique envoyé par mon bot !")
