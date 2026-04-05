const provisionsItems = [
    {
        "name":  "Aques Water 1 l",
        "type":  "Drink",
        "hydration":  33,
        "energy":  null,
        "weight":  "1.000 kg",
        "source":  "Lab Rat Lv.2",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/9/92/Water1_icon.png/revision/latest?cb=20250502142820"
    },
    {
        "name":  "Aques Water 1.5 l",
        "type":  "Drink",
        "hydration":  33,
        "energy":  null,
        "weight":  "1.500 kg",
        "source":  "Lab Rat Lv.3",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/e/e1/Water2_icon.png/revision/latest?cb=20250502142032"
    },
    {
        "name":  "Bamboo Shoots",
        "type":  "Drink",
        "hydration":  null,
        "energy":  null,
        "weight":  "??? kg",
        "source":  "Looting",
        "image":  null
    },
    {
        "name":  "Berg Bar Cookie Chocolate",
        "type":  "Food",
        "hydration":  null,
        "energy":  24,
        "weight":  "0.070 kg",
        "source":  "Looting",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/4/44/ChBar4_icon.png/revision/latest?cb=20250610042853"
    },
    {
        "name":  "Canned Tuna Chunks",
        "type":  "Food",
        "hydration":  -10,
        "energy":  26,
        "weight":  "0.170 kg",
        "source":  "Looting",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/f/fd/Tuna_icon.png/revision/latest?cb=20250610053427"
    },
    {
        "name":  "Coco Jumbo Coconut Juice Drink",
        "type":  "Drink",
        "hydration":  18,
        "energy":  null,
        "weight":  "0.240 kg",
        "source":  "Looting",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/3/38/CDrink_icon.png/revision/latest?cb=20250502155148"
    },
    {
        "name":  "Combat Ration Pack",
        "type":  "Food",
        "hydration":  null,
        "energy":  65,
        "weight":  "0.600 kg",
        "source":  "Lab Rat Lv.3",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/d/da/CRP_icon.png/revision/latest?cb=20250502142633"
    },
    {
        "name":  "Cowboy Baked Beans",
        "type":  "Food",
        "hydration":  -5,
        "energy":  40,
        "weight":  "0.425 kg",
        "source":  "Looting",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/e/ef/Beans_icon.png/revision/latest?cb=20250610071124"
    },
    {
        "name":  "Dark Star Iced Coffee",
        "type":  "Drink",
        "hydration":  32,
        "energy":  5,
        "weight":  "0.200 kg",
        "source":  "Looting",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/2/28/Coffee_icon.png/revision/latest?cb=20250621182737"
    },
    {
        "name":  "Energy Bar Nuts and Fruits",
        "type":  "Food",
        "hydration":  null,
        "energy":  14,
        "weight":  "0.040 kg",
        "source":  "Lab Rat Lv.1",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/9/94/EBar_icon.png/revision/latest?cb=20250502142245"
    },
    {
        "name":  "Gray Focused Energy",
        "type":  "Drink",
        "hydration":  50,
        "energy":  15,
        "weight":  "0.400 kg",
        "source":  "Lab Rat Lv.3",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/0/03/Gray_icon.png/revision/latest?cb=20250621182754"
    },
    {
        "name":  "HDR Meal",
        "type":  "Food",
        "hydration":  null,
        "energy":  75,
        "weight":  "0.850 kg",
        "source":  "Looting",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/5/54/HDR_icon.png/revision/latest?cb=20250610053132"
    },
    {
        "name":  "Infinity Isotonic Drink",
        "type":  "Drink",
        "hydration":  27,
        "energy":  5,
        "weight":  "0.330 kg",
        "source":  "Looting",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/5/56/IDrink_icon.png/revision/latest?cb=20240520001016"
    },
    {
        "name":  "Kaipo Lychee Nectar",
        "type":  "Drink",
        "hydration":  22,
        "energy":  null,
        "weight":  "0.400 kg",
        "source":  "Looting",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/1/1f/Nectar_icon.png/revision/latest?cb=20250621182658"
    },
    {
        "name":  "Kasem Chocolate Wafers",
        "type":  "Food",
        "hydration":  -5,
        "energy":  14,
        "weight":  "0.010 kg",
        "source":  "Looting",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/d/d2/Wafers_icon.png/revision/latest?cb=20250610042619"
    },
    {
        "name":  "Lucky Pork Liver Pâté",
        "type":  "Food",
        "hydration":  -5,
        "energy":  26,
        "weight":  "0.130 kg",
        "source":  "Lab Rat Lv.2",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/7/7a/P%C3%A2t%C3%A9_icon.png/revision/latest?cb=20250502142115"
    },
    {
        "name":  "Lychee in Syrup",
        "type":  "Food",
        "hydration":  10,
        "energy":  26,
        "weight":  "0.565 kg",
        "source":  "Looting",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/2/25/Lychee_icon.png/revision/latest?cb=20250610053931"
    },
    {
        "name":  "Mackerel in Teriyaki Sauce",
        "type":  "Food",
        "hydration":  -10,
        "energy":  36,
        "weight":  "0.200 kg",
        "source":  "Looting",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/2/2e/Mackerel_icon.png/revision/latest?cb=20250610053549"
    },
    {
        "name":  "Maknav Iced Tea",
        "type":  "Drink",
        "hydration":  27,
        "energy":  null,
        "weight":  "0.950 kg",
        "source":  "Looting",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/5/5f/IcedTea_icon.png/revision/latest?cb=20240520061937"
    },
    {
        "name":  "Noakon Water 0.6 l",
        "type":  "Drink",
        "hydration":  24,
        "energy":  null,
        "weight":  "0.600 kg",
        "source":  "Looting",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/9/9d/Water3_icon.png/revision/latest?cb=20250530075823"
    },
    {
        "name":  "Noakon Water 1 l",
        "type":  "Drink",
        "hydration":  33,
        "energy":  null,
        "weight":  "1.000 kg",
        "source":  "Looting",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/3/39/Water4_icon.png/revision/latest?cb=20250601090830"
    },
    {
        "name":  "Noakon Water 1.5 l",
        "type":  "Drink",
        "hydration":  33,
        "energy":  null,
        "weight":  "1.500 kg",
        "source":  "Looting",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/1/16/Water5_icon.png/revision/latest?cb=20250218195547"
    },
    {
        "name":  "NuKlear Energy: Meltdown Mango",
        "type":  "Drink",
        "hydration":  22,
        "energy":  5,
        "weight":  "0.340 kg",
        "source":  "Looting",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/a/af/EDrink2_icon.png/revision/latest?cb=20250621160244"
    },
    {
        "name":  "Organic Tofu",
        "type":  "Food",
        "hydration":  -10,
        "energy":  18,
        "weight":  "0.200 kg",
        "source":  "Looting",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/d/d3/Tofu_icon.png/revision/latest?cb=20250610053001"
    },
    {
        "name":  "Power Energy Drink",
        "type":  "Drink",
        "hydration":  45,
        "energy":  10,
        "weight":  "0.470 kg",
        "source":  "Lab Rat Lv.2",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/2/27/EDrink_icon.png/revision/latest?cb=20250502141947"
    },
    {
        "name":  "Premium Pork Luncheon Meat",
        "type":  "Food",
        "hydration":  -10,
        "energy":  70,
        "weight":  "0.400 kg",
        "source":  "Looting",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/3/39/LMeat2_icon.png/revision/latest?cb=20250610052339"
    },
    {
        "name":  "Riminda Green Bubbly Bliss",
        "type":  "Drink",
        "hydration":  38,
        "energy":  null,
        "weight":  "2.000 kg",
        "source":  "Looting",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/4/40/Soda2_icon.png/revision/latest?cb=20250601191618"
    },
    {
        "name":  "Sinngua Lunch Meat",
        "type":  "Food",
        "hydration":  -10,
        "energy":  60,
        "weight":  "0.340 kg",
        "source":  "Lab Rat Lv.3",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/5/50/LMeat_icon.png/revision/latest?cb=20250530080109"
    },
    {
        "name":  "SnipSnap Crunchy",
        "type":  "Food",
        "hydration":  -5,
        "energy":  14,
        "weight":  "0.038 kg",
        "source":  "Looting",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/2/26/ChBar1_icon.png/revision/latest?cb=20250610042711"
    },
    {
        "name":  "Spicy Thai Combat Meal",
        "type":  "Food",
        "hydration":  -10,
        "energy":  80,
        "weight":  "0.800 kg",
        "source":  "Looting",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/0/05/CMeal_icon.png/revision/latest?cb=20250502142635"
    },
    {
        "name":  "Sunrise Cola",
        "type":  "Drink",
        "hydration":  22,
        "energy":  null,
        "weight":  "0.300 kg",
        "source":  "Lab Rat Lv.1",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/d/d0/Cola_icon.png/revision/latest?cb=20250621182739"
    },
    {
        "name":  "Sunrise Cola (2 L)",
        "type":  "Drink",
        "hydration":  38,
        "energy":  null,
        "weight":  "2.000 kg",
        "source":  "Looting",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/b/be/Missing_icon.png/revision/latest?cb=20240506010232"
    },
    {
        "name":  "TamTam DoubleChoc",
        "type":  "Food",
        "hydration":  -5,
        "energy":  22,
        "weight":  "0.200 kg",
        "source":  "Looting",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/7/71/ChBar3_icon.png/revision/latest?cb=20250610042828"
    },
    {
        "name":  "Touchdown Lemon Soda",
        "type":  "Drink",
        "hydration":  18,
        "energy":  null,
        "weight":  "0.330 kg",
        "source":  "Looting",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/2/2e/Soda_icon.png/revision/latest?cb=20250502155224"
    },
    {
        "name":  "White Orchid Crystal Water 2 l",
        "type":  "Drink",
        "hydration":  33,
        "energy":  null,
        "weight":  "2.000 kg",
        "source":  "Looting",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/1/10/Water6_icon.png/revision/latest?cb=20250530080413"
    },
    {
        "name":  "Windmill Almond Chocolate Bar",
        "type":  "Food",
        "hydration":  -5,
        "energy":  22,
        "weight":  "0.040 kg",
        "source":  "Looting",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/5/50/ChBar2_icon.png/revision/latest?cb=20250610042744"
    }
];
