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

    // Display the total price in the designated area
    document.getElementById('ans').textContent = `Total Price: $${totalPrice.toFixed(2)}`;
});