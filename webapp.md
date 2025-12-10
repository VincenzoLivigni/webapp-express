# webapp_express


## 1 - Utilizzando il file in allegato, creiamo un database con MySQL Workbench  - ✔️
   ### 1.1 - creare cartella `relations` - ✅
   ### 1.2 - creare file `db_movies.sql` - ✅
   ### 1.3 - creare database con `MySQL Workbench` - ✅

<br>
<br>

## 2 - Creiamo una nuova applicazione Express - ✔️
   ### 2.1 - creare file "server.js" - ✅
   ### 2.2 - inizializzare il progetto "npm init -y" - ✅ 
   ### 2.3 - installare express - ✅
   ### 2.4 - creare un file `gitignore` -> node.modules, .env - ✅ 
   ### 2.5 - aggiornare la sezione script package.json - ✅ 
   ### 2.6 - creare la logica del server -> server.js - ✅
   ### 2.7 - aggiungere la prima route -> server.js - ✅
   ### 2.8 - aggiungere il middleware per le risorse statiche -> server.js - ✅
   ### 2.9 - test del file.js - ✅

<br>
<br>

## 3 - Colleghiamo l’app al db e verifichiamo che tutto funzioni - ✔️
   ### 3.1 - installare il pacchetto SQL -> "npm install mysql2" - ✅
   ### 3.2 - creare cartella `database` - ✅
   ### 3.3 - creare file `movies_db.js` - ✅
   ### 3.4 - impostare le configurazioni di MySQL - ✅ 
   ### 3.5 - importare in `server.js` per testare la connessione tra app e database - ✅

<br>
<br>

## 4 - Prepariamo una rotta index per ottenere la lista dei film - 

   ### 4.1 - creare cartella `routes` -
   ### 4.2 - creare file `movies.js` -
   ### 4.3 - creare controller
   ### 4.4 - collegare alle routes
   ### 4.4 - importa il database -
   ### 4.5 - creare la rotta per visualizzare tutti i film (index) -
   ### 4.6 - importa le `routes` in `server.js` -
   ### 4.7 - aggiungere middleware per il parsing - 

<br>
<br>

## 5 - Prepariamo una rotta show per ottenere i dettagli di un singolo film e le sue recensioni - 
   
   ### 5.1 - creare la rotta per visualizzare un singolo film (show) -

<br>
<br>

Bonus:
## 1 - Inserire le immagini nel progetto express - 
## 2 - Inserire i dati di connessione al database come variabili d’ambiente - 
## 3 - Inserire le vostre API in controller - 
## 4 - Inserire le vostre rotte in un router - 
## 5 - Inserire un middleware per le rotte inesistenti - 
## 6 - Inserire un middleware per la gestione errori - 