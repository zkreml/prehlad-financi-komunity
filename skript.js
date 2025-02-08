document.addEventListener('DOMContentLoaded', function() {
    fetch('finance.csv')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            let rows = data.split('\n').slice(1);
            rows = rows.filter(row => row.trim() !== ""); // Remove empty rows
            rows.reverse(); // Reverse the order of rows
            const tableBody = document.querySelector('#finance-table tbody');
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

                    // Debug output
                    console.log('Row:', row);
                    console.log('Columns:', columns);

                    // Calculate account balance
                    const amount = parseFloat(columns[2].replace(/,/g, '').replace(/[^0-9.-]/g, '')); // Remove any invalid characters and ensure proper decimal handling
                    const currency = columns[3].trim();
                    
                    // Debug output
                    console.log('Amount:', amount);
                    console.log('Currency:', currency);

                    if (!isNaN(amount)) {
                        if (currency === 'CZK') {
                            accountBalance += amount;
                        } else if (currency === 'EUR') {
                            // For simplicity, assume 1 EUR = 25 CZK (you can adjust the conversion rate)
                            accountBalance += amount * 25;
                        }
                    } else {
                        console.error('Invalid amount:', columns[2]);
                    }
                }
            });
            document.getElementById('account-balance').textContent = accountBalance.toFixed(2) + ' CZK';
        })
        .catch(error => {
            console.error('Error fetching the CSV file:', error);
            document.getElementById('account-balance').textContent = 'Chyba při načítání dat';
        });
});
$(document).ready(function() {
    $('#dropdownMenuButton').on('click', function() {
        $('.dropdown-menu').toggle(); // Ruční zobrazení dropdown menu
    });
});

