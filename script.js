// ——— ITEM DATA ———
// First column is base weight, the average weight for that fruit
// Second column is base value
// Third column is chance for the plant to be giant
const itemData = {
    "Aloe Vera": [
        5.5,
        69000,
        350
    ],
    "Apple": [
        3,
        275,
        50
    ],
    "Avocado": [
        6.5,
        350,
        300
    ],
    "Bamboo": [
        4,
        4000,
        35
    ],
    "Banana": [
        1.5,
        1750,
        100
    ],
    "Beanstalk": [
        10,
        28000,
        300
    ],
    "Bee Balm": [
        1,
        18000,
        200
    ],
    "Bell Pepper": [
        8,
        5500,
        325
    ],
    "Bendboo": [
        18,
        155000,
        275
    ],
    "Blood Banana": [
        1.5,
        6000,
        200
    ],
    "Blue Lollipop": [
        1,
        50000,
        65
    ],
    "Blueberry": [
        0.2,
        20,
        100
    ],
    "Burning Bud": [
        12,
        65000,
        500
    ],
    "Cacao": [
        8,
        12000,
        250
    ],
    "Cactus": [
        7,
        3400,
        100
    ],
    "Candy Blossom": [
        3,
        100000,
        40
    ],
    "Candy Sunflower": [
        1.5,
        80000,
        85
    ],
    "Cantaloupe": [
        5.5,
        34000,
        250
    ],
    "Carrot": [
        0.275,
        20,
        100
    ],
    "Cauliflower": [
        5,
        50,
        150
    ],
    "Celestiberry": [
        2,
        10000,
        200
    ],
    "Cherry Blossom": [
        3,
        500,
        400
    ],
    "Chocolate Carrot": [
        0.275,
        11000,
        100
    ],
    "Coconut": [
        14,
        400,
        70
    ],
    "Cocovine": [
        14,
        66666,
        275
    ],
    "Corn": [
        2,
        40,
        100
    ],
    "Cranberry": [
        1,
        3500,
        50
    ],
    "Crimson Vine": [
        1,
        1250,
        100
    ],
    "Crocus": [
        0.275,
        30000,
        150
    ],
    "Cursed Fruit": [
        30,
        25750,
        200
    ],
    "Daffodil": [
        0.2,
        1000,
        45
    ],
    "Dandelion": [
        4,
        50000,
        300
    ],
    "Delphinium": [
        0.3,
        24000,
        100
    ],
    "Dragon Fruit": [
        12,
        4750,
        100
    ],
    "Dragon Pepper": [
        6,
        88888,
        300
    ],
    "Durian": [
        8,
        7500,
        200
    ],
    "Easter Egg": [
        3,
        2500,
        20
    ],
    "Eggplant": [
        5,
        12000,
        220
    ],
    "Elephant Ears": [
        18,
        77000,
        500
    ],
    "Ember Lily": [
        12,
        66666,
        450
    ],
    "Feijoa": [
        10,
        13000,
        400
    ],
    "Foxglove": [
        2,
        20000,
        250
    ],
    "Glowshroom": [
        0.75,
        300,
        100
    ],
    "Grape": [
        3,
        7850,
        200
    ],
    "Green Apple": [
        3,
        300,
        200
    ],
    "Guanabana": [
        4,
        72500,
        400
    ],
    "Hive Fruit": [
        8,
        62000,
        300
    ],
    "Honeysuckle": [
        12,
        100000,
        400
    ],
    "Ice Cream Bean": [
        4,
        4500,
        200
    ],
    "Kiwi": [
        5,
        2750,
        300
    ],
    "Lavender": [
        0.275,
        25000,
        90
    ],
    "Lemon": [
        1,
        350,
        50
    ],
    "Lilac": [
        3,
        35000,
        250
    ],
    "Lily of the Valley": [
        6,
        49120,
        400
    ],
    "Lime": [
        1,
        1000,
        125
    ],
    "Loquat": [
        6.5,
        8000,
        200
    ],
    "Lotus": [
        20,
        35000,
        650
    ],
    "Lumira": [
        6,
        85000,
        350
    ],
    "Mango": [
        15,
        6500,
        200
    ],
    "Manuka Flower": [
        0.3,
        25000,
        200
    ],
    "Mega Mushroom": [
        70,
        500,
        2000000
    ],
    "Mint": [
        1,
        5250,
        150
    ],
    "Moon Blossom": [
        3,
        66666,
        400
    ],
    "Moon Mango": [
        15,
        50000,
        300
    ],
    "Moon Melon": [
        8,
        18000,
        300
    ],
    "Moonflower": [
        2,
        9500,
        200
    ],
    "Moonglow": [
        7,
        25000,
        400
    ],
    "Mushroom": [
        25,
        151000,
        220
    ],
    "Nectar Thorn": [
        7,
        44444,
        350
    ],
    "Nectarine": [
        3,
        48000,
        200
    ],
    "Nectarshade": [
        0.8,
        50000,
        100
    ],
    "Nightshade": [
        0.5,
        3500,
        100
    ],
    "Noble Flower": [
        5,
        20000,
        250
    ],
    "Orange Tulip": [
        0.05,
        850,
        55
    ],
    "Papaya": [
        3,
        1000,
        60
    ],
    "Parasol Flower": [
        6,
        200000,
        350
    ],
    "Passionfruit": [
        3,
        3550,
        40
    ],
    "Peace Lily": [
        0.6,
        24000,
        100
    ],
    "Peach": [
        2,
        300,
        70
    ],
    "Pear": [
        3,
        20000,
        120
    ],
    "Pepper": [
        5,
        8000,
        200
    ],
    "Pineapple": [
        3,
        2000,
        70
    ],
    "Pink Lily": [
        6,
        65000,
        400
    ],
    "Pink Tulip": [
        0.05,
        850,
        55
    ],
    "Pitcher Plant": [
        12,
        32000,
        275
    ],
    "Prickly Pear": [
        7,
        7000,
        375
    ],
    "Pumpkin": [
        8,
        3400,
        80
    ],
    "Purple Cabbage": [
        5,
        500,
        70
    ],
    "Purple Dahlia": [
        12,
        75000,
        400
    ],
    "Rafflesia": [
        8,
        3500,
        80
    ],
    "Raspberry": [
        0.75,
        100,
        70
    ],
    "Red Lollipop": [
        4,
        50000,
        65
    ],
    "Rose": [
        1,
        5000,
        100
    ],
    "Rosy Delight": [
        10,
        69000,
        450
    ],
    "Soul Fruit": [
        25,
        7750,
        200
    ],
    "Starfruit": [
        3,
        15000,
        250
    ],
    "Strawberry": [
        0.3,
        15,
        100
    ],
    "Succulent": [
        5,
        25000,
        175
    ],
    "Sugar Apple": [
        9,
        48000,
        200
    ],
    "Suncoil": [
        10,
        80000,
        400
    ],
    "Sunflower": [
        16.5,
        160000,
        600
    ],
    "Tomato": [
        0.5,
        30,
        100
    ],
    "Traveler's Fruit": [
        15,
        59000,
        500
    ],
    "Venus Fly Trap": [
        10,
        85000,
        650
    ],
    "Violet Corn": [
        3,
        50000,
        250
    ],
    "Watermelon": [
        7,
        3000,
        70
    ],
    "White Mulberry": [
        3,
        3000,
        200
    ],
    "Wild Carrot": [
        1.3,
        25000,
        100
    ]
};
// ——— VARIANT MULTIPLIERS ———
const variantMultipliers = {
    "Normal": 1,
    "Gold": 20,
    "Rainbow": 50,
    "Ripe": 1,
    // Add more I guess
};

// ——— MUTATION DATA ———
const mutationData = [
  {
    "name": "Pollinated",
    "valueMulti": 3
  },
  {
    "name": "Wet",
    "valueMulti": 2
  },
  {
    "name": "Bloodlit",
    "valueMulti": 4
  },
  {
    "name": "Meteoric",
    "valueMulti": 125
  },
  {
    "name": "Verdant",
    "valueMulti": 4
  },
  {
    "name": "Zombified",
    "valueMulti": 25
  },
  {
    "name": "Celestial",
    "valueMulti": 120
  },
  {
    "name": "Moonlit",
    "valueMulti": 2
  },
  {
    "name": "Cloudtouched",
    "valueMulti": 5
  },
  {
    "name": "Windstruck",
    "valueMulti": 2
  },
  {
    "name": "Fried",
    "valueMulti": 8
  },
  {
    "name": "Burnt",
    "valueMulti": 4
  },
  {
    "name": "Drenched",
    "valueMulti": 5
  },
  {
    "name": "Heavenly",
    "valueMulti": 5
  },
  {
    "name": "Plasma",
    "valueMulti": 5
  },
  {
    "name": "Shocked",
    "valueMulti": 100
  },
  {
    "name": "Disco",
    "valueMulti": 125
  },
  {
    "name": "Aurora",
    "valueMulti": 90
  },
  {
    "name": "Twisted",
    "valueMulti": 5
  },
  {
    "name": "Alienlike",
    "valueMulti": 100
  },
  {
    "name": "Choc",
    "valueMulti": 2
  },
  {
    "name": "Molten",
    "valueMulti": 25
  },
  {
    "name": "Dawnbound",
    "valueMulti": 150
  },
  {
    "name": "Cooked",
    "valueMulti": 10
  },
  {
    "name": "Chilled",
    "valueMulti": 2
  },
  {
    "name": "Paradisal",
    "valueMulti": 100
  },
  {
    "name": "Wiltproof",
    "valueMulti": 4
  },
  {
    "name": "Sundried",
    "valueMulti": 85
  },
  {
    "name": "Galactic",
    "valueMulti": 120
  },
  {
    "name": "Voidtouched",
    "valueMulti": 135
  },
  {
    "name": "HoneyGlazed",
    "valueMulti": 5
  },
  {
    "name": "Frozen",
    "valueMulti": 10
  }
];
/**
 * @param {string} itemName
 * @returns {number[]|null} [baseWeight, baseValue, randomShit]
 */
function Return_Data(itemName) {
    return itemData[itemName] ?? null;
}

/**
 * @param {string} variantName
 * @returns {number}
 */
function Return_Multiplier(variantName) {
    return variantMultipliers[variantName] ?? 1;
}

/**
 * @param {{ Mutations: string[] }} plant
 * @returns {number}
 */
function CalcValueMulti(plant) {
  if (!Array.isArray(plant.Mutations)) return 1;

  let sum = 1;
  for (const mutName of plant.Mutations) {
    const m = mutationData.find(m => m.name === mutName);
    if (m) sum += (m.valueMulti - 1);
  }
  
  return Math.max(1, sum);
}

/**
 * @param {{ Item_String: string, Variant: string, Weight: number, Mutations?: string[] }} plant
 * @returns {number}
 */
function CalculatePlantValue(plant) {
    const itemName = plant.Item_String;
    const variant = plant.Variant;
    const weight = plant.Weight;
    if (!itemName || !variant || typeof weight !== "number") return 0;

    const data = Return_Data(itemName);
    if (!data) {
        console.warn("CalculatePlantValue | ItemData is invalid");
        return 0;
    }

    const [baseWeight, baseValue] = data;
    const clamped = Math.max(0.95, Math.min(weight / baseWeight, 1e8));
    const multi = CalcValueMulti(plant) * Return_Multiplier(variant);

    return Math.round(baseValue * multi * (clamped * clamped));
}


function populateFruitOptions() {
    const fruitSelect = document.getElementById("fruit-select");
    fruitSelect.innerHTML = '';
    Object.keys(itemData).forEach(fruit => {
        const option = document.createElement("option");
        option.value = fruit;
        option.textContent = fruit;
        fruitSelect.appendChild(option);
    });
}

function populateVariantOptions() {
    const variantSelect = document.getElementById("variant-select");
    variantSelect.innerHTML = '';
    Object.keys(variantMultipliers).forEach(variant => {
        const option = document.createElement("option");
        option.value = variant;
        option.textContent = variant + " (" + variantMultipliers[variant] + "x)";
        variantSelect.appendChild(option);
    });
}

// Populate mutation checkboxes
function populateMutationOptions() {
    const container = document.getElementById("mutations-container");
    container.innerHTML = '';
    mutationData.forEach((a) => {
        const label = document.createElement("label");
        label.style.display = 'block';

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.value = a.name;
        checkbox.name = "mutation";

        label.appendChild(checkbox);
        label.appendChild(document.createTextNode(a.name + " (" + a.valueMulti + "x)"));
        container.appendChild(label);
    });
}

function onCalculateClick() {
    const fruitSelect = document.getElementById("fruit-select");
    const weightInput = document.getElementById("weight-input");
    const variantSelect = document.getElementById("variant-select");
    const mutationCheckboxes = document.querySelectorAll('input[name="mutation"]:checked');
    const resultDiv = document.getElementById("result");

    const plant = {
        Item_String: fruitSelect.value,
        Variant: variantSelect.value,
        Weight: parseFloat(weightInput.value),
        Mutations: Array.from(mutationCheckboxes).map(cb => cb.value)
    }

    if (!plant.Item_String) {
        resultDiv.textContent = "Please select a fruit.";
        return;
    }
    if (isNaN(plant.Weight) || plant.Weight <= 0) {
        resultDiv.textContent = "Please enter a valid positive weight.";
        return;
    }

    const finalValue = CalculatePlantValue(plant);
    resultDiv.textContent = `Final Plant Value: ¢${finalValue.toLocaleString()}`;
}

window.onload = () => {
    populateFruitOptions();
    populateMutationOptions();
    populateVariantOptions();

    document.getElementById("calculate-btn").addEventListener("click", onCalculateClick);
};
