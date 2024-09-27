// Function to calculate total price and append to table
function calculateTotal() {
    // Select all elements with class 'prices'
    const priceElements = document.querySelectorAll('.prices');
    
    let total = 0;

    // Iterate through the NodeList and sum the prices
    priceElements.forEach(priceElement => {
        const price = parseFloat(priceElement.textContent);
        if (!isNaN(price)) {
            total += price;
        }
    });

    // Create a new row for the total price
    const table = document.getElementById('grocery-table');
    const newRow = document.createElement('tr');
    const totalCell = document.createElement('td');
    totalCell.colSpan = 2; // Span across 2 columns
    totalCell.textContent = `Total: $${total.toFixed(2)}`; // Format to two decimal places

    // Append the cell and the new row to the table
    newRow.appendChild(totalCell);
    table.appendChild(newRow);
}

// Call the function to execute
calculateTotal();
