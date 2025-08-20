// Game data - keeping the same items and characters
const gameData = {
    items: {
        blue: [
            "Tier I Spiritual Staff Embryo", "Tier I Magical Dagger Embryo", "Tier I Enchanted Armor Core",
            "Mystic Lotus Petal", "Scroll of Ignis", "Tier I Mana Crystal", "Tier I Stamina Potion",
            "Ethereal Frost Ore", "Universal Bestiary", "Tier I Spirit Ring Embryo", "Celestial Feather Charm",
            "Book of Aqua", "Tier I Spiritual Bow Embryo", "Tier I Alchemy Catalyst", "Blessed Herb Root",
            "Ancient Rune Tablet", "Phantom Amber Shard", "Tier I Magical Shield Embryo", "Book of Terra",
            "Runic Translation Key"
        ],
        purple: [
            "The Mysterious Rubix", "Stand Arrow", "Book of Undead", "Bow of Salvation", "Hi-Tec-Radar",
            "Unawakened Scepter", "Crown of Eternal Twilight", "Phoenix Heart Core", "Divine Gear Relic",
            "Sword of Forgotten Kings", "Obsidian Dragon Fang", "Astral Compass", "Moonveil Talisman",
            "Crystalized Soul Fragment", "Mask of the Thousand Faces", "Bloodforged Gauntlet",
            "Orb of Dimensional Rift", "Flamebound Grimoire", "Echoing Harp of Spirits", "Starlight War Banner"
        ],
        gold: [
            "Crown of Primordial Kings", "Eternal Flame Core", "Blade of the Abysswalker", "Heavenpiercer Lance",
            "Orb of Infinite Echoes", "Wings of the Fallen Seraph", "Dragonlord's Heartstone",
            "Scepter of Reality's End", "Chaosforged Armor", "Eye of the Void Serpent", "Worldshaper Hammer",
            "Sacred Chalice of Aeons", "Book of All Origins", "Timeweaver's Hourglass", "Ring of the Endless Dream",
            "Basebat of 333", "Hypersonic Multitool", "Scepter of Hope & Love", "Armside Supersonic Blade",
            "Silence", "The Devourer of Souls", "The SoulShatter", "Joker Masker", "Holgyht Orb", "Voidus Twinblade"
        ],
        red: [
            "The Card", "Rubix of 6th Stage Seal", "The All-See Eye of 333", "Requiem Arrow", "The Perfect DNA",
            "The Manual of ⭕💴", "Level V Authority Keycard (G Foundation)", "True Devourer of All Souls",
            "Miyabi's Sealed Katana"
        ]
    },
    characters: {
        purple: [
            "Dak", "M", "Rewd", "Saskon", "Echer", "Bescre", "Zes", "Trons", "Frost", "LinYuan"
        ],
        gold: [
            "G", "Paxton", "Nathan", "Karos", "Kames", "Litem", "『The Lover』", "The Old Duke", "Kasi", "Lauris RaruzY"
        ],
        red: [
            "The Perfect Alternate, G", "Elemental Unleashed, Paxton", "The Red Dust Prodigy, Nathan",
            "Cuber Requiem, Kasi", "The Emperor Awakes, Karos", "Assassin Back on Job, The Old Duke",
            "The True Speach 100% Unsealed, Lauris RaruzY"
        ]
    }
};

class GachaSystem {
    constructor() {
        this.currentRollType = 1;
        this.isRolling = false;
        
        // Original rates for reset functionality
        this.originalRates = {
            blueItem: 87,
            purpleItem: 5,
            goldItem: 3,
            redItem: 0.5,
            purpleChar: 3,
            goldChar: 1,
            redChar: 0.5
        };
        
        // Current rates (modifiable)
        this.currentRates = { ...this.originalRates };
        
        this.setupEventListeners();
        this.setupDebugSystem();
    }
    
    setupEventListeners() {
        // Roll option selection
        document.querySelectorAll('.roll-option').forEach(option => {
            option.addEventListener('click', () => {
                this.selectRollType(parseInt(option.dataset.type));
            });
        });
        
        // Execute roll
        document.getElementById('executeRoll').addEventListener('click', () => {
            this.executeRoll();
        });
        
        // Clear results
        document.getElementById('clearResults').addEventListener('click', () => {
            this.clearResults();
        });
    }
    
    setupDebugSystem() {
        const debugBtn = document.getElementById('debugBtn');
        const musicBtn = document.getElementById('musicBtn');
        const passwordModal = document.getElementById('passwordModal');
        const musicModal = document.getElementById('musicModal');
        const debugModal = document.getElementById('debugModal');
        const passwordInput = document.getElementById('passwordInput');
        const passwordSubmit = document.getElementById('passwordSubmit');
        const passwordError = document.getElementById('passwordError');
        const closePasswordModal = document.getElementById('closePasswordModal');
        const closeDebugModal = document.getElementById('closeDebugModal');
        const resetRates = document.getElementById('resetRates');
        const applyRates = document.getElementById('applyRates');
        
        // Open password modal
        debugBtn.addEventListener('click', () => {
            passwordModal.style.display = 'flex';
            passwordInput.value = '';
            passwordError.style.display = 'none';
            setTimeout(() => passwordInput.focus(), 100);
        });
        
        // Open music confirmation modal
        musicBtn.addEventListener('click', () => {
            musicModal.style.display = 'flex';
        });
        
        // Close modals
        closePasswordModal.addEventListener('click', () => {
            passwordModal.style.display = 'none';
        });
        
        closeDebugModal.addEventListener('click', () => {
            debugModal.style.display = 'none';
        });
        
        // music modal close button
        document.getElementById('closeMusicModal').addEventListener('click', () => {
            musicModal.style.display = 'none';
        });
        
        // Close on overlay click
        passwordModal.addEventListener('click', (e) => {
            if (e.target === passwordModal) {
                passwordModal.style.display = 'none';
            }
        });
        
        musicModal.addEventListener('click', (e) => {
            if (e.target === musicModal) {
                musicModal.style.display = 'none';
            }
        });
        
        debugModal.addEventListener('click', (e) => {
            if (e.target === debugModal) {
                debugModal.style.display = 'none';
            }
        });
        
        // Password submission
        const checkPassword = () => {
            if (passwordInput.value === '114514') {
                passwordModal.style.display = 'none';
                this.openDebugPanel();
            } else {
                passwordError.style.display = 'block';
                passwordInput.value = '';
                passwordInput.focus();
            }
        };
        
        passwordSubmit.addEventListener('click', checkPassword);
        passwordInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                checkPassword();
            }
        });
        
        // Music modal actions
        document.getElementById('musicYes').addEventListener('click', () => {
            // Navigate to external site
            window.location.href = 'https://p4xt0n3.github.io/ttou';
        });
        document.getElementById('musicNo').addEventListener('click', () => {
            musicModal.style.display = 'none';
        });
        
        // Reset rates
        resetRates.addEventListener('click', () => {
            this.currentRates = { ...this.originalRates };
            this.updateDebugInputs();
        });
        
        // Apply rates
        applyRates.addEventListener('click', () => {
            this.applyDebugRates();
            debugModal.style.display = 'none';
        });
    }
    
    openDebugPanel() {
        this.updateDebugInputs();
        document.getElementById('debugModal').style.display = 'flex';
    }
    
    updateDebugInputs() {
        document.getElementById('blueItemRate').value = this.currentRates.blueItem;
        document.getElementById('purpleItemRate').value = this.currentRates.purpleItem;
        document.getElementById('goldItemRate').value = this.currentRates.goldItem;
        document.getElementById('redItemRate').value = this.currentRates.redItem;
        document.getElementById('purpleCharRate').value = this.currentRates.purpleChar;
        document.getElementById('goldCharRate').value = this.currentRates.goldChar;
        document.getElementById('redCharRate').value = this.currentRates.redChar;
    }
    
    applyDebugRates() {
        this.currentRates = {
            blueItem: parseFloat(document.getElementById('blueItemRate').value) || 0,
            purpleItem: parseFloat(document.getElementById('purpleItemRate').value) || 0,
            goldItem: parseFloat(document.getElementById('goldItemRate').value) || 0,
            redItem: parseFloat(document.getElementById('redItemRate').value) || 0,
            purpleChar: parseFloat(document.getElementById('purpleCharRate').value) || 0,
            goldChar: parseFloat(document.getElementById('goldCharRate').value) || 0,
            redChar: parseFloat(document.getElementById('redCharRate').value) || 0
        };
    }
    
    selectRollType(type) {
        this.currentRollType = type;
        
        // Update UI
        document.querySelectorAll('.roll-option').forEach(option => {
            option.classList.toggle('active', parseInt(option.dataset.type) === type);
        });
        
        // Update button text
        const rollBtn = document.getElementById('executeRoll');
        const btnText = rollBtn.querySelector('.btn-text');
        btnText.textContent = type === 1 ? 'SINGLE PULL' : '10-PULL';
    }
    
    rollSingle() {
        const rand = Math.random() * 100;
        
        // Use current rates instead of hardcoded values
        const redCharThreshold = this.currentRates.redChar;
        const redItemThreshold = redCharThreshold + this.currentRates.redItem;
        const goldCharThreshold = redItemThreshold + this.currentRates.goldChar;
        const goldItemThreshold = goldCharThreshold + this.currentRates.goldItem;
        const purpleCharThreshold = goldItemThreshold + this.currentRates.purpleChar;
        const purpleItemThreshold = purpleCharThreshold + this.currentRates.purpleItem;
        
        if (rand < redCharThreshold) {
            // Red character
            return {
                type: 'character',
                rarity: 'red',
                name: this.getRandomItem(gameData.characters.red),
                stars: 6
            };
        } else if (rand < redItemThreshold) {
            // Red item
            return {
                type: 'item',
                rarity: 'red',
                name: this.getRandomItem(gameData.items.red),
                stars: 6
            };
        } else if (rand < goldCharThreshold) {
            // Gold character
            return {
                type: 'character',
                rarity: 'gold',
                name: this.getRandomItem(gameData.characters.gold),
                stars: 5
            };
        } else if (rand < goldItemThreshold) {
            // Gold item
            return {
                type: 'item',
                rarity: 'gold',
                name: this.getRandomItem(gameData.items.gold),
                stars: 5
            };
        } else if (rand < purpleCharThreshold) {
            // Purple character
            return {
                type: 'character',
                rarity: 'purple',
                name: this.getRandomItem(gameData.characters.purple),
                stars: 4
            };
        } else if (rand < purpleItemThreshold) {
            // Purple item
            return {
                type: 'item',
                rarity: 'purple',
                name: this.getRandomItem(gameData.items.purple),
                stars: 4
            };
        } else {
            // Blue item
            return {
                type: 'item',
                rarity: 'blue',
                name: this.getRandomItem(gameData.items.blue),
                stars: 3
            };
        }
    }
    
    getRandomItem(array) {
        return array[Math.floor(Math.random() * array.length)];
    }
    
    roll(count) {
        const results = [];
        for (let i = 0; i < count; i++) {
            results.push(this.rollSingle());
        }
        return results;
    }
    
    async executeRoll() {
        if (this.isRolling) return;
        
        this.isRolling = true;
        const rollBtn = document.getElementById('executeRoll');
        rollBtn.disabled = true;
        
        const results = this.roll(this.currentRollType);
        await this.playAnimation(results);
        this.displayResults(results);
        
        this.isRolling = false;
        rollBtn.disabled = false;
    }
    
    async playAnimation(results) {
        const animationContainer = document.getElementById('rollAnimation');
        const pullText = animationContainer.querySelector('.pull-text');
        const pullOrb = animationContainer.querySelector('.pull-orb');
        const overlay = animationContainer.querySelector('.animation-overlay');
        
        // Show animation
        animationContainer.style.display = 'flex';
        
        // Determine highest rarity
        const rarities = results.map(r => r.rarity);
        const hasCharacter = results.some(r => r.type === 'character');
        const hasRed = rarities.includes('red');
        const hasGold = rarities.includes('gold');
        const hasPurple = rarities.includes('purple');
        
        // Initial phase
        pullText.textContent = 'Analyzing...';
        pullOrb.style.background = 'linear-gradient(135deg, #4a90ff, #6ba3ff)';
        overlay.style.background = 'rgba(26, 39, 68, 0.95)';
        
        await this.sleep(1500);
        
        if (hasPurple || hasGold || hasRed) {
            pullText.textContent = 'Energy Surge...';
            pullOrb.style.background = 'linear-gradient(135deg, #a855f7, #c084fc)';
            overlay.style.background = 'rgba(68, 26, 68, 0.95)';
            await this.sleep(1200);
        }
        
        if (hasGold || hasRed) {
            pullText.textContent = 'Rare Energy Detected!';
            pullOrb.style.animation = 'orbPulse 2s ease-in-out infinite, shake 0.5s ease infinite';
            pullOrb.style.background = 'linear-gradient(135deg, #f59e0b, #fbbf24)';
            overlay.style.background = 'rgba(68, 58, 26, 0.95)';
            await this.sleep(1200);
        }
        
        if (hasRed) {
            pullText.textContent = 'LEGENDARY SIGNATURE!';
            pullOrb.style.animation = 'orbPulse 1s ease-in-out infinite, hardShake 0.3s ease infinite';
            pullOrb.style.background = 'linear-gradient(135deg, #ef4444, #f87171)';
            overlay.style.background = 'rgba(68, 26, 26, 0.95)';
            await this.sleep(1500);
        }
        
        if (hasCharacter) {
            pullText.textContent = 'CHARACTER ACQUIRED!';
            pullOrb.style.background = 'linear-gradient(135deg, #2a1a44, #3a2a55, #1a4433, #4a2a1a)';
            pullOrb.style.backgroundSize = '400% 400%';
            pullOrb.style.animation = 'orbPulse 1s ease-in-out infinite, colorfulBg 2s ease infinite';
            overlay.style.background = 'linear-gradient(135deg, rgba(42, 26, 68, 0.95), rgba(58, 42, 85, 0.95), rgba(26, 68, 51, 0.95))';
            await this.sleep(1500);
        }
        
        pullText.textContent = 'Revealing Results...';
        await this.sleep(800);
        
        // Hide animation
        animationContainer.style.display = 'none';
        pullOrb.style.animation = 'orbPulse 2s ease-in-out infinite';
        pullOrb.style.background = 'linear-gradient(135deg, #00d4ff, #0099cc)';
        pullOrb.style.backgroundSize = 'auto';
    }
    
    displayResults(results) {
        const resultsGrid = document.getElementById('resultsGrid');
        
        results.forEach((result, index) => {
            setTimeout(() => {
                const resultCard = this.createResultCard(result);
                resultsGrid.insertBefore(resultCard, resultsGrid.firstChild);
            }, index * 100);
        });
    }
    
    createResultCard(result) {
        const card = document.createElement('div');
        card.className = `result-card rarity-${result.rarity}`;
        
        if (result.type === 'character') {
            card.classList.add('type-character');
        }
        
        const stars = '★'.repeat(result.stars);
        
        card.innerHTML = `
            <div class="result-header">
                <div class="result-name">${result.name}</div>
                <div class="result-stars">${stars}</div>
            </div>
            <div class="result-type-badge">${result.type === 'character' ? 'Character' : 'Item'}</div>
        `;
        
        return card;
    }
    
    clearResults() {
        const resultsGrid = document.getElementById('resultsGrid');
        resultsGrid.innerHTML = '';
    }
    
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

// Animation keyframes for shake effects
const shakeKeyframes = `
@keyframes shake {
    0%, 100% { transform: translate(-50%, -50%) translateX(0); }
    25% { transform: translate(-50%, -50%) translateX(-5px); }
    75% { transform: translate(-50%, -50%) translateX(5px); }
}

@keyframes hardShake {
    0%, 100% { transform: translate(-50%, -50%) translateX(0) translateY(0); }
    25% { transform: translate(-50%, -50%) translateX(-10px) translateY(-5px); }
    50% { transform: translate(-50%, -50%) translateX(10px) translateY(5px); }
    75% { transform: translate(-50%, -50%) translateX(-8px) translateY(2px); }
}
`;

// Inject animations
const style = document.createElement('style');
style.textContent = shakeKeyframes;
document.head.appendChild(style);

// Initialize the gacha system
document.addEventListener('DOMContentLoaded', () => {
    new GachaSystem();
});