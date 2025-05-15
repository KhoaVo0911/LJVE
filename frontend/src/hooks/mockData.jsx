export const images = [
  "assets/459424739_1048003410336309_4209133926252165288_n.png",
  "assets/IMG_3556.jpg",
];

export const journalData = [
  {
    id: 1,
    title: 'The making process of "KHONG"',
    description:
      "Discover the story about my first Music Video that shooting outdoor and find out how did I manage to get most of the shot in the morning.",
    imageTitle: "assets/459424739_1048003410336309_4209133926252165288_n.png",
    imageList: [
      "assets/459424739_1048003410336309_4209133926252165288_n.png",
      "assets/IMG_3556.jpg",
    ],
    information: [
      "I'm Nguyen Tuan Khang, a Vietnamese cinematographer based in Saigon.",
      "My work explores emotional storytelling and visual precision.",
    ],
  },
  {
    id: 2,
    title: 'The making process of "EYESME" TVC',
    description:
      "Behind-The-Scene of my first Commercial job as a DOP. How did we manage to shoot in the middle of the sunny day. How to plan up with only 3 days prep.",
    imageTitle: "assets/IMG_3556.jpg",
    imageList: ["assets/IMG_3556.jpg"],
    information: ["Observing movement, shadows, and colors in Saigon."],
  },
  {
    id: 3,
    title: 'The making process of "CRTLZ"',
    description:
      "The story about my first short film after coming back to Vietnam. 3 days shooting nonstop, alot of sleepless night and the project make me improve alot.",
    imageTitle: "assets/IMG_3556.jpg",
    imageList: ["assets/IMG_3556.jpg"],
    information: ["Observing movement, shadows, and colors in Saigon."],
  },
  {
    id: 4,
    title: 'The making process of "NEU LUC DO"',
    description:
      "Behind-The-Scene of my first Commercial job as a DOP. How did we manage to shoot in the middle of the sunny day. How to plan up with only 3 days prep.",
    imageTitle: "assets/IMG_3556.jpg",
    imageList: ["assets/IMG_3556.jpg"],
    information: ["Observing movement, shadows, and colors in Saigon."],
  },
  {
    id: 5,
    title: 'The making process of "KIM CHI NU"',
    description:
      "Behind-The-Scene of my first Commercial job as a DOP. How did we manage to shoot in the middle of the sunny day. How to plan up with only 3 days prep.",
    imageTitle: "assets/IMG_3556.jpg",
    imageList: ["assets/IMG_3556.jpg"],
    information: ["Observing movement, shadows, and colors in Saigon."],
  },
  {
    id: 6,
    title: 'The making process of "THIM"',
    description:
      "Behind-The-Scene of my first short film as a DOP. The story about how me and my crew can be managed to finish within 2 weeks for a whole production process.",
    imageTitle: "assets/IMG_3556.jpg",
    imageList: ["assets/IMG_3556.jpg"],
    information: ["Observing movement, shadows, and colors in Saigon."],
  },
];

export const listFilm = [
  {
    id: 1,
    name: "THIM",
    genre: "Short Film",
    year: 2024,
  },
  {
    id: 2,
    name: "KIM CHI NU",
    genre: "Short Film",
    year: 2024,
  },
  {
    id: 3,
    name: "CRTLZ",
    genre: "Short Film",
    year: 2025,
  },
  {
    id: 4,
    name: "NEU LUC DO",
    genre: "MV Cover",
    year: 2025,
  },
  {
    id: 5,
    name: "EYESME",
    genre: "Commercial",
    year: 2025,
  },
];

export const filmDetails = [
  {
    id: 1,
    name: "THIM",
    genre: "Short Film",
    video: "/assets/film/thim/video1.mp4",
    images: [
      "/assets/film/thim/thim1.png",
      "/assets/film/thim/thim2.png",
      "/assets/film/thim/thim3.png",
      "/assets/film/thim/thim4.png",
      "/assets/film/thim/thim5.png",
    ],
    credit: [
      {
        section: "CREDIT",
        items: [{ label: "Title", names: ['"THIM" SHORT FILM'] }],
      },
      {
        section: "PRODUCTION DEPARTMENT",
        items: [
          { label: "Producer", names: ["Phan Đức Công Anh"] },
          { label: "Production Coordinator", names: ["Gia Ánh"] },
          {
            label: "Assistant Producers",
            names: ["Trung Thành", "Tuấn Khải", "Nhật Quang"],
          },
        ],
      },
      {
        section: "DIRECTION DEPARTMENT",
        items: [
          { label: "Director", names: ["Hizu"] },
          { label: "Screenwriter", names: ["Huy"] },
          { label: "1st Assistant Director", names: ["Linh Chan"] },
          { label: "2nd Assistant Director", names: ["Hồ Minh Phương"] },
          { label: "Script Supervisor", names: ["Nguyễn Khánh Hương"] },
        ],
      },
      {
        section: "CAMERA DEPARTMENT",
        items: [
          { label: "Director of Photography", names: ["Bern"] },
          {
            label: "Camera Operators",
            names: [
              "Lê Tiến Đạt",
              "Phước Võ",
              "Bern (ORMINE)",
              "LJVE NGUYEN (ORMINE)",
            ],
            italic: true,
          },
          { label: "Assistant Camera", names: ["Văn Thành Tiến", "Chí Võ"] },
          {
            label: "Technical",
            names: ["Nguyễn Phúc Anh Khôi", "Huỳnh Trúc Phương"],
          },
        ],
      },
      {
        section: "LIGHTING",
        items: [
          { label: "Gaffer", names: ["LJVE NGUYEN (ORMINE)"], italic: true },
          {
            label: "Lighting Assistant",
            names: ["Quý Hoà", "Nguyễn Phúc Anh Khôi", "Chí Võ", "Lê Tiến Đạt"],
          },
          { label: "Best Boy", names: ["Khương Duy", "Quốc Dũng"] },
        ],
      },
      {
        section: "SOUND DEPARTMENT",
        items: [{ label: "Sound Recordist", names: ["Quang Huấn"] }],
      },
      {
        section: "ART DEPARTMENT",
        items: [
          { label: "Art Director", names: ["Nguyễn Cao Thế Mỹ"] },
          { label: "Set Decorator", names: ["Phúc Sâm"] },
          {
            label: "Assistant Props",
            names: ["Phương Dung", "Uyên Pu", "Trung Thành"],
          },
        ],
      },
      {
        section: "STYLING & MAKEUP",
        items: [
          {
            label: "Stylist",
            names: ["Nguyễn Cao Thế Mỹ", "Phạm Hồng Anh", "Hải Yến"],
          },
          { label: "Makeup Artist", names: ["Chị Mộng (Nate)", "Kim Thư"] },
        ],
      },
      {
        section: "CAST SUPPORT",
        items: [
          {
            label: "Cast Assistants",
            names: ["Uyên Pu", "Hồng Anh", "Hoàng My"],
          },
        ],
      },
      {
        section: "POST PRODUCTION",
        items: [
          { label: "Editor", names: ["LJVE NGUYEN"], italic: true },
          { label: "SFX", names: ["LJVE NGUYEN"], italic: true },
          { label: "Colorist", names: ["Chí Võ", "LJVE NGUYEN"], italic: true },
          { label: "Bern", names: [] },
        ],
      },
      {
        section: "BEHIND THE SCENES",
        items: [
          {
            label: "BTS Photographer",
            names: ["Nguyễn Huỳnh Mai Ngân", "Bé My", "Hồ Phương"],
          },
        ],
      },
      {
        section: "ACCOUNTING",
        items: [
          { label: "Accountant", names: ["Linh Chan", "Hồ Minh Phương"] },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "KIM CHI NU",
    genre: "Short Film",
    video: "/assets/film/kimchinu/video1.mp4",
    images: [
      "/assets/film/kimchinu/kimchinu1.png",
      "/assets/film/kimchinu/kimchinu2.png",
      "/assets/film/kimchinu/kimchinu3.png",
      "/assets/film/kimchinu/kimchinu4.png",
      "/assets/film/kimchinu/kimchinu5.png",
    ],
    credit: [
      {
        section: "CREDIT",
        items: [{ label: "Title", names: ['"KIM CHI NU" SHORT FILM'] }],
      },
      {
        section: "STARRING",
        items: [
          {
            label: null,
            names: [
              "Hải Ân Trần Hằng Nghi",
              "Dương Ngô Thùy Tiên",
              "Vy",
              "De Ara Hiroshi/Hà Dương",
            ],
          },
        ],
      },
      {
        section: "PRODUCTION DEPARTMENT",
        items: [
          { label: "Produced by", names: ["NHÓM GỎE NƯ JUICY"] },
          { label: "Producer", names: ["Tiến Phú"] },
          { label: "Creative Director", names: ["Nguyễn Nhựt Khánh"] },
          { label: "Script Writer", names: ["Phương Loan Nguyễn"] },
          { label: "1st Assistance Director", names: ["Phương Loan Nguyễn"] },
          { label: "Line Producer", names: ["Qủi Rùa"] },
        ],
      },
      {
        section: "CAMERA DEPARTMENT",
        items: [
          { label: "Director Of Photography", names: ["Dewild"] },
          {
            label: "Camera Operator",
            names: ["Ngô Văn Thi", "Phúc Nguyễn", "LJVE NGUYEN"],
            italic: true,
          },
        ],
      },
      {
        section: "BOOM OPERATOR",
        items: [{ label: null, names: ["Công"] }],
      },
      {
        section: "LIGHTING",
        items: [
          { label: "Gaffer", names: ["Lam Trần", "Quý Hoà"] },
          { label: "Equipment", names: ["Phú Phương Nam"] },
        ],
      },
      {
        section: "BEHIND THE SCENES",
        items: [
          {
            label: null,
            names: [
              "Minh Ngọc",
              "Minh Hoài",
              "Ngọc Thảo",
              "Trần Tiến Phú",
              "Tô Đũ Nàng Dông",
            ],
          },
        ],
      },
      {
        section: "POST PRODUCTION",
        items: [
          {
            label: "Editor",
            names: ["Nguyễn Tuấn Khang", "Phúc Nguyễn"],
            italic: true,
          },
          { label: "Colorist", names: ["Nguyễn Tuấn Khang"], italic: true },
          { label: "Sound Engineer", names: ["Nguyễn Tuấn Khang"] },
        ],
      },
      {
        section: "ART DEPARTMENT",
        items: [
          { label: "Art Director", names: ["Nguyễn Nhựt Khánh"] },
          { label: "Props Master", names: ["Bảo Hân"] },
          {
            label: "Set Designer",
            names: [
              "Bảo Hân",
              "Dewild",
              "Minh Hoài",
              "Minh Ngọc",
              "Thảo Lạc",
              "Toàn Lạc",
            ],
          },
        ],
      },
      {
        section: "STYLING",
        items: [
          { label: "Stylist", names: ["Nguyễn Nhựt Khánh"] },
          { label: "Makeup Artist", names: ["Phương Anh"] },
          { label: "Wardrobe", names: ["Hương Dương"] },
        ],
      },
      {
        section: "VOICE OVER",
        items: [
          { label: null, names: ["Bảo Hân - chị HR"] },
          { label: null, names: ["Minh Ngọc - chị quản lý"] },
          { label: null, names: ["Tiến Phú - khán giả quá khích 1"] },
          { label: null, names: ["Phương Loan - khán giả quá khích 3"] },
          { label: null, names: ["Nhựt Khánh - khán giả quá khích 4"] },
          { label: null, names: ["Phạm Thu Hạnh - khán giả quá khích 5"] },
          {
            label: null,
            names: ["Nguyễn Huỳnh Minh Ngọc - khán giả quá khích 6"],
          },
          {
            label: null,
            names: ["Nguyễn Trương Tấn Thông - khán giả quá khích 7"],
          },
          { label: null, names: ["Sử Hữu Hiền - khán giả quá khích 8"] },
          { label: null, names: ["Ngô Lê Hoàng Phúc - khán giả quá khích 9"] },
        ],
      },
      {
        section: "CATERING",
        items: [{ label: null, names: ["Tiến Phú", "Nguyễn Cường"] }],
      },
    ],
  },
  {
    id: 3,
    name: "CRTLZ",
    genre: "Short Film",
    video: "/assets/film/ctrlz/video1.mp4",
    images: [
      "/assets/film/ctrlz/ctrlz1.png",
      "/assets/film/ctrlz/ctrlz2.png",
      "/assets/film/ctrlz/ctrlz3.png",
      "/assets/film/ctrlz/ctrlz4.png",
      "/assets/film/ctrlz/ctrlz5.png",
    ],
    credit: [
      {
        section: "CREDIT",
        items: [{ label: "Title", names: ['"CTRL-Z" SHORT FILM'] }],
      },
      {
        section: "PRODUCTION DEPARTMENT",
        items: [
          { label: "Producer", names: ["Phan Đức Công Anh"] },
          { label: "Production Coordinator", names: ["Gia Ánh"] },
          { label: "Assistant Producers", names: ["Trung Thành"] },
          { label: "Assistant Producers", names: ["Tuấn Khải"] },
          { label: "Assistant Producers", names: ["Nhật Quang"] },
        ],
      },
      {
        section: "DIRECTION DEPARTMENT",
        items: [
          { label: "Director", names: ["Hizu"] },
          { label: "Screenwriter", names: ["Huy"] },
          { label: "1st Assistant Director", names: ["Linh Chan"] },
          { label: "2nd Assistant Director", names: ["Hồ Minh Phương"] },
          { label: "Script Supervisor", names: ["Nguyễn Khánh Hương"] },
        ],
      },
      {
        section: "CAMERA DEPARTMENT",
        items: [
          { label: "Director of Photography", names: ["Bern"] },
          { label: "Camera Operators", names: ["Lê Tiến Đạt"] },
          { label: "Camera Operators", names: ["Phước Võ"] },
          { label: "Camera Operators", names: ["Bern (ORMINE)"] },
          {
            label: "Camera Operators",
            names: ["LJVE NGUYEN (ORMINE)"],
            italic: true,
          },
          { label: "Assistant Camera", names: ["Văn Thành Tiến"] },
          { label: "Assistant Camera", names: ["Chí Võ"] },
          { label: "Technical", names: ["Nguyễn Phúc Anh Khôi"] },
          { label: "Technical", names: ["Huỳnh Trúc Phương"] },
        ],
      },
      {
        section: "LIGHTING",
        items: [
          { label: "Gaffer", names: ["LJVE NGUYEN (ORMINE)"], italic: true },
          { label: "Lighting Assistant", names: ["Quý Hoà"] },
          { label: "Lighting Assistant", names: ["Nguyễn Phúc Anh Khôi"] },
          { label: "Lighting Assistant", names: ["Chí Võ"] },
          { label: "Lighting Assistant", names: ["Lê Tiến Đạt"] },
          { label: "Best Boy", names: ["Khương Duy"] },
          { label: "Best Boy", names: ["Quốc Dũng"] },
        ],
      },
      {
        section: "SOUND DEPARTMENT",
        items: [{ label: "Sound Recordist", names: ["Quang Huấn"] }],
      },
      {
        section: "ART DEPARTMENT",
        items: [
          { label: "Art Director", names: ["Nguyễn Cao Thế Mỹ"] },
          { label: "Set Decorator", names: ["Phúc Sâm"] },
          { label: "Assistant Props", names: ["Phương Dung"] },
          { label: "Assistant Props", names: ["Uyên Pu"] },
          { label: "Assistant Props", names: ["Trung Thành"] },
        ],
      },
      {
        section: "STYLING & MAKEUP",
        items: [
          { label: "Stylist", names: ["Nguyễn Cao Thế Mỹ"] },
          { label: "Stylist", names: ["Phạm Hồng Anh"] },
          { label: "Stylist", names: ["Hải Yến"] },
          { label: "Makeup Artist", names: ["Chị Mộng (Nate)"] },
          { label: "Makeup Artist", names: ["Kim Thư"] },
        ],
      },
      {
        section: "CAST SUPPORT",
        items: [
          { label: "Cast Assistants", names: ["Uyên Pu"] },
          { label: "Cast Assistants", names: ["Hồng Anh"] },
          { label: "Cast Assistants", names: ["Hoàng My"] },
        ],
      },
      {
        section: "POST PRODUCTION",
        items: [
          { label: "Editor", names: ["LJVE NGUYEN"], italic: true },
          { label: "SFX", names: ["LJVE NGUYEN"], italic: true },
          { label: "Colorist", names: ["Chí Võ"] },
          { label: "Colorist", names: ["LJVE NGUYEN"], italic: true },
          { label: "Bern", names: [] },
        ],
      },
      {
        section: "BEHIND THE SCENES",
        items: [
          {
            label: "BTS Photographer",
            names: ["Nguyễn Huỳnh Mai Ngân", "Bé My", "Hồ Phương"],
          },
        ],
      },
      {
        section: "ACCOUNTING",
        items: [
          { label: "Accountant", names: ["Linh Chan"] },
          { label: "Accountant", names: ["Hồ Minh Phương"] },
        ],
      },
    ],
  },
  {
    id: 4,
    name: "NEU LUC DO",
    genre: "MV Cover",
    video: "/assets/film/neulucdo/video1.mp4",
    images: [
      "/assets/film/neulucdo/neulucdo1.png",
      "/assets/film/neulucdo/neulucdo2.png",
      "/assets/film/neulucdo/neulucdo3.png",
      "/assets/film/neulucdo/neulucdo4.png",
      "/assets/film/neulucdo/neulucdo5.png",
    ],
    credit: [
      {
        section: "CREDIT",
        items: [{ label: "Title", names: ['"NEU LUC DO" MUSIC VIDEO COVER'] }],
      },
      {
        section: "ORIGINAL SONG BY TLINH",
        items: [
          { label: "Artist", names: ["Lý Hoàn Trần"] },
          { label: "Talent Assistance", names: ["Phạm Tuyết Nhi"] },
        ],
      },
      {
        section: "PRODUCTION DEPARTMENT",
        items: [
          { label: "Producer", names: ["Qủi Rùa (ORMINE)"] },
          { label: "Producer Assistant", names: ["Tấn Đạt"] },
        ],
      },
      {
        section: "DIRECTOR DEPARTMENT",
        items: [
          { label: "Director", names: ["Dewild (ORMINE)"] },
          { label: "Assistant Director", names: ["Anh Thư"] },
        ],
      },
      {
        section: "CAMERA DEPARTMENT",
        items: [
          { label: "Director Of Photography", names: ["Ngô Văn Thi"] },
          { label: "Assistant Cameraman", names: ["Bern (ORMINE)"] },
          { label: "Gaffer", names: ["Lam Trần"] },
          { label: "Best Boy", names: ["Quý Hoà"] },
          { label: "BTS Photographer", names: ["Phúc Nguyễn"] },
          { label: "BTS Videographer", names: ["Bern (ORMINE)"] },
        ],
      },
      {
        section: "ART DEPARTMENT",
        items: [
          { label: "Art Director", names: ["Bảo Hân (ORMINE)"] },
          { label: "Set Design Jeans", names: ["Hiếu Nghĩa", "Trúc Anh"] },
        ],
      },
      {
        section: "STYLING & MAKEUP",
        items: [
          { label: "Make Up Artist", names: ["Nguyễn Ngọc Yến Vân"] },
          { label: "Hair Stylist", names: ["Thảo Nguyen"] },
          { label: "Fashion Designed By", names: ["NESSIE"] },
        ],
      },
      {
        section: "POST PRODUCTION",
        items: [
          { label: "Editor", names: ["LJVE NGUYEN"], italic: true },
          { label: "Colorist", names: ["LJVE NGUYEN"], italic: true },
        ],
      },
    ],
  },
  {
    id: 5,
    name: "EYESME",
    genre: "Commercial",
    video: "/assets/film/eyesme/video1.mp4",
    images: [
      "/assets/film/eyesme/eyesme1.png",
      "/assets/film/eyesme/eyesme2.png",
      "/assets/film/eyesme/eyesme3.png",
      "/assets/film/eyesme/eyesme4.png",
      "/assets/film/eyesme/eyesme5.png",
    ],
    credit: [
      {
        section: "CREDIT",
        items: [{ label: "Title", names: ['"EYESME" TVC'] }],
      },
      {
        section: "PRODUCTION DEPARTMENT",
        items: [
          { label: "Producer", names: ["Phan Đức Công Anh"] },
          { label: "Production Coordinator", names: ["Gia Ánh"] },
          {
            label: "Assistant Producers",
            names: ["Trung Thành", "Tuấn Khải", "Nhật Quang"],
          },
        ],
      },
      {
        section: "DIRECTION DEPARTMENT",
        items: [
          { label: "Director", names: ["Hizu"] },
          { label: "Screenwriter", names: ["Huy"] },
          { label: "1st Assistant Director", names: ["Linh Chan"] },
          { label: "2nd Assistant Director", names: ["Hồ Minh Phương"] },
          { label: "Script Supervisor", names: ["Nguyễn Khánh Hương"] },
        ],
      },
      {
        section: "CAMERA DEPARTMENT",
        items: [
          { label: "Director of Photography", names: ["Bern"] },
          {
            label: "Camera Operators",
            names: [
              "Lê Tiến Đạt",
              "Phước Võ",
              "Bern (ORMINE)",
              "LJVE NGUYEN (ORMINE)",
            ],
            italic: true,
          },
          { label: "Assistant Camera", names: ["Văn Thành Tiến", "Chí Võ"] },
          {
            label: "Technical",
            names: ["Nguyễn Phúc Anh Khôi", "Huỳnh Trúc Phương"],
          },
        ],
      },
      {
        section: "LIGHTING",
        items: [
          { label: "Gaffer", names: ["LJVE NGUYEN (ORMINE)"], italic: true },
          {
            label: "Lighting Assistant",
            names: ["Quý Hoà", "Nguyễn Phúc Anh Khôi", "Chí Võ", "Lê Tiến Đạt"],
          },
          { label: "Best Boy", names: ["Khương Duy", "Quốc Dũng"] },
        ],
      },
      {
        section: "SOUND DEPARTMENT",
        items: [{ label: "Sound Recordist", names: ["Quang Huấn"] }],
      },
      {
        section: "ART DEPARTMENT",
        items: [
          { label: "Art Director", names: ["Nguyễn Cao Thế Mỹ"] },
          { label: "Set Decorator", names: ["Phúc Sâm"] },
          {
            label: "Assistant Props",
            names: ["Phương Dung", "Uyên Pu", "Trung Thành"],
          },
        ],
      },
      {
        section: "STYLING & MAKEUP",
        items: [
          {
            label: "Stylist",
            names: ["Nguyễn Cao Thế Mỹ", "Phạm Hồng Anh", "Hải Yến"],
          },
          { label: "Makeup Artist", names: ["Chị Mộng (Nate)", "Kim Thư"] },
        ],
      },
      {
        section: "CAST SUPPORT",
        items: [
          {
            label: "Cast Assistants",
            names: ["Uyên Pu", "Hồng Anh", "Hoàng My"],
          },
        ],
      },
      {
        section: "POST PRODUCTION",
        items: [
          { label: "Editor", names: ["LJVE NGUYEN"], italic: true },
          { label: "SFX", names: ["LJVE NGUYEN"], italic: true },
          { label: "Colorist", names: ["Chí Võ", "LJVE NGUYEN"], italic: true },
          { label: "Bern", names: [] },
        ],
      },
      {
        section: "BEHIND THE SCENES",
        items: [
          {
            label: "BTS Photographer",
            names: ["Nguyễn Huỳnh Mai Ngân", "Bé My", "Hồ Phương"],
          },
        ],
      },
      {
        section: "ACCOUNTING",
        items: [
          { label: "Accountant", names: ["Linh Chan", "Hồ Minh Phương"] },
        ],
      },
    ],
  },
];
