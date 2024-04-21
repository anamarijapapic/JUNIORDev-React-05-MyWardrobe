### Digitalna Dalmacija JUNIORDev React 2024

# Praktični rad 5

## Zadatak

Napravite vlastiti primjer aplikacije koja koristi CRUD elemente. Ideju aplikacije možete prilagoditi vlastitim željama.

## Opis aplikacije

Aplikacija služi za evidenciju vlastite garderobe. Na sučelju postoji dio za unos novih komada odjeće, pri čemu se unose svi relevantni podaci. Na drugom dijelu aplikacije su vidljivi svi trenutno uneseni komadi, te ih je moguće uređivati ili brisati.

Za potrebe izrade aplikacije napravite vlastite modele podataka i spremite ih u datoteku koju možete učitati pomoću "json-server" modula.

### Funkcionalnosti aplikacije

- Dodavanje novih elemenata - pokušajte iskoristiti različite input elemente kako bi se upoznali sa njihovim radom. Možete li dodati colorpicker element za odabir boje ili polje za odabir datuma (npr. datum kupnje)
- Prikaz svih trenutnih elemenata - u tablici za prikaz prikažite sve podatke o spremljenim komadima odjeće. Ukoliko ste za svaki objekt dodali veću količinu podataka, možete nadograditi aplikaciju na način da u stupcu "opcije" dodate i tipku "Detalji" koja će proširiti samo taj odabrani redak tablice i prikazati detalje o tom objektu (uvjetno renderiranje).
- Uređivanje i brisanje elemenata - dodajte mogućnost uređivanja dijela ili svih podataka o nekom komadu odjeće, te mogućnost brisanja. Prije brisanja bi bilo poželjno upitati korisnika je li siguran u svoj odabir.
- Filtriranje prikaza - dodajte mogućnost filtriranja prikaza prema nekoj karakteristici, npr. prikaz samo elemenata po nekoj veličini ili vrsti odjeće. (S obzirom da poslužitelj vraća sve podatke, filtriranje radite unutar komponente - možete imati jedno stanje sa svim podacima, a drugo sa podacima za prikaz koje se mijenja ovisno o odabranoj opciji)
- Prikaz slike - poslužitelj koji koristimo u primjeru nema opciju spremanja datoteka ali slike možete prikazati na prilikom unosa novih elemenata spremite putanju do slike. Putanja može biti na neki eksterni link ili možete "ručno" spremiti slike u direktorij "public" u svom projektu i navoditi relativne putanje do tih slika.

### Vizualni primjer rješenja

![Primjer rješenja](https://github.com/anamarijapapic/JUNIORDev-React-05-MyWardrobe/assets/92815435/1ff3eca1-fa05-49af-a8e9-ff7321897321)
