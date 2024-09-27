let draggedElement = null;

document.querySelectorAll('.item').forEach(item => {
    item.setAttribute('draggable', 'true'); // Make the item draggable

    item.addEventListener('dragstart', (e) => {
        draggedElement = item; // Store the dragged element
        setTimeout(() => {
            item.style.display = 'none'; // Hide the element while dragging
        }, 0);
    });

    item.addEventListener('dragend', () => {
        setTimeout(() => {
            draggedElement.style.display = 'table-row'; // Show the element again
            draggedElement = null; // Clear the reference
        }, 0);
    });

    item.addEventListener('dragover', (e) => {
        e.preventDefault(); // Prevent default to allow drop
    });

    item.addEventListener('drop', (e) => {
        e.preventDefault(); // Prevent default action
        if (draggedElement) {
            const targetElement = e.target.closest('.item'); // Ensure target is an item
            if (targetElement && targetElement !== draggedElement) {
                const parent = targetElement.parentNode;

                // Insert dragged element before the target element
                parent.insertBefore(draggedElement, targetElement);
            }
        }
    });
});
