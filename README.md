### Foody ###

# API
La prima problematica affrontata è stata quella di come utilizzare l'API.
Dopo aver letto la documentazione [Open Food Facts](https://openfoodfacts.github.io/api-documentation) e aver capito la struttura del .json ho proceduto a creare un Service con cui importare i dati. 

# Struttura del progetto
L'idea originaria è stata quella di creare un componente genitore che ospitava due componenti figli, uno per le card e uno per la ricerca, i quali avrebbero comunicato tra loro tramite Input e Output.
Tuttavia nonostante avessi terminato le varie logiche per farlo, a progetto quasi ultimato ho notato alcuni bug fastidiosi e complessi da risolvere, e data la natura semplice del progetto ho preferito accorpare i due componenti, risolvendo così le problematiche riscontrate.

# Search Bar
Per la searchbar ho optato per una libreria esistente [ng-select](https://www.npmjs.com/package/@ng-select/ng-select) ma non avendola mai usata mi sono preso del tempo per documentarmi sulle funzionalità principali e modificare ng-select e ng-option secondo le necessità del progetto.
Per via dei dati non molto consistenti dell'API, ho preferito utilizzare solamente i campi completi, filtrando i prodotti che contenevano il campo `abbreviated_product_name`.

# Cards
Per le cards degli elementi attivi ho utilizzato l'ngFor su un nuovo array `dataCards` che si popola in seguito alla selezione del campo nella searchbar.
Ho deciso di mostrare 5 valori nutrizionali principali ed anche qui sempre per via dell'API ho scelto di fare un compromesso sulla visualizzazione delle immagini, preferendo di mostrarle un po' zoomate in modo da poter mantenere le cards consistenti nonostante le diverse dimensioni fornite dall'API; per lo stesso motivo ho anche deciso di impostare un overflow sul nome del prodotto dato che alcuni dei nomi forniti sono innecessariamente lunghi, scelta non bellissima visivamente ma funzionale, magari con più tempo si sarebbe potuto rimappare i dati ricevuti oppure sperare in dati migliori dal backend. :)
Ho utilizzato inoltre la `pipe number` di Angular per limitare i dati a 2 numeri decimali, in modo da uniformare ulteriormente la visualizzazione delle cards.

# Comparazione
Per le icone ho utilizzato [Material-Icons](https://google.github.io/material-design-icons/), inserendole tramite la funzione `trendingIcon()` e colorandole tramite operatori ternari a seconda del valore confrontato.
Come default ho impostato il valore di `primaryItem` a 0, in modo da far partire la comparazione dal primo prodotto scelto.
Tramite l'icona della stella e l'indice del prodotto ho permesso poi di cambiare il valore di `primaryItem` in modo da poter utilizzare anche altri prodotti come base per la comparazione, cambiando dinamicamente le icone e i colori relativi alle differenze dei valori nutrizionali.

# Stili
Infine ho lavorato sul css e sistemato alcune criticità di design responsive, rimanendo in linea con il wireframe fornito ed adeguandomi alla scelta di colori e di impaginazione.
Per le risoluzioni più piccole ho deciso di fissare la barra di ricerca sul lato alto, in modo da permettere di aggiungere nuove card o eliminarle tutte senza dover scrollare lo schermo.


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.