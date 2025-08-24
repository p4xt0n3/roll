// Game data - keeping the same items and characters
const gameData = {
    items: {
        blue: [
            "Tier I Spiritual Staff Embryo", "Tier I Magical Dagger Embryo", "Tier I Enchanted Armor Core",
            "Mystic Lotus Petal", "Scroll of Ignis", "Tier I Mana Crystal", "Tier I Stamina Potion",
            "Ethereal Frost Ore", "Universal Bestiary", "Tier I Spirit Ring Embryo", "Celestial Feather Charm",
            "Book of Aqua", "Tier I Spiritual Bow Embryo", "Tier I Alchemy Catalyst", "Blessed Herb Root",
            "Ancient Rune Tablet", "Phantom Amber Shard", "Tier I Magical Shield Embryo", "Book of Terra",
            "Runic Translation Key",
            // Newly requested Blue tier items
            "Tier I Spirit Orb Embryo", "Tier I Iron Spellblade Embryo", "Fragment of Mystic Ice",
            "Whispering Shell", "Book of Zephyr", "Healing Dewdrop", "Tier I Wind Crystal",
            "Glowing Slime Core", "Starflower Herb", "Rune-Inscribed Pebble", "Pocket Bestiary Scroll",
            "Emberleaf Branch", "Book of Sparks", "Minor Spirit Charm", "Tier I Guardian Shield Core",
            "Frozen Fang Shard", "Silverleaf Mushroom", "Tier I Healing Herb Kit", "Book of Emberlight",
            "Dreamcatcher Feather"
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
            "Leg of the Saint Corpse Part", "Eye of the Saint Corpse Part",
            // newly added by user:
            "Pretty Hand", "Mysterious DISC", "The Sword of Quadratic Equation", "The Fist of E=MC2",
            "The Dagger of 1/2*r*θ", "Kishibe Rohan's Original Manuscript", "DIO's Diary", "Ultraseven's Head Axe",
            "Luck & Pluck", "Caesar's Headband", "Immortal Ascension Fruit",
            // New Gold-tier items requested by user:
            "Lava Rock", "The Stone Mask", "Stone Free's String", "Sticker", "Joseph Joestar's Clacker Volley",
            "Wamuu's Ring", "Light Modes Manual", "Mysterious Emerald", "Second Bomb : Sheer Heart Attack",
            "Stray Cat", "The Red stone of Aja", "Steel Ball", "Revolver", "Inverted Spear of Heaven",
            "Soul Split Kantana", "Playful Cloud", "Chains of a Thousand Miles", "Inventory Curse"
            // Newly requested Gold tier items
            , "Ancient StellarCoin", "Advanced Spiritual Crystal", "Wings of Salvation", "Obsidian Great Sword",
            "Energy Shard (The Strongest of Today)", "Energy Shard (The Strongest in History)",
            "Energy Shard (The Vessel)", "Energy Shard (The Sorcerer Killer)",
            "Energy Shard (The Alternate Scientist)", "Energy Shard (The Red Dust Prodigy)",
            "Energy Shard (The Elemental Master)", "G Virus", "T Virus", "C Virus",
            "T Veronica Virus", "Uroboros Virus"
        ],
        red: [
            "The Card", "Rubix of 6th Stage Seal", "The All-See Eye of 333", "Requiem Arrow", "The Perfect DNA",
            "The Manual of ⭕💴", "Level V Authority Keycard (G Foundation)", "True Devourer of All Souls",
            "Miyabi's Sealed Katana",
            // NEW Red-tier items requested:
            "Sukuna's Finger", "Six Eyes", "The Bones of 87", "New Rokakaka Fruit", "Umbra",
            "Original Blacksite", "Calamity's Flow in a Bottle", "The Whole Corpse of the Saint",
            "The Bible", "The Tale of The Old Universe",
            // newly added by user:
            "DIO's Bone", "Crowbar from CS:GO", "Plasma Spark Tower", "Spark Lence",
            "Reverse Cursed Technique Manual", "The Formula Weapon Set", "Executioner's Sword",
            // New Red-tier items requested by user:
            "Aja Mask", "The Cog of Time", "Heaven Shard", "The Light Shard of Ultra-Ancient",
            "Heavenly Restriction", "10 Shadows Technique Manual", "Heart of Africa", "Tears of Ocean"
            // Newly added Red items
            , "Bunny's Kantana", "Joker Hammer", "Projenitor Virus", "Solar Diary", "Bro I'm Dead",
            // New Red-tier items
            "The Manual of Phil♂s♂phy", "Torned Message Paper #1", "Torned Message Paper #2",
            "Torned Message Paper #3", "Torned Message Paper #4", "Torned Message Paper #5",
            "Torned Message Paper #6", "Judas (Weapon)", "Mandelbrick", "Turbrick", "Quantum Key", "Delta Coin", "Delta Ticket", "Universal Keycard", "999.9 Gold Bar", "Mandelbrick Supercomputing Unit", "Mandelbrick Minicomputing Unit", "Super Dragon Ball", "Ultra Key", "Saeed's Certification Crate", "Quantum Storage", "Reis' Certification Crate", "Desmoulins' Certification Crate", "G Foundation Guest Card", "ReLink Neural Device", "Green Baby", "Scroll of 14 Phrase", "Energy Shard (For The Delta δ)", "Energy Shard (Crystallized)", "Energy Shard (Nuclear Star)", "⭕💴 In a Bottle", "Paxton's Bank Card", "G's Bank Card", "Photo of DIO"

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
            "Reinforced", "Wood", "The Mysterio", "Hyper", "Misma", "Collision",
            // newly added by user:
            "Moriarty Zecto Crescent", "Asagi Mutsuki", "Z", "Gojo Satoru", "Ryomen Sukuna", "Yuji Itadori", "Juan🐎",
            // New Gold characters requested:
            "Toji Fushiguro", "Megumi Fushiguro", "Anais Desmoulins", "Khalil Reis", "Saeed Ziaten",
            "Dr. Rometheus", "Hamke", "Jacob Haavk", "Princeton Friedrich Schafer",
            // Added per user's request:
            "Clinton Hantrence Ofrento",
            // Newly added Gold character
            "Shura"
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
            "Cosmical Colossal Woodcrawler, Wood","The First Alternate, The Mysterio",
            "The Deep Horror Within, Hyper","The Last Planner, Misma","Know Everything Exist, Collision",
            // newly added by user:
            "The Genius of Crescent Family, Moriarty Zecto Crescent","Chief of Staff, Asagi Mutsuki",
            "The One who stays outside Universe, Z","The Strongest of Today, Gojo Satoru",
            "The Strongest in History, Ryomen Sukuna","The one who use Black Flash as m1, Yuji Itadori",
            "The Horse on Balcony, Juan🐎",
            // New Red characters requested:
            "The Sorcerer Killer, Toji Fushiguro","The Ten Shadows Technique User, Megumi Fushiguro",
            "The Security Director, Anais Desmoulins","Abyss Shark, Khalil Reis",
            "The Guard Captain, Saeed Ziaten","The Creator of ReLink, Dr. Rometheus",
            "Believers of the Old Dynasty, Hamke","The Future, Jacob Haavk",
            "The Western Swordmaster, Princeton Friedrich Schafer",
            // Newly added Red Sinner characters
            "The #1 Sinner, Yi Sang","The #2 Sinner, Faust","The #3 Sinner, Don Quixote","The #4 Sinner, Ryōshū",
            "The #5 Sinner, Meursault","The #6 Sinner, Hong Lu","The #7 Sinner, Heathcliff",
            "The #8 Sinner, Ishmael","The #9 Sinner, Rodion","The #10 Sinner, Dante",
            "The #11 Sinner, Sinclair","The #12 Sinner, Outis","The #13 Sinner, Gregor",
          //Newly Added Red Boi
          "The Dark Wolf, Shuuta Jinhara"
        ]
    }
};

class GachaSystem {
    constructor() {
        this.currentRollType = 1;
        this.isRolling = false;
        this.stellarCoin = 100; // start with 100 StellarCoin by default
        this.language = 'en'; // 'en' or 'zh' - affects displayed names only
        this.theme = localStorage.getItem('ttou_theme') || 'dark'; // 'dark' or 'light'
        this.viewMode = localStorage.getItem('ttou_viewmode') || 'auto'; // 'auto' | 'phone' | 'laptop'
        this.translations = {
            // only mapping for items and characters needed for UI translation
            items: {
                // Blue tier
                "Tier I Spiritual Staff Embryo":"灵杖初胚","Tier I Magical Dagger Embryo":"魔匕初胚","Tier I Enchanted Armor Core":"附魔铠核心",
                "Mystic Lotus Petal":"神秘莲花瓣","Scroll of Ignis":"伊格尼斯卷轴","Tier I Mana Crystal":"魔力结晶初阶","Tier I Stamina Potion":"体力药剂初阶",
                "Ethereal Frost Ore":"虚灵寒霜矿","Universal Bestiary":"万象兽典","Tier I Spirit Ring Embryo":"灵戒初胚","Celestial Feather Charm":"天羽护符",
                "Book of Aqua":"水之书","Tier I Spiritual Bow Embryo":"灵弓初胚","Tier I Alchemy Catalyst":"炼金催化初阶","Blessed Herb Root":"祝福草根",
                "Ancient Rune Tablet":"上古符文石板","Phantom Amber Shard":"幻影琥珀碎片","Tier I Magical Shield Embryo":"魔盾初胚","Book of Terra":"大地之书",
                "Runic Translation Key":"符文译钥",
                // Purple tier (partial list provided)
                "The Mysterious Rubix":"神秘魔方","Stand Arrow":"替身箭矢","Book of Undead":"亡灵之书","Bow of Salvation":"救赎之弓",
                "Hi-Tec-Radar":"高科技雷达","Unawakened Scepter":"未觉醒权杖","Crown of Eternal Twilight":"永暮之冠","Phoenix Heart Core":"凤凰心核",
                "Divine Gear Relic":"神圣齿轮遗物","Sword of Forgotten Kings":"遗忘王之剑","Obsidian Dragon Fang":"黑曜龙牙","Astral Compass":"星界罗盘",
                "Moonveil Talisman":"月纱护符","Crystalized Soul Fragment":"结晶灵魂碎片","Mask of the Thousand Faces":"千面之具",
                "Bloodforged Gauntlet":"血铸护手","Orb of Dimensional Rift":"维裂之球","Flamebound Grimoire":"炎缚魔典","Echoing Harp of Spirits":"灵回之琴","Starlight War Banner":"星光战旗",
                // Gold tier (includes added items)
                "Crown of Primordial Kings":"元始王冠","Eternal Flame Core":"永燃火核","Blade of the Abysswalker":"深渊行者之刃",
                "Heavenpiercer Lance":"穿天之枪","Orb of Infinite Echoes":"无限回响之球","Wings of the Fallen Seraph":"堕炽天使之翼",
                "Dragonlord's Heartstone":"龙王心石","Dragon Ball":"龙珠","Scepter of Reality's End":"终实之杖","Chaosforged Armor":"混铸战甲",
                "Eye of the Void Serpent":"虚蛇之眼","Worldshaper Hammer":"造世之锤","Sacred Chalice of Aeons":"永劫圣杯","Book of All Origins":"万源之书",
                "Timeweaver's Hourglass":"编时沙漏","Ring of the Endless Dream":"无尽梦环","Basebat of 333":"333之球棒","Hypersonic Multitool":"超音速多能工具",
                "Scepter of Hope & Love":"希望与爱之杖","Armside Supersonic Blade":"侧臂超音刃","Silence":"肃静","The Devourer of Souls":"灵魂吞噬者",
                "The SoulShatter":"灵魂碎裂者","Joker Masker":"小丑之面","Holgyht Orb":"圣光之球","Voidus Twinblade":"虚无双刃",
                "Gojo's Blindfold":"五条眼罩","Wheel of Dharma":"法轮","Sword Piece of Umbra":"本影剑片","Mysterious Hi-Tech Mask":"神秘高科面罩",
                "Piece of Bone...?":"骨之碎片...?","Rokakaka Fruit":"洛卡卡卡果实","Hamon Manual":"波纹修炼手册","Spin Manual":"回旋修炼手册",
                "Fragment of Tyranny":"暴虐碎片","Eye of Ender":"末影之眼","Golden Apple":"金苹果",
                "Ribcage of Saint Corpse Part":"圣遗体之肋骨","Arm of the Saint Corpse Part":"圣遗体之臂","Heart of the Saint Corpse Part":"圣遗体之心脏",
                "Pelvis of the Saint Corpse Part":"圣遗体之骨盆","Skull of the Saint Corpse Part":"圣遗体之头骨","Leg of the Saint Corpse Part":"圣遗体之腿",
                "Eye of the Saint Corpse Part":"圣遗体之眼",
                // newly added Gold items translations
                "Pretty Hand":"美丽的手","Mysterious DISC":"神秘光碟","The Sword of Quadratic Equation":"二次函数之剑",
                "The Fist of E=MC2":"E=MC2之拳","The Dagger of 1/2*r*θ":"1/2*r*θ小刀","Kishibe Rohan's Original Manuscript":"岸边露伴的漫画原稿",
                "DIO's Diary":"DIO的日记","Ultraseven's Head Axe":"七爷的头镖","Luck & Pluck":"幸运&勇气之剑",
                "Caesar's Headband":"西撒的头巾","Immortal Ascension Fruit":"升仙果",
                // Added translations for new Gold items
                "Lava Rock":"熔岩","The Stone Mask":"石鬼面","Stone Free's String":"石之自由的线","Sticker":"贴纸",
                "Joseph Joestar's Clacker Volley":"乔瑟夫 · 乔斯达的铁球","Wamuu's Ring":"瓦姆乌的唇环","Light Modes Manual":"光之流法手册",
                "Mysterious Emerald":"神秘绿宝石","Second Bomb : Sheer Heart Attack":"第二炸弹：枯萎穿心攻击","Stray Cat":"猫草",
                "The Red stone of Aja":"艾哲红石","Steel Ball":"钢球","Revolver":"左轮手枪","Inverted Spear of Heaven":"天逆牟",
                "Soul Split Kantana":"釈魂刀","Playful Cloud":"游云","Chains of a Thousand Miles":"千里之链","Inventory Curse":"丑宝",
                // Translations for newly requested Gold items
                "Ancient StellarCoin":"古星际币","Advanced Spiritual Crystal":"高阶灵石","Wings of Salvation":"救赎之翼",
                "Obsidian Great Sword":"黑曜石大剑","Energy Shard (The Strongest of Today)":"能量碎片（现代最强）",
                "Energy Shard (The Strongest in History)":"能量碎片（古代最强）","Energy Shard (The Vessel)":"能量碎片（宿挪容器）",
                "Energy Shard (The Sorcerer Killer)":"能量碎片（咒术师杀手）","Energy Shard (The Alternate Scientist)":"能量碎片（伪人科学家）",
                "Energy Shard (The Red Dust Prodigy)":"能量碎片（血尘天骄）","Energy Shard (The Elemental Master)":"能量碎片（元素大师）",
                "G Virus":"G病毒","T Virus":"T病毒","C Virus":"C病毒","T Veronica Virus":"T维罗妮卡病毒","Uroboros Virus":"衔尾蛇病毒",
                // Red tier
                "The Card":"卡牌","Rubix of 6th Stage Seal":"六阶封印魔方","The All-See Eye of 333":"333全知全能之眼",
                "Requiem Arrow":"镇魂曲之箭","The Perfect DNA":"完美基因","The Manual of ⭕💴":"⭕💴手册",
                "Level V Authority Keycard (G Foundation)":"V级权限卡（G基金会）","True Devourer of All Souls":"真·灵魂吞噬者","Miyabi's Sealed Katana":"星见雅之封刀",
                "Sukuna's Finger":"宿傩之指","Six Eyes":"六眼","The Bones of 87":"87的骨","New Rokakaka Fruit":"新洛卡卡卡果实",
                "Umbra":"本影","Original Blacksite":"初源黑网","Calamity's Flow in a Bottle":"瓶中灾厄洪流","The Whole Corpse of the Saint":"圣人遗体",
                "The Bible":"圣经","The Tale of The Old Universe":"旧宇宙物语",
                // Added translations for new Red items
                "Aja Mask":"艾哲红石面具","The Cog of Time":"时间齿轮","Heaven Shard":"天堂碎片",
                "The Light Shard of Ultra-Ancient":"超古代之光碎片","Heavenly Restriction":"天与咒缚",
                "10 Shadows Technique Manual":"十影术手册","Heart of Africa":"非洲之心","Tears of Ocean":"海洋之泪",
                // newly added Red items translations
                "DIO's Bone":"DIO的骨头","Crowbar from CS:GO":"来自CS:GO的撬棍","Plasma Spark Tower":"等离子火花塔",
                "Spark Lence":"神光棒","Reverse Cursed Technique Manual":"反转术士手册","The Formula Weapon Set":"公式武器套",
                "Executioner's Sword":"处刑者之剑",
                // New Red tier items translations
                "Bunny's Kantana":"小兔子的武士刀","Joker Hammer":"小丑大锤","Projenitor Virus":"始祖病毒",
                "Solar Diary":"耀日日记","Bro I'm Dead":"不是兄弟我怎么④了",
                // Newly added Red items
                "The Manual of Phil♂s♂phy":"哲♂学手册","Torned Message Paper #1":"碎掉的信纸#1",
                "Torned Message Paper #2":"碎掉的信纸#2","Torned Message Paper #3":"碎掉的信纸#3",
                "Torned Message Paper #4":"碎掉的信纸#4","Torned Message Paper #5":"碎掉的信纸#5",
                "Torned Message Paper #6":"碎掉的信纸#6",
              "Judas (Weapon)":"『犹大』", "Mandelbrick":"曼德尔砖", "Turbrick":"图灵砖", "Quantum Key":"量子密钥", "Delta Coin":"三角币", "Delta Ticket":"三角券", "Universal Keycard":"万能钥匙卡", "999.9 Gold Bar":"万足金条", "Mandelbrick Supercomputing Unit":"曼德尔超算单元", "Mandelbrick Minicomputing Unit":"曼德尔口算单元", "Super Dragon Ball":"超龙珠", "Ultra Key":"奥特钥匙", "Saeed's Certification Crate":"赛伊德认证箱", "Quantum Storage":"量子存储", "Reis' Certification Crate":"雷斯认证箱", "Desmoulins' Certification Crate":"德穆兰认证箱", "G Foundation Guest Card":"G基金会游客卡", "ReLink Neural Device":"ReLink脑机", "Green Baby":"绿色婴儿", "Scroll of 14 Phrase":"十四密语卷轴", "Energy Shard (For The Delta δ)":"能量碎片（为德尔塔δ）", "Energy Shard (Crystallized)":"能量碎片（晶化）", "Energy Shard (Nuclear Star)":"能量碎片（原子星）", "⭕💴 In a Bottle":"瓶中⭕💴", "Paxton's Bank Card":"帕克斯顿的银行卡", "G's Bank Card":"G的银行卡", "Photo of DIO":"DIO的照片"

                // Black
                ,"GOD IS LOVE YOU":"上帝爱你"
            },
            characters: {
                // Purple
                "Dak":"达克","M":"M","Rewd":"雷伍德","Saskon":"萨斯科恩","Echer":"伊切尔","Bescre":"贝斯克雷","Zes":"泽斯",
                "Trons":"琼斯","Frost":"寒霜","LinYuan":"琳渊",
                // Gold
                "G":"G","Paxton":"帕克斯顿","Nathan":"内森","Karos":"卡洛斯","Kames":"凯姆斯","Litem":"利特姆",
                "『The Lover』":"『恋人』","The Old Duke":"老伯爵","Kasi":"卡西","Lauris RaruzY":"劳里斯·拉鲁兹",
                "Kamustrophy Subforce":"卡姆斯托奇小队","Veroy Subforce":"维罗伊小队","Casual Subforce":"随机应变小队",
                "G-033 Subforce":"G-033小队","G-Adv Subforce":"G-Adv小队","Rister":"里斯特","Shadow":"黑影","QingXuan":"清轩",
                "Chiya Harano":"千也原乃","Trasy":"切尔茜","Joseph":"约瑟夫","Cirys":"希瑞斯","Deep Abyss":"极渊","Reinforced":"强化",
                "Wood":"腐木","The Mysterio":"神秘客","Hyper":"海帕","Misma":"米斯玛","Collision":"碰撞",
                // newly added Gold characters translations
                "Moriarty Zecto Crescent":"莫里亚蒂 · 泽克托 · 克里森特","Asagi Mutsuki":"浅黄睦月","Z":"Z","Gojo Satoru":"五条悟",
                "Ryomen Sukuna":"两面宿傩","Yuji Itadori":"虎杖悠仁","Juan🐎":"Juan🐎",
                // Added translations for newly requested Gold characters
                "Toji Fushiguro":"伏黑甚尔","Megumi Fushiguro":"伏黑惠","Anais Desmoulins":"阿娜伊斯 · 德穆兰",
                "Khalil Reis":"哈利勒 · 雷斯","Saeed Ziaten":"赛伊德 · 齐亚腾","Dr. Rometheus":"罗米修斯博士",
                "Hamke":"哈姆克","Jacob Haavk":"雅各布 · 哈夫克","Princeton Friedrich Schafer":"普林斯顿 · 费德里希 · 谢佛",
                // Newly added Gold character translation
                "Clinton Hantrence Ofrento":"克林顿 · 汉特伦斯 · 奥弗伦多",
                // New Gold character translation: Shura
                "Shura":"Shura",
                // Red (selected examples)
                "The Perfect Alternate, G":"最完美的伪人，G","Elemental Unleashed, Paxton":"元素释放，帕克斯顿",
                "The Red Dust Prodigy, Nathan":"血尘天骄，内森","Cuber Requiem, Kasi":"方者镇魂曲，卡西","The Emperor Awakes, Karos":"皇者觉醒，卡洛斯",
                "Assassin Back on Job, The Old Duke":"刺客回归，老伯爵","The True Speach 100% Unsealed, Lauris RaruzY":"真言100%解封，劳里斯·拉鲁兹",
                "Cosmical Rubix 100% Awaken, Rister":"宇宙魔方100%觉醒，里斯特","The Assassin in Darkness, Shadow":"黑暗中的刺客，黑影",
                "Spiritual Devastation, QingXuan":"灵魄覆灭，清轩","Fallen Cherry Blossoms, Chiya Harano":"落樱哀花，千也原乃",
                "The Hope & Love, Trasy":"希望与爱，切尔茜","The Greatest Joker, Joseph":"最伟大的小丑，约瑟夫","Holyght Released, Cirys":"圣光释放，希瑞斯",
                "Unseen Lethal Danger, Deep Abyss":"无形致命危机，极渊","The Invincible Defence, Reinforced":"无敌防御，强化",
                "Cosmical Colossal Woodcrawler, Wood":"宇宙巨型树爬者，腐木","The First Alternate, The Mysterio":"史上第一位伪人，神秘客",
                "The Deep Horror Within, Hyper":"内心深层的恐惧，海帕","The Last Planner, Misma":"终末策士，米斯玛","Know Everything Exist, Collision":"知晓万物存在，碰撞",
                // newly added Red characters translations
                "The Genius of Crescent Family, Moriarty Zecto Crescent":"克里森特家族天才，莫里亚蒂 · 泽克托 · 克里森特",
                "Chief of Staff, Asagi Mutsuki":"参谋长，浅黄睦月","The One who stays outside Universe, Z":"宇宙之外的人，Z",
                "The Strongest of Today, Gojo Satoru":"现代最强，五条悟","The Strongest in History, Ryomen Sukuna":"古代最强，两面宿傩",
                "The one who use Black Flash as m1, Yuji Itadori":"把黑闪当普攻，虎杖悠仁","The Horse on Balcony, Juan🐎":"阳台上的马，Juan🐎",
                // Added translations for newly requested Red characters
                "The Sorcerer Killer, Toji Fushiguro":"伏黑甚尔","The Ten Shadows Technique User, Megumi Fushiguro":"十影术使用者，伏黑惠",
                "The Security Director, Anais Desmoulins":"安全总监，阿娜伊斯 · 德穆兰","Abyss Shark, Khalil Reis":"地狱黑鲨，哈利勒 ·雷斯",
                "The Guard Captain, Saeed Ziaten":"卫队长官，赛伊德 · 齐亚腾","The Creator of ReLink, Dr. Rometheus":"Relink脑机研发者，罗米修斯博士",
                "Believers of the Old Dynasty, Hamke":"旧朝的信仰者，哈姆克","The Future, Jacob Haavk":"\"我们，才是未来\"，雅各布 · 哈夫克",
                "The Western Swordmaster, Princeton Friedrich Schafer":"西洋剑大师，普林斯顿 · 费德里希 · 谢佛",
                // Newly added Red character translation entries:
                "Unsatisfied Desires, Shura":"无法满足欲望的女仆，Shura",
                "The Start of all Tales, P":"整个故事的起点，P",
                // Newly added Red character translation
                "Leave no one Behind, G.T.I.":"不会抛下任何人，全球应急行动小组","The Future Itself, Haavk":"未来化身，哈夫克",
                // New Red-tier characters
                "The #1 Sinner, Yi Sang":"第一位罪人，李箱","The #2 Sinner, Faust":"第二位罪人，浮士德",
                "The #3 Sinner, Don Quixote":"第三位罪人，堂吉诃德","The #4 Sinner, Ryōshū":"第四位罪人，良秀",
                "The #5 Sinner, Meursault":"第五位罪人，默尔索","The #6 Sinner, Hong Lu":"第六位罪人，鸿潞",
                "The #7 Sinner, Heathcliff":"第七位罪人，希斯克里夫","The #8 Sinner, Ishmael":"第八位罪人，以实玛丽",
                "The #9 Sinner, Rodion":"第九位罪人，罗佳","The #10 Sinner, Dante":"第十位罪人，但丁",
                "The #11 Sinner, Sinclair":"第十一位罪人，辛克莱","The #12 Sinner, Outis":"第十二位罪人，奥提斯",
                "The #13 Sinner, Gregor":"第十三位罪人，格里高尔",
              //Did u mew today?
              "The Dark Wolf, Shuuta Jinhara":"黑狼，秋太甚原"
            }
        };
        
        this.sellQueue = {}; // items to sell: { itemName: count }
        this.username = ''; // new: username persisted via localStorage
        
        this.easyMode = false; // NEW: Easy Mode default OFF
        this.autoClear = true; // NEW: Auto Clear default ON
        this.skipAnimation = false; // NEW: Skip animation default OFF
        this.autoRoll = false; // NEW: Auto Roll default OFF
        this._autoRollInterval = null; // NEW: Auto Roll default OFF

        // NEW Debug toggles
        this.alwaysWin = false; // if true, gamble always wins
        this.noCoinCD = false;  // if true, Random StellarCoin has no cooldown

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
        
        this.uiText = {
            en: {
                singleTitle: 'Single Pull',
                singleDesc: 'Roll once for a chance at rare items',
                tenTitle: '10-Pull',
                tenDesc: 'Roll 10 times with guaranteed 4★ or higher',
                rollNowSingle: 'SINGLE PULL',
                rollNowTen: '10-PULL',
                recentPulls: 'Recent Pulls',
                clearAll: 'Clear All',
                saveProgress: 'Save Progress',
                gallery: 'Gallery',
                easyModeOnOff: (on)=> `Easy Mode: ${on ? 'On' : 'Off'}`,
                autoClearOnOff: (on)=> `Auto Clear: ${on ? 'On' : 'Off'}`,
                video: 'Video',
                settings: 'Settings',
                sellItems: 'Sell Items',
                inventory: 'Inventory',
                crafting: 'Crafting',
                saveLoadTitle: 'Save / Load Progress',
                saveToLocal: 'Save to Local',
                copyExport: 'Copy Export',
                clearLocalSave: 'Clear Local Save',
                importLoad: 'Import / Load',
                galleryHeader: 'Character Gallery',
                sellHeader: 'Sell Items',
                sellInventory: 'Inventory Items',
                sellToSell: 'Items to Sell',
                sellTotalPrefix: 'Total:',
                startupWelcome: 'Welcome',
                settingsLangTitle: 'Language (Items & Characters)',
                settingsNote: 'Note: This changes only displayed names of rolled items & characters.',
                yes: 'Yes',
                no: 'No'
            },
            zh: {
                singleTitle: '单抽',
                singleDesc: '抽1次以获得稀有物品的机会',
                tenTitle: '十连',
                tenDesc: '一次抽10次，保证4★或以上',
                rollNowSingle: '单抽',
                rollNowTen: '十连',
                recentPulls: '最近抽取',
                clearAll: '清除所有',
                saveProgress: '保存进度',
                gallery: '画廊',
                easyModeOnOff: (on)=> `简单模式：${on ? '开启' : '关闭'}`,
                autoClearOnOff: (on)=> `自动清除：${on ? '开启' : '关闭'}`,
                video: '视频',
                settings: '设置',
                sellItems: '出售物品',
                inventory: '背包',
                crafting: '合成',
                saveLoadTitle: '保存 / 导入 进度',
                saveToLocal: '保存到本地',
                copyExport: '复制导出',
                clearLocalSave: '清除本地存档',
                importLoad: '导入 / 载入',
                galleryHeader: '角色画廊',
                sellHeader: '出售物品',
                sellInventory: '背包物品',
                sellToSell: '要出售的物品',
                sellTotalPrefix: '总计：',
                startupWelcome: '欢迎',
                settingsLangTitle: '语言（物品与角色）',
                settingsNote: '注意：仅更改已抽到物品与角色的显示名称。',
                yes: '是',
                no: '否'
            }
        };
        
        this.setupEventListeners();
        this.setupDebugSystem();
        this.applyTheme(this.theme); // apply stored theme on init
        this.applyViewMode(true);
        window.addEventListener('resize', () => this.applyViewMode());
        
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
        
        // Random StellarCoin button (100 - 100000) with 10 minute cooldown
        const randomBtn = document.getElementById('randomCoinBtn');
        if (randomBtn) {
            randomBtn.addEventListener('click', () => this.handleRandomStellarClick());
            // ensure initial state
            this.updateRandomCoinButton();
        }
        
        // Auto Roll toggle
        const autoRollBtn = document.getElementById('autoRollBtn');
        if (autoRollBtn) {
            autoRollBtn.textContent = `Auto Roll: ${this.autoRoll ? 'On' : 'Off'}`;
            autoRollBtn.addEventListener('click', () => {
                this.autoRoll = !this.autoRoll;
                autoRollBtn.textContent = `Auto Roll: ${this.autoRoll ? 'On' : 'Off'}`;
                autoRollBtn.style.background = this.autoRoll ? 'rgba(34,197,94,0.08)' : 'rgba(255,255,255,0.03)';
                if (this.autoRoll) this.startAutoRoll(); else this.stopAutoRoll();
            });
        }
        
        // Mode toggle button (Phone/Laptop/Auto)
        const modeBtn = document.getElementById('modeToggleBtn');
        if (modeBtn) {
            modeBtn.addEventListener('click', () => {
                this.viewMode = this.viewMode === 'auto' ? 'phone' : (this.viewMode === 'phone' ? 'laptop' : 'auto');
                localStorage.setItem('ttou_viewmode', this.viewMode);
                this.applyViewMode();
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

        // Skip Animation toggle
        const skipBtn = document.getElementById('skipAnimBtn');
        if (skipBtn) {
            skipBtn.textContent = `Skip Animation: ${this.skipAnimation ? 'On' : 'Off'}`;
            skipBtn.addEventListener('click', () => {
                this.skipAnimation = !this.skipAnimation;
                skipBtn.textContent = `Skip Animation: ${this.skipAnimation ? 'On' : 'Off'}`;
                skipBtn.style.background = this.skipAnimation ? 'rgba(34,197,94,0.08)' : 'rgba(255,255,255,0.03)';
            });
        }

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
        
        // Settings button
        const settingsBtn = document.getElementById('settingsBtn');
        if (settingsBtn) {
            settingsBtn.addEventListener('click', () => {
                document.getElementById('settingsModal').style.display = 'flex';
                // pre-check radio
                const radios = document.querySelectorAll('input[name="ttou-lang"]');
                radios.forEach(r => r.checked = (r.value === this.language));
            });
        }
        document.getElementById('closeSettingsModal').addEventListener('click', ()=> document.getElementById('settingsModal').style.display='none');
        document.querySelectorAll('input[name="ttou-lang"]').forEach(r => {
            r.addEventListener('change', (e) => {
                this.setLanguage(e.target.value);
            });
        });

        // Theme radio buttons in settings
        document.querySelectorAll('input[name="ttou-theme"]').forEach(r => {
            r.addEventListener('change', (e) => { this.applyTheme(e.target.value); });
        });
        // Reset settings button
        const resetBtn = document.getElementById('resetSettingsBtn');
        if (resetBtn) {
            resetBtn.addEventListener('click', () => {
                if (confirm('Do you want to Reset your settings?')) this.resetSettings();
            });
        }
        
        // Gamble button -> open modal
        const gambleBtn = document.getElementById('gambleBtn');
        if (gambleBtn) {
            gambleBtn.addEventListener('click', () => {
                document.getElementById('gambleModal').style.display = 'flex';
                document.getElementById('gambleAmountInput').value = '';
                document.getElementById('gambleMsg').textContent = '';
                setTimeout(()=>document.getElementById('gambleAmountInput').focus(),100);
            });
        }
        // Gamble modal close/cancel
        document.getElementById('closeGambleModal').addEventListener('click', ()=> document.getElementById('gambleModal').style.display='none');
        document.getElementById('gambleCancelBtn').addEventListener('click', ()=> document.getElementById('gambleModal').style.display='none');
        // Execute gamble action
        document.getElementById('gambleExecuteBtn').addEventListener('click', () => { this.executeGamble(); });
        document.getElementById('gambleAmountInput').addEventListener('keypress', (e)=> { if (e.key==='Enter') this.executeGamble(); });
        // Unlock System
        const unlockBtn = document.getElementById('unlockBtn');
        if (unlockBtn) unlockBtn.addEventListener('click', ()=> { this.openUnlockModal('mandelbrick'); });
        document.getElementById('closeUnlockModal').addEventListener('click', ()=> document.getElementById('unlockModal').style.display='none');
        document.querySelectorAll('.unlock-tab').forEach(t=> t.addEventListener('click', (e)=> {
            document.querySelectorAll('.unlock-tab').forEach(x=>x.classList.remove('active'));
            e.currentTarget.classList.add('active');
            const mode = e.currentTarget.dataset.mode;
            this.setUnlockMode(mode);
        }));
        document.getElementById('unlockRollOnce').addEventListener('click', ()=> this.handleUnlockRoll(1));
        document.getElementById('unlockRollCustom').addEventListener('click', ()=> {
            const n = Math.max(1, parseInt(document.getElementById('unlockCustomCount').value||'1',10));
            this.handleUnlockRoll(n);
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

        // GiveAll button - grant everything (items + characters) and StellarCoin
        const giveAllBtn = document.getElementById('giveAllBtn');
        if (giveAllBtn) {
            giveAllBtn.addEventListener('click', () => {
                // grant every item once (keeping rarity) and every character once
                Object.entries(gameData.items).forEach(([rarity, list]) => {
                    list.forEach(name => this.incItem(name, 1, rarity));
                });
                Object.values(gameData.characters).flat().forEach(name => this.characterInventory.push(name));
                // give some StellarCoin as bonus
                this.stellarCoin += 10000;
                this.updateStellarCoinDisplay();
                // refresh craft counts and inventory UI if open
                this.updateCraftListCounts();
                if (document.getElementById('inventoryModal').style.display === 'flex') this.showInventory('items');
                this.appendCmdLine('GiveAll: All items & characters added, +10000 StellarCoin.');
            });
        }

        // AlwaysWin toggle button (debug)
        const alwaysBtn = document.getElementById('alwaysWinBtn');
        if (alwaysBtn) {
            alwaysBtn.addEventListener('click', () => {
                this.alwaysWin = !this.alwaysWin;
                alwaysBtn.textContent = `AlwaysWin: ${this.alwaysWin ? 'On' : 'Off'}`;
                alwaysBtn.style.background = this.alwaysWin ? 'rgba(34,197,94,0.08)' : 'rgba(255,255,255,0.03)';
            });
        }
        // NoCoinCD toggle button (debug)
        const noCdBtn = document.getElementById('noCoinCdBtn');
        if (noCdBtn) {
            noCdBtn.addEventListener('click', () => {
                this.noCoinCD = !this.noCoinCD;
                noCdBtn.textContent = `NoCoinCD: ${this.noCoinCD ? 'On' : 'Off'}`;
                noCdBtn.style.background = this.noCoinCD ? 'rgba(34,197,94,0.08)' : 'rgba(255,255,255,0.03)';
            });
        }

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
        // if skip enabled, short-circuit to immediate reveal
        if (this.skipAnimation) { animationContainer.style.display = 'none'; return; }
        
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
            if (this.skipAnimation) { animationContainer.style.display = 'none'; return; }
            await this.sleep(1200);
        }
        
        if (hasGold || hasRed) {
            pullText.textContent = 'Rare Energy Detected!';
            pullOrb.style.animation = 'orbPulse 2s ease-in-out infinite, shake 0.5s ease infinite';
            pullOrb.style.background = 'linear-gradient(135deg, #f59e0b, #fbbf24)';
            overlay.style.background = 'rgba(68, 58, 26, 0.95)';
            if (this.skipAnimation) { animationContainer.style.display = 'none'; return; }
            await this.sleep(1200);
        }
        
        if (hasRed) {
            pullText.textContent = 'LEGENDARY SIGNATURE!';
            pullOrb.style.animation = 'orbPulse 1s ease-in-out infinite, hardShake 0.3s ease infinite';
            pullOrb.style.background = 'linear-gradient(135deg, #ef4444, #f87171)';
            overlay.style.background = 'rgba(68, 26, 26, 0.95)';
            if (this.skipAnimation) { animationContainer.style.display = 'none'; return; }
            await this.sleep(1500);
        }
        
        if (hasCharacter) {
            pullText.textContent = 'CHARACTER ACQUIRED!';
            pullOrb.style.background = 'linear-gradient(135deg, #2a1a44, #3a2a55, #1a4433, #4a2a1a)';
            pullOrb.style.backgroundSize = '400% 400%';
            pullOrb.style.animation = 'orbPulse 1s ease-in-out infinite, colorfulBg 2s ease infinite';
            overlay.style.background = 'linear-gradient(135deg, rgba(42, 26, 68, 0.95), rgba(58, 42, 85, 0.95), rgba(26, 68, 51, 0.95))';
            if (this.skipAnimation) { animationContainer.style.display = 'none'; return; }
            await this.sleep(1500);
        }
        
        pullText.textContent = 'Revealing Results...';
        if (this.skipAnimation) { animationContainer.style.display = 'none'; return; }
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
        
        // store original name for translation switching later
        const displayName = this.translateName(result.name);
        
        card.innerHTML = `
            <div class="result-header">
                <div class="result-name" data-orig-name="${result.name}">${displayName}</div>
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
            // show character name with its color tier (rarity) class
            this.characterInventory.slice().reverse().forEach(name => {
                const el = document.createElement('div');
                el.className = 'inv-char';
                el.style.display = 'flex';
                el.style.justifyContent = 'space-between';
                el.style.alignItems = 'center';
                el.style.padding = '0.5rem 0';
                el.style.borderBottom = '1px solid var(--border-primary)';
                const rarity = this.getCharacterRarity(name);
                el.classList.add(`rarity-${rarity}`);
                const nameDiv = document.createElement('div');
                nameDiv.className = 'inv-char-name';
                nameDiv.textContent = this.translateName(name);
                const badge = document.createElement('div');
                badge.className = 'inv-char-badge';
                badge.textContent = rarity.toUpperCase();
                badge.style.opacity = '0.8';
                badge.style.fontSize = '0.85rem';
                badge.style.fontWeight = '700';
                badge.style.padding = '0.15rem 0.5rem';
                badge.style.borderRadius = '6px';
                badge.style.background = 'rgba(255,255,255,0.03)';
                el.appendChild(nameDiv);
                el.appendChild(badge);
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
            // sort by rarity (black, red, gold, purple, blue) then alphabetically
            const rarityOrder = { black: 0, red: 1, gold: 2, purple: 3, blue: 4 };
            keys.sort((a, b) => {
                const ra = rarityOrder[this.getItemRarity(a) || 'blue'];
                const rb = rarityOrder[this.getItemRarity(b) || 'blue'];
                if (ra !== rb) return ra - rb;
                return a.localeCompare(b);
            }).forEach(name => {
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
                el.innerHTML = `<div class="inv-name">${this.translateName(name)}</div><div style="color:var(--text-secondary)">${count}×</div>`;
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

    // New: translate helper and UI refresh for language changes
    translateName(original) {
        if (!original) return original;
        if (this.language === 'en') return original;
        // check items first then characters
        const ti = this.translations.items[original];
        if (ti) return ti;
        const tc = this.translations.characters[original];
        if (tc) return tc;
        return original;
    }

    setLanguage(lang) {
        if (lang !== 'en' && lang !== 'zh') return;
        this.language = lang;
        // persist language so selection stays across sessions
        try { localStorage.setItem('ttou_lang', this.language); } catch(e){}

        // ensure the radio inputs reflect the change (keeps options visible / selectable)
        document.querySelectorAll('input[name="ttou-lang"]').forEach(r => { r.checked = (r.value === this.language); });

        // Refresh visible UI: results grid, inventory modal, gallery if open
        // Update results grid cards
        document.querySelectorAll('#resultsGrid .result-card').forEach(card => {
            const nameEl = card.querySelector('.result-name');
            if (!nameEl) return;
            const orig = nameEl.dataset.origName || nameEl.textContent;
            // store original if not present
            if (!nameEl.dataset.origName) nameEl.dataset.origName = orig;
            nameEl.textContent = this.translateName(nameEl.dataset.origName);
            // update stars/phrase for black special if applicable (keep same)
        });
        // Update inventory display if open
        if (document.getElementById('inventoryModal').style.display === 'flex') {
            // preserve current tab. Force redraw using showInventory
            const itemsBtnActive = document.getElementById('invItemsBtn').classList.contains('debug-apply');
            this.showInventory(itemsBtnActive ? 'items' : 'characters');
        }
        // If gallery open, recreate it
        if (document.getElementById('galleryModal').style.display === 'flex') {
            this.showGallery();
        }
        // Apply UI static text translations
        this.applyUIText();
    }

    // Apply static UI translations for many labels/buttons/modals
    applyUIText() {
        const txt = this.uiText[this.language] || this.uiText.en;
        // Roll option headers
        document.querySelectorAll('.roll-option').forEach(opt => {
            const type = parseInt(opt.dataset.type);
            const titleEl = opt.querySelector('.option-title');
            const descEl = opt.querySelector('.option-description');
            if (type === 1) { titleEl.textContent = txt.singleTitle; descEl.textContent = txt.singleDesc; }
            if (type === 10) { titleEl.textContent = txt.tenTitle; descEl.textContent = txt.tenDesc; }
        });
        // Costs (keep formatting)
        document.getElementById('singleCost').textContent = (this.language === 'zh') ? '10 ⭐' : '10 ⭐';
        document.getElementById('tenCost').textContent = (this.language === 'zh') ? '100 ⭐' : '100 ⭐';
        // Roll button text
        const rollBtnText = this.currentRollType === 1 ? txt.rollNowSingle : txt.rollNowTen;
        const rollBtn = document.getElementById('executeRoll');
        if (rollBtn) rollBtn.querySelector('.btn-text').textContent = rollBtnText;
        // Recent pulls & clear
        const rh = document.querySelector('.results-header h3');
        if (rh) rh.textContent = txt.recentPulls;
        const clearBtn = document.getElementById('clearResults');
        if (clearBtn) clearBtn.textContent = txt.clearAll;
        // Right bar buttons
        const sp = document.getElementById('saveProgressBtn'); if (sp) sp.textContent = txt.saveProgress;
        const gb = document.getElementById('galleryBtn'); if (gb) gb.textContent = txt.gallery;
        const eb = document.getElementById('easyModeBtn'); if (eb) eb.textContent = txt.easyModeOnOff(this.easyMode);
        const ab = document.getElementById('autoClearBtn'); if (ab) ab.textContent = txt.autoClearOnOff(this.autoClear);
        const vb = document.getElementById('videoBtn'); if (vb) vb.textContent = txt.video;
        const sb = document.getElementById('settingsBtn'); if (sb) sb.textContent = txt.settings;
        // Save/Load modal labels
        const sml = document.querySelector('#saveLoadModal .modal-header h3'); if (sml) sml.textContent = txt.saveLoadTitle;
        const saveToLocalBtn = document.getElementById('saveToLocal'); if (saveToLocalBtn) saveToLocalBtn.textContent = txt.saveToLocal;
        const exportCopyBtn = document.getElementById('exportCopy'); if (exportCopyBtn) exportCopyBtn.textContent = txt.copyExport;
        const clearSaveBtn = document.getElementById('clearSave'); if (clearSaveBtn) clearSaveBtn.textContent = txt.clearLocalSave;
        const importBtn = document.getElementById('importFromTextarea'); if (importBtn) importBtn.textContent = txt.importLoad;
        // Gallery header
        const gh = document.querySelector('.gallery-header h2'); if (gh) gh.textContent = txt.galleryHeader;
        // Sell modal headers
        const sellHdr = document.querySelector('#sellModal .modal-header h3'); if (sellHdr) sellHdr.textContent = txt.sellHeader;
        const sellInv = document.querySelector('#sellModal .sell-section h4'); if (sellInv) sellInv.textContent = txt.sellInventory;
        // Update sell total label prefix
        const sellTotal = document.getElementById('sellTotal'); if (sellTotal) {
            // keep the numeric suffix but update prefix
            const match = sellTotal.textContent.match(/([0-9,\s⭐]*)$/);
            const suffix = match ? match[0].trim() : '0 ⭐';
            sellTotal.textContent = `${txt.sellTotalPrefix} ${suffix}`;
        }
        // Startup modal translations
        const smTitle = document.querySelector('#startupModal .modal-header h3'); if (smTitle) smTitle.textContent = txt.startupWelcome;
        // Settings modal title & note
        const settTitle = document.querySelector('#settingsModal .modal-header h3'); if (settTitle) settTitle.textContent = txt.settings;
        const langTitle = document.querySelector('#settingsModal h4'); if (langTitle) langTitle.textContent = txt.settingsLangTitle;
        const noteEl = document.getElementById('settingsNoteText'); if (noteEl) noteEl.textContent = txt.settingsNote;
        // Buttons with simple yes/no
        const musicYes = document.getElementById('musicYes'); if (musicYes) musicYes.textContent = txt.yes;
        const musicNo = document.getElementById('musicNo'); if (musicNo) musicNo.textContent = txt.no;

        // Ensure language radio reflects current language (safe-guard if settings modal is open)
        document.querySelectorAll('input[name="ttou-lang"]').forEach(r => { r.checked = (r.value === this.language); });
        
        // Auto Roll button label
        const arBtn = document.getElementById('autoRollBtn');
        if (arBtn) arBtn.textContent = `Auto Roll: ${this.autoRoll ? (this.language === 'zh' ? '开启' : 'On') : (this.language === 'zh' ? '关闭' : 'Off')}`;
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
                // give every item once (keeping rarity) and every character once
                Object.entries(gameData.items).forEach(([rarity, list]) => {
                    list.forEach(name => this.incItem(name, 1, rarity));
                });
                Object.values(gameData.characters).flat().forEach(name => this.characterInventory.push(name));
                // give some StellarCoin as bonus
                this.stellarCoin += 10000;
                this.updateStellarCoinDisplay();
                // refresh craft counts and inventory UI if open
                this.updateCraftListCounts();
                if (document.getElementById('inventoryModal').style.display === 'flex') this.showInventory('items');
                this.appendCmdLine('GiveAll: All items & characters added, +10000 StellarCoin.');
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
                document.documentElement.style.setProperty('--border-primary','#2a2a3a');
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
            case '/resetcd': {
                // Reset Random StellarCoin cooldown (clears stored last-timestamp)
                localStorage.removeItem('ttou_randomcoin_last');
                this.updateRandomCoinButton();
                this.appendCmdLine('Random StellarCoin cooldown has been reset.');
                break;
            }
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

    // New helpers for Random StellarCoin cooldown & handling
    handleRandomStellarClick() {
        // If NoCoinCD debug toggle is enabled, bypass cooldown entirely
        if (this.noCoinCD) {
            const amount = Math.floor(Math.random() * (100000 - 100 + 1)) + 100;
            this.stellarCoin += amount;
            this.updateStellarCoinDisplay();
            this.showSaveToast(`Received ${amount} ⭐ (NoCoinCD)`, 1200);
            return;
        }
        const KEY = 'ttou_randomcoin_last';
        const cooldownMs = 10 * 60 * 1000; // 10 minutes
        const now = Date.now();
        const last = parseInt(localStorage.getItem(KEY) || '0', 10);
        const remain = last > 0 ? Math.max(0, (last + cooldownMs) - now) : 0;
        if (remain > 0) {
            const s = Math.ceil(remain / 1000);
            alert(`Button cooling down. Try again in ${s} second(s).`);
            return;
        }
        // award random amount
        const amount = Math.floor(Math.random() * (100000 - 100 + 1)) + 100;
        this.stellarCoin += amount;
        this.updateStellarCoinDisplay();
        localStorage.setItem(KEY, String(now));
        this.updateRandomCoinButton();
        // brief feedback
        this.showSaveToast(`Received ${amount} ⭐`, 1200);
    }

    updateRandomCoinButton() {
        const btn = document.getElementById('randomCoinBtn');
        if (!btn) return;
        const KEY = 'ttou_randomcoin_last';
        const cooldownMs = 10 * 60 * 1000;
        const last = parseInt(localStorage.getItem(KEY) || '0', 10);
        const now = Date.now();
        const remain = last > 0 ? Math.max(0, (last + cooldownMs) - now) : 0;
        if (remain <= 0) {
            btn.disabled = false;
            btn.textContent = this.language === 'zh' ? '随机星币' : 'Random StellarCoin';
            btn.style.opacity = '1';
        } else {
            btn.disabled = true;
            const mins = Math.floor(remain / 60000);
            const secs = Math.floor((remain % 60000) / 1000);
            btn.textContent = this.language === 'zh' ? `冷却：${mins}m ${secs}s` : `Cooldown: ${mins}m ${secs}s`;
            btn.style.opacity = '0.7';
            // refresh countdown each second
            if (this._randomCoinTimer) clearInterval(this._randomCoinTimer);
            this._randomCoinTimer = setInterval(() => {
                const now2 = Date.now();
                const remain2 = Math.max(0, (last + cooldownMs) - now2);
                if (remain2 <= 0) {
                    clearInterval(this._randomCoinTimer);
                    this._randomCoinTimer = null;
                    this.updateRandomCoinButton();
                } else {
                    const m = Math.floor(remain2 / 60000);
                    const s = Math.floor((remain2 % 60000) / 1000);
                    const label = this.language === 'zh' ? `冷却：${m}m ${s}s` : `Cooldown: ${m}m ${s}s`;
                    const b = document.getElementById('randomCoinBtn');
                    if (b) b.textContent = label;
                }
            }, 1000);
        }
    }

    // pagespinEffect
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

    // determine character rarity by searching character lists (purple/gold/red). default 'purple' if not found
    getCharacterRarity(name) {
        if (!name) return 'purple';
        if (gameData.characters.red && gameData.characters.red.includes(name)) return 'red';
        if (gameData.characters.gold && gameData.characters.gold.includes(name)) return 'gold';
        if (gameData.characters.purple && gameData.characters.purple.includes(name)) return 'purple';
        return 'purple';
    }

    // Apply theme (dark/light) and persist
    applyTheme(theme) {
        this.theme = theme === 'light' ? 'light' : 'dark';
        localStorage.setItem('ttou_theme', this.theme);
        if (this.theme === 'light') {
            document.documentElement.style.setProperty('--bg-primary','#ffffff');
            document.documentElement.style.setProperty('--bg-secondary','#f5f5f5');
            document.documentElement.style.setProperty('--bg-tertiary','#ffffff');
            document.documentElement.style.setProperty('--text-primary','#0a0a0f');
            document.documentElement.style.setProperty('--border-primary','#e5e7eb');
            // adjust other accent if needed
        } else {
            document.documentElement.style.setProperty('--bg-primary','#0a0a0f');
            document.documentElement.style.setProperty('--bg-secondary','#161620');
            document.documentElement.style.setProperty('--bg-tertiary','#1e1e2a');
            document.documentElement.style.setProperty('--text-primary','#ffffff');
            document.documentElement.style.setProperty('--border-primary','#2a2a3a');
        }
        // update radio checked state if settings modal present
        document.querySelectorAll('input[name="ttou-theme"]').forEach(r => { r.checked = (r.value === this.theme); });
    }

    // Reset settings to defaults (language, theme, easy mode, auto clear, debug rates)
    resetSettings() {
        // default values
        this.language = 'en';
        this.easyMode = false;
        this.autoClear = true;
        this.currentRates = { ...this.originalRates };
        this.stellarCoin = 100;
        // reset theme to default dark
        this.applyTheme('dark');
        // apply UI updates
        localStorage.removeItem('ttou_theme');
        // reset language radios and apply translations
        document.querySelectorAll('input[name="ttou-lang"]').forEach(r => r.checked = (r.value === this.language));
        this.setLanguage(this.language);
        // update rightbar toggles display
        const easyBtn = document.getElementById('easyModeBtn');
        if (easyBtn) { easyBtn.textContent = this.uiText[this.language].easyModeOnOff(this.easyMode); easyBtn.style.background = 'rgba(255,255,255,0.03)'; }
        const autoBtn = document.getElementById('autoClearBtn');
        if (autoBtn) { autoBtn.textContent = this.uiText[this.language].autoClearOnOff(this.autoClear); autoBtn.style.background = 'rgba(34,197,94,0.08)'; }
        // update debug inputs if debug modal open
        if (document.getElementById('debugModal').style.display === 'flex') this.updateDebugInputs();
        this.updateStellarCoinDisplay();
    }

    // Gamble execution: reads amount, rolls multiplier 1-6, 50% chance to Win and 50% chance to Lose
    executeGamble() {
        const inp = document.getElementById('gambleAmountInput');
        const msg = document.getElementById('gambleMsg');
        if (!inp || !msg) return;
        let amt = parseInt(inp.value, 10);
        if (Number.isNaN(amt) || amt <= 0) { msg.style.color = '#fca5a5'; msg.textContent = 'Enter a valid positive amount.'; return; }
        // If user doesn't have enough and easyMode off, prevent gambling more than they own
        if (!this.easyMode && amt > this.stellarCoin) {
            msg.style.color = '#fca5a5';
            msg.textContent = `You don't have enough StellarCoin. You have ${this.stellarCoin} ⭐.`;
            return;
        }
        // pick multiplier 1..6
        const mult = Math.floor(Math.random() * 6) + 1;
        const result = amt * mult;
        // If AlwaysWin debug toggle is active, override random and always win
        const win = this.alwaysWin ? true : (Math.random() < 0.5);
        if (win) {
            this.stellarCoin += result;
            msg.style.color = '#9ae6b4';
            msg.textContent = `WIN! Multiplier: ×${mult}. You gained ${result} ⭐ (new total: ${this.stellarCoin} ⭐).`;
        } else {
            this.stellarCoin -= result;
            msg.style.color = '#fca5a5';
            msg.textContent = `LOSE! Multiplier: ×${mult}. You lost ${result} ⭐ (new total: ${this.stellarCoin} ⭐).`;
        }
        this.updateStellarCoinDisplay();
        // brief auto-close after 2.5s
        setTimeout(()=> { try { document.getElementById('gambleModal').style.display='none'; } catch(e){} }, 2500);
    }

    // Show Sell Modal
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
        if (!modal) {
            // Startup modal removed from DOM — attempt safe auto-load of any saved state and return.
            try {
                const saved = localStorage.getItem('ttou_save');
                const savedName = localStorage.getItem('ttou_username');
                if (saved && savedName) { this.loadState(saved); this.username = savedName; this.updateStellarCoinDisplay(); }
            } catch (e) { /* ignore load errors when modal absent */ }
            return;
        }
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

    startAutoRoll() {
        // prevent multiple intervals
        if (this._autoRollInterval) return;
        // do an immediate roll and then schedule repeated 10-pulls every 3s
        const doRoll = async () => {
            // avoid queueing if a manual roll is in progress
            if (this.isRolling) return;
            const prevType = this.currentRollType;
            this.currentRollType = 10;
            await this.executeRoll();
            this.currentRollType = prevType;
        };
        // immediate first attempt
        doRoll();
        this._autoRollInterval = setInterval(doRoll, 3000);
    }

    stopAutoRoll() {
        if (!this._autoRollInterval) return;
        clearInterval(this._autoRollInterval);
        this._autoRollInterval = null;
    }

    applyViewMode(initial = false) {
        const isNarrow = window.innerWidth <= 768;
        const isMobileUA = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
        let phone = false;
        if (this.viewMode === 'phone') phone = true;
        else if (this.viewMode === 'laptop') phone = false;
        else phone = isNarrow || isMobileUA; // auto
        document.body.classList.toggle('phone-mode', phone);
        const btn = document.getElementById('modeToggleBtn');
        if (btn) {
            const label = this.viewMode === 'auto' ? 'Auto' : (this.viewMode === 'phone' ? 'On' : 'Off');
            btn.textContent = `Phone Mode: ${label}`;
        }
        // minor tweaks for costs/button text sizes in phone mode
        const rollBtn = document.getElementById('executeRoll');
        if (rollBtn) rollBtn.style.padding = phone ? '0.8rem 1.4rem' : '';
        if (!initial) this.updateRandomCoinButton();
    }

    openUnlockModal(mode='mandelbrick') {
        this._unlockMode = mode;
        document.getElementById('unlockModal').style.display = 'flex';
        this.setUnlockMode(mode);
        document.getElementById('unlockResults').innerHTML = '';
    }
    setUnlockMode(mode) {
        this._unlockMode = mode;
        const img = document.getElementById('unlockImage');
        img.src = mode === 'mandelbrick' ? 'mandelbrick.jpg' : 'turbrick.jpg';
        this.updateUnlockReqText();
    }
    updateUnlockReqText() {
        const req = document.getElementById('unlockReqText');
        if (this._unlockMode === 'mandelbrick') {
            const m = this.getItemCount('Mandelbrick');
            const q = this.getItemCount('Quantum Key');
            req.textContent = `Needs: Mandelbrick ×${m}, Quantum Key ×${q}`;
        } else {
            const t = this.getItemCount('Turbrick');
            req.textContent = `Needs: Turbrick ×${t}`;
        }
    }
    async handleUnlockRoll(count) {
        // validate inventory
        if (this._unlockMode === 'mandelbrick') {
            if (this.getItemCount('Mandelbrick') < count || this.getItemCount('Quantum Key') < count) {
                alert('Missing required items: Mandelbrick and/or Quantum Key.');
                return;
            }
            this.decItem('Mandelbrick', count);
            this.decItem('Quantum Key', count);
        } else {
            if (this.getItemCount('Turbrick') < count) {
                alert('Missing required item: Turbrick.');
                return;
            }
            this.decItem('Turbrick', count);
        }
        this.updateUnlockReqText();
        // play scan animation then produce results
        await this.playUnlockScan();
        const results = [];
        for (let i=0;i<count;i++){
            const pool = (this._unlockMode === 'mandelbrick') ? gameData.characters.red : gameData.characters.gold;
            results.push(this.getRandomItem(pool));
        }
        // add to inventory and show
        results.forEach(name => this.characterInventory.push(name));
        if (document.getElementById('inventoryModal').style.display === 'flex') this.showInventory('characters');
        const box = document.getElementById('unlockResults');
        const title = (this._unlockMode === 'mandelbrick') ? 'Red Tier Character' : 'Gold Tier Character';
        box.innerHTML = results.map(n => `<div style="margin-top:.35rem;"><strong>${title}:</strong> ${this.translateName(n)}</div>`).join('');
        // toast
        this.showSaveToast(`Unlocked ${results.length}× ${title}`, 900);
    }
    playUnlockScan() {
        return new Promise(res => {
            const line = document.getElementById('goldScanLine');
            line.style.transition = 'none';
            line.style.top = '-100%';
            // force reflow
            void line.offsetHeight;
            line.style.transition = 'top 0.8s cubic-bezier(.2,.8,.2,1)';
            line.style.top = '100%';
            setTimeout(()=> { line.style.transition='none'; line.style.top='-100%'; res(); }, 850);
        });
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
    window.gacha = gacha; // expose for shop.js
});