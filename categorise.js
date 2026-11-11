/**
 * Grocery categorisation (EN + LT, UK grocery meanings).
 * Loaded in the browser (global categorize) and in Node tests (module.exports).
 */

const CATEGORY_ORDER = [
  'Fruit & Vegetables',
  'Meat & Fish',
  'Dairy',
  'Bakery',
  'Pasta & Rice',
  'Drinks',
  'Household',
  'Frozen',
  'Other'
];

/** @type {Array<{category: string, stems: string[]}>} */
const CATEGORY_RULES = [
  {
    category: 'Fruit & Vegetables',
    stems: [
      'apple', 'obuol', 'banan', 'tomato', 'pomidor', 'potato', 'bulv', 'potatoes', 'carrot', 'mork',
      'onion', 'svogun', 'garlic', 'cesnak', 'lettuce', 'salat', 'salot', 'cucumber', 'agurk',
      'bell pepper', 'paprik', 'chilli', 'chili', 'orange fruit', 'apelsin', 'lemon', 'citrin',
      'grape', 'vynuog', 'strawber', 'brašk', 'bras', 'cabbage', 'kopust', 'mushroom', 'gryb',
      'avocado', 'spinach', 'špinat', 'spinat', 'pear', 'kriauš', 'kriause', 'beet', 'burok',
      'celery', 'salier', 'broccoli', 'žiedin', 'ziedin', 'cauliflower', 'zucchini', 'cukin',
      'pumpkin', 'moliug', 'peach', 'persik', 'plum', 'slyv', 'cherry', 'vyšn', 'vysn',
      'mandarin', 'mango', 'pineapple', 'ananas', 'kiwi', 'melon', 'arbūz', 'arbuz', 'watermelon',
      'fig', 'datule', 'herb', 'žolel', 'zolel', 'basil', 'bazil', 'parsley', 'petraž', 'petraz',
      'dill', 'krap', 'radish', 'ridik', 'leek', 'poras', 'blueber', 'aviet', 'raspber',
      'lime fruit', 'courgette', 'aubergine', 'baklaz', 'eggplant', 'butternut squash',
      'acorn squash', 'sweet potato', 'batata', 'ginger', 'citrinž', 'rocket', 'rukkola',
      'kale', 'kopust', 'sprout', 'rovitu', 'corn', 'kvieči', 'mais', 'peas', 'žirn', 'zirn',
      'beans', 'pupel', 'asparagus', 'šparag', 'sparag', 'turnip', 'ropė', 'rope', 'pak choi',
      'spring onion', 'scallion', 'shallot', 'čiobrel', 'ciobrel', 'nectarine', 'brussels'
    ]
  },
  {
    category: 'Meat & Fish',
    stems: [
      'chicken', 'višt', 'vist', 'vištien', 'beef', 'jautien', 'pork', 'kiaulien', 'kiaul',
      'lamb', 'avien', 'turkey', 'kalakut', 'fish', 'žuv', 'zuv', 'salmon', 'lašiš', 'lasis',
      'tuna', 'tunas', 'shrimp', 'krevet', 'prawn', 'bacon', 'šonin', 'sonin', 'sausage', 'dešr',
      'desr', 'desra', 'dešre', 'ham', 'kump', 'mince', 'minced', 'farš', 'fars', 'faršas',
      'steak', 'kotlet', 'liver', 'kepen', 'duck', 'antien', 'meat', 'mėsa', 'mesa', 'seafood',
      'jūros', 'juros', 'cod', 'menk', 'herring', 'silkė', 'silke', 'trout', 'upėtak', 'upetak',
      'mussels', 'midės', 'mides', 'crab', 'krab', 'venison', 'elnien', 'prosciutto', 'ribs',
      'kiaulienos', 'meatball', 'kotletai', 'burger', 'mincemeat'
    ]
  },
  {
    category: 'Dairy',
    stems: [
      'milk', 'pien', 'pienas', 'cheese', 'sūr', 'sur', 'suris', 'yogurt', 'jogurt', 'jogur',
      'butter', 'sviest', 'cream', 'grietin', 'egg', 'kiauš', 'kiaus', 'kiaušin', 'kefyr', 'kefir',
      'cottage', 'varšk', 'varsk', 'mozzarella', 'feta', 'gouda', 'cheddar', 'sour cream',
      'grietinė', 'grietine', 'margarine', 'margarin', 'fromage', 'cream cheese', 'halloumi',
      'ricotta', 'brie', 'parmesan', 'philadelphia'
    ]
  },
  {
    category: 'Bakery',
    stems: [
      'bread', 'duon', 'duona', 'roll', 'bandel', 'bandele', 'bagel', 'croissant', 'cake', 'tort',
      'pyrag', 'muffin', 'cookie', 'sausain', 'biscuit', 'pastry', 'piršt', 'pirst', 'bun', 'kepal',
      'toast', 'duonel', 'baguette', 'baton', 'tortilla', 'pita', 'pitta', 'naan', 'wrap',
      'flatbread', 'crumpet', 'scone', 'ciabatta', 'brioche', 'pretzel', 'kulči', 'kulci',
      'poppy seed roll', 'šimtalapis', 'simtalapis'
    ]
  },
  {
    category: 'Pasta & Rice',
    stems: [
      'pasta', 'makaron', 'makaronai', 'spaghetti', 'spage', 'rice', 'ryž', 'ryz', 'ryžiai',
      'noodle', 'ramen', 'couscous', 'penne', 'lasagna', 'lazan', 'vermišel', 'vermisel',
      'groats', 'kruop', 'buckwheat', 'grik', 'gnocchi', 'tagliatelle', 'fusilli', 'risotto'
    ]
  },
  {
    category: 'Drinks',
    stems: [
      'water', 'vand', 'vanduo', 'juice', 'sult', 'sultys', 'coffee', 'kav', 'kava', 'tea', 'arbat',
      'beer', 'alus', 'wine', 'vyn', 'vynas', 'soda', 'cola', 'lemonade', 'limonad', 'cider', 'sidr',
      'energy drink', 'energ', 'mineral', 'mineralinis', 'kombucha', 'smoothie', 'kokteil',
      'squash', 'cordial', 'ribena', 'robinsons', 'dilute', 'lucozade', 'irn bru', 'fanta', 'pepsi',
      'tonic', 'ginger ale', 'sparkling', 'seltzer', 'hot chocolate', 'kakava', 'latte', 'cappuccino',
      'whisky', 'vodka', 'gin', 'rum', 'prosecco', 'champagne', 'šampan', 'sampan'
    ]
  },
  {
    category: 'Household',
    stems: [
      'soap', 'muil', 'detergent', 'skalb', 'toilet paper', 'tualet', 'sponge', 'kempin', 'šluost',
      'sluost', 'trash', 'šiukšl', 'siuksl', 'cleaner', 'valym', 'salt', 'drusk', 'sugar', 'cukr',
      'cooking oil', 'aliej', 'alyvu', 'olive oil', 'vinegar', 'actas', 'sirke', 'spice', 'prieskon',
      'flour', 'milt', 'cling film', 'clingfilm', 'foil', 'folij', 'plastic wrap',
      'stretch wrap', 'cling wrap', 'rubbish bag', 'bin bag', 'maiš', 'maisel', 'battery', 'bater',
      'light bulb', 'lemput', 'matches', 'degtuk', 'dish soap', 'ind', 'brush', 'šepet', 'sepet',
      'washing up', 'laundry', 'bleach', 'dezinfek', 'paper towel', 'kitchen roll', 'bicarbonate',
      'baking powder', 'yeast', 'miel', 'cling', 'sanitiser', 'sanitizer', 'wipe', 'servet'
    ]
  },
  {
    category: 'Frozen',
    stems: [
      'frozen', 'šaldy', 'saldy', 'ice cream', 'ledai', 'saldain', 'lyophil', 'deep freeze',
      'žemait', 'peas frozen', 'frozen pizza', 'saldyt'
    ]
  }
];

/** Phrase / regex overrides (checked first; UK grocery sense). */
const PHRASE_OVERRIDES = [
  { re: /^(orange|blackcurrant|apple|summer fruits|lemon|lime)\s+squash$/, category: 'Drinks' },
  { re: /^squash$/, category: 'Drinks' },
  { re: /^butternut\s+squash$/, category: 'Fruit & Vegetables' },
  { re: /^acorn\s+squash$/, category: 'Fruit & Vegetables' },
  { re: /^(cling\s*film|clingfilm|plastic\s*wrap|stretch\s*wrap|foil\s*wrap|cling\s*wrap)$/, category: 'Household' },
  { re: /^(wrap|tortilla\s*wrap|tortilla)$/, category: 'Bakery' },
  { re: /^(crisps|crisp)$/, category: 'Other' },
  { re: /^(biscuits|biscuit)$/, category: 'Bakery' },
  { re: /^pork\s+mince/, category: 'Meat & Fish' },
  { re: /^(beef|lamb|turkey|chicken)\s+mince/, category: 'Meat & Fish' }
];

const SHORT_STEM_BLOCKLIST = new Set(['por', 'act', 'mes', 'pip', 'red', 'oil', 'tea', 'pea', 'ham']);

function normalize(text) {
  return String(text)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[.!?,:;]+$/g, '')
    .replace(/[^a-z0-9\s/-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * @returns {number} match score, 0 = no match
 */
function stemMatchScore(normalizedItem, stemRaw) {
  const stem = normalize(stemRaw);
  if (!stem) return 0;

  if (stem.includes(' ')) {
    if (normalizedItem === stem) return 2000 + stem.length;
    if (normalizedItem.includes(stem)) return 1500 + stem.length;
    return 0;
  }

  const words = normalizedItem.split(/\s+/);

  for (const w of words) {
    if (w === stem) return 800 + stem.length;
    if (stem.length >= 3 && w.startsWith(stem) && w.length - stem.length <= 5) {
      return 600 + stem.length + Math.min(w.length - stem.length, 3);
    }
  }

  if (normalizedItem === stem) return 800 + stem.length;

  if (stem.length < 4 || SHORT_STEM_BLOCKLIST.has(stem)) return 0;

  for (const w of words) {
    if (w.length >= stem.length && w.startsWith(stem)) return 400 + stem.length;
    if (stem.length >= 5 && w.includes(stem) && w.startsWith(stem.slice(0, 4))) return 200 + stem.length;
  }

  if (stem.length >= 5 && normalizedItem.includes(stem)) {
    const idx = normalizedItem.indexOf(stem);
    const before = idx === 0 || normalizedItem[idx - 1] === ' ';
    const after = idx + stem.length === normalizedItem.length || normalizedItem[idx + stem.length] === ' ';
    if (before && after) return 100 + stem.length;
  }

  return 0;
}

function categorize(rawName) {
  const n = normalize(rawName);
  if (!n) return 'Other';

  for (const rule of PHRASE_OVERRIDES) {
    if (rule.re.test(n)) return rule.category;
  }

  let bestCategory = 'Other';
  let bestScore = 0;

  for (const rule of CATEGORY_RULES) {
    for (const stem of rule.stems) {
      const score = stemMatchScore(n, stem);
      if (score > bestScore) {
        bestScore = score;
        bestCategory = rule.category;
      } else if (score === bestScore && score > 0) {
        const rank = CATEGORY_ORDER.indexOf(rule.category);
        const bestRank = CATEGORY_ORDER.indexOf(bestCategory);
        if (rank < bestRank) bestCategory = rule.category;
      }
    }
  }

  return bestScore > 0 ? bestCategory : 'Other';
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { categorize, normalize, CATEGORY_ORDER, stemMatchScore };
}

if (typeof globalThis !== 'undefined') {
  globalThis.categorize = categorize;
  globalThis.CATEGORY_ORDER = CATEGORY_ORDER;
}
