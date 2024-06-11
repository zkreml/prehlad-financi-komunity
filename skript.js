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
                        td.textContent = column;
                        tr.appendChild(td);
                    });
                    tableBody.appendChild(tr);

                    // Calculate account balance
                    const amount = parseFloat(columns[2]);
                    const currency = columns[3];
                    if (currency === 'CZK') {
                        accountBalance += amount;
                    } else if (currency === 'EUR') {
                        // For simplicity, assume 1 EUR = 25 CZK (you can adjust the conversion rate)
                        accountBalance += amount * 25;
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
