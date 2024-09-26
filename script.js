document.getElementById('calculate-total').addEventListener('click', () => {
    const prices = document.querySelectorAll('.prices');
    let total = 0;

    // Calculate the total price
    prices.forEach(price => {
        total += parseFloat(price.textContent); // Convert to float and add to total
    });

    // Check if a total row already exists and remove it
    const ansDiv = document.getElementById('ans');
    ansDiv.textContent = ''; // Clear previous total if it exists
    ansDiv.textContent = `Total Price: ${total.toFixed(2)}`; // Display total price formatted to 2 decimal places
});
