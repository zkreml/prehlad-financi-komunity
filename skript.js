document.addEventListener('DOMContentLoaded', function() {
    // Funkce pro načítání financí
    function loadFinanceData(csvFile) {
        console.log(`Načítání souboru: ${csvFile}`);  // Debug výpis
        fetch(csvFile)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(data => {
                console.log('Načtená data:', data);  // Debug výpis načtených dat
                let rows = data.split('\n').slice(1); // Odstraníme hlavičku CSV souboru
                rows = rows.filter(row => row.trim() !== ""); // Odstranit prázdné řádky
                rows.reverse(); // Obrátit pořadí řádků
                const tableBody = document.querySelector('#finance-table tbody');
                tableBody.innerHTML = ''; // Vyprázdnit tabulku před načtením nových dat
                let accountBalance = 0;
                rows.forEach(row => {
                    const columns = row.split(',');
                    if (columns.length >= 5) {
                        const tr = document.createElement('tr');
                        columns.forEach(column => {
                            const td = document.createElement('td');
                            td.textContent = column.trim();
                            tr.appendChild(td);
                        });
                        tableBody.appendChild(tr);

                        // Výpočet zůstatku
                        const amount = parseFloat(columns[2].replace(/,/g, '').replace(/[^0-9.-]/g, '')); // Ošetření čísel
                        const currency = columns[3].trim();

                        if (!isNaN(amount)) {
                            if (currency === 'CZK') {
                                accountBalance += amount;
                            } else if (currency === 'EUR') {
                                accountBalance += amount * 25;  // Pro jednoduchost: 1 EUR = 25 CZK
                            }
                        }
                    }
                });
                document.getElementById('account-balance').textContent = accountBalance.toFixed(2) + ' CZK';
            })
            .catch(error => {
                console.error('Chyba při načítání CSV souboru:', error);
                document.getElementById('account-balance').textContent = 'Chyba při načítání dat';
            });
    }

    // Načítání aktuálního souboru finance.csv
    loadFinanceData('finance.csv');  // Soubor je ve stejné složce, proto nemusíš zadávat cestu

    // Přidání funkce pro načítání archivovaných dat za rok 2024
    document.getElementById('load-archive-2024').addEventListener('click', function() {
        loadFinanceData('finance_2024_corrected.csv');  // Stejná složka pro archivovaný soubor
    });
});
$(document).ready(function() {
    $('#dropdownMenuButton').on('click', function() {
        $('.dropdown-menu').toggle(); // Ruční zobrazení dropdown menu
    });
});

