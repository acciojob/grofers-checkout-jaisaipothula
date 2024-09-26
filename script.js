document.getElementById('calculate-total').addEventListener('click', () => {
    const prices = document.querySelectorAll('.prices');
    let total = 0;

    prices.forEach(price => {
        total += parseFloat(price.textContent); // Convert to float and add to total
    });

    // Check if a total row already exists and remove it
    const existingTotalRow = document.querySelector('.total-row');
    if (existingTotalRow) {
        existingTotalRow.remove();
    }

    // Create a new row for total
    const totalRow = document.createElement('tr');
    totalRow.classList.add('total-row');

    const totalCell = document.createElement('td');
    totalCell.colSpan = 1; // Merge cells
    totalCell.textContent = 'Total Price:';

    const totalPriceCell = document.createElement('td');
    totalPriceCell.textContent = total.toFixed(2); // Display total price formatted to 2 decimal places

    totalRow.appendChild(totalCell);
    totalRow.appendChild(totalPriceCell);

    // Append the new total row to the table body
    document.querySelector('#grocery-table tbody').appendChild(totalRow);
});
