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
            "Dragon Ball",
            "Scepter of Reality's End", "Chaosforged Armor", "Eye of the Void Serpent", "Worldshaper Hammer",
            "Sacred Chalice of Aeons", "Book of All Origins", "Timeweaver's Hourglass", "Ring of the Endless Dream",
            "Basebat of 333", "Hypersonic Multitool", "Scepter of Hope & Love", "Armside Supersonic Blade",
            "Silence", "The Devourer of Souls", "The SoulShatter", "Joker Masker", "Holgyht Orb", "Voidus Twinblade",
            // NEW Gold-tier items requested:
            "Gojo's Blindfold", "Wheel of Dharma", "Sword Piece of Umbra", "Mysterious Hi-Tech Mask",
            "Piece of Bone...?", "Rokakaka Fruit", "Hamon Manual", "Spin Manual", "Fragment of Tyranny",
            "Eye of Ender", "Golden Apple", "Ribcage of Saint Corpse Part", "Arm of the Saint Corpse Part",
            "Heart of the Saint Corpse Part", "Pelvis of the Saint Corpse Part", "Skull of the Saint Corpse Part",
            "Leg of the Saint Corpse Part", "Eye of the Saint Corpse Part"
        ],
        red: [
            "The Card", "Rubix of 6th Stage Seal", "The All-See Eye of 333", "Requiem Arrow", "The Perfect DNA",
            "The Manual of ⭕💴", "Level V Authority Keycard (G Foundation)", "True Devourer of All Souls",
            "Miyabi's Sealed Katana",
            // NEW Red-tier items requested:
            "Sukuna's Finger", "Six Eyes", "The Bones of 87", "New Rokakaka Fruit", "Umbra",
            "Original Blacksite", "Calamity's Flow in a Bottle", "The Whole Corpse of the Saint",
            "The Bible", "The Tale of The Old Universe"
        ],
        black: [
            "GOD IS LOVE YOU"
        ]
    },
    characters: {
        purple: [
            "Dak", "M", "Rewd", "Saskon", "Echer", "Bescre", "Zes", "Trons", "Frost", "LinYuan"
        ],
        gold: [
            "G", "Paxton", "Nathan", "Karos", "Kames", "Litem", "『The Lover』", "The Old Duke", "Kasi", "Lauris RaruzY",
            // NEW Gold characters requested:
            "Kamustrophy Subforce", "Veroy Subforce", "Casual Subforce", "G-033 Subforce", "G-Adv Subforce",
            "Rister", "Shadow", "QingXuan", "Chiya Harano", "Trasy", "Joseph", "Cirys", "Deep Abyss",
            "Reinforced", "Wood", "The Mysterio", "Hyper", "Misma", "Collision"
        ],
        red: [
            "The Perfect Alternate, G", "Elemental Unleashed, Paxton", "The Red Dust Prodigy, Nathan",
            "Cuber Requiem, Kasi", "The Emperor Awakes, Karos", "Assassin Back on Job, The Old Duke",
            "The True Speach 100% Unsealed, Lauris RaruzY",
            // NEW Red characters requested:
            "Cosmical Rubix 100% Awaken, Rister", "The Assassin in Darkness, Shadow",
            "Spiritual Devastation, QingXuan", "Fallen Cherry Blossoms, Chiya Harano",
            "The Hope & Love, Trasy", "The Greatest Joker, Joseph", "Holyght Released, Cirys",
            "Unseen Lethal Danger, Deep Abyss", "The Invincible Defence, Reinforced",
            "Cosmical Colossal Woodcrawler, Wood", "The First Alternate, The Mysterio",
            "The Deep Horror Within, Hyper", "The Last Planner, Misma", "Know Everything Exist, Collision"
        ]
    }
};

class GachaSystem {
    constructor() {
        this.currentRollType = 1;
        this.isRolling = false;
        this.stellarCoin = 100; // start with 100 StellarCoin by default
        this.sellQueue = {}; // items to sell: { itemName: count }
        this.username = ''; // new: username persisted via localStorage
        
        this.easyMode = false; // NEW: Easy Mode default OFF
        this.autoClear = true; // NEW: Auto Clear default ON
        
        // Inventories
        this.characterInventory = []; // stores character names
        // map itemName -> { count: number, rarity: 'blue'|'purple'|'gold'|'red' }
        this.itemInventory = {};
        
        // Original rates for reset functionality
        this.originalRates = {
            blueItem: 87,
            purpleItem: 5,
            goldItem: 3,
            redItem: 0.5,
            blackItem: 0.000333,
            purpleChar: 3,
            goldChar: 1,
            redChar: 0.5
        };
        
        // Current rates (modifiable)
        this.currentRates = { ...this.originalRates };
        
        this.setupEventListeners();
        this.setupDebugSystem();
        // show startup import/name modal on launch
        setTimeout(()=> this.initStartupFlow(), 100);

        // start autosave (every 60s)
        this.setupAutoSave();
    }
    
    setupEventListeners() {
        // Roll option selection
        document.querySelectorAll('.roll-option').forEach(option => {
            option.addEventListener('click', () => {
                this.selectRollType(parseInt(option.dataset.type));
            });
        });
        
        // Auto Clear toggle in right bar
        const autoBtn = document.getElementById('autoClearBtn');
        if (autoBtn) {
            autoBtn.textContent = `Auto Clear: ${this.autoClear ? 'On' : 'Off'}`;
            autoBtn.addEventListener('click', () => {
                this.autoClear = !this.autoClear;
                autoBtn.textContent = `Auto Clear: ${this.autoClear ? 'On' : 'Off'}`;
                autoBtn.style.background = this.autoClear ? 'rgba(34,197,94,0.08)' : 'rgba(255,255,255,0.03)';
            });
        }
        
        // Execute roll
        document.getElementById('executeRoll').addEventListener('click', () => {
            this.executeRoll();
        });
        
        // Clear results
        document.getElementById('clearResults').addEventListener('click', () => {
            this.clearResults();
        });

        // Gallery button
        document.getElementById('galleryBtn').addEventListener('click', () => {
            this.showGallery();
        });
        
        // Easy Mode toggle
        const easyBtn = document.getElementById('easyModeBtn');
        if (easyBtn) {
            easyBtn.addEventListener('click', () => {
                this.easyMode = !this.easyMode;
                easyBtn.textContent = `Easy Mode: ${this.easyMode ? 'On' : 'Off'}`;
                // update display immediately
                this.updateStellarCoinDisplay();
                // subtle visual cue
                easyBtn.style.background = this.easyMode ? 'rgba(34,197,94,0.12)' : 'rgba(255,255,255,0.03)';
            });
        }
        
        document.getElementById('closeGalleryModal').addEventListener('click', () => {
            this.hideGallery();
        });

        // Save/Load UI
        document.getElementById('saveLoadBtn').addEventListener('click', () => {
            document.getElementById('saveLoadModal').style.display = 'flex';
            document.getElementById('saveTextarea').value = this.exportState();
            document.getElementById('saveLoadMsg').textContent = 'Preview below. You can copy, save to local, or paste a saved JSON and click Import.';
        });
        document.getElementById('closeSaveLoadModal').addEventListener('click', ()=> document.getElementById('saveLoadModal').style.display = 'none');

        // Crafting & Inventory buttons
        document.getElementById('craftingBtn').addEventListener('click', () => {
            document.getElementById('craftingModal').style.display = 'flex';
            document.getElementById('craftMessage').textContent = '';
            this.updateCraftListCounts();
        });
        document.getElementById('inventoryBtn').addEventListener('click', () => {
            this.showInventory('characters');
            document.getElementById('inventoryModal').style.display = 'flex';
        });
        document.getElementById('closeCraftingModal').addEventListener('click', ()=> document.getElementById('craftingModal').style.display = 'none');
        document.getElementById('closeInventoryModal').addEventListener('click', ()=> document.getElementById('inventoryModal').style.display = 'none');
        document.getElementById('invCharsBtn').addEventListener('click', ()=> this.showInventory('characters'));
        document.getElementById('invItemsBtn').addEventListener('click', ()=> this.showInventory('items'));
        // Craft actions (delegated)
        document.querySelectorAll('.craft-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const recipe = e.target.closest('.craft-item').dataset.recipe;
                this.attemptCraft(recipe);
            });
        });
        
        // Sell button
        document.getElementById('sellBtn').addEventListener('click', () => {
            this.showSellModal();
        });
        
        document.getElementById('closeSellModal').addEventListener('click', () => {
            document.getElementById('sellModal').style.display = 'none';
        });
        
        document.getElementById('executeSell').addEventListener('click', () => {
            this.executeSell();
        });

        // Add All to sell queue button
        document.getElementById('addAllSell').addEventListener('click', () => {
            this.addAllToSellQueue();
        });

        // Save Progress button (immediately trigger a manual save)
        const spBtn = document.getElementById('saveProgressBtn');
        if (spBtn) {
            spBtn.addEventListener('click', async () => {
                try {
                    await this.performAutoSave(false);
                    // also update save modal textarea preview if it's open
                    const ta = document.getElementById('saveTextarea');
                    if (ta) ta.value = this.exportState();
                    this.showSaveToast('Saved', 900);
                } catch (e) {
                    this.showSaveToast('Save Failed', 900);
                }
            });
        }

        // Video modal button
        const videoBtn = document.getElementById('videoBtn');
        if (videoBtn) {
            videoBtn.addEventListener('click', () => {
                document.getElementById('videoModal').style.display = 'flex';
                // reset fields when opened
                document.getElementById('videoUrlInput').value = '';
                this.clearVideoScan();
            });
        }
        document.getElementById('closeVideoModal').addEventListener('click', ()=> document.getElementById('videoModal').style.display='none');
        document.getElementById('videoClearBtn').addEventListener('click', ()=> { document.getElementById('videoUrlInput').value=''; this.clearVideoScan(); });

        document.getElementById('videoInitBtn').addEventListener('click', async () => {
            const url = document.getElementById('videoUrlInput').value.trim();
            if (!url) { this.showVideoError('Please paste a YouTube link.'); return; }
            const id = this.parseYouTubeId(url);
            if (!id) { this.showVideoError('Invalid YouTube URL.'); return; }
            // attempt to fetch oEmbed to get title/author
            try {
                const oembedUrl = `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${encodeURIComponent(id)}&format=json`;
                const resp = await fetch(oembedUrl);
                if (!resp.ok) throw new Error('oEmbed failed');
                const data = await resp.json();
                // populate UI
                document.getElementById('videoTitle').textContent = data.title || ('YouTube Video ' + id);
                document.getElementById('videoAuthor').textContent = data.author_name ? `By ${data.author_name}` : '';
                const thumb = `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`;
                const img = document.getElementById('videoThumb');
                img.src = thumb;
                img.style.display = '';
                // enable download buttons
                document.getElementById('downloadMp4Btn').disabled = false;
                document.getElementById('downloadMp3Btn').disabled = false;
                document.getElementById('videoError').style.display = 'none';
                // store ID for later
                this._videoDownloadId = id;
            } catch (e) {
                // fallback: still enable but show title from ID and smaller thumb
                document.getElementById('videoTitle').textContent = 'YouTube Video';
                document.getElementById('videoAuthor').textContent = '';
                const idThumb = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
                const img = document.getElementById('videoThumb');
                img.src = idThumb;
                img.style.display = '';
                document.getElementById('downloadMp4Btn').disabled = false;
                document.getElementById('downloadMp3Btn').disabled = false;
                this._videoDownloadId = id;
                document.getElementById('videoError').style.display = 'none';
            }
        });

        // Download actions open external downloader pages in new tabs (best-effort)
        document.getElementById('downloadMp4Btn').addEventListener('click', () => {
            if (!this._videoDownloadId) { this.showVideoError('Initialize first'); return; }
            // Use a popular public downloader page with the URL parameter - opens in new tab for user to follow through
            const videoUrl = `https://www.youtube.com/watch?v=${this._videoDownloadId}`;
            // prefer y2mate (user will be taken to page where they can pick quality). This is an external site; the app only opens it.
            const target = `https://www.y2mate.com/youtube/${encodeURIComponent(this._videoDownloadId)}`;
            window.open(target, '_blank', 'noopener');
        });
        document.getElementById('downloadMp3Btn').addEventListener('click', () => {
            if (!this._videoDownloadId) { this.showVideoError('Initialize first'); return; }
            const target = `https://www.y2mate.com/youtube/${encodeURIComponent(this._videoDownloadId)}?format=mp3`;
            window.open(target, '_blank', 'noopener');
        });

        // Close on overlay click
        document.getElementById('sellModal').addEventListener('click', (e) => {
            if (e.target === document.getElementById('sellModal')) {
                document.getElementById('sellModal').style.display = 'none';
            }
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
        const DEBUG_UNLOCK_KEY = 'ttou_debug_unlocked';
        
        // persist debug unlock so password is not repeatedly required during the session
        if (sessionStorage.getItem(DEBUG_UNLOCK_KEY) === '1') {
            // already unlocked this session - directly open debug panel (keeps password not required)
            // do nothing here, user still must click debug button to open UI but won't be asked again when re-opening after correct password
        }
        
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
                sessionStorage.setItem(DEBUG_UNLOCK_KEY, '1');
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
            // reset money value to default starting amount
            const mv = document.getElementById('moneyValue');
            if (mv) mv.value = 100;
            this.stellarCoin = 100;
            this.updateStellarCoinDisplay();
        });
        
        // Data Reset - clear everything (confirm then wipe storage and reload)
        const dataResetBtn = document.getElementById('dataReset');
        dataResetBtn.addEventListener('click', () => {
            if (!confirm('DATA RESET: This will erase ALL progress, username, inventory, and debug unlock for this browser. Continue?')) return;
            // Clear known keys used by the app
            try {
                localStorage.removeItem('ttou_save');
                localStorage.removeItem('ttou_username');
                sessionStorage.removeItem(DEBUG_UNLOCK_KEY);
            } catch (e) {}
            // Optionally clear other app keys if present
            try { localStorage.removeItem('ttou_last_autosave'); } catch(e){}
            // Force a full reload to ensure a clean state
            location.reload();
        });
        
        // Apply rates
        applyRates.addEventListener('click', () => {
            this.applyDebugRates();
            debugModal.style.display = 'none';
        });

        // Save to localStorage from modal
        document.getElementById('saveToLocal').addEventListener('click', () => {
            const json = document.getElementById('saveTextarea').value;
            try {
                // validate
                JSON.parse(json);
                localStorage.setItem('ttou_save', json);
                document.getElementById('saveLoadMsg').textContent = 'Saved to localStorage.';
            } catch (e) {
                document.getElementById('saveLoadMsg').textContent = 'Invalid JSON — cannot save.';
            }
        });

        // Export copy to clipboard
        document.getElementById('exportCopy').addEventListener('click', async () => {
            const json = document.getElementById('saveTextarea').value;
            try {
                await navigator.clipboard.writeText(json);
                document.getElementById('saveLoadMsg').textContent = 'Export copied to clipboard.';
            } catch (e) {
                document.getElementById('saveLoadMsg').textContent = 'Cannot copy — your browser blocked clipboard access.';
            }
        });

        // Clear local save
        document.getElementById('clearSave').addEventListener('click', () => {
            localStorage.removeItem('ttou_save');
            document.getElementById('saveLoadMsg').textContent = 'Local save cleared.';
        });

        // Import / Load from textarea
        document.getElementById('importFromTextarea').addEventListener('click', () => {
            const json = document.getElementById('saveTextarea').value;
            try {
                this.loadState(json);
                document.getElementById('saveLoadMsg').textContent = 'Progress imported successfully.';
                // update textarea to pretty format
                document.getElementById('saveTextarea').value = this.exportState();
            } catch (e) {
                document.getElementById('saveLoadMsg').textContent = 'Import failed: ' + e.message;
            }
        });

        // Attempt auto-load if local save exists when opening modal
        document.getElementById('saveLoadModal').addEventListener('click', (e) => {
            if (e.target === document.getElementById('saveLoadModal')) {
                document.getElementById('saveLoadModal').style.display = 'none';
            }
        });

        // If there's a local save, provide quick load when opening the modal
        document.getElementById('saveLoadBtn').addEventListener('dblclick', () => {
            const saved = localStorage.getItem('ttou_save');
            if (saved) {
                try {
                    this.loadState(saved);
                    alert('Local progress loaded.');
                } catch (e) {
                    alert('Failed to load local save: ' + e.message);
                }
            } else {
                alert('No local save found.');
            }
        });
    }
    
    openDebugPanel() {
        this.updateDebugInputs();
        document.getElementById('debugModal').style.display = 'flex';
        
        // wire up command prompt toggle and handlers (only once)
        if (!this._cmdSetup) {
            this._cmdSetup = true;
            const openCmdBtn = document.getElementById('openCmdBtn');
            const cmdArea = document.getElementById('cmdArea');
            const cmdOutput = document.getElementById('cmdOutput');
            const cmdInput = document.getElementById('cmdInput');
            const cmdEnter = document.getElementById('cmdEnter');
            openCmdBtn.addEventListener('click', () => {
                const showing = cmdArea.style.display === 'block';
                cmdArea.style.display = showing ? 'none' : 'block';
                if (!showing) { cmdInput.focus(); this.appendCmdLine('Made by G Foundation, All Right Served'); }
            });
            cmdEnter.addEventListener('click', () => this.handleCommand(cmdInput.value.trim(), cmdOutput, cmdInput));
            cmdInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') { this.handleCommand(cmdInput.value.trim(), cmdOutput, cmdInput); } });
        }
    }
    
    updateDebugInputs() {
        document.getElementById('blueItemRate').value = this.currentRates.blueItem;
        document.getElementById('purpleItemRate').value = this.currentRates.purpleItem;
        document.getElementById('goldItemRate').value = this.currentRates.goldItem;
        document.getElementById('redItemRate').value = this.currentRates.redItem;
        document.getElementById('blackItemRate').value = this.currentRates.blackItem;
        document.getElementById('purpleCharRate').value = this.currentRates.purpleChar;
        document.getElementById('goldCharRate').value = this.currentRates.goldChar;
        document.getElementById('redCharRate').value = this.currentRates.redChar;
        // show current StellarCoin in debug panel
        const mv = document.getElementById('moneyValue');
        if (mv) mv.value = this.stellarCoin;
    }
    
    applyDebugRates() {
        this.currentRates = {
            blueItem: parseFloat(document.getElementById('blueItemRate').value) || 0,
            purpleItem: parseFloat(document.getElementById('purpleItemRate').value) || 0,
            goldItem: parseFloat(document.getElementById('goldItemRate').value) || 0,
            redItem: parseFloat(document.getElementById('redItemRate').value) || 0,
            blackItem: parseFloat(document.getElementById('blackItemRate').value) || 0,
            purpleChar: parseFloat(document.getElementById('purpleCharRate').value) || 0,
            goldChar: parseFloat(document.getElementById('goldCharRate').value) || 0,
            redChar: parseFloat(document.getElementById('redCharRate').value) || 0
        };
        // apply StellarCoin change if provided
        const mv = document.getElementById('moneyValue');
        if (mv) {
            const val = parseInt(mv.value, 10);
            if (!Number.isNaN(val)) {
                this.stellarCoin = Math.max(0, val);
                this.updateStellarCoinDisplay();
            }
        }
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

        const blackItemThreshold = this.currentRates.blackItem || 0;
        const redCharThreshold = blackItemThreshold + this.currentRates.redChar;
        const redItemThreshold = redCharThreshold + this.currentRates.redItem;
        const goldCharThreshold = redItemThreshold + this.currentRates.goldChar;
        const goldItemThreshold = goldCharThreshold + this.currentRates.goldItem;
        const purpleCharThreshold = goldItemThreshold + this.currentRates.purpleChar;
        const purpleItemThreshold = purpleCharThreshold + this.currentRates.purpleItem;
        const blueThreshold = purpleItemThreshold + this.currentRates.blueItem;
        
        if (rand < blackItemThreshold) {
            return { type: 'item', rarity: 'black', name: this.getRandomItem(gameData.items.black), stars: 0 };
        } else if (rand < redCharThreshold) {
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
        
        const cost = this.currentRollType === 1 ? 10 : 100;
        if (!this.easyMode && this.stellarCoin < cost) {
            alert(`Not enough StellarCoin! You need ${cost} ⭐ but have ${this.stellarCoin} ⭐`);
            return;
        }
        
        this.isRolling = true;
        const rollBtn = document.getElementById('executeRoll');
        rollBtn.disabled = true;
        
        // Deduct cost (skip deduction in Easy Mode)
        if (!this.easyMode) {
            this.stellarCoin -= cost;
            this.updateStellarCoinDisplay();
        } else {
            // ensure display remains infinite while easy mode active
            this.updateStellarCoinDisplay();
        }
        
        // Auto-clear previous results if enabled
        if (this.autoClear) this.clearResults();
        
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
        const hasBlack = rarities.includes('black');
        
        // Initial phase
        pullText.textContent = 'Analyzing...';
        pullOrb.style.background = 'linear-gradient(135deg, #4a90ff, #6ba3ff)';
        overlay.style.background = 'rgba(26, 39, 68, 0.95)';
        
        await this.sleep(1500);
        
        // If a black special appears, immediately switch to dark/shaking GOD text reveal
        if (hasBlack) {
            // hide default indicators
            pullOrb.style.display = 'none';
            pullText.style.display = 'none';
            overlay.style.background = '#000';
            overlay.style.opacity = '1';
            // create big shaking text element
            let godText = document.createElement('div');
            godText.className = 'god-roll-text';
            godText.textContent = 'GOD IS LOVE YOU';
            animationContainer.querySelector('.animation-content').appendChild(godText);
            // keep it for a dramatic reveal period
            await this.sleep(3000);
            // remove the shaking text and restore defaults
            godText.remove();
            pullOrb.style.display = '';
            pullText.style.display = '';
            overlay.style.background = 'rgba(10, 10, 15, 0.95)';
            // continue with the rest of the sequence (allow other rarities handled below)
        }
        
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
                
                // Save to inventories
                if (result.type === 'character') {
                    this.characterInventory.push(result.name);
                } else {
                    // store count + rarity
                    this.incItem(result.name, 1, result.rarity);
                }
                
                // Update inventory modal if open
                if (document.getElementById('inventoryModal').style.display === 'flex') {
                    const currentTab = document.getElementById('invCharsBtn') && document.getElementById('invCharsBtn').classList.contains('debug-apply') ? 'characters' : 'items';
                    this.showInventory(currentTab);
                }
            }, index * 100);
        });
    }
    
    createResultCard(result) {
        const card = document.createElement('div');
        card.className = `result-card rarity-${result.rarity}`;
        
        if (result.type === 'character') {
            card.classList.add('type-character');
        }
        
        // for black special item, replace stars with the phrase
        const stars = result.rarity === 'black' ? 'GOD IS LOVE YOU' : '★'.repeat(result.stars);
        
        card.innerHTML = `
            <div class="result-header">
                <div class="result-name">${result.name}</div>
                <div class="result-stars">${stars}</div>
            </div>
            <div class="result-type-badge">${result.type === 'character' ? 'Character' : 'Item'}</div>
        `;
        if (result.rarity === 'black') {
            card.style.cursor = 'pointer';
            card.addEventListener('click', () => this.triggerGodSequence());
        }
        
        return card;
    }
    
    clearResults() {
        const resultsGrid = document.getElementById('resultsGrid');
        resultsGrid.innerHTML = '';
    }
    
    showInventory(mode) {
        const dest = document.getElementById('inventoryContent');
        dest.innerHTML = '';
        if (mode === 'characters') {
            if (this.characterInventory.length === 0) {
                dest.textContent = 'No characters yet.';
                return;
            }
            this.characterInventory.slice().reverse().forEach(name => {
                const el = document.createElement('div');
                el.style.padding = '0.5rem 0';
                el.style.borderBottom = '1px solid var(--border-primary)';
                el.textContent = name;
                dest.appendChild(el);
            });
            document.getElementById('invCharsBtn').classList.add('debug-apply');
            document.getElementById('invCharsBtn').classList.remove('debug-reset');
            document.getElementById('invItemsBtn').classList.remove('debug-apply');
            document.getElementById('invItemsBtn').classList.add('debug-reset');
        } else {
            const keys = Object.keys(this.itemInventory);
            if (keys.length === 0) {
                dest.textContent = 'No items yet.';
                return;
            }
            keys.sort().reverse().forEach(name => {
                const entry = this.itemInventory[name];
                const count = entry.count;
                const rarity = entry.rarity || 'blue';
                const el = document.createElement('div');
                el.style.display = 'flex';
                el.style.justifyContent = 'space-between';
                el.style.alignItems = 'center';
                el.style.padding = '0.5rem 0';
                el.style.borderBottom = '1px solid var(--border-primary)';
                el.className = `inv-item rarity-${rarity}`;
                el.innerHTML = `<div class="inv-name">${name}</div><div style="color:var(--text-secondary)">${count}×</div>`;
                dest.appendChild(el);
            });
            document.getElementById('invItemsBtn').classList.add('debug-apply');
            document.getElementById('invItemsBtn').classList.remove('debug-reset');
            document.getElementById('invCharsBtn').classList.remove('debug-apply');
            document.getElementById('invCharsBtn').classList.add('debug-reset');
        }
    }

    // refresh craft material count badges inside the crafting modal
    updateCraftListCounts() {
        // map materials to counts using helper
        const needed = ['Dragon Ball','Tier I Spiritual Bow Embryo','Book of Ignis','Book of Terra','Book of Aqua'];
        const countsMap = {};
        needed.forEach(n => countsMap[n] = this.getItemCount(n));
        document.querySelectorAll('.material-count').forEach(el => {
            const mat = el.dataset.material;
            el.textContent = countsMap[mat] || 0;
        });
    }

    attemptCraft(recipe) {
        const msgEl = document.getElementById('craftMessage');
        const hasItem = (name, qty = 1) => this.getItemCount(name) >= qty;
         // find the button to animate
         const itemEl = document.querySelector(`.craft-item[data-recipe="${recipe}"]`);
         const btn = itemEl && itemEl.querySelector('.craft-btn');
         if (btn) { btn.classList.add('loading'); btn.textContent = 'Working...'; }
         // simulate brief crafting delay
         setTimeout(() => {
             // Recipes
             if (recipe === 'superDragon') {
                if (hasItem('Dragon Ball', 7)) {
                    this.decItem('Dragon Ball', 7);
                    // crafted Super Dragon Ball - set rarity to gold
                    this.incItem('Super Dragon Ball', 1, 'gold');
                     msgEl.style.color = '#9ae6b4';
                     msgEl.textContent = 'Crafted Super Dragon Ball!';
                     if (btn) { btn.classList.remove('loading'); btn.classList.add('success'); btn.textContent = 'Done'; }
                 } else {
                     msgEl.style.color = '#fca5a5';
                     msgEl.textContent = 'Missing 7 × Dragon Ball.';
                     if (btn) { btn.classList.remove('loading'); btn.textContent = 'Craft'; }
                 }
             } else if (recipe === 'bowIgnis') {
                if (hasItem('Tier I Spiritual Bow Embryo',1) && hasItem('Book of Ignis',1)) {
                    this.decItem('Tier I Spiritual Bow Embryo', 1);
                    this.decItem('Book of Ignis', 1);
                    // crafted Bow of Ignis - set rarity to gold
                    this.incItem('Bow of Ignis',1,'gold');
                     msgEl.style.color = '#9ae6b4';
                     msgEl.textContent = 'Crafted Bow of Ignis!';
                     if (btn) { btn.classList.remove('loading'); btn.classList.add('success'); btn.textContent = 'Done'; }
                 } else {
                     msgEl.style.color = '#fca5a5';
                     msgEl.textContent = 'Missing required materials for Bow of Ignis.';
                     if (btn) { btn.classList.remove('loading'); btn.textContent = 'Craft'; }
                 }
             } else if (recipe === 'bookNature') {
                if (hasItem('Book of Terra',1) && hasItem('Book of Aqua',1)) {
                    this.decItem('Book of Terra', 1);
                    this.decItem('Book of Aqua', 1);
                    // crafted Book of Nature - set rarity to purple
                    this.incItem('Book of Nature',1,'purple');
                     msgEl.style.color = '#9ae6b4';
                     msgEl.textContent = 'Crafted Book of Nature!';
                     if (btn) { btn.classList.remove('loading'); btn.classList.add('success'); btn.textContent = 'Done'; }
                 } else {
                     msgEl.style.color = '#fca5a5';
                     msgEl.textContent = 'Missing Book of Terra or Book of Aqua.';
                     if (btn) { btn.classList.remove('loading'); btn.textContent = 'Craft'; }
                 }
             }
             // Clean zeroes
             for (const k of Object.keys(this.itemInventory)) {
                 if (!this.itemInventory[k] || this.itemInventory[k].count <= 0) delete this.itemInventory[k];
             }
             // refresh inventory view and crafting counts if open
             if (document.getElementById('inventoryModal').style.display === 'flex') this.showInventory('items');
             this.updateCraftListCounts();
             // revert success button after short delay
             if (btn && btn.classList.contains('success')) {
                 setTimeout(() => { btn.classList.remove('success'); btn.textContent = 'Craft'; }, 1200);
             }
         }, 700);
     }
    
    // inventory helpers
    getItemCount(name) {
        return (this.itemInventory[name] && this.itemInventory[name].count) || 0;
    }
    getItemRarity(name) {
        return (this.itemInventory[name] && this.itemInventory[name].rarity) || 'blue';
    }
    incItem(name, amount = 1, rarity = 'blue') {
        if (!this.itemInventory[name]) this.itemInventory[name] = { count: 0, rarity };
        this.itemInventory[name].count += amount;
        // if a higher rarity is ever added later, preserve the highest rarity label (red > gold > purple > blue)
        const order = { blue: 0, purple: 1, gold: 2, red: 3 };
        if (rarity && order[rarity] > order[this.itemInventory[name].rarity]) {
            this.itemInventory[name].rarity = rarity;
        }
        if (this.itemInventory[name].count <= 0) delete this.itemInventory[name];
    }
    decItem(name, amount = 1) {
        if (!this.itemInventory[name]) return false;
        this.itemInventory[name].count -= amount;
        if (this.itemInventory[name].count <= 0) delete this.itemInventory[name];
        return true;
    }
    
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Serialize current progress to JSON string
    exportState() {
        const state = {
            username: this.username || '',
            characterInventory: this.characterInventory.slice(),
            itemInventory: JSON.parse(JSON.stringify(this.itemInventory)),
            currentRates: { ...this.currentRates },
            stellarCoin: this.stellarCoin,
            // include results grid items (names + rarity + stars + type) so UI can be reconstructed
            results: Array.from(document.getElementById('resultsGrid').children).map(card => {
                return {
                    name: card.querySelector('.result-name')?.textContent || '',
                    starsText: card.querySelector('.result-stars')?.textContent || '',
                    rarity: (card.className.match(/rarity-(\w+)/) || [])[1] || 'blue',
                    type: card.classList.contains('type-character') ? 'character' : 'item'
                };
            })
        };
        return JSON.stringify(state, null, 2);
    }

    // Load state object (or JSON string)
    loadState(stateOrString) {
        let state = stateOrString;
        if (typeof stateOrString === 'string') {
            try {
                state = JSON.parse(stateOrString);
            } catch (e) {
                throw new Error('Invalid JSON');
            }
        }
        // set username if present
        if (state.username) {
            this.username = state.username;
            localStorage.setItem('ttou_username', this.username);
        }
        // Basic validation and assignment
        if (state.characterInventory && state.itemInventory) {
            this.characterInventory = Array.isArray(state.characterInventory) ? state.characterInventory.slice() : [];
            this.itemInventory = typeof state.itemInventory === 'object' ? JSON.parse(JSON.stringify(state.itemInventory)) : {};
            if (state.currentRates) this.currentRates = { ...this.currentRates, ...state.currentRates };
            this.stellarCoin = state.stellarCoin || 0;
            this.updateStellarCoinDisplay();
            // rebuild results grid
            const resultsGrid = document.getElementById('resultsGrid');
            resultsGrid.innerHTML = '';
            if (Array.isArray(state.results)) {
                state.results.forEach(r => {
                    const card = document.createElement('div');
                    card.className = `result-card rarity-${r.rarity}` + (r.type === 'character' ? ' type-character' : '');
                    card.innerHTML = `<div class="result-header"><div class="result-name">${r.name}</div><div class="result-stars">${r.starsText || ''}</div></div><div class="result-type-badge">${r.type === 'character' ? 'Character' : 'Item'}</div>`;
                    resultsGrid.appendChild(card);
                });
            }
            // update any open inventory/crafting displays and debug inputs
            this.updateCraftListCounts();
            if (document.getElementById('debugModal').style.display === 'flex') this.updateDebugInputs();
            return true;
        }
        throw new Error('Invalid state object');
    }

    appendCmdLine(text) {
        const out = document.getElementById('cmdOutput');
        if (!out) return;
        out.textContent += '\n' + text;
        out.scrollTop = out.scrollHeight;
    }

    handleCommand(raw, outEl, inputEl) {
        if (!raw) return;
        this.appendCmdLine('> ' + raw);
        inputEl.value = '';
        const parts = raw.match(/(?:[^\s"]+|"[^"]*")+/g) || [];
        const cmd = parts[0].toLowerCase();
        const arg = parts.slice(1).join(' ').replace(/^"|"$/g, '').trim();
        switch (cmd) {
            case '/help':
                this.appendCmdLine('/help /giveall /clearall /reload /changepagetitle \"input\" /pagetitlereset /light /dark /godisloveyou /color \"1,2,3,4,5,6,7\" /exit /rock /roll \"x\" /pagespin \"speed\" \"time\" /neuronactivation /nahidwin /ttou /rickroll /xhz');
                break;
            case '/roll': {
                // /roll "x" - numeric or 1/10
                const x = parseInt(arg) || 1;
                const count = Math.max(1, Math.min(100, x)); // sane clamp
                this.appendCmdLine(`Rolling ${count}x...`);
                // temporarily set roll type and execute
                const prev = this.currentRollType;
                this.currentRollType = count;
                this.executeRoll();
                this.currentRollType = prev;
                break;
            }
            case '/pagespin': {
                // /pagespin "speed" "time" - speed in deg/sec, time in seconds
                const parts = arg.split(/\s+/).filter(Boolean);
                const speed = parseFloat(parts[0]) || 360;
                const timeSec = parseFloat(parts[1]) || 2;
                this.appendCmdLine(`Spinning page at ${speed}°/s for ${timeSec}s...`);
                this.pagespinEffect(speed, timeSec);
                break;
            }
            case '/neuronactivation': {
                this.appendCmdLine('Neuron activation: showing monkey.jpg & playing neuronactivation.mp3');
                this.showImageWithAudio('monkey.jpg','neuronactivation.mp3');
                break;
            }
            case '/nahidwin': {
                this.appendCmdLine('Playing nahidwin → gojoat sequence');
                this.sequenceNahidGojo();
                break;
            }
            case '/ttou':
                window.location.href = 'https://p4xt0n3.github.io/ttou';
                break;
            case '/rickroll': {
                this.appendCmdLine('Opening Rickroll...');
                this.rickroll();
                break;
            }
            case '/xhz': {
                this.appendCmdLine('Showing XHZ images...');
                this.showXhz();
                break;
            }
            case '/giveall':
                // give every item once and all characters once
                Object.values(gameData.items).flat().forEach(name => this.incItem(name, 1, this.inferRarityFromList(name)));
                Object.values(gameData.characters).flat().forEach(name => this.characterInventory.push(name));
                this.stellarCoin += 10000; // Give some StellarCoin too
                this.updateStellarCoinDisplay();
                this.appendCmdLine('All items, characters, and 10000 StellarCoin have been added.');
                this.updateCraftListCounts();
                break;
            case '/clearall':
                this.characterInventory = [];
                this.itemInventory = {};
                this.stellarCoin = 0;
                this.updateStellarCoinDisplay();
                this.appendCmdLine('Inventory and StellarCoin cleared.');
                break;
            case '/reload':
                this.appendCmdLine('Reloading page...');
                setTimeout(()=>location.reload(),400);
                break;
            case '/changepagetitle':
                if (arg) { document.title = arg; this.appendCmdLine('Page title changed to: ' + arg); } else this.appendCmdLine('Usage: /changepagetitle \"Your Title\"');
                break;
            case '/pagetitlereset':
                document.title = 'The Tale of Universe : Gacha Roll Simulator';
                this.appendCmdLine('Page title reset.');
                break;
            case '/light':
                document.documentElement.style.setProperty('--bg-primary','#ffffff');
                document.documentElement.style.setProperty('--bg-secondary','#f5f5f5');
                document.documentElement.style.setProperty('--bg-tertiary','#ffffff');
                document.documentElement.style.setProperty('--text-primary','#0a0a0f');
                this.appendCmdLine('Light mode enabled.');
                break;
            case '/dark':
                document.documentElement.style.setProperty('--bg-primary','#0a0a0f');
                document.documentElement.style.setProperty('--bg-secondary','#161620');
                document.documentElement.style.setProperty('--bg-tertiary','#1e1e2a');
                document.documentElement.style.setProperty('--text-primary','#ffffff');
                this.appendCmdLine('Dark mode enabled.');
                break;
            case '/godisloveyou':
                this.appendCmdLine('Triggering GOD IS LOVE YOU sequence...');
                this.triggerGodSequence();
                break;
            case '/color':
                // map numbers to colors (basic implementation: change accent-primary)
                const map = { '1':'#ef4444','2':'#4a90ff','3':'#10b981','4':'#a855f7','5':'#f59e0b','6':'#ffffff','7':'#fb923c' };
                if (!arg) { this.appendCmdLine('Usage: /color \"1,2,3,4,5,6,7\"'); break; }
                const nums = arg.split(',').map(s=>s.trim()).filter(Boolean);
                if (nums.length>0) {
                    const pick = map[nums[0]] || '#00d4ff';
                    document.documentElement.style.setProperty('--accent-primary', pick);
                    this.appendCmdLine('Accent color changed.');
                }
                break;
            case '/exit':
                // hide cmd area and show rates (the modal already contains rates)
                document.getElementById('cmdArea').style.display = 'none';
                this.appendCmdLine('Exited command prompt.');
                break;
            case '/rock':
                this.appendCmdLine('Playing rockstare...');
                this.showRockStare();
                break;
            default:
                this.appendCmdLine('Unknown command. Type /help for a list of commands.');
        }
    };

    inferRarityFromList(name) {
        for (const k of ['black','red','gold','purple','blue']) {
            if (gameData.items[k] && gameData.items[k].includes(name)) return k;
        }
        return 'blue';
    };

    showRockStare() {
        if (document.getElementById('rockstare-wrap')) return;
        const wrap = document.createElement('div');
        wrap.id = 'rockstare-wrap';
        wrap.style.position = 'fixed';
        wrap.style.inset = '0';
        wrap.style.display = 'flex';
        wrap.style.alignItems = 'center';
        wrap.style.justifyContent = 'center';
        wrap.style.zIndex = 99999;
        wrap.style.background = 'rgba(0,0,0,0.6)';
        const img = document.createElement('img');
        img.src = 'rockstare.jpg';
        img.style.maxWidth = '80%';
        img.style.borderRadius = '8px';
        img.style.boxShadow = '0 30px 80px rgba(0,0,0,0.6)';
        wrap.appendChild(img);
        document.body.appendChild(wrap);
        const audio = new Audio('rockstare.mp3');
        audio.play().catch(()=>{});
        audio.addEventListener('ended', ()=> { try{ wrap.remove(); }catch(e){} });
        // safety remove after 12s if audio fails
        setTimeout(()=>{ if (document.getElementById('rockstare-wrap')) try{ wrap.remove(); }catch(e){} }, 12000);
    };

    triggerGodSequence() {
        // prevent multiple
        if (document.querySelector('.god-overlay')) return;
        const originalTitle = document.title;
        document.title = 'GOD IS LOVE YOU';
        // overlay
        const overlay = document.createElement('div');
        overlay.className = 'god-overlay';
        overlay.innerHTML = `<div class="god-center" id="godCenter">GOD IS LOVE YOU</div>`;
        document.body.appendChild(overlay);
        // start sequence
        // phase timings: show center 3s, then spawn small texts ramping 5s, then letters input
        setTimeout(() => {
            const spawnDuration = 5000;
            const smalls = [];
            let start = performance.now();
            const spawnLoop = (t) => {
                const elapsed = t - start;
                // spawn rate increases with time
                const progress = Math.min(1, elapsed / spawnDuration);
                const spawnPerFrame = 1 + Math.floor(progress * 6);
                for (let i=0;i<spawnPerFrame;i++){
                    const span = document.createElement('div');
                    span.className = 'god-small';
                    span.textContent = 'GOD IS LOVE YOU';
                    const size = 10 + Math.random() * 18;
                    span.style.fontSize = size + 'px';
                    span.style.left = Math.random() * 100 + '%';
                    span.style.top = Math.random() * 100 + '%';
                    span.style.opacity = '0';
                    overlay.appendChild(span);
                    smalls.push(span);
                    // animate in/out
                    const dx = (Math.random()-0.5)*200;
                    const dy = (Math.random()-0.5)*200;
                    span.animate([
                        { transform: 'translate(0,0)', opacity: 0 },
                        { transform: `translate(${dx}px, ${dy}px)`, opacity: 1 },
                        { transform: `translate(${dx*1.5}px, ${dy*1.5}px)`, opacity: 0 }
                    ], { duration: 3000 + Math.random()*3000, easing: 'ease-in-out' }).onfinish = () => {
                        try { span.remove(); }catch(e){}
                    };
                }
                if (elapsed < spawnDuration) requestAnimationFrame(spawnLoop);
                else {
                    // after spawnDuration + short wait, remove smalls and show letters
                    setTimeout(() => {
                        // remove any lingering small nodes
                        document.querySelectorAll('.god-small').forEach(n=>n.remove());
                        this.showGodLetters(overlay, originalTitle);
                    }, 800);
                }
            };
            requestAnimationFrame(spawnLoop);
        }, 3000);
    };

    showGodLetters(overlay, originalTitle) {
        // build spaced letters "G O D I S L O V E M E"
        const phrase = 'GODISLOVEME';
        const container = document.createElement('div');
        container.className = 'god-letters';
        overlay.appendChild(container);
        // create letter buttons
        const buttons = [];
        for (let i=0;i<phrase.length;i++){
            const ch = phrase[i];
            const btn = document.createElement('div');
            btn.className = 'god-letter';
            btn.textContent = ch;
            btn.dataset.letter = ch;
            container.appendChild(btn);
            buttons.push(btn);
        }
        // interactive sequence: user must click letters in order
        let idx = 0;
        const tryFinish = () => {
            if (idx >= phrase.length) {
                // restore page after brief success flash
                setTimeout(() => {
                    overlay.remove();
                    document.title = originalTitle;
                }, 400);
            }
        };
        buttons.forEach((btn, i) => {
            btn.addEventListener('click', () => {
                if (i === idx && btn.dataset.letter === phrase[idx]) {
                    btn.classList.remove('wrong');
                    btn.classList.add('correct');
                    btn.style.pointerEvents = 'none';
                    idx++;
                    tryFinish();
                } else {
                    // wrong click: mark red briefly
                    btn.classList.add('wrong');
                    setTimeout(()=>btn.classList.remove('wrong'), 600);
                }
            });
        });
    }

    // New helpers for added commands
    pagespinEffect(speedDegPerSec = 360, durationSec = 2) {
        // apply smooth rotation then reset
        const root = document.documentElement;
        // create transform wrapper
        if (document.getElementById('pagespin-wrap')) return;
        const wrap = document.createElement('div');
        wrap.id = 'pagespin-wrap';
        wrap.style.position = 'fixed';
        wrap.style.inset = '0';
        wrap.style.zIndex = '99998';
        wrap.style.pointerEvents = 'none';
        // use CSS animation via transform origin center
        wrap.style.transition = `transform ${durationSec}s cubic-bezier(.2,.8,.2,1)`;
        document.body.appendChild(wrap);
        // move existing body children into wrapper
        while (document.body.firstChild && document.body.firstChild !== wrap) {
            wrap.appendChild(document.body.firstChild);
        }
        // perform rotation by applying CSS animation loop via requestAnimationFrame
        const start = performance.now();
        const end = start + durationSec * 1000;
        const step = (t) => {
            const now = performance.now();
            const elapsed = Math.min(now - start, durationSec * 1000);
            const angle = (speedDegPerSec * (elapsed / 1000)) % 360;
            wrap.style.transform = `rotate(${angle}deg)`;
            if (now < end) requestAnimationFrame(step);
            else {
                // smooth reset to 0 rotation
                wrap.style.transition = `transform 1s ease`;
                wrap.style.transform = `rotate(0deg)`;
                setTimeout(() => {
                    // unwrap children back to body
                    while (wrap.firstChild) document.body.appendChild(wrap.firstChild);
                    wrap.remove();
                }, 1000);
            }
        };
        requestAnimationFrame(step);
    }

    showImageWithAudio(imgSrc, audioSrc) {
        if (document.getElementById('fx-media-wrap')) return;
        const wrap = document.createElement('div');
        wrap.id = 'fx-media-wrap';
        wrap.style.position = 'fixed';
        wrap.style.inset = '0';
        wrap.style.zIndex = '99999';
        wrap.style.display = 'flex';
        wrap.style.alignItems = 'center';
        wrap.style.justifyContent = 'center';
        wrap.style.background = 'rgba(0,0,0,0.6)';
        const img = document.createElement('img');
        img.src = imgSrc;
        img.style.maxWidth = '70%';
        img.style.opacity = '0';
        img.style.transition = 'opacity .4s ease';
        wrap.appendChild(img);
        document.body.appendChild(wrap);
        requestAnimationFrame(()=> { img.style.opacity = '1'; });
        const audio = new Audio(audioSrc);
        audio.play().catch(()=>{});
        audio.addEventListener('ended', ()=> {
            img.style.opacity = '0';
            setTimeout(()=>{ try{ wrap.remove(); }catch(e){} }, 500);
        });
        // safety timeout
        setTimeout(()=>{ if (document.getElementById('fx-media-wrap')) try{ document.getElementById('fx-media-wrap').remove(); }catch(e){} }, 20000);
    }

    sequenceNahidGojo() {
        if (document.getElementById('seq-wrap')) return;
        const wrap = document.createElement('div');
        wrap.id = 'seq-wrap';
        wrap.style.position = 'fixed';
        wrap.style.inset = '0';
        wrap.style.zIndex = '99999';
        wrap.style.display = 'flex';
        wrap.style.alignItems = 'center';
        wrap.style.justifyContent = 'center';
        wrap.style.background = 'rgba(0,0,0,0.6)';
        document.body.appendChild(wrap);
        const showThenSwap = (src, holdMs) => {
            return new Promise(res => {
                const img = document.createElement('img');
                img.src = src;
                img.style.maxWidth = '70%';
                img.style.opacity = '0';
                img.style.transition = 'opacity .25s ease';
                wrap.appendChild(img);
                requestAnimationFrame(()=> img.style.opacity = '1');
                setTimeout(()=> {
                    img.style.opacity = '0';
                    setTimeout(()=> { img.remove(); res(); }, 300);
                }, holdMs);
            });
        };
        (async () => {
            await showThenSwap('nahidwin.jpg', 2000);
            await showThenSwap('gojoat.jpg', 2000);
            wrap.remove();
        })();
    }

    rickroll() {
        if (document.getElementById('rick-wrap')) return;
        // open a centered popup-like overlay with an embedded YouTube iframe
        const wrap = document.createElement('div');
        wrap.id = 'rick-wrap';
        wrap.style.position = 'fixed';
        wrap.style.inset = '0';
        wrap.style.zIndex = '99999';
        wrap.style.display = 'flex';
        wrap.style.alignItems = 'center';
        wrap.style.justifyContent = 'center';
        wrap.style.background = 'rgba(0,0,0,0.85)';
        const box = document.createElement('div');
        box.style.width = '80%';
        box.style.maxWidth = '900px';
        box.style.aspectRatio = '16/9';
        box.style.background = '#000';
        box.style.borderRadius = '8px';
        box.style.overflow = 'hidden';
        const iframe = document.createElement('iframe');
        iframe.src = 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0';
        iframe.allow = 'autoplay; encrypted-media';
        iframe.style.width = '100%';
        iframe.style.height = '100%';
        iframe.style.border = '0';
        box.appendChild(iframe);
        wrap.appendChild(box);
        document.body.appendChild(wrap);
        wrap.addEventListener('click', (e) => { if (e.target===wrap) wrap.remove(); });
    }

    showXhz() {
        if (document.getElementById('xhz-wrap')) return;
        const wrap = document.createElement('div');
        wrap.id = 'xhz-wrap';
        wrap.style.position = 'fixed';
        wrap.style.inset = '0';
        wrap.style.zIndex = '99999';
        wrap.style.display = 'flex';
        wrap.style.alignItems = 'center';
        wrap.style.justifyContent = 'center';
        wrap.style.background = 'rgba(0,0,0,0.7)';
        const inner = document.createElement('div');
        inner.style.display = 'flex';
        inner.style.alignItems = 'center';
        inner.style.gap = '12px';
        inner.style.background = 'rgba(255,255,255,0.02)';
        inner.style.padding = '12px 18px';
        inner.style.borderRadius = '8px';
        const left = document.createElement('img'); left.src = 'kun.jpg'; left.style.maxHeight = '220px'; left.style.opacity='0';
        const eq = document.createElement('div'); eq.textContent = '='; eq.style.fontSize='48px'; eq.style.color='#fff';
        const right = document.createElement('img'); right.src = 'chicken.jpg'; right.style.maxHeight = '220px'; right.style.opacity='0';
        inner.appendChild(left); inner.appendChild(eq); inner.appendChild(right);
        wrap.appendChild(inner);
        document.body.appendChild(wrap);
        requestAnimationFrame(()=> { left.style.transition='opacity .25s'; right.style.transition='opacity .25s'; left.style.opacity='1'; right.style.opacity='1';});
        setTimeout(()=>{ left.style.opacity='0'; right.style.opacity='0'; setTimeout(()=>wrap.remove(),400); }, 2500);
    }

    showGallery() {
        const modal = document.getElementById('galleryModal');
        const grid = document.getElementById('galleryGrid');
        
        // Clear existing content
        grid.innerHTML = '';
        
        // Get all characters from game data
        const allCharacters = [
            ...gameData.characters.purple.map(name => ({ name, rarity: 'purple', stars: 4 })),
            ...gameData.characters.gold.map(name => ({ name, rarity: 'gold', stars: 5 })),
            ...gameData.characters.red.map(name => ({ name, rarity: 'red', stars: 6 }))
        ];
        
        // Create character cards
        allCharacters.forEach(character => {
            const isUnlocked = this.characterInventory.includes(character.name);
            const card = this.createGalleryCharacterCard(character, isUnlocked);
            grid.appendChild(card);
        });

        // special BLACK ITEM gallery entry for "GOD IS LOVE YOU"
        const godUnlocked = !!this.itemInventory['GOD IS LOVE YOU'];
        const godCard = this.createGalleryItemCard({
            id: 'god-is-love-you',
            name: 'GOD IS LOVE YOU',
            rarity: 'black'
        }, godUnlocked);
        grid.appendChild(godCard);
        
        // Show modal with fade in effect
        modal.style.display = 'flex';
        requestAnimationFrame(() => {
            modal.classList.add('show');
        });
        
        // Close on overlay click
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                this.hideGallery();
            }
        });
    }
    
    hideGallery() {
        const modal = document.getElementById('galleryModal');
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 400);
    }
    
    createGalleryCharacterCard(character, isUnlocked) {
        const card = document.createElement('div');
        card.className = `gallery-character ${isUnlocked ? `rarity-${character.rarity}` : 'locked'}`;
        
        const portrait = document.createElement('div');
        portrait.className = 'character-portrait';
        portrait.textContent = isUnlocked ? character.name.charAt(0).toUpperCase() : '?';
        
        const name = document.createElement('div');
        name.className = 'character-name';
        name.textContent = isUnlocked ? character.name : '???';
        
        const rarity = document.createElement('div');
        rarity.className = 'character-rarity';
        rarity.textContent = isUnlocked ? '★'.repeat(character.stars) : '???';
        
        const chains = document.createElement('div');
        chains.className = 'chains-overlay';
        
        card.appendChild(portrait);
        card.appendChild(name);
        card.appendChild(rarity);
        card.appendChild(chains);
        
        return card;
    }

    // new helper to create an item-style gallery card (for the special black item)
    createGalleryItemCard(itemData, isUnlocked) {
        const card = document.createElement('div');
        card.className = `gallery-character gallery-item ${isUnlocked ? `rarity-${itemData.rarity}` : 'locked god-locked'}`;
        card.dataset.itemId = itemData.id;

        // portrait area will show gif/icon for locked state and a dark aura
        const portrait = document.createElement('div');
        portrait.className = 'character-portrait god-portrait';
        if (!isUnlocked) {
            // locked: use godisloveyou.gif (we create a png asset with similar visuals) as background icon
            portrait.style.backgroundImage = `url('godisloveyou.png')`;
            portrait.style.backgroundSize = 'cover';
            portrait.style.filter = 'grayscale(0.8) contrast(0.6) brightness(0.25)';
        } else {
            // unlocked: show bold text/graphic
            portrait.textContent = 'GOD';
            portrait.style.background = 'linear-gradient(135deg,#0b0b0b,#1a1a1a)';
            portrait.style.color = '#fff';
        }

        const name = document.createElement('div');
        name.className = 'character-name god-name';
        name.textContent = isUnlocked ? itemData.name : '';

        const rarity = document.createElement('div');
        rarity.className = 'character-rarity god-rarity';
        rarity.textContent = isUnlocked ? itemData.name : '???'; // when unlocked show phrase instead of stars

        card.appendChild(portrait);
        card.appendChild(name);
        card.appendChild(rarity);

        // overlay chains/aura handled by CSS classes
        // clicking: if unlocked -> trigger God sequence; if locked -> show a small tooltip/explain
        card.addEventListener('click', () => {
            if (isUnlocked) {
                this.triggerGodSequence();
            } else {
                // small visual feedback for locked card
                const tip = document.createElement('div');
                tip.className = 'god-locked-tip';
                tip.textContent = 'Locked — Acquire the item from a roll to unlock';
                document.body.appendChild(tip);
                setTimeout(()=> tip.classList.add('show'), 10);
                setTimeout(()=> { tip.classList.remove('show'); setTimeout(()=>tip.remove(),300); }, 1600);
            }
        });

        return card;
    }
    
    showSellModal() {
        document.getElementById('sellModal').style.display = 'flex';
        this.sellQueue = {};
        this.updateSellLists();
    }
    
    updateSellLists() {
        const inventoryList = document.getElementById('sellInventoryList');
        const selectedList = document.getElementById('sellSelectedList');
        
        // Clear lists
        inventoryList.innerHTML = '';
        selectedList.innerHTML = '';
        
        // Populate inventory list (excluding items in sell queue)
        Object.entries(this.itemInventory).forEach(([itemName, data]) => {
            const availableCount = data.count - (this.sellQueue[itemName] || 0);
            if (availableCount > 0) {
                const item = this.createSellItem(itemName, availableCount, data.rarity, 'inventory');
                inventoryList.appendChild(item);
            }
        });
        
        // Populate selected list
        Object.entries(this.sellQueue).forEach(([itemName, count]) => {
            if (count > 0) {
                const rarity = this.getItemRarity(itemName);
                const item = this.createSellItem(itemName, count, rarity, 'selected');
                selectedList.appendChild(item);
            }
        });
        
        this.updateSellTotal();
    }
    
    // Move every available item in inventory into the sell queue
    addAllToSellQueue() {
        Object.entries(this.itemInventory).forEach(([itemName, data]) => {
            const available = data.count - (this.sellQueue[itemName] || 0);
            if (available > 0) {
                this.sellQueue[itemName] = (this.sellQueue[itemName] || 0) + available;
            }
        });
        this.updateSellLists();
    }
    
    createSellItem(itemName, count, rarity, listType) {
        const item = document.createElement('div');
        item.className = `sell-item rarity-${rarity}`;
        
        const price = this.getItemPrice(rarity);
        const totalPrice = price * count;
        
        item.innerHTML = `
            <div class="sell-item-name">${itemName}</div>
            <div class="sell-item-count">${count}×</div>
            <div class="sell-item-price">${totalPrice} ⭐</div>
        `;
        
        item.addEventListener('click', () => {
            if (listType === 'inventory') {
                // Move to sell queue
                this.sellQueue[itemName] = (this.sellQueue[itemName] || 0) + 1;
            } else {
                // Remove from sell queue
                if (this.sellQueue[itemName] > 1) {
                    this.sellQueue[itemName]--;
                } else {
                    delete this.sellQueue[itemName];
                }
            }
            this.updateSellLists();
        });
        
        return item;
    }
    
    getItemPrice(rarity) {
        const prices = {
            blue: 10,
            purple: 50,
            gold: 150,
            red: 500,
            black: 1000 // Special price for black items
        };
        return prices[rarity] || 10;
    }
    
    updateSellTotal() {
        let total = 0;
        Object.entries(this.sellQueue).forEach(([itemName, count]) => {
            const rarity = this.getItemRarity(itemName);
            const price = this.getItemPrice(rarity);
            total += price * count;
        });
        
        document.getElementById('sellTotal').textContent = `Total: ${total} ⭐`;
        document.getElementById('executeSell').disabled = total === 0;
    }
    
    executeSell() {
        let totalEarned = 0;
        
        // Process each item in sell queue
        Object.entries(this.sellQueue).forEach(([itemName, count]) => {
            const rarity = this.getItemRarity(itemName);
            const price = this.getItemPrice(rarity);
            const earned = price * count;
            
            // Remove items from inventory
            this.decItem(itemName, count);
            totalEarned += earned;
        });
        
        // Add StellarCoin
        this.stellarCoin += totalEarned;
        this.updateStellarCoinDisplay();
        
        // Clear sell queue
        this.sellQueue = {};
        
        // Update UI
        this.updateSellLists();
        
        // Show success message
        alert(`Sold items for ${totalEarned} StellarCoin! You now have ${this.stellarCoin} ⭐`);
        
        // Update inventory if open
        if (document.getElementById('inventoryModal').style.display === 'flex') {
            this.showInventory('items');
        }
        
        // Update crafting counts if open
        this.updateCraftListCounts();
    }
    
    updateStellarCoinDisplay() {
        document.getElementById('stellarCoinAmount').textContent = this.easyMode ? '∞' : this.stellarCoin;
        // show username somewhere (if present)
        if (this.username) {
            const logo = document.querySelector('.logo');
            if (logo && !document.getElementById('userBadge')) {
                const b = document.createElement('div'); b.id='userBadge'; b.style.marginTop='0.5rem'; b.style.color='var(--text-secondary)'; b.textContent = `User: ${this.username}`; logo.appendChild(b);
            } else if (logo && document.getElementById('userBadge')) {
                document.getElementById('userBadge').textContent = `User: ${this.username}`;
            }
        }
    }

    // New: startup modal logic
    initStartupFlow() {
        const modal = document.getElementById('startupModal');
        const q = document.getElementById('startupQuestion');
        const imp = document.getElementById('startupImport');
        const uni = document.getElementById('startupUsername');
        const welcome = document.getElementById('startupWelcome');
        const nameInput = document.getElementById('startupNameInput');
        const importTextarea = document.getElementById('startupImportTextarea');

        // if username saved in localStorage and a saved game exists, attempt auto-load and skip prompt
        const saved = localStorage.getItem('ttou_save');
        const savedName = localStorage.getItem('ttou_username');
        if (saved && savedName) {
            try { this.loadState(saved); this.username = savedName; this.updateStellarCoinDisplay(); modal.style.display='none'; return; } catch(e){}
        }

        // handlers
        document.getElementById('startupYes').addEventListener('click', () => { q.style.display='none'; imp.style.display='block'; });
        document.getElementById('startupNo').addEventListener('click', () => { q.style.display='none'; uni.style.display='block'; nameInput.focus(); });
        document.getElementById('startupImportCancel').addEventListener('click', ()=> { imp.style.display='none'; q.style.display='block'; });
        document.getElementById('startupNameCancel').addEventListener('click', ()=> { uni.style.display='none'; q.style.display='block'; });

        document.getElementById('startupImportBtn').addEventListener('click', ()=> {
            const txt = importTextarea.value.trim();
            if (!txt) { document.getElementById('startupImportMsg').textContent='Please paste a save code.'; return; }
            try {
                this.loadState(txt);
                // persist to localStorage
                localStorage.setItem('ttou_save', this.exportState());
                if (this.username) localStorage.setItem('ttou_username', this.username);
                document.getElementById('startupImportMsg').textContent='Import successful! Entering...';
                setTimeout(()=> { modal.style.display='none'; this.updateStellarCoinDisplay(); }, 700);
            } catch (e) {
                document.getElementById('startupImportMsg').textContent='Invalid save code.';
            }
        });

        document.getElementById('startupNameBtn').addEventListener('click', ()=> {
            const v = nameInput.value.trim();
            if (!v) { nameInput.focus(); return; }
            this.username = v;
            localStorage.setItem('ttou_username', v);
            welcome.textContent = `Welcome to TTOU Gacha Simulator, ${v}`;
            uni.style.display='none';
            welcome.style.display='block';
            setTimeout(()=> { modal.style.display='none'; this.updateStellarCoinDisplay(); }, 900);
        });
    }

    // add autosave support + UI toast functions
    setupAutoSave() {
        // show an initial quick save to ensure baseline saved
        this.performAutoSave(true);
        // then schedule every 60 seconds
        this._autosaveInterval = setInterval(() => this.performAutoSave(), 60 * 1000);
        // also ensure we save on page unload
        window.addEventListener('beforeunload', () => {
            try { localStorage.setItem('ttou_save', this.exportState()); } catch(e){}
        });
    }

    async performAutoSave(initial = false) {
        try {
            this.showSaveToast('Saving...');
            // write to localStorage
            localStorage.setItem('ttou_save', this.exportState());
            if (this.username) localStorage.setItem('ttou_username', this.username);
            // small delay for UX to show saving state (shorter if initial)
            await this.sleep(initial ? 300 : 700);
            this.showSaveToast('Save Complete', 900);
        } catch (e) {
            // in case of error show failure message briefly
            this.showSaveToast('Save Failed', 1200);
            console.error('Autosave failed', e);
        }
    }

    showSaveToast(text = 'Saving...', holdMs = 700) {
        // create or reuse toast element
        let toast = document.getElementById('ttou-save-toast');
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'ttou-save-toast';
            toast.style.position = 'fixed';
            toast.style.right = '18px';
            toast.style.bottom = '18px';
            toast.style.zIndex = 999999;
            toast.style.pointerEvents = 'none';
            document.body.appendChild(toast);
        }
        // set content and animate
        toast.textContent = text;
        toast.classList.remove('visible');
        // force reflow to restart animation
        void toast.offsetWidth;
        toast.classList.add('visible');
        // hide after holdMs + fade duration (CSS handles fade)
        clearTimeout(toast._hideTimer);
        toast._hideTimer = setTimeout(() => {
            toast.classList.remove('visible');
        }, holdMs + 700);
    }

    // helper to parse YouTube ID from multiple URL formats
    parseYouTubeId(url) {
        if (!url || typeof url !== 'string') return null;
        // common patterns
        const patterns = [
            /(?:youtube\.com\/watch\?.*v=|youtube\.com\/v\/|youtube\.com\/embed\/)([A-Za-z0-9_-]{11})/,
            /(?:youtu\.be\/)([A-Za-z0-9_-]{11})/,
            /([A-Za-z0-9_-]{11})/ // fallback pick first 11-char token
        ];
        for (const p of patterns) {
            const m = url.match(p);
            if (m && m[1]) return m[1];
        }
        return null;
    }

    // helpers for video modal UI
    showVideoError(msg) {
        const el = document.getElementById('videoError');
        if (!el) return;
        el.textContent = msg;
        el.style.display = '';
        // hide thumbnail & disable actions when error shown
        document.getElementById('videoThumb').style.display = 'none';
        document.getElementById('downloadMp4Btn').disabled = true;
        document.getElementById('downloadMp3Btn').disabled = true;
    }

    clearVideoScan() {
        const img = document.getElementById('videoThumb');
        if (img) { img.src = ''; img.style.display = 'none'; }
        document.getElementById('videoTitle').textContent = '';
        document.getElementById('videoAuthor').textContent = '';
        document.getElementById('videoError').style.display = 'none';
        document.getElementById('downloadMp4Btn').disabled = true;
        document.getElementById('downloadMp3Btn').disabled = true;
        this._videoDownloadId = null;
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

/* shaking GOD text used during black-tier reveal */
.god-roll-text {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    font-weight: 900;
    font-size: clamp(28px, 8vw, 96px);
    color: #fff;
    letter-spacing: 0.02em;
    text-align: center;
    z-index: 1002;
    animation: godShake 0.35s ease-in-out infinite;
    text-shadow: 0 0 30px rgba(255,255,255,0.06);
}
@keyframes godShake {
    0% { transform: translate(-50%,-50%) rotate(0deg) scale(1); }
    25% { transform: translate(-50%,-50%) rotate(-2deg) scale(1.02); }
    50% { transform: translate(-50%,-50%) rotate(2deg) scale(1.01); }
    75% { transform: translate(-50%,-50%) rotate(-1deg) scale(1.02); }
    100% { transform: translate(-50%,-50%) rotate(0deg) scale(1); }
}`;

// Inject animations
const style = document.createElement('style');
style.textContent = shakeKeyframes;
document.head.appendChild(style);

// Initialize the gacha system
document.addEventListener('DOMContentLoaded', () => {
    const gacha = new GachaSystem();
    gacha.updateStellarCoinDisplay();
});