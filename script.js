document.addEventListener('DOMContentLoaded', function() {
    const tenderForm = document.getElementById('tender-form');
    const tendersList = document.getElementById('tenders-list');
    const clientForm = document.getElementById('client-form');
    const suppliersList = document.getElementById('suppliers-list');

    tenderForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const quantity = document.getElementById('quantity').value;
        const product = document.getElementById('product').value;
        const priceDuration = document.getElementById('priceDuration').value;
        const description = document.getElementById('description').value;
        const endDate = document.getElementById('endDate').value;

        const tenderItem = document.createElement('li');
        tenderItem.innerHTML = `
            <h3>Товар: ${product}</h3>
            <p><strong>Количество:</strong> ${quantity}</p>
            <p><strong>Цена:</strong> ${priceDuration}</p>
            <p><strong>Описание:</strong> ${description}</p>
            <p><strong>Срок:</strong> ${endDate}</p>
            <ul class="bids-list"></ul>
            <form class="bid-form">
                <input type="text" class="bid-company" placeholder="Название компании" required>
                <input type="number" class="bid-amount" placeholder="Предложенная сумма" required>
                <input type="text" class="bid-contact" placeholder="Контактная информация" required>
                <button type="submit" class="btn">Подать предложение</button>
            </form>
        `;

        const bidForm = tenderItem.querySelector('.bid-form');
        const bidsList = tenderItem.querySelector('.bids-list');

        bidForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const bidCompany = tenderItem.querySelector('.bid-company').value;
            const bidAmount = tenderItem.querySelector('.bid-amount').value;
            const bidContact = tenderItem.querySelector('.bid-contact').value;

            const bidItem = document.createElement('li');
            bidItem.innerHTML = `
                <p><strong>Компания:</strong> ${bidCompany}</p>
                <p><strong>Сумма:</strong> ${bidAmount}</p>
                <p><strong>Контактная информация:</strong> ${bidContact}</p>
            `;

            bidsList.appendChild(bidItem);

            // Очистка полей формы после добавления предложения
            bidForm.reset();
        });

        tendersList.appendChild(tenderItem);

        // Очистка полей формы после добавления тендера
        tenderForm.reset();
    });

    clientForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const clientProduct = document.getElementById('client-product').value;
        const clientPrice = document.getElementById('client-price').value;
        const clientEndDate = document.getElementById('client-endDate').value;
        const clientDescription = document.getElementById('client-description').value;

        const supplierItem = document.createElement('li');
        supplierItem.innerHTML = `
            <h3>Товар: ${clientProduct}</h3>
            <p><strong>Цена:</strong> ${clientPrice}</p>
            <p><strong>Срок:</strong> ${clientEndDate}</p>
            <p><strong>Описание:</strong> ${clientDescription}</p>
        `;

        suppliersList.appendChild(supplierItem);

        // Очистка полей формы после добавления информации
        clientForm.reset();
    });
});
