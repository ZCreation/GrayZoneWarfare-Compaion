const lootItems = [
    {
        "item":  "Acetylene Cylinder",
        "category":  "Laboratory Supplies",
        "weight":  "????kg",
        "baseValue":  null,
        "preferredSeller":  "Best price varies",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/f/fc/Acetylene_Cylinder_icon.png/revision/latest?cb=20260404013900"
    },
    {
        "item":  "Allanach Single Malt Scotch - 40y",
        "category":  "Vices",
        "weight":  "1.000kg",
        "baseValue":  5500,
        "preferredSeller":  "Gunny",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/0/0d/Allanch_inspect.png/revision/latest/scale-to-width-down/76?cb=20250506173126"
    },
    {
        "item":  "AN/PYQ-10",
        "category":  "Military Equipment",
        "weight":  "0.970kg",
        "baseValue":  3150,
        "preferredSeller":  "Best price varies",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/f/fa/AN-PYQ-10_icon.png/revision/latest?cb=20260402070649"
    },
    {
        "item":  "Aramid Cloth",
        "category":  "Military Material",
        "weight":  "0.061kg",
        "baseValue":  42,
        "preferredSeller":  "Best price varies",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/2/25/Aramid_Cloth_icon.png/revision/latest?cb=20260402235156"
    },
    {
        "item":  "Army Intel",
        "category":  "Evidence",
        "weight":  "0.100kg",
        "baseValue":  1280,
        "preferredSeller":  "Best price varies",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/0/01/Intel%28Army%29_inspect.png/revision/latest/scale-to-width-down/96?cb=20250509092020"
    },
    {
        "item":  "ATM Hacking Tool",
        "category":  "Military Equipment",
        "weight":  "???kg",
        "baseValue":  null,
        "preferredSeller":  "Best price varies",
        "image":  null
    },
    {
        "item":  "AZART P1 Radio",
        "category":  "Military Equipment",
        "weight":  "0.720kg",
        "baseValue":  825,
        "preferredSeller":  "Best price varies",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/e/ef/AZART_P1_Radio_icon.png/revision/latest?cb=20260404223341"
    },
    {
        "item":  "Biometric Access Card",
        "category":  "Military Equipment",
        "weight":  "0.008kg",
        "baseValue":  null,
        "preferredSeller":  "Best price varies",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/1/1c/Biometric_Access_Card_icon.png/revision/latest?cb=20260402043728"
    },
    {
        "item":  "Biometric Thumb Drive",
        "category":  "Military Equipment",
        "weight":  "0.004kg",
        "baseValue":  1875,
        "preferredSeller":  "Best price varies",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/c/ca/Biometric_Thumb_Drive_icon.png/revision/latest?cb=20260403092909"
    },
    {
        "item":  "Black Credit Card",
        "category":  "Funds",
        "weight":  "0.010kg",
        "baseValue":  15000,
        "preferredSeller":  "Artisan",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/6/69/BCCArd_inspect.png/revision/latest/scale-to-width-down/96?cb=20250621182734"
    },
    {
        "item":  "Black Luxury Phone",
        "category":  "Electronics",
        "weight":  "0.100kg",
        "baseValue":  1500,
        "preferredSeller":  "Lab Rat",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/6/63/BLPhone_inspect.png/revision/latest/scale-to-width-down/96?cb=20250508232310"
    },
    {
        "item":  "Bleach",
        "category":  "Household Item",
        "weight":  "3.570kg",
        "baseValue":  19,
        "preferredSeller":  "Best price varies",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/3/36/Bleach_inspect.png/revision/latest/scale-to-width-down/66?cb=20260331074659"
    },
    {
        "item":  "Brake Fluid",
        "category":  "Workshop Supplies",
        "weight":  "3.800kg",
        "baseValue":  21,
        "preferredSeller":  "Best price varies",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/7/76/Brake_Fluid_inspect.png/revision/latest/scale-to-width-down/77?cb=20260331074804"
    },
    {
        "item":  "Breda Rum - 30y",
        "category":  "Vices",
        "weight":  "1.700kg",
        "baseValue":  3800,
        "preferredSeller":  "Gunny",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/0/0e/Breda_inspect.png/revision/latest/scale-to-width-down/96?cb=20250718015056"
    },
    {
        "item":  "Broken Angle Grinder",
        "category":  "Workshop Supplies",
        "weight":  "2.499kg",
        "baseValue":  56,
        "preferredSeller":  "Best price varies",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/8/8a/Broken_Angle_Grinder_inspect.png/revision/latest/scale-to-width-down/96?cb=20260404032801"
    },
    {
        "item":  "Broken Carpentry Hammer",
        "category":  "Workshop Supplies",
        "weight":  "0.312kg",
        "baseValue":  6,
        "preferredSeller":  "Best price varies",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/1/17/Broken_Carpentry_Hammer_icon.png/revision/latest?cb=20260331075234"
    },
    {
        "item":  "Broken Handsaw",
        "category":  "Workshop Supplies",
        "weight":  "0.680kg",
        "baseValue":  24,
        "preferredSeller":  "Best price varies",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/b/bf/Broken_Handsaw_inspect.png/revision/latest/scale-to-width-down/96?cb=20260403095739"
    },
    {
        "item":  "Broken Jigsaw",
        "category":  "Workshop Supplies",
        "weight":  "2.000kg",
        "baseValue":  55,
        "preferredSeller":  "Best price varies",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/e/e3/Broken_Jigsaw_icon.png/revision/latest?cb=20260403234749"
    },
    {
        "item":  "Broken Nailgun",
        "category":  "Workshop Supplies",
        "weight":  "2.500kg",
        "baseValue":  75,
        "preferredSeller":  "Best price varies",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/7/7d/Broken_Nailgun_icon.png/revision/latest?cb=20260404004748"
    },
    {
        "item":  "Broken Screwdriver",
        "category":  "Workshop Supplies",
        "weight":  "0.120kg",
        "baseValue":  6,
        "preferredSeller":  "Best price varies",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/3/3d/Broken_Screwdriver_inspect.png/revision/latest/scale-to-width-down/86?cb=20260331085810"
    },
    {
        "item":  "Businessman ID Card",
        "category":  "Evidence",
        "weight":  "0.050kg",
        "baseValue":  937,
        "preferredSeller":  "Best price varies",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/c/c7/Businessman_ID_Card_inspect.png/revision/latest/scale-to-width-down/96?cb=20260403094423"
    },
    {
        "item":  "C2 Military Laptop",
        "category":  "Military Equipment",
        "weight":  "5.000kg",
        "baseValue":  null,
        "preferredSeller":  "Best price varies",
        "image":  null
    },
    {
        "item":  "Camouflage Fabric",
        "category":  "Military Material",
        "weight":  "0.480kg",
        "baseValue":  10,
        "preferredSeller":  "Best price varies",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/d/da/Camouflage_Fabric_inspect.png/revision/latest/scale-to-width-down/96?cb=20260331075042"
    },
    {
        "item":  "Car Battery",
        "category":  "Tech",
        "weight":  "12.660kg",
        "baseValue":  56,
        "preferredSeller":  "Best price varies",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/f/f7/Car_Battery_inspect.png/revision/latest/scale-to-width-down/96?cb=20260331075125"
    },
    {
        "item":  "Carton of Tahirs Cigarettes",
        "category":  "Household Item",
        "weight":  "0.250kg",
        "baseValue":  27,
        "preferredSeller":  "Best price varies",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/a/a6/Carton_of_Tahirs_Cigarettes_inspect.png/revision/latest/scale-to-width-down/96?cb=20260331075357"
    },
    {
        "item":  "Common Credit Card",
        "category":  "Funds",
        "weight":  "0.005kg",
        "baseValue":  600,
        "preferredSeller":  "Artisan",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/3/38/CCCard_inspect.png/revision/latest/scale-to-width-down/96?cb=20250422042432"
    },
    {
        "item":  "Crime-related Intel",
        "category":  "Evidence",
        "weight":  "0.100kg",
        "baseValue":  140,
        "preferredSeller":  "Best price varies",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/2/21/Intel%28Crime%29_inspect.png/revision/latest/scale-to-width-down/96?cb=20250422203148"
    },
    {
        "item":  "Dark Pearl Necklace",
        "category":  "Jewellery",
        "weight":  "0.050kg",
        "baseValue":  1350,
        "preferredSeller":  "Turncoat",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/c/c2/DNeck_inspect.png/revision/latest/scale-to-width-down/96?cb=20250422120749"
    },
    {
        "item":  "Deck of Cards",
        "category":  "Household Item",
        "weight":  "0.088kg",
        "baseValue":  3,
        "preferredSeller":  "Best price varies",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/8/86/Deck_of_Cards_inspect.png/revision/latest/scale-to-width-down/96?cb=20260331075444"
    },
    {
        "item":  "Delicate Perfume Bottle",
        "category":  "Vices",
        "weight":  "0.300kg",
        "baseValue":  150,
        "preferredSeller":  "Gunny",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/2/21/Delicate_Perfume_Bottle_inspect.png/revision/latest/scale-to-width-down/57?cb=20260331075651"
    },
    {
        "item":  "Diamond Earrings",
        "category":  "Jewellery",
        "weight":  "0.020kg",
        "baseValue":  5700,
        "preferredSeller":  "Turncoat",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/9/98/DAEarrings_inspect.png/revision/latest/scale-to-width-down/96?cb=20250629141908"
    },
    {
        "item":  "Diamond Ring",
        "category":  "Jewellery",
        "weight":  "0.010kg",
        "baseValue":  7700,
        "preferredSeller":  "Turncoat",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/3/3e/GDRing_inspect.png/revision/latest/scale-to-width-down/96?cb=20250514034521"
    },
    {
        "item":  "Diamond-Coral Ring",
        "category":  "Jewellery",
        "weight":  "0.020kg",
        "baseValue":  5250,
        "preferredSeller":  "Turncoat",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/e/ed/DCRing_inspect.png/revision/latest/scale-to-width-down/96?cb=20250522052548"
    },
    {
        "item":  "Digital Camera",
        "category":  "Evidence",
        "weight":  "0.250kg",
        "baseValue":  112,
        "preferredSeller":  "Best price varies",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/0/04/DigiCam_inspect.png/revision/latest/scale-to-width-down/96?cb=20250506171437"
    },
    {
        "item":  "Disinfectant",
        "category":  "Household Item",
        "weight":  "1.000kg",
        "baseValue":  199,
        "preferredSeller":  "Best price varies",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/0/00/Disinfectant_inspect.png/revision/latest/scale-to-width-down/57?cb=20260403101852"
    },
    {
        "item":  "Drain Cleaner",
        "category":  "Laboratory Supplies",
        "weight":  "5.000kg",
        "baseValue":  15,
        "preferredSeller":  "Best price varies",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/1/15/Drain_Cleaner_inspect.png/revision/latest/scale-to-width-down/87?cb=20260403095335"
    },
    {
        "item":  "Driver\u0027s License",
        "category":  "Evidence",
        "weight":  "0.050kg",
        "baseValue":  262,
        "preferredSeller":  "Best price varies",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/1/1a/Driver%27s_License_inspect.png/revision/latest/scale-to-width-down/96?cb=20260331080051"
    },
    {
        "item":  "Elaborate Ring",
        "category":  "Jewellery",
        "weight":  "0.020kg",
        "baseValue":  4400,
        "preferredSeller":  "Turncoat",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/5/5c/ERing_inspect.png/revision/latest/scale-to-width-down/96?cb=20250425032354"
    },
    {
        "item":  "Emerald Necklace",
        "category":  "Jewellery",
        "weight":  "0.050kg",
        "baseValue":  5300,
        "preferredSeller":  "Turncoat",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/7/72/ENecklace_inspect.png/revision/latest/scale-to-width-down/96?cb=20250423040427"
    },
    {
        "item":  "Encrypted Hard Disk Drive",
        "category":  "Electronics",
        "weight":  "0.200kg",
        "baseValue":  1200,
        "preferredSeller":  "Lab Rat",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/5/50/EnHDD_inspect.png/revision/latest/scale-to-width-down/85?cb=20250629142028"
    },
    {
        "item":  "Expensive Smartphone",
        "category":  "Electronics",
        "weight":  "0.100kg",
        "baseValue":  350,
        "preferredSeller":  "Lab Rat",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/8/87/EPhone_inspect.png/revision/latest/scale-to-width-down/96?cb=20250505041727"
    },
    {
        "item":  "Fishing Line",
        "category":  "Household Item",
        "weight":  "0.130kg",
        "baseValue":  3,
        "preferredSeller":  "Best price varies",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/b/b1/Fishing_Line_inspect.png/revision/latest/scale-to-width-down/96?cb=20260331080253"
    },
    {
        "item":  "Fragrant Perfume Bottle",
        "category":  "Vices",
        "weight":  "0.250kg",
        "baseValue":  75,
        "preferredSeller":  "Gunny",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/f/fc/Fragrant_Perfume_Bottle_inspect.png/revision/latest/scale-to-width-down/75?cb=20260331080331"
    },
    {
        "item":  "Fuel Canister",
        "category":  "Workshop Supplies",
        "weight":  "5.000kg",
        "baseValue":  21,
        "preferredSeller":  "Best price varies",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/8/83/Fuel_Canister_inspect.png/revision/latest/scale-to-width-down/96?cb=20260331080434"
    },
    {
        "item":  "Gemstone Ring",
        "category":  "Jewellery",
        "weight":  "0.010kg",
        "baseValue":  820,
        "preferredSeller":  "Turncoat",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/7/7f/GRing_inspect.png/revision/latest/scale-to-width-down/96?cb=20250422042515"
    },
    {
        "item":  "GLONASS Grot-M Navigation Receiver",
        "category":  "Military Equipment",
        "weight":  "0.800kg",
        "baseValue":  937,
        "preferredSeller":  "Best price varies",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/7/7d/GLONASS_Grot-M_Navigation_Receiver_icon.png/revision/latest?cb=20260402045518"
    },
    {
        "item":  "Gold Credit Card",
        "category":  "Funds",
        "weight":  "0.005kg",
        "baseValue":  2200,
        "preferredSeller":  "Artisan",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/8/8a/GCCard_inspect.png/revision/latest/scale-to-width-down/96?cb=20250506122148"
    },
    {
        "item":  "Gold Necklace",
        "category":  "Jewellery",
        "weight":  "0.020kg",
        "baseValue":  180,
        "preferredSeller":  "Turncoat",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/3/3a/Necklace_inspect.png/revision/latest/scale-to-width-down/96?cb=20250507135727"
    },
    {
        "item":  "Gold Ring",
        "category":  "Jewellery",
        "weight":  "0.020kg",
        "baseValue":  150,
        "preferredSeller":  "Turncoat",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/b/bd/Ring_inspect.png/revision/latest/scale-to-width-down/96?cb=20250422042524"
    },
    {
        "item":  "Goodlad Whiskey - 20y",
        "category":  "Vices",
        "weight":  "1.600kg",
        "baseValue":  450,
        "preferredSeller":  "Gunny",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/9/99/Goodlad_inspect.png/revision/latest/scale-to-width-down/96?cb=20250509091054"
    },
    {
        "item":  "Hand Mirror",
        "category":  "Household Item",
        "weight":  "0.400kg",
        "baseValue":  9,
        "preferredSeller":  "Best price varies",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/5/57/Hand_Mirror_inspect.png/revision/latest/scale-to-width-down/54?cb=20260331080643"
    },
    {
        "item":  "Handheld ECM Jammer",
        "category":  "Military Equipment",
        "weight":  "2.000kg",
        "baseValue":  712,
        "preferredSeller":  "Best price varies",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/e/eb/Handheld_ECM_Jammer_icon.png/revision/latest?cb=20260402044213"
    },
    {
        "item":  "Heavenly Perfume Bottle",
        "category":  "Vices",
        "weight":  "???kg",
        "baseValue":  335,
        "preferredSeller":  "Gunny",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/9/96/Heavenly_Perfume_Bottle_icon.png/revision/latest?cb=20260402235001"
    },
    {
        "item":  "HGCS-30 UAV Control Station",
        "category":  "Military Equipment",
        "weight":  "3.000kg",
        "baseValue":  2000,
        "preferredSeller":  "Best price varies",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/8/82/HGCS-30_UAV_Control_Station_inspect.png/revision/latest/scale-to-width-down/96?cb=20260331081050"
    },
    {
        "item":  "Hyperborea Cigarettes",
        "category":  "Vices",
        "weight":  "0.020kg",
        "baseValue":  139,
        "preferredSeller":  "Gunny",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/2/25/Hyperborea_Cigarettes_icon.png/revision/latest?cb=20260402042858"
    },
    {
        "item":  "Industrial Solvent",
        "category":  "Laboratory Supplies",
        "weight":  "3.800kg",
        "baseValue":  29,
        "preferredSeller":  "Best price varies",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/a/a7/Industrial_Solvent_inspect.png/revision/latest/scale-to-width-down/77?cb=20260331081657"
    },
    {
        "item":  "Insect Repellant Spray",
        "category":  "Household Item",
        "weight":  "0.258kg",
        "baseValue":  6,
        "preferredSeller":  "Best price varies",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/f/f7/Insect_Repellant_Spray_inspect.png/revision/latest/scale-to-width-down/57?cb=20260331081404"
    },
    {
        "item":  "Jumper Cables",
        "category":  "Workshop Supplies",
        "weight":  "2.340kg",
        "baseValue":  30,
        "preferredSeller":  "Best price varies",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/3/3a/Jumper_Cables_inspect.png/revision/latest/scale-to-width-down/96?cb=20260403095117"
    },
    {
        "item":  "KIK-11 Tactical Key Loader",
        "category":  "Military Equipment",
        "weight":  "0.450kg",
        "baseValue":  2900,
        "preferredSeller":  "Best price varies",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/0/07/KIK-11_Tactical_Key_Loader_icon.png/revision/latest?cb=20260404034236"
    },
    {
        "item":  "Lambert Cigars",
        "category":  "Vices",
        "weight":  "0.600kg",
        "baseValue":  282,
        "preferredSeller":  "Gunny",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/2/25/Lambert_Cigars_icon.png/revision/latest?cb=20260402071045"
    },
    {
        "item":  "Lamp Oil",
        "category":  "Household Item",
        "weight":  "1.000kg",
        "baseValue":  3,
        "preferredSeller":  "Best price varies",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/7/77/Lamp_Oil_inspect.png/revision/latest/scale-to-width-down/57?cb=20260331082338"
    },
    {
        "item":  "Laptop",
        "category":  "Evidence",
        "weight":  "1.500kg",
        "baseValue":  750,
        "preferredSeller":  "Best price varies",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/1/14/Laptop_inspect.png/revision/latest/scale-to-width-down/96?cb=20250508230237"
    },
    {
        "item":  "Lighter",
        "category":  "Household Item",
        "weight":  "0.040kg",
        "baseValue":  1,
        "preferredSeller":  "Best price varies",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/0/0f/Lighter_inspect.png/revision/latest/scale-to-width-down/48?cb=20260331082552"
    },
    {
        "item":  "Local ID Card",
        "category":  "Evidence",
        "weight":  "0.050kg",
        "baseValue":  187,
        "preferredSeller":  "Best price varies",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/1/17/Local_ID_Card_icon.png/revision/latest?cb=20260402044604"
    },
    {
        "item":  "Low-Grade Gunpowder",
        "category":  "Military Material",
        "weight":  "0.450kg",
        "baseValue":  23,
        "preferredSeller":  "Best price varies",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/7/7d/Low-Grade_Gunpowder_inspect.png/revision/latest/scale-to-width-down/77?cb=20260331082737"
    },
    {
        "item":  "LTSD-4-3 Laser Designator",
        "category":  "Military Equipment",
        "weight":  "14.000kg",
        "baseValue":  60000,
        "preferredSeller":  "Best price varies",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/5/57/LTSD-4-3_Laser_Designator_icon.png/revision/latest?cb=20260404034007"
    },
    {
        "item":  "Luxury Smartphone",
        "category":  "Electronics",
        "weight":  "0.100kg",
        "baseValue":  1000,
        "preferredSeller":  "Lab Rat",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/0/0e/LPhone_inspect.png/revision/latest/scale-to-width-down/96?cb=20250508232225"
    },
    {
        "item":  "Luxury Smartwatch",
        "category":  "Jewellery",
        "weight":  "0.150kg",
        "baseValue":  600,
        "preferredSeller":  "Turncoat",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/d/d0/LWatch_inspect.png/revision/latest/scale-to-width-down/96?cb=20250422203410"
    },
    {
        "item":  "Majestic Titanium Watch",
        "category":  "Jewellery",
        "weight":  "0.100kg",
        "baseValue":  8000,
        "preferredSeller":  "Turncoat",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/5/54/MTWatch_inspect.png/revision/latest/scale-to-width-down/96?cb=20250508224938"
    },
    {
        "item":  "Master Carbon SEAL Automatic Watch",
        "category":  "Jewellery",
        "weight":  "0.170kg",
        "baseValue":  1450,
        "preferredSeller":  "Turncoat",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/7/71/Master_Carbon_SEAL_Automatic_Watch_icon.png/revision/latest?cb=20260402051640"
    },
    {
        "item":  "Modern Watch",
        "category":  "Jewellery",
        "weight":  "0.120kg",
        "baseValue":  150,
        "preferredSeller":  "Turncoat",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/3/32/MWatch_inspect.png/revision/latest/scale-to-width-down/96?cb=20250502160135"
    },
    {
        "item":  "Motor Oil",
        "category":  "Workshop Supplies",
        "weight":  "4.300kg",
        "baseValue":  15,
        "preferredSeller":  "Best price varies",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/0/07/Motor_Oil_inspect.png/revision/latest/scale-to-width-down/77?cb=20260331083529"
    },
    {
        "item":  "Motorbike Battery",
        "category":  "Household Item",
        "weight":  "2.000kg",
        "baseValue":  36,
        "preferredSeller":  "Best price varies",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/d/d8/Motorbike_Battery_inspect.png/revision/latest/scale-to-width-down/96?cb=20260331083650"
    },
    {
        "item":  "Moutai - 50y",
        "category":  "Vices",
        "weight":  "1.000kg",
        "baseValue":  5000,
        "preferredSeller":  "Gunny",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/6/6d/Moutai_inspect.png/revision/latest?cb=20250603170201"
    },
    {
        "item":  "Multitool",
        "category":  "Workshop Supplies",
        "weight":  "0.120kg",
        "baseValue":  54,
        "preferredSeller":  "Best price varies",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/d/d9/Multitool_icon.png/revision/latest?cb=20260403230748"
    },
    {
        "item":  "Naosaoad 100% Clean",
        "category":  "Household Item",
        "weight":  "0.500kg",
        "baseValue":  18,
        "preferredSeller":  "Best price varies",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/d/d0/Naosaoad_100%25_Clean_inspect.png/revision/latest/scale-to-width-down/57?cb=20260331083856"
    },
    {
        "item":  "NPI-2 Navigation Receiver",
        "category":  "Military Equipment",
        "weight":  "0.300kg",
        "baseValue":  1100,
        "preferredSeller":  "Best price varies",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/5/57/NPI-2_Navigation_Receiver_icon.png/revision/latest?cb=20260402045946"
    },
    {
        "item":  "One-Time Pad Key Sheets",
        "category":  "Military Equipment",
        "weight":  "0.100kg",
        "baseValue":  2400,
        "preferredSeller":  "Best price varies",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/a/a5/One-Time_Pad_Key_Sheets_icon.png/revision/latest?cb=20260402050119"
    },
    {
        "item":  "Operation Data Encrypted Hard Disk",
        "category":  "Military Equipment",
        "weight":  "???kg",
        "baseValue":  null,
        "preferredSeller":  "Best price varies",
        "image":  null
    },
    {
        "item":  "Pack of AA Batteries",
        "category":  "Household Item",
        "weight":  "0.024kg",
        "baseValue":  7,
        "preferredSeller":  "Best price varies",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/5/59/Pack_of_AA_Batteries_inspect.png/revision/latest/scale-to-width-down/87?cb=20260331084204"
    },
    {
        "item":  "Pack of Premium Coffee",
        "category":  "Household Item",
        "weight":  "0.600kg",
        "baseValue":  27,
        "preferredSeller":  "Best price varies",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/f/f6/Pack_of_Premium_Coffee_inspect.png/revision/latest/scale-to-width-down/67?cb=20260331084221"
    },
    {
        "item":  "Paracord",
        "category":  "Military Material",
        "weight":  "0.100kg",
        "baseValue":  9,
        "preferredSeller":  "Best price varies",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/b/b8/Paracord_inspect.png/revision/latest/scale-to-width-down/96?cb=20260331084247"
    },
    {
        "item":  "PBG-01+ UAV Control Station",
        "category":  "Military Equipment",
        "weight":  "14.200kg",
        "baseValue":  6400,
        "preferredSeller":  "Best price varies",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/2/25/PBG-01%2B_UAV_Control_Station_inspect.png/revision/latest/scale-to-width-down/90?cb=20260331084341"
    },
    {
        "item":  "Perfect Pearl Earrings",
        "category":  "Jewellery",
        "weight":  "0.010kg",
        "baseValue":  5000,
        "preferredSeller":  "Turncoat",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/5/5e/PPEarrings_inspect.png/revision/latest/scale-to-width-down/96?cb=20250513044118"
    },
    {
        "item":  "Petrolatum",
        "category":  "Household Item",
        "weight":  "0.370kg",
        "baseValue":  9,
        "preferredSeller":  "Best price varies",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/4/4a/Petrolatum_inspect.png/revision/latest/scale-to-width-down/96?cb=20260331084513"
    },
    {
        "item":  "Phone Charger",
        "category":  "Household Item",
        "weight":  "0.075kg",
        "baseValue":  9,
        "preferredSeller":  "Best price varies",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/4/45/Phone_Charger_inspect.png/revision/latest/scale-to-width-down/96?cb=20260331084626"
    },
    {
        "item":  "Platinum Credit Card",
        "category":  "Funds",
        "weight":  "0.005kg",
        "baseValue":  6000,
        "preferredSeller":  "Artisan",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/f/fc/PCCard_inspect.png/revision/latest/scale-to-width-down/96?cb=20250424014800"
    },
    {
        "item":  "Platinum Ring",
        "category":  "Jewellery",
        "weight":  "0.010kg",
        "baseValue":  10000,
        "preferredSeller":  "Turncoat",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/7/72/PDRing_inspect.png/revision/latest/scale-to-width-down/96?cb=20250508233240"
    },
    {
        "item":  "Propane Bottle",
        "category":  "Household Item",
        "weight":  "0.453kg",
        "baseValue":  31,
        "preferredSeller":  "Best price varies",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/d/d7/Propane_Bottle_icon.png/revision/latest?cb=20260403075825"
    },
    {
        "item":  "R-438 Barrier-T",
        "category":  "Military Equipment",
        "weight":  "16.000kg",
        "baseValue":  45000,
        "preferredSeller":  "Best price varies",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/e/e5/R-438_Barrier-T_icon.png/revision/latest?cb=20260404034119"
    },
    {
        "item":  "Refillable Lighter",
        "category":  "Household Item",
        "weight":  "0.080kg",
        "baseValue":  37,
        "preferredSeller":  "Best price varies",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/5/58/Refillable_Lighter_inspect.png/revision/latest/scale-to-width-down/96?cb=20260331085447"
    },
    {
        "item":  "Reflex Camera",
        "category":  "Evidence",
        "weight":  "0.400kg",
        "baseValue":  960,
        "preferredSeller":  "Best price varies",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/3/3f/DSLR_inspect.png/revision/latest/scale-to-width-down/96?cb=20250422023835"
    },
    {
        "item":  "Reinforced Military Laptop",
        "category":  "Evidence",
        "weight":  "2.500kg",
        "baseValue":  2300,
        "preferredSeller":  "Best price varies",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/1/1f/ReLaptop_inspect.png/revision/latest/scale-to-width-down/96?cb=20250509092729"
    },
    {
        "item":  "Rubber Renue",
        "category":  "Workshop Supplies",
        "weight":  "1.000kg",
        "baseValue":  51,
        "preferredSeller":  "Best price varies",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/3/33/Rubber_Renue_inspect.png/revision/latest/scale-to-width-down/64?cb=20260331085609"
    },
    {
        "item":  "Rugged Military Tablet",
        "category":  "Military Equipment",
        "weight":  "2.000kg",
        "baseValue":  1200,
        "preferredSeller":  "Best price varies",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/d/dd/Rugged_Military_Tablet_icon.png/revision/latest?cb=20260404034408"
    },
    {
        "item":  "Sapphire Pendant",
        "category":  "Jewellery",
        "weight":  "0.010kg",
        "baseValue":  3600,
        "preferredSeller":  "Turncoat",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/1/17/SPendant_inspect.png/revision/latest/scale-to-width-down/96?cb=20250513043052"
    },
    {
        "item":  "Sewing Set",
        "category":  "Household Item",
        "weight":  "0.146kg",
        "baseValue":  1,
        "preferredSeller":  "Best price varies",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/9/90/Sewing_Set_inspect.png/revision/latest/scale-to-width-down/96?cb=20260331085846"
    },
    {
        "item":  "Signal Repeater RT97S",
        "category":  "Military Equipment",
        "weight":  "1.660kg",
        "baseValue":  675,
        "preferredSeller":  "Best price varies",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/1/14/Signal_Repeater_RT97S_inspect.png/revision/latest/scale-to-width-down/96?cb=20260331085918"
    },
    {
        "item":  "Sleek Luxury Watch",
        "category":  "Jewellery",
        "weight":  "0.130kg",
        "baseValue":  1700,
        "preferredSeller":  "Turncoat",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/4/4b/SWatch_inspect.png/revision/latest/scale-to-width-down/85?cb=20250507140050"
    },
    {
        "item":  "Smartphone",
        "category":  "Electronics",
        "weight":  "0.100kg",
        "baseValue":  250,
        "preferredSeller":  "Lab Rat",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/0/04/Phone_inspect.png/revision/latest/scale-to-width-down/82?cb=20250425032205"
    },
    {
        "item":  "Snake Wine",
        "category":  "Vices",
        "weight":  "1.400kg",
        "baseValue":  399,
        "preferredSeller":  "Gunny",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/8/8f/SWine_inspect.png/revision/latest/scale-to-width-down/67?cb=20250507135254"
    },
    {
        "item":  "STRELETS-M Tablet",
        "category":  "Military Equipment",
        "weight":  "???kg",
        "baseValue":  4700,
        "preferredSeller":  "Best price varies",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/f/fc/STRELETS-M_Tablet_icon.png/revision/latest?cb=20260404034623"
    },
    {
        "item":  "Sulfuric Acid",
        "category":  "Laboratory Supplies",
        "weight":  "5.030kg",
        "baseValue":  99,
        "preferredSeller":  "Best price varies",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/a/a2/Sulfuric_Acid_inspect.png/revision/latest/scale-to-width-down/67?cb=20260403095547"
    },
    {
        "item":  "Tahirs Cigarettes",
        "category":  "Household Item",
        "weight":  "0.013kg",
        "baseValue":  5,
        "preferredSeller":  "Best price varies",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/c/c9/Tahirs_Cigarettes_icon.png/revision/latest?cb=20260402214909"
    },
    {
        "item":  "Thermal Blanket",
        "category":  "Laboratory Supplies",
        "weight":  "0.057kg",
        "baseValue":  1,
        "preferredSeller":  "Best price varies",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/1/18/Thermal_Blanket_icon.png/revision/latest?cb=20260403200545"
    },
    {
        "item":  "Toolset",
        "category":  "Workshop Supplies",
        "weight":  "1.000kg",
        "baseValue":  142,
        "preferredSeller":  "Best price varies",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/8/87/Toolset_inspect.png/revision/latest/scale-to-width-down/96?cb=20260331090251"
    },
    {
        "item":  "Tourist ID Card",
        "category":  "Evidence",
        "weight":  "0.050kg",
        "baseValue":  112,
        "preferredSeller":  "Best price varies",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/3/39/Tourist_ID_Card_inspect.png/revision/latest/scale-to-width-down/96?cb=20260403094255"
    },
    {
        "item":  "Tourist Passport",
        "category":  "Evidence",
        "weight":  "0.050kg",
        "baseValue":  2625,
        "preferredSeller":  "Best price varies",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/a/a8/Tourist_Passport_icon.png/revision/latest?cb=20260402190015"
    },
    {
        "item":  "Tzintzimitl Tequila - 25y",
        "category":  "Vices",
        "weight":  "1.800kg",
        "baseValue":  2000,
        "preferredSeller":  "Gunny",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/4/46/Tzintzimitl_inspect.png/revision/latest/scale-to-width-down/96?cb=20250509090613"
    },
    {
        "item":  "UN Medical Tools",
        "category":  "Laboratory Supplies",
        "weight":  "0.500kg",
        "baseValue":  15,
        "preferredSeller":  "Best price varies",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/0/0c/UN_Medical_Tools_inspect.png/revision/latest/scale-to-width-down/96?cb=20260403094658"
    },
    {
        "item":  "Vial of Antigens",
        "category":  "Laboratory Supplies",
        "weight":  "0.030kg",
        "baseValue":  947,
        "preferredSeller":  "Best price varies",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/1/1e/Vial_of_Antigens_icon.png/revision/latest?cb=20260403234415"
    },
    {
        "item":  "VIP Passport",
        "category":  "Evidence",
        "weight":  "0.050kg",
        "baseValue":  6800,
        "preferredSeller":  "Best price varies",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/7/70/VIP_Passport_icon.png/revision/latest?cb=20260402190035"
    },
    {
        "item":  "Water Purification Tablets",
        "category":  "Laboratory Supplies",
        "weight":  "0.125kg",
        "baseValue":  27,
        "preferredSeller":  "Best price varies",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/a/ab/Water_Purification_Tablets_inspect.png/revision/latest/scale-to-width-down/84?cb=20260403100306"
    },
    {
        "item":  "Weapon Oil",
        "category":  "Military Material",
        "weight":  "0.272kg",
        "baseValue":  9,
        "preferredSeller":  "Best price varies",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/f/f9/Weapon_Oil_inspect.png/revision/latest/scale-to-width-down/48?cb=20260331090618"
    },
    {
        "item":  "White Lithium Grease",
        "category":  "Workshop Supplies",
        "weight":  "15.880kg",
        "baseValue":  150,
        "preferredSeller":  "Best price varies",
        "image":  "https://static.wikia.nocookie.net/gray-zone-warfare/images/3/37/White_Lithium_Grease_inspect.png/revision/latest/scale-to-width-down/96?cb=20260403100019"
    }
];

