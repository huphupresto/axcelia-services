# axcelia-services

Application web simple pour convertir un prix en euros (€) vers le dirham marocain (MAD), puis ajouter automatiquement une majoration de **1,5%**.

## Lancer localement

```bash
python3 -m http.server 8000
```

Puis ouvrir <http://localhost:8000>.

## Fonctionnement

1. Saisir le montant en euros.
2. Vérifier/ajuster le taux de conversion EUR → MAD (par défaut: 10.8).
3. Cliquer sur **Convertir**.
4. L'application affiche:
   - le montant converti en MAD,
   - la majoration (1,5%),
   - le total final.
