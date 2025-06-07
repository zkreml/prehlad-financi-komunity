
# Přehled Financí Komunity

Tento projekt slouží k zobrazení transparentního přehledu financí komunity.
Stránka zobrazuje seznam příjmů a výdajů, které jsou uloženy v CSV souboru
a aktuální stav účtu.

# Přehled Financí Komunity

Tento projekt slouží k zobrazení transparentního přehledu financí komunity. Stránka zobrazuje seznam příjmů a výdajů, které jsou uloženy v CSV souboru, a aktuální stav účtu.

## Struktura projektu

- `index.html` - Hlavní HTML soubor obsahující strukturu stránky.
- `styly.css` - CSS soubor obsahující styly pro stránku.
- `skript.js` - JavaScript soubor obsahující logiku pro načítání a zpracování dat.
- `finance.csv` - CSV soubor obsahující data o aktuálním roce.
- `finance_2024.csv` - Archivní CSV soubor s daty za rok 2024.
- `2024.html` - Stránka pro zobrazení archivu financí za rok 2024.
- `README.md` - Tento soubor s informacemi o projektu.

## 📂 Archiv finančních záznamů

Kromě aktuálních dat projekt také obsahuje **archiv starších finančních záznamů**, které lze zobrazit přes sekci **Archiv** na hlavní stránce.

### 📜 Dostupné roky

🔹 **[Archiv 2024](https://git.arch-linux.cz/Archos/prehlad-financi-komunity/releases/download/v2.0/finance_2024.csv)**  
🔹 **[Archivní stránka 2024](http://localhost:8000/2024.html) - Zobrazení v tabulce**  

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

Pro aktualizaci dat stačí upravit nebo přidat nové záznamy do souboru finance.csv
a stránka se automaticky aktualizuje při příštím načtení.

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

- Kurz měny: Pro jednoduchost je v kódu nastavený kurz 1 EUR = 25 CZK.
Tento kurz můžete upravit podle potřeby v JavaScript kódu v souboru `skript.js`.

## Kontakt

Pokud máte nějaké otázky nebo potřebujete pomoc, můžete mě kontaktovat na [archos@arch-linux.cz](mailto:archos@arch-linux.cz).

Tento README soubor poskytuje užitečné informace o projektu, včetně návodu na spuštění lokálního serveru,
struktury CSV souboru a kontaktních informací.
Můžeš jej upravit podle potřeby a přidat další informace, které by byly pro uživatele užitečné.
