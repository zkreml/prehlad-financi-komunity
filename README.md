# Přehled financí komunity

Tento projekt slouží k transparentnímu zobrazení příjmů a výdajů komunity.
Data jsou uložena v CSV souborech a zobrazována na jednoduché webové stránce.

Cílem je:

- mít přehled o financích
- mít data veřejně a čitelně
- mít jednoduchý systém bez databáze

---

## Struktura projektu

```
.
├── index.html              # Hlavní stránka (aktuální rok)
├── finance.csv             # AKTUÁLNÍ ROK – sem se zapisují data
├── archives/
│   ├── finance_2024.csv    # Archiv roku 2024
│   └── finance_2025.csv    # Archiv roku 2025
├── 2024.html               # Zobrazení archivu 2024
├── 2025.html               # Zobrazení archivu 2025
├── skript.js               # Načítání a zpracování CSV
├── styly.css               # Styly
└── README.md
```

---

## Základní principy

- **`finance.csv` = vždy aktuální rok**
- **archivy jsou pouze ke čtení**
- minulý rok se **nikdy nepřepisuje**
- nový rok začíná **převodem z minulého roku**

---

## Formát CSV (POVINNÉ)

Soubor `finance.csv` i archivní soubory musí mít vždy stejný formát:

```csv
Datum,Popis,Částka,Měna,Typ
```

### Pravidla

- přesně **5 sloupců**
- `Částka`:
  - kladná = příjem
  - záporná = výdaj
- `Typ` je vždy `Příjem` nebo `Výdaj`
- žádné uvozovky, žádné mezery navíc

### Příklad

```csv
2026-01-01,Převod z roku 2025,25975.81,CZK,Příjem
2026-02-01,Příspěvek člena,200,CZK,Příjem
2026-02-10,Platba server Hetzner,-3500,CZK,Výdaj
```

---

## Jak začít nový rok

1. Zkontroluj stav transparentního účtu k 31. 12.
2. Vypočti převod:

```
převod = stav účtu − (součet již zapsaných příjmů/výdajů nového roku)
```

3. První řádek v novém `finance.csv` je vždy:

```csv
YYYY-01-01,Převod z roku YYYY-1,ČÁSTKA,CZK,Příjem
```

---

## Archivace roku

Na konci roku:

```bash
mkdir -p archives
mv finance.csv archives/finance_2026.csv
echo "Datum,Popis,Částka,Měna,Typ" > finance.csv
```

---

## Kontrola správnosti dat

### Kontrola počtu sloupců

```bash
awk -F',' 'NF!=5 {print NR ":" $0}' finance.csv
```

### Kontrola součtu

```bash
awk -F',' 'NR>1 {s+=$3} END {printf "%.2f\n", s}' finance.csv
```

Součet musí odpovídat aktuálnímu stavu účtu.

---

## Lokální spuštění

```bash
git clone https://git.arch-linux.cz/Archos/prehlad-financi-komunity.git
cd prehlad-financi-komunity
python -m http.server
```

Otevři v prohlížeči:

```
http://localhost:8000
```

---

## Archivní data

- 📂 Archivní CSV jsou ve složce `archives/`
- 📄 Každý rok má vlastní HTML stránku (`2024.html`, `2025.html`, …)

---

## Kontakt

📧 <archos@arch-linux.cz>
