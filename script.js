// ——— ITEM DATA ———
// First column is base weight, the average weight for that fruit
// Second column is base value
// Third column is chance for the plant to be giant
const itemData = {
    "Aloe Vera": [
        350,
        5.5,
        69000
    ],
    "Apple": [
        275,
        3,
        50
    ],
    "Avocado": [
        300,
        350,
        6.5
    ],
    "Bamboo": [
        35,
        4,
        4000
    ],
    "Banana": [
        1.5,
        100,
        1750
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
        325,
        5500,
        8
    ],
    "Bendboo": [
        155000,
        18,
        275
    ],
    "Blood Banana": [
        1.5,
        200,
        6000
    ],
    "Blue Lollipop": [
        1,
        50000,
        65
    ],
    "Blueberry": [
        0.2,
        100,
        20
    ],
    "Burning Bud": [
        12,
        500,
        65000
    ],
    "Cacao": [
        12000,
        250,
        8
    ],
    "Cactus": [
        100,
        3400,
        7
    ],
    "Candy Blossom": [
        100000,
        3,
        40
    ],
    "Candy Sunflower": [
        1.5,
        80000,
        85
    ],
    "Cantaloupe": [
        250,
        34000,
        5.5
    ],
    "Carrot": [
        0.275,
        100,
        20
    ],
    "Cauliflower": [
        150,
        5,
        50
    ],
    "Celestiberry": [
        10000,
        2,
        200
    ],
    "Cherry Blossom": [
        3,
        400,
        500
    ],
    "Chocolate Carrot": [
        0.275,
        100,
        11000
    ],
    "Coconut": [
        14,
        400,
        70
    ],
    "Cocovine": [
        14,
        275,
        66666
    ],
    "Corn": [
        100,
        2,
        40
    ],
    "Cranberry": [
        1,
        3500,
        50
    ],
    "Crimson Vine": [
        1,
        100,
        1250
    ],
    "Crocus": [
        0.275,
        150,
        30000
    ],
    "Cursed Fruit": [
        200,
        25750,
        30
    ],
    "Daffodil": [
        0.2,
        1000,
        45
    ],
    "Dandelion": [
        300,
        4,
        50000
    ],
    "Delphinium": [
        0.3,
        100,
        24000
    ],
    "Dragon Fruit": [
        100,
        12,
        4750
    ],
    "Dragon Pepper": [
        300,
        6,
        88888
    ],
    "Durian": [
        200,
        7500,
        8
    ],
    "Easter Egg": [
        20,
        2500,
        3
    ],
    "Eggplant": [
        12000,
        220,
        5
    ],
    "Elephant Ears": [
        18,
        500,
        77000
    ],
    "Ember Lily": [
        12,
        450,
        66666
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
        100,
        300
    ],
    "Grape": [
        200,
        3,
        7850
    ],
    "Green Apple": [
        200,
        3,
        300
    ],
    "Guanabana": [
        4,
        400,
        72500
    ],
    "Hive Fruit": [
        300,
        62000,
        8
    ],
    "Honeysuckle": [
        100000,
        12,
        400
    ],
    "Ice Cream Bean": [
        200,
        4,
        4500
    ],
    "Kiwi": [
        2750,
        300,
        5
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
        250,
        3,
        35000
    ],
    "Lily of the Valley": [
        400,
        49120,
        6
    ],
    "Lime": [
        1,
        1000,
        125
    ],
    "Loquat": [
        200,
        6.5,
        8000
    ],
    "Lotus": [
        20,
        35000,
        650
    ],
    "Lumira": [
        350,
        6,
        85000
    ],
    "Mango": [
        15,
        200,
        6500
    ],
    "Manuka Flower": [
        0.3,
        200,
        25000
    ],
    "Mega Mushroom": [
        2000000,
        500,
        70
    ],
    "Mint": [
        1,
        150,
        5250
    ],
    "Moon Blossom": [
        3,
        400,
        66666
    ],
    "Moon Mango": [
        15,
        300,
        50000
    ],
    "Moon Melon": [
        18000,
        300,
        8
    ],
    "Moonflower": [
        2,
        200,
        9500
    ],
    "Moonglow": [
        25000,
        400,
        7
    ],
    "Mushroom": [
        151000,
        220,
        25
    ],
    "Nectar Thorn": [
        350,
        44444,
        7
    ],
    "Nectarine": [
        200,
        3,
        48000
    ],
    "Nectarshade": [
        0.8,
        100,
        50000
    ],
    "Nightshade": [
        0.5,
        100,
        3500
    ],
    "Noble Flower": [
        20000,
        250,
        5
    ],
    "Orange Tulip": [
        0.05,
        55,
        850
    ],
    "Papaya": [
        1000,
        3,
        60
    ],
    "Parasol Flower": [
        200000,
        350,
        6
    ],
    "Passionfruit": [
        3,
        3550,
        40
    ],
    "Peace Lily": [
        0.6,
        100,
        24000
    ],
    "Peach": [
        2,
        300,
        70
    ],
    "Pear": [
        120,
        20000,
        3
    ],
    "Pepper": [
        200,
        5,
        8000
    ],
    "Pineapple": [
        2000,
        3,
        70
    ],
    "Pink Lily": [
        400,
        6,
        65000
    ],
    "Pink Tulip": [
        0.05,
        55,
        850
    ],
    "Pitcher Plant": [
        12,
        275,
        32000
    ],
    "Prickly Pear": [
        375,
        7,
        7000
    ],
    "Pumpkin": [
        3400,
        8,
        80
    ],
    "Purple Cabbage": [
        5,
        500,
        70
    ],
    "Purple Dahlia": [
        12,
        400,
        75000
    ],
    "Rafflesia": [
        3500,
        8,
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
        100,
        5000
    ],
    "Rosy Delight": [
        10,
        450,
        69000
    ],
    "Soul Fruit": [
        200,
        25,
        7750
    ],
    "Starfruit": [
        15000,
        250,
        3
    ],
    "Strawberry": [
        0.3,
        100,
        15
    ],
    "Succulent": [
        175,
        25000,
        5
    ],
    "Sugar Apple": [
        200,
        48000,
        9
    ],
    "Suncoil": [
        10,
        400,
        80000
    ],
    "Sunflower": [
        16.5,
        160000,
        600
    ],
    "Tomato": [
        0.5,
        100,
        30
    ],
    "Traveler's Fruit": [
        15,
        500,
        59000
    ],
    "Venus Fly Trap": [
        10,
        650,
        85000
    ],
    "Violet Corn": [
        250,
        3,
        50000
    ],
    "Watermelon": [
        3000,
        7,
        70
    ],
    "White Mulberry": [
        200,
        3,
        3000
    ],
    "Wild Carrot": [
        1.3,
        100,
        25000
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
