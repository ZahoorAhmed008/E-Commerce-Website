
        document.querySelectorAll('.quantity').forEach(input => {
            input.addEventListener('input', function() {
                const price = parseFloat(this.getAttribute('data-price'));
                const quantity = parseInt(this.value);
                const total = price * quantity;
                this.closest('tr').querySelector('.total').textContent = 'Rs ' + total;

                updateSubtotal();
            });
        });

        function updateSubtotal() {
            let subtotal = 0;
            document.querySelectorAll('.total').forEach(td => {
                subtotal += parseFloat(td.textContent.replace('Rs ', ''));
            });
            document.getElementById('subtotal').textContent = subtotal;
        }
    