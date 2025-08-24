const SHOP_ITEMS = [
  { name: 'Mandelbrick', price: 50000, rarity: 'red' },
  { name: 'Turbrick', price: 10000, rarity: 'red' },
  { name: 'Quantum Key', price: 5000, rarity: 'red' },
  { name: 'Universal Keycard', price: 100000, rarity: 'red' }
];

function $(id){ return document.getElementById(id); }

function updateBalance() {
  const bal = window.gacha?.easyMode ? '∞' : (window.gacha?.stellarCoin || 0);
  $('shopBalance').textContent = `Balance: ${bal} ⭐`;
}

function renderShop() {
  const grid = $('shopGrid');
  grid.innerHTML = '';
  SHOP_ITEMS.forEach(item => {
    const count = window.gacha?.getItemCount(item.name) || 0;
    const canAfford = window.gacha?.easyMode || ((window.gacha?.stellarCoin || 0) >= item.price);
    const card = document.createElement('div');
    card.className = 'shop-card';
    card.innerHTML = `
      <div class="shop-title">${item.name}</div>
      <div class="shop-meta">
        <span>Price: <strong style="color:var(--accent-primary)">${item.price} ⭐</strong></span>
        <span>Owned: ${count}</span>
      </div>
      <div class="shop-actions">
        <button class="shop-buy"${canAfford ? '' : ' disabled'}>Buy</button>
      </div>
    `;
    card.querySelector('.shop-buy').addEventListener('click', () => {
      // Deduct coins unless Easy Mode
      if (!window.gacha.easyMode) {
        if ((window.gacha.stellarCoin || 0) < item.price) return;
        window.gacha.stellarCoin -= item.price;
        window.gacha.updateStellarCoinDisplay();
      }
      // Grant item (use provided rarity)
      window.gacha.incItem(item.name, 1, item.rarity || 'red');
      // Refresh UI
      updateBalance();
      renderShop();
      // small toast
      window.gacha.showSaveToast(`Purchased ${window.gacha.translateName ? window.gacha.translateName(item.name) : item.name}`, 900);
    });
    grid.appendChild(card);
  });
}

function openShop() {
  updateBalance();
  renderShop();
  const modal = $('shopModal');
  modal.style.display = 'flex';
  requestAnimationFrame(()=> modal.classList.add('show'));
}
function closeShop() {
  const modal = $('shopModal');
  modal.classList.remove('show');
  setTimeout(()=> modal.style.display='none', 250);
}

document.addEventListener('DOMContentLoaded', () => {
  const btn = $('shopBtn');
  if (btn) btn.addEventListener('click', openShop);
  $('closeShopModal').addEventListener('click', closeShop);
  $('shopModal').addEventListener('click', (e)=> { if (e.target === $('shopModal')) closeShop(); });
});