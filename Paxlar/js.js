function toggleBitcoinSelection() {
    var bitcoinSelection = document.getElementById('bitcoinSelection');
    bitcoinSelection.classList.toggle('hidden');
}

function selectBitcoin(imageSrc) {
    var selectedBitcoinImage = document.getElementById('selectedBitcoinImage');
    selectedBitcoinImage.src = imageSrc;

    // You can add additional logic or actions here if needed
}
