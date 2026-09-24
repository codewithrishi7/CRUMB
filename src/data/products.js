export const PRODUCTS = [
  // ================= 8 ARTISANAL CAKES =================
  {
    id: "dark-chocolate-truffle",
    name: "Belgian Dark Chocolate Truffle Cake",
    shortName: "Belgian Truffle",
    category: "Cakes",
    price: 899,
    formattedPrice: "₹899",
    image: "/images/chocolate-truffle.jpg",
    bakedBy: "Chef Antoine Laurent",
    established: "2021",
    signatureFlavors: "70% Belgian Couverture\nSilky Mirror Ganache",
    pairing: "Single Origin Espresso",
    rating: 5.0,
    reviewCount: 342,
    badge: "Bestseller",
    highlightReview: {
      stars: 5,
      source: "GOOGLE REVIEWS",
      quote: "BEST CHOCOLATE CAKE IN TOWN"
    },
    description:
      "A rich, dense chocolate sponge layered with silky dark chocolate ganache and finished with a glossy mirror glaze. Made with 70% Belgian couverture chocolate, it balances deep cocoa intensity with a light, airy crumb, then topped with delicate chocolate shavings and a dusting of cocoa. Built for true chocolate lovers who want indulgence without heaviness — perfect for birthdays, anniversaries, or whenever a serious chocolate craving strikes.",
    tastingNotes: ["70% Callebaut Dark Cocoa", "Valrhona Mirror Glaze", "Bourbon Vanilla Sponge", "Bittersweet Curls"],
    allergens: "Contains Dairy, Wheat (Gluten). 100% Eggless recipe.",
    weight: "750g (Serves 6-8)"
  },
  {
    id: "strawberry-vanilla-bean",
    name: "Strawberry Vanilla Bean Cream Cake",
    shortName: "Strawberry Cream",
    category: "Cakes",
    price: 749,
    formattedPrice: "₹749",
    image: "/images/strawberry-cream.jpg",
    bakedBy: "Chef Camille Vane",
    established: "2022",
    signatureFlavors: "Madagascar Vanilla Bean\nFresh Mahabaleshwar Berries",
    pairing: "Earl Grey or Cold Brew",
    rating: 4.9,
    reviewCount: 288,
    badge: "Seasonal Favorite",
    highlightReview: {
      stars: 5,
      source: "LE FIGARO GASTRONOMIE",
      quote: "ETHEREAL CREAM AND PURE FRUIT CLARITY"
    },
    description:
      "Layers of soft vanilla bean sponge soaked in strawberry syrup, filled with fresh whipped cream and ripe strawberry slices, then finished with a light cream frosting and a crown of fresh strawberries. Bright, fruity, and never overly sweet — the vanilla bean flecks add warmth to every bite, while the strawberries bring a natural tartness that cuts through the cream. A crowd-pleaser for spring celebrations, baby showers, or a simple weekend treat.",
    tastingNotes: ["Madagascar Vanilla Caviar", "Hand-Picked Strawberries", "Light Farm Cream", "Almond Genoise"],
    allergens: "Contains Dairy, Eggs, Wheat (Gluten).",
    weight: "700g (Serves 6)"
  },
  {
    id: "basque-burnt-cheesecake",
    name: "San Sebastián Basque Burnt Cheesecake",
    shortName: "Basque Cheesecake",
    category: "Cakes",
    price: 849,
    formattedPrice: "₹849",
    image: "/images/basque-cheesecake.jpg",
    bakedBy: "Chef Antoine Laurent",
    established: "2023",
    signatureFlavors: "Cultured Cream Cheese\nDeep Caramelized Crust",
    pairing: "Pedro Ximénez Sherry or Cortado",
    rating: 5.0,
    reviewCount: 219,
    badge: "Chef's Obsession",
    highlightReview: {
      stars: 5,
      source: "MICHELIN GUIDE EDITORIAL",
      quote: "MOLTEN CENTER WITH UNRIVALED CARAMEL CRUST"
    },
    description:
      "Baked at high heat for a deliberately scorched, dark caramelized exterior that yields to a luscious, custard-like molten center. Made with pure cultured Spanish cream cheese, farm-fresh egg yolks, and Tahitian vanilla pods. It boasts a complex interplay of bittersweet caramel notes and rich, velvet dairy cream with zero flour.",
    tastingNotes: ["Blistered Caramel Crust", "Molten Vanilla Custard", "Cultured Cream Cheese", "Fleur de Sel"],
    allergens: "Contains Dairy, Eggs. Naturally Gluten-Free.",
    weight: "800g (Serves 6-8)"
  },
  {
    id: "hazelnut-praline-torte",
    name: "Piedmont Hazelnut Praline Feuilletine Torte",
    shortName: "Hazelnut Praline",
    category: "Cakes",
    price: 920,
    formattedPrice: "₹920",
    image: "/images/hazelnut-praline.jpg",
    bakedBy: "Chef Camille Vane",
    established: "2022",
    signatureFlavors: "IGP Piedmont Hazelnut Praline\nCrispy French Feuilletine",
    pairing: "Double Shot Espresso",
    rating: 4.9,
    reviewCount: 174,
    badge: "Indulgent",
    highlightReview: {
      stars: 5,
      source: "CULINARY OBSERVER",
      quote: "THE ULTIMATE TEXTURAL MASTERPIECE"
    },
    description:
      "A tribute to northern Italian patisserie. Features alternating tiers of roasted hazelnut dacquoise sponge, silky dark gianduja ganache, and a crunch-packed layer of caramelized French feuilletine crepes enrobed in chocolate. Crowned with crushed roasted hazelnuts and a glossy cocoa mirror pour.",
    tastingNotes: ["Slow-Roasted Piedmont Hazelnuts", "Feuilletine Crunch", "Gianduja Crema", "Bittersweet Cocoa"],
    allergens: "Contains Tree Nuts (Hazelnuts), Dairy, Wheat.",
    weight: "750g (Serves 6-8)"
  },
  {
    id: "tiramisu-espresso-cake",
    name: "Classic Venetian Tiramisu Mascarpone Cake",
    shortName: "Venetian Tiramisu",
    category: "Cakes",
    price: 799,
    formattedPrice: "₹799",
    image: "/images/tiramisu-cake.jpg",
    bakedBy: "Maître Antoine Laurent",
    established: "2021",
    signatureFlavors: "Arabica Cold Drip\nWhipped Italian Mascarpone",
    pairing: "Hot Caffè Latte",
    rating: 5.0,
    reviewCount: 310,
    badge: "Iconic Classic",
    highlightReview: {
      stars: 5,
      source: "VOGUE LIVING",
      quote: "AIRY CLOUD OF MASCARPONE AND ESPRESSO"
    },
    description:
      "Tender house-baked savoiardi sponge layers soaked deeply in fresh dark roast single-origin espresso and Marsala wine, cushioned between billowing clouds of sweetened whipped mascarpone cheese. Hand-finished with cocoa dust and dark chocolate pearls for timeless Italian elegance.",
    tastingNotes: ["Ethiopian Yirgacheffe Espresso", "Italian Mascarpone", "Valrhona Cocoa Powder", "House Savoiardi"],
    allergens: "Contains Dairy, Eggs, Wheat.",
    weight: "700g (Serves 6)"
  },
  {
    id: "lemon-ricotta-blueberry",
    name: "Meyer Lemon Ricotta & Wild Blueberry Cake",
    shortName: "Lemon Blueberry",
    category: "Cakes",
    price: 760,
    formattedPrice: "₹760",
    image: "/images/lemon-blueberry.jpg",
    bakedBy: "Chef Camille Vane",
    established: "2023",
    signatureFlavors: "Zesty Meyer Lemon Curd\nFresh Wild Blueberries",
    pairing: "Jasmine Green Tea",
    rating: 4.8,
    reviewCount: 165,
    badge: "Zesty & Fresh",
    highlightReview: {
      stars: 5,
      source: "SAVEUR MAGAZINE",
      quote: "BRIGHT, VIBRANT, AND UTTERLY REFRESHING"
    },
    description:
      "Whimsical and light, this sunny cake marries whipped whole milk ricotta with citrus-infused sponge cake. Filled with tangy house-made Meyer lemon curd and pockets of sweet wild blueberries, topped with fluffy vanilla buttercream swirls and fresh blueberry clusters.",
    tastingNotes: ["Meyer Lemon Confit", "Whole Milk Ricotta", "Wild Forest Blueberries", "Vanilla Bean Buttercream"],
    allergens: "Contains Dairy, Eggs, Wheat.",
    weight: "720g (Serves 6)"
  },
  {
    id: "black-forest-gateau",
    name: "Traditional Kirsch Black Forest Gateau",
    shortName: "Black Forest",
    category: "Cakes",
    price: 880,
    formattedPrice: "₹880",
    image: "/images/black-forest.jpg",
    bakedBy: "Chef Antoine Laurent",
    established: "2020",
    signatureFlavors: "Sour Morello Cherries\nDark Chocolate Shavings",
    pairing: "Black Tea or Cognac",
    rating: 4.9,
    reviewCount: 228,
    badge: "Heritage Recipe",
    highlightReview: {
      stars: 5,
      source: "THE GUARDIAN FOOD",
      quote: "A NOSTALGIC SYMPHONY OF CHERRY AND COCOA"
    },
    description:
      "A timeless European masterpiece crafted without shortcuts. Four airy chocolate genoise sponges soaked in authentic Black Forest Kirschwasser cherry eau-de-vie, layered with tart Morello cherry compote and Chantilly whipped cream, finished under an avalanche of dark chocolate curls.",
    tastingNotes: ["Morello Sour Cherries", "Kirsch Eau-de-Vie", "Whipped Dairy Chantilly", "Dark Couverture Curls"],
    allergens: "Contains Dairy, Eggs, Wheat (Gluten).",
    weight: "800g (Serves 8)"
  },
  {
    id: "pistachio-raspberry-entremet",
    name: "Sicilian Pistachio Raspberry Rose Entremet",
    shortName: "Pistachio Entremet",
    category: "Cakes",
    price: 849,
    formattedPrice: "₹849",
    image: "/images/pistachio-entremet.jpg",
    bakedBy: "Chef Camille Vane",
    established: "2024",
    signatureFlavors: "Bronte Pistachio Praline\nRaspberry Rose Compote",
    pairing: "Darjeeling First Flush",
    rating: 5.0,
    reviewCount: 156,
    badge: "Haute Patisserie",
    highlightReview: {
      stars: 5,
      source: "MICHELIN GUIDE EDITORIAL",
      quote: "PURE POETRY IN TEXTURE AND FLAVOR"
    },
    description:
      "An exquisite entremet combining roasted Sicilian Bronte pistachio mousse with a tart raspberry and rose-water gelee core, set over a flourless pistachio dacquoise base and coated in a luminous emerald mirror glaze. Finished with crushed green pistachios, freeze-dried raspberries, and organic edible rose petals.",
    tastingNotes: ["Sicilian Pistachio Paste", "Raspberry Coulis Core", "Almond Dacquoise", "Mirror Glaze & Rose"],
    allergens: "Contains Tree Nuts (Pistachio, Almond), Dairy, Eggs. Gluten-Free Recipe.",
    weight: "650g (Serves 6)"
  },

  // ================= 6 HIGH QUALITY ARTISAN PASTRIES =================
  {
    id: "french-butter-croissant",
    name: "Classic French Butter Croissant",
    shortName: "Butter Croissant",
    category: "Pastries",
    price: 120,
    formattedPrice: "₹120",
    image: "/images/butter-croissant.jpg",
    bakedBy: "Maître Boulanger Jean",
    established: "2020",
    signatureFlavors: "84% Charentes-Poitou Butter\n72-Hour Slow Fermentation",
    pairing: "Morning Cappuccino",
    rating: 5.0,
    reviewCount: 512,
    badge: "Heritage Craft",
    highlightReview: {
      stars: 5,
      source: "VOGUE LIVING",
      quote: "SHATTERINGLY FLAKY PERFECTION"
    },
    description:
      "Hand-laminated over three days using European butter, our croissants bake up shatteringly flaky outside and soft and honeycombed inside. Each one is rolled and folded more than twenty times to build delicate, paper-thin layers. Enjoy it plain, or try our almond and chocolate variations for a richer morning treat. Best eaten warm, fresh from the oven, with your first coffee of the day.",
    tastingNotes: ["AOP Charentes Butter", "Wild Sourdough Starter", "27 Hand Laminated Folds", "Honeycomb Crumb"],
    allergens: "Contains Butter (Dairy), Wheat Flour.",
    weight: "110g (Single Piece)"
  },
  {
    id: "seasonal-fruit-tart",
    name: "Fresh Seasonal Fruit Tart",
    shortName: "Seasonal Fruit Tart",
    category: "Pastries",
    price: 399,
    formattedPrice: "₹399",
    image: "/images/fruit-tart.jpg",
    bakedBy: "Chef Antoine Laurent",
    established: "2023",
    signatureFlavors: "Tahitian Vanilla Crème\nSun-Ripened Orchard Fruits",
    pairing: "Champagne or Jasmine Green Tea",
    rating: 4.9,
    reviewCount: 194,
    badge: "Daily Patisserie",
    highlightReview: {
      stars: 5,
      source: "CULINARY OBSERVER",
      quote: "A MASTERCLASS IN TART BALANCE"
    },
    description:
      "A crisp, buttery tart shell filled with smooth vanilla pastry cream and topped with a colorful arrangement of seasonal fruit — kiwi, berries, and stone fruit — brushed with a light apricot glaze for shine. Light, not too sweet, and as beautiful to look at as it is to eat. A popular choice for afternoon tea, dinner parties, or anyone who prefers fruit-forward desserts over heavy chocolate.",
    tastingNotes: ["French Pâte Sablée", "Crème Pâtissière", "Kiwi, Blackberry & Apricot", "Glossy Fruit Glaze"],
    allergens: "Contains Butter, Eggs, Wheat (Gluten).",
    weight: "320g (Individual Tart, Serves 1-2)"
  },
  {
    id: "pain-au-chocolat",
    name: "Artisanal Double-Baton Pain au Chocolat",
    shortName: "Pain au Chocolat",
    category: "Pastries",
    price: 150,
    formattedPrice: "₹150",
    image: "/images/pain-au-chocolat.jpg",
    bakedBy: "Maître Boulanger Jean",
    established: "2020",
    signatureFlavors: "Valrhona 55% Chocolate Batons\nCultured French Butter",
    pairing: "Café au Lait",
    rating: 5.0,
    reviewCount: 420,
    badge: "Morning Favorite",
    highlightReview: {
      stars: 5,
      source: "LE PARISIEN",
      quote: "RICH CHOCOLATE IN EVERY AIRY BITE"
    },
    description:
      "A breakfast icon crafted with meticulous European technique. Golden, caramelized laminated pastry envelopes two parallel batons of semi-sweet French Valrhona couverture chocolate that melt gently as the pastry bakes. Crisp exterior with delicate buttery honeycomb layers inside.",
    tastingNotes: ["Valrhona Chocolate", "Laminated Brioche Puff", "AOP Butter", "Caramelized Bottom"],
    allergens: "Contains Butter, Milk, Wheat.",
    weight: "125g"
  },
  {
    id: "almond-croissant",
    name: "Twice-Baked Almond Frangipane Croissant",
    shortName: "Almond Croissant",
    category: "Pastries",
    price: 190,
    formattedPrice: "₹190",
    image: "/images/almond-croissant.jpg",
    bakedBy: "Chef Camille Vane",
    established: "2021",
    signatureFlavors: "Almond Frangipane Cream\nToasted Sliced Almonds",
    pairing: "Hot Flat White",
    rating: 4.9,
    reviewCount: 388,
    badge: "Staff Pick",
    highlightReview: {
      stars: 5,
      source: "BAKERY JOURNAL",
      quote: "DECADENTLY RICH WITH ROASTED NUT AROMAS"
    },
    description:
      "Yesterday's day-baked butter croissants bathed in orange blossom simple syrup, filled generously with luscious almond frangipane cream, topped with more almond cream and a blanket of toasted sliced almonds, then baked a second time to golden crunch perfection.",
    tastingNotes: ["Valencia Almond Frangipane", "Orange Blossom Syrup", "Toasted Flaked Almonds", "Snow Sugar"],
    allergens: "Contains Tree Nuts (Almonds), Butter, Eggs, Wheat.",
    weight: "160g"
  },
  {
    id: "berry-custard-danish",
    name: "Summer Berry Vanilla Crème Danish",
    shortName: "Berry Danish",
    category: "Pastries",
    price: 240,
    formattedPrice: "₹240",
    image: "/images/berry-danish.jpg",
    bakedBy: "Chef Antoine Laurent",
    established: "2023",
    signatureFlavors: "Bourbon Vanilla Custard\nBlackberries & Blueberries",
    pairing: "Iced Peach Tea",
    rating: 4.9,
    reviewCount: 142,
    badge: "Seasonal Bake",
    highlightReview: {
      stars: 5,
      source: "GOURMET TRAVELER",
      quote: "CRISP, FRUITY, AND BEAUTIFULLY BALANCED"
    },
    description:
      "A square of crisp, buttery laminated Danish dough with folded corners, holding a generous reservoir of rich vanilla bean custard and topped with plump wild blackberries, blueberries, and raspberries. Finished with a crystalline apricot glaze.",
    tastingNotes: ["Vanilla Crème Pâtissière", "Orchard Berries", "Laminated Danish Crust", "Apricot Sheen"],
    allergens: "Contains Butter, Eggs, Wheat.",
    weight: "140g"
  },
  {
    id: "cardamom-morning-bun",
    name: "Swedish Cardamom & Brown Sugar Morning Bun",
    shortName: "Cardamom Bun",
    category: "Pastries",
    price: 160,
    formattedPrice: "₹160",
    image: "/images/cardamom-bun.jpg",
    bakedBy: "Maître Boulanger Jean",
    established: "2022",
    signatureFlavors: "Fresh Ground Green Cardamom\nCaramelized Pearl Sugar",
    pairing: "Pour-Over Filter Coffee",
    rating: 5.0,
    reviewCount: 260,
    badge: "Nordic Heritage",
    highlightReview: {
      stars: 5,
      source: "SCANDI FOOD REVIEW",
      quote: "AQUEOUS CARDAMOM AROMA WITH CRISP EDGES"
    },
    description:
      "Twisted knot of cardamom-infused enriched yeast dough slathered with softened cultured butter and freshly crushed green cardamom pods. Baked until edges caramelize with a chew inside, showered with Swedish pearl sugar crystals.",
    tastingNotes: ["Guatemalan Green Cardamom", "Dark Brown Sugar", "Pearl Sugar Crust", "Fluffy Knotted Crumb"],
    allergens: "Contains Dairy, Wheat.",
    weight: "130g"
  }
];
