// Selecting the heart count in the Navbar//
const heartCountSpan = document.querySelector('.bg-gray-100 span.text-gray-700.font-extrabold');

// Select all heart buttons on the cards//
const cardHeartButtons = document.querySelectorAll('.grid .fa-heart');

let heartCount = 0;

cardHeartButtons.forEach(btn => {
    btn.addEventListener('click', function (e) {
        e.preventDefault();
        heartCount++;
        heartCountSpan.textContent = heartCount;

        
    });
});


// Call Button Logic //

// Select the coin count in the navbar
const coinCountSpan = document.querySelectorAll('.bg-gray-100 span.text-gray-700.font-extrabold')[1];

// Select all Call buttons on the cards
const cardCallButtons = document.querySelectorAll('.grid button.bg-green-500, .grid button.bg-green-600');

let coinCount = parseInt(coinCountSpan.textContent) || 0;

const callHistoryList = document.getElementById('call-history-list');
const clearHistoryBtn = document.getElementById('clear-history-btn');


cardCallButtons.forEach(btn => {
    btn.addEventListener('click', function (e) {
        e.preventDefault();

        const card = btn.closest('.bg-white.rounded-xl.shadow-md');
        const serviceName = card.querySelector('h2') ? card.querySelector('h2').textContent : 'Service';
        const serviceNumber = card.querySelector('p.text-2xl') ? card.querySelector('p.text-2xl').textContent : 'N/A';

        // Check coins
        if (coinCount < 20) {
            alert('Not enough coins to make a call..You need at least 20 coins to make a call.');
            return;
        }

        // Deduct coins
        coinCount -= 20;
        coinCountSpan.textContent = coinCount;

        // Show alert with service name and number
        alert(`Calling ${serviceName} at ${serviceNumber}...20 coins has been deducted.`);


        
        // Add to call history with service name and number
        const callHistoryList = document.querySelector('.bg-white.rounded-xl.shadow.p-4.flex.flex-col.w-full.lg\\:w-1\\/3.mb-10 .mt-4');
        if (callHistoryList) {
            const newEntry = document.createElement('div');
            newEntry.className = 'flex justify-between items-center text-sm';
            newEntry.innerHTML = `
                <div>
                    <p class="font-medium text-gray-700">Service Name : ${serviceName}</p>
                    <p class="text-gray-500">Service Number : ${serviceNumber}</p>
                </div>
            `;
            callHistoryList.prepend(newEntry);
        }

        if (clearHistoryBtn && callHistoryList) {
    clearHistoryBtn.addEventListener('click', function () {
        callHistoryList.innerHTML = '';
    });
}
    });
});