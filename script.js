document.getElementById('calculateTotalBtn').addEventListener('click', function() {
    const prices = document.querySelectorAll('.prices');
    
    let totalPrice = 0;

    // Calculate total price by iterating through each price element
    prices.forEach(function(priceElement) {
        const price = parseFloat(priceElement.textContent); // Convert text to float
        if (!isNaN(price)) {
            totalPrice += price; // Add to total if valid number
        }
    });

    // Create a new row for the total price
    const tableBody = document.querySelector('#groceryTable tbody');
    const newRow = document.createElement('tr');
    
    const itemCell = document.createElement('td');
    itemCell.textContent = 'Total Price'; // Label for the total row
    
    const priceCell = document.createElement('td');
    priceCell.textContent = totalPrice.toFixed(2); // Format total to 2 decimal places

    // Append cells to the new row
    newRow.appendChild(itemCell);
    newRow.appendChild(priceCell);

    // Append the new row to the table body
    tableBody.appendChild(newRow);
});