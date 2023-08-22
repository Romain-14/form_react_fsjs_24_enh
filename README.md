# se baser sur l'EXO' 10-FORM

completer l'app pour en faire une messagerie.le local storage fera office de "BBD" pour gérer la persistance des données

rajouter pour chaque message (donc objet):
- un identifiant unique -> https://www.npmjs.com/package/uuid
- date et heure d'envoi du message
- une icône user via font-awesome lors de l'affichage

Scinder le composant principal en plusieurs ( au moins en 2 donc App et Form à minima)

l'objet crée via le form aura la forme suivante:
```jsx
{
    uuid : "42315ceazcez426845",
    alias : "kev1",
    msg: "salu les kssos",
    date: "22/08/2023",
    time: "15h26",
}
```

## BONUS
- ajouter une liste d'option pour le genre 

- en fonction du genre, l'icône est différente et/ou la couleur également
faPerson
faPersonDress,
faPersonHalfDress
faUser
