const weaponCreatorData = {
  weapons: [
    {
      id: "m4a1",
      name: "M4A1",
      caliber: "5.56x45mm NATO",
      weaponType: "Assault Rifle",
      fireMode: "Single / Auto",
      manufacturer: "Colt",
      imageUrl: "https://gray-zone-warfare.fandom.com/wiki/Special:FilePath/M4A1%20inspect.png",
      description:
        "The M4A1 is a fully automatic M4 platform favored for versatility and reliability. This builder profile uses M4A1-specific mod categories from the wiki and supports weapon-specific slot counts.",
      magStatus: { current: 30, max: 30 },
      baseStats: {
        weightKg: 3.299,
        accuracyMoa: 2.15,
        recoilControl: 0,
        armStaminaDrain: 0,
        weaponHandling: 0,
        reloadTime: 0,
        fireRateRpm: 800,
      },
      slots: [
        {
          id: "pistol-grip",
          label: "Pistol Grip",
          options: [
            {
              id: "m4-grip-cqa1",
              name: "Norinco CQA1 Pistol Grip",
              stats: {},
            },
            {
              id: "m4-grip-miad",
              name: "MIAD Pistol Grip",
              stats: {},
            },
            {
              id: "m4-grip-torque",
              name: "Torque Pistol Grip",
              stats: {},
            },
            {
              id: "m4-grip-moe",
              name: "MOE Pistol Grip",
              stats: {},
            },
            {
              id: "m4-grip-moe-fde",
              name: "MOE Pistol Grip (FDE)",
              stats: {},
            },
            {
              id: "m4-grip-dd-milspec",
              name: "DD Enhanced AR Pistol Grip (MILSPEC)",
              stats: {},
            },
            {
              id: "m4-grip-dd",
              name: "DD Enhanced AR Pistol Grip",
              stats: {},
            },
            {
              id: "m4-grip-dd-black",
              name: "DD Enhanced AR Pistol Grip (Black)",
              stats: {},
            },
          ],
          selected: "m4-grip-cqa1",
        },
        {
          id: "receiver",
          label: "Receiver",
          options: [
            {
              id: "m4-receiver-m16a1",
              name: "M16A1 Upper Receiver",
              stats: {},
            },
            {
              id: "m4-receiver-m4",
              name: "M4 Upper Receiver",
              stats: {},
            },
            {
              id: "m4-receiver-cqa1",
              name: "CQ A1 Upper Receiver",
              stats: {},
            },
          ],
          selected: "m4-receiver-m4",
        },
        {
          id: "buffer-tube",
          label: "Buffer Tube",
          options: [
            {
              id: "m4-buffer-cqa1",
              name: "CQ A1 Buffer Tube",
              stats: {},
            },
            {
              id: "m4-buffer-m4",
              name: "M4 Buffer Tube",
              stats: {},
            },
            {
              id: "m4-buffer-m4-fde",
              name: "M4 Buffer Tube (FDE)",
              stats: {},
            },
          ],
          selected: "m4-buffer-m4",
        },
        {
          id: "charging-handle",
          label: "Charging Handle",
          options: [
            {
              id: "m4-ch-cqa1",
              name: "CQ A1 Charging Handle",
              stats: {},
            },
            {
              id: "m4-ch-gi",
              name: "Standard GI Charging Handle",
              stats: {},
            },
            {
              id: "m4-ch-f1",
              name: "F1 Charging Handle",
              stats: {},
            },
            {
              id: "m4-ch-grip-n-rip",
              name: "AR-15 GRIP-N-RIP Charging Handle",
              stats: {},
            },
            {
              id: "m4-ch-sch",
              name: "SCH 5.56 Charging Handle",
              stats: {},
            },
            {
              id: "m4-ch-sch-ddc",
              name: "SCH 5.56 Charging Handle (DDC)",
              stats: {},
            },
            {
              id: "m4-ch-supreme",
              name: "AR-15 Supreme Charging Handle",
              stats: {},
            },
          ],
          selected: "m4-ch-gi",
        },
        {
          id: "magazine",
          label: "Magazine",
          options: [
            {
              id: "m4-mag-stanag-20",
              name: "STANAG 5.56x45mm/.300 BLK 20-Round Magazine",
              stats: {},
            },
            {
              id: "m4-mag-stanag-30",
              name: "STANAG 5.56x45mm/.300 BLK 30-Round Magazine",
              stats: {},
            },
            {
              id: "m4-mag-pmag-30",
              name: "PMAG 5.56x45mm/.300 BLK 30-Round Magazine",
              stats: {},
            },
            {
              id: "m4-mag-pmag-30-fde",
              name: "PMAG 5.56x45mm/.300 BLK 30-Round Magazine (FDE)",
              stats: {},
            },
            {
              id: "m4-mag-dd-32",
              name: "DD 5.56x45mm/.300 BLK 32-Round Magazine",
              stats: {},
            },
            {
              id: "m4-mag-ati-s60",
              name: "ATI S60 5.56x45mm/.300 BLK 60-Round Magazine",
              stats: {},
            },
          ],
          selected: "m4-mag-stanag-30",
        },
      ],
    },
  ],
};
