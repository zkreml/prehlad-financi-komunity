
# Přehled Financí Komunity

Tento projekt slouží k zobrazení transparentního přehledu financí komunity. Stránka zobrazuje seznam příjmů a výdajů, které jsou uloženy v CSV souboru, a aktuální stav účtu.

## Struktura projektu

- `index.html` - Hlavní HTML soubor obsahující strukturu stránky.
- `styly.css` - CSS soubor obsahující styly pro stránku.
- `skript.js` - JavaScript soubor obsahující logiku pro načítání a zpracování dat.
- `finance.csv` - CSV soubor obsahující data o transakcích.
- `README.md` - Tento soubor s informacemi o projektu.


## Jak používat

### 1. Klonování repozitáře

Nejprve naklonujte tento repozitář na svůj počítač:

```bash
git clone https://git.arch-linux.cz/Archos/prehlad-financi-komunity.git
```

### 2. Spuštění lokálního serveru

Pro zobrazení stránky je potřeba spustit jednoduchý HTTP server. Můžete použít Python:

- Použití Python 3

```bash
cd prehlad-financi-komunity
python -m http.server
```
- Použití Python 2

```bash
cd prehlad-financi-komunity
python -m SimpleHTTPServer
```

### 3. Otevření prohlížeče

Otevřete webový prohlížeč a přejděte na adresu:
```bash
http://localhost:8000
```
### 4. Aktualizace dat

Pro aktualizaci dat stačí upravit nebo přidat nové záznamy do souboru finance.csv a stránka se automaticky aktualizuje při příštím načtení.

## Struktura CSV souboru

Soubor finance.csv by měl mít následující strukturu:

```bash
Datum,Popis,Částka,Měna,Typ
2024-06-01,Příspěvek Archos,100,EUR,Příjem
2024-06-05,Údržba serveru,-50,EUR,Výdaj
2024-06-10,Členský poplatek,1200,CZK,Příjem
2024-06-15,Obnovení domény,-300,CZK,Výdaj
```
## Přizpůsobení

- Kurz měny: Pro jednoduchost je v kódu nastavený kurz 1 EUR = 25 CZK. Tento kurz můžete upravit podle potřeby v JavaScript kódu v souboru index.html.

## Kontakt

Pokud máte nějaké otázky nebo potřebujete pomoc, můžete mě kontaktovat na [archos@arch-linux.cz](mailto:archos@arch-linux.cz).


Tento README soubor poskytuje užitečné informace o projektu, včetně návodu na spuštění lokálního serveru, struktury CSV souboru a kontaktních informací. Můžeš jej upravit podle potřeby a přidat další informace, které by byly pro uživatele užitečné.

