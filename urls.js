const PUAN_URLS = {
    "superLig": "https://www.haberturk.com/spor/iddaa/puandurumu/1/turkiye-super-lig",
    "l3g4": "https://www.haberturk.com/spor/iddaa/puandurumu/63"
}

const FIKSTUR_URLS = {
    "superLig": "https://www.haberturk.com/spor/fikstur/1-turkiye-super-lig",
    "l3g4": "https://www.haberturk.com/spor/iddaa/puandurumu/63"
}

const PUAN_FIKSTUR_SONUC_URLS = {
    "superLig": { "name": "Süper Lig", "url": "https://sporzip.com/super-lig" },
    "l3g4": { "name": "3. Lig 4. Grup", "url": "https://sporzip.com/3-lig-4" },
    "l3g1": { "name": "3. Lig 1. Grup", "url": "https://sporzip.com/3-lig-1" },
    "l3g2": { "name": "3. Lig 2. Grup", "url": "https://sporzip.com/3-lig-2" },
    "l3g3": { "name": "3. Lig 3. Grup", "url": "https://sporzip.com/3-lig-3" },
    "l1": { "name": "Birinci Lig", "url": "https://sporzip.com/1-lig" },
    "l2k": { "name": "2. Lig Kırmızı Grup", "url": "https://sporzip.com/2-lig-kirmizi" },
    "l2b": { "name": "2. Lig Beyaz Grup", "url": "https://sporzip.com/2-lig-beyaz" },
}

const HAVA_URLS = {
  1: {
    plate: 1,
    name: "ADANA",
    urls: {
      hryt: "https://www.hurriyet.com.tr/hava-durumu/adana/",
      trthaber: "https://www.trthaber.com/adana-hava-durumu.html",
    },
    slug: "adana",
  },
  2: {
    plate: 2,
    name: "ADIYAMAN",
    urls: {
      hryt: "https://www.hurriyet.com.tr/hava-durumu/adiyaman/",
      trthaber: "https://www.trthaber.com/adiyaman-hava-durumu.html",
    },
    slug: "adiyaman",
  },
  3: {
    plate: 3,
    name: "AFYONKARAHİSAR",
    urls: {
      hryt: "https://www.hurriyet.com.tr/hava-durumu/afyonkarahisar/",
      trthaber: "https://www.trthaber.com/afyonkarahisar-hava-durumu.html",
    },
    slug: "afyonkarahisar",
  },
  4: {
    plate: 4,
    name: "AĞRI",
    urls: {
      hryt: "https://www.hurriyet.com.tr/hava-durumu/agri/",
      trthaber: "https://www.trthaber.com/agri-hava-durumu.html",
    },
    slug: "agri",
  },
  5: {
    plate: 5,
    name: "AMASYA",
    urls: {
      hryt: "https://www.hurriyet.com.tr/hava-durumu/amasya/",
      trthaber: "https://www.trthaber.com/amasya-hava-durumu.html",
    },
    slug: "amasya",
  },
  6: {
    plate: 6,
    name: "ANKARA",
    urls: {
      hryt: "https://www.hurriyet.com.tr/hava-durumu/ankara/",
      trthaber: "https://www.trthaber.com/ankara-hava-durumu.html",
    },
    slug: "ankara",
  },
  7: {
    plate: 7,
    name: "ANTALYA",
    urls: {
      hryt: "https://www.hurriyet.com.tr/hava-durumu/antalya/",
      trthaber: "https://www.trthaber.com/antalya-hava-durumu.html",
    },
    slug: "antalya",
  },
  8: {
    plate: 8,
    name: "ARTVİN",
    urls: {
      hryt: "https://www.hurriyet.com.tr/hava-durumu/artvin/",
      trthaber: "https://www.trthaber.com/artvin-hava-durumu.html",
    },
    slug: "artvin",
  },
  9: {
    plate: 9,
    name: "AYDIN",
    urls: {
      hryt: "https://www.hurriyet.com.tr/hava-durumu/aydin/",
      trthaber: "https://www.trthaber.com/aydin-hava-durumu.html",
    },
    slug: "aydin",
  },
  10: {
    plate: 10,
    name: "BALIKESİR",
    urls: {
      hryt: "https://www.hurriyet.com.tr/hava-durumu/balikesir/",
      trthaber: "https://www.trthaber.com/balikesir-hava-durumu.html",
    },
    slug: "balikesir",
  },
  11: {
    plate: 11,
    name: "BİLECİK",
    urls: {
      hryt: "https://www.hurriyet.com.tr/hava-durumu/bilecik/",
      trthaber: "https://www.trthaber.com/bilecik-hava-durumu.html",
    },
    slug: "bilecik",
  },
  12: {
    plate: 12,
    name: "BİNGÖL",
    urls: {
      hryt: "https://www.hurriyet.com.tr/hava-durumu/bingol/",
      trthaber: "https://www.trthaber.com/bingol-hava-durumu.html",
    },
    slug: "bingol",
  },
  13: {
    plate: 13,
    name: "BİTLİS",
    urls: {
      hryt: "https://www.hurriyet.com.tr/hava-durumu/bitlis/",
      trthaber: "https://www.trthaber.com/bitlis-hava-durumu.html",
    },
    slug: "bitlis",
  },
  14: {
    plate: 14,
    name: "BOLU",
    urls: {
      hryt: "https://www.hurriyet.com.tr/hava-durumu/bolu/",
      trthaber: "https://www.trthaber.com/bolu-hava-durumu.html",
    },
    slug: "bolu",
  },
  15: {
    plate: 15,
    name: "BURDUR",
    urls: {
      hryt: "https://www.hurriyet.com.tr/hava-durumu/burdur/",
      trthaber: "https://www.trthaber.com/burdur-hava-durumu.html",
    },
    slug: "burdur",
  },
  16: {
    plate: 16,
    name: "BURSA",
    urls: {
      hryt: "https://www.hurriyet.com.tr/hava-durumu/bursa/",
      trthaber: "https://www.trthaber.com/bursa-hava-durumu.html",
    },
    slug: "bursa",
  },
  17: {
    plate: 17,
    name: "ÇANAKKALE",
    urls: {
      hryt: "https://www.hurriyet.com.tr/hava-durumu/canakkale/",
      trthaber: "https://www.trthaber.com/canakkale-hava-durumu.html",
    },
    slug: "canakkale",
  },
  18: {
    plate: 18,
    name: "ÇANKIRI",
    urls: {
      hryt: "https://www.hurriyet.com.tr/hava-durumu/cankiri/",
      trthaber: "https://www.trthaber.com/cankiri-hava-durumu.html",
    },
    slug: "cankiri",
  },
  19: {
    plate: 19,
    name: "ÇORUM",
    urls: {
      hryt: "https://www.hurriyet.com.tr/hava-durumu/corum/",
      trthaber: "https://www.trthaber.com/corum-hava-durumu.html",
    },
    slug: "corum",
  },
  20: {
    plate: 20,
    name: "DENİZLİ",
    urls: {
      hryt: "https://www.hurriyet.com.tr/hava-durumu/denizli/",
      trthaber: "https://www.trthaber.com/denizli-hava-durumu.html",
    },
    slug: "denizli",
  },
  21: {
    plate: 21,
    name: "DİYARBAKIR",
    urls: {
      hryt: "https://www.hurriyet.com.tr/hava-durumu/diyarbakir/",
      trthaber: "https://www.trthaber.com/diyarbakir-hava-durumu.html",
    },
    slug: "diyarbakir",
  },
  22: {
    plate: 22,
    name: "EDİRNE",
    urls: {
      hryt: "https://www.hurriyet.com.tr/hava-durumu/edirne/",
      trthaber: "https://www.trthaber.com/edirne-hava-durumu.html",
    },
    slug: "edirne",
  },
  23: {
    plate: 23,
    name: "ELAZIĞ",
    urls: {
      hryt: "https://www.hurriyet.com.tr/hava-durumu/elazig/",
      trthaber: "https://www.trthaber.com/elazig-hava-durumu.html",
    },
    slug: "elazig",
  },
  24: {
    plate: 24,
    name: "ERZİNCAN",
    urls: {
      hryt: "https://www.hurriyet.com.tr/hava-durumu/erzincan/",
      trthaber: "https://www.trthaber.com/erzincan-hava-durumu.html",
    },
    slug: "erzincan",
  },
  25: {
    plate: 25,
    name: "ERZURUM",
    urls: {
      hryt: "https://www.hurriyet.com.tr/hava-durumu/erzurum/",
      trthaber: "https://www.trthaber.com/erzurum-hava-durumu.html",
    },
    slug: "erzurum",
  },
  26: {
    plate: 26,
    name: "ESKİŞEHİR",
    urls: {
      hryt: "https://www.hurriyet.com.tr/hava-durumu/eskisehir/",
      trthaber: "https://www.trthaber.com/eskisehir-hava-durumu.html",
    },
    slug: "eskisehir",
  },
  27: {
    plate: 27,
    name: "GAZİANTEP",
    urls: {
      hryt: "https://www.hurriyet.com.tr/hava-durumu/gaziantep/",
      trthaber: "https://www.trthaber.com/gaziantep-hava-durumu.html",
    },
    slug: "gaziantep",
  },
  28: {
    plate: 28,
    name: "GİRESUN",
    urls: {
      hryt: "https://www.hurriyet.com.tr/hava-durumu/giresun/",
      trthaber: "https://www.trthaber.com/giresun-hava-durumu.html",
    },
    slug: "giresun",
  },
  29: {
    plate: 29,
    name: "GÜMÜŞHANE",
    urls: {
      hryt: "https://www.hurriyet.com.tr/hava-durumu/gumushane/",
      trthaber: "https://www.trthaber.com/gumushane-hava-durumu.html",
    },
    slug: "gumushane",
  },
  30: {
    plate: 30,
    name: "HAKKARİ",
    urls: {
      hryt: "https://www.hurriyet.com.tr/hava-durumu/hakkari/",
      trthaber: "https://www.trthaber.com/hakkari-hava-durumu.html",
    },
    slug: "hakkari",
  },
  31: {
    plate: 31,
    name: "HATAY",
    urls: {
      hryt: "https://www.hurriyet.com.tr/hava-durumu/hatay/",
      trthaber: "https://www.trthaber.com/hatay-hava-durumu.html",
    },
    slug: "hatay",
  },
  32: {
    plate: 32,
    name: "ISPARTA",
    urls: {
      hryt: "https://www.hurriyet.com.tr/hava-durumu/isparta/",
      trthaber: "https://www.trthaber.com/isparta-hava-durumu.html",
    },
    slug: "isparta",
  },
  33: {
    plate: 33,
    name: "MERSİN(İÇEL)",
    urls: {
      hryt: "https://www.hurriyet.com.tr/hava-durumu/mersin/",
      trthaber: "https://www.trthaber.com/mersin-hava-durumu.html",
    },
    slug: "mersin",
  },
  34: {
    plate: 34,
    name: "İSTANBUL",
    urls: {
      hryt: "https://www.hurriyet.com.tr/hava-durumu/istanbul/",
      trthaber: "https://www.trthaber.com/istanbul-hava-durumu.html",
    },
    slug: "istanbul",
  },
  35: {
    plate: 35,
    name: "İZMİR",
    urls: {
      hryt: "https://www.hurriyet.com.tr/hava-durumu/izmir/",
      trthaber: "https://www.trthaber.com/izmir-hava-durumu.html",
    },
    slug: "izmir",
  },
  36: {
    plate: 36,
    name: "KARS",
    urls: {
      hryt: "https://www.hurriyet.com.tr/hava-durumu/kars/",
      trthaber: "https://www.trthaber.com/kars-hava-durumu.html",
    },
    slug: "kars",
  },
  37: {
    plate: 37,
    name: "KASTAMONU",
    urls: {
      hryt: "https://www.hurriyet.com.tr/hava-durumu/kastamonu/",
      trthaber: "https://www.trthaber.com/kastamonu-hava-durumu.html",
    },
    slug: "kastamonu",
  },
  38: {
    plate: 38,
    name: "KAYSERİ",
    urls: {
      hryt: "https://www.hurriyet.com.tr/hava-durumu/kayseri/",
      trthaber: "https://www.trthaber.com/kayseri-hava-durumu.html",
    },
    slug: "kayseri",
  },
  39: {
    plate: 39,
    name: "KIRKLARELİ",
    urls: {
      hryt: "https://www.hurriyet.com.tr/hava-durumu/kirklareli/",
      trthaber: "https://www.trthaber.com/kirklareli-hava-durumu.html",
    },
    slug: "kirklareli",
  },
  40: {
    plate: 40,
    name: "KIRŞEHİR",
    urls: {
      hryt: "https://www.hurriyet.com.tr/hava-durumu/kirsehir/",
      trthaber: "https://www.trthaber.com/kirsehir-hava-durumu.html",
    },
    slug: "kirsehir",
  },
  41: {
    plate: 41,
    name: "KOCAELİ",
    urls: {
      hryt: "https://www.hurriyet.com.tr/hava-durumu/kocaeli/",
      trthaber: "https://www.trthaber.com/kocaeli-hava-durumu.html",
    },
    slug: "kocaeli",
  },
  42: {
    plate: 42,
    name: "KONYA",
    urls: {
      hryt: "https://www.hurriyet.com.tr/hava-durumu/konya/",
      trthaber: "https://www.trthaber.com/konya-hava-durumu.html",
    },
    slug: "konya",
  },
  43: {
    plate: 43,
    name: "KÜTAHYA",
    urls: {
      hryt: "https://www.hurriyet.com.tr/hava-durumu/kutahya/",
      trthaber: "https://www.trthaber.com/kutahya-hava-durumu.html",
    },
    slug: "kutahya",
  },
  44: {
    plate: 44,
    name: "MALATYA",
    urls: {
      hryt: "https://www.hurriyet.com.tr/hava-durumu/malatya/",
      trthaber: "https://www.trthaber.com/malatya-hava-durumu.html",
    },
    slug: "malatya",
  },
  45: {
    plate: 45,
    name: "MANİSA",
    urls: {
      hryt: "https://www.hurriyet.com.tr/hava-durumu/manisa/",
      trthaber: "https://www.trthaber.com/manisa-hava-durumu.html",
    },
    slug: "manisa",
  },
  46: {
    plate: 46,
    name: "KAHRAMANMARAŞ",
    urls: {
      hryt: "https://www.hurriyet.com.tr/hava-durumu/kahramanmaras/",
      trthaber: "https://www.trthaber.com/kahramanmaras-hava-durumu.html",
    },
    slug: "kahramanmaras",
  },
  47: {
    plate: 47,
    name: "MARDİN",
    urls: {
      hryt: "https://www.hurriyet.com.tr/hava-durumu/mardin/",
      trthaber: "https://www.trthaber.com/mardin-hava-durumu.html",
    },
    slug: "mardin",
  },
  48: {
    plate: 48,
    name: "MUĞLA",
    urls: {
      hryt: "https://www.hurriyet.com.tr/hava-durumu/mugla/",
      trthaber: "https://www.trthaber.com/mugla-hava-durumu.html",
    },
    slug: "mugla",
  },
  49: {
    plate: 49,
    name: "MUŞ",
    urls: {
      hryt: "https://www.hurriyet.com.tr/hava-durumu/mus/",
      trthaber: "https://www.trthaber.com/mus-hava-durumu.html",
    },
    slug: "mus",
  },
  50: {
    plate: 50,
    name: "NEVŞEHİR",
    urls: {
      hryt: "https://www.hurriyet.com.tr/hava-durumu/nevsehir/",
      trthaber: "https://www.trthaber.com/nevsehir-hava-durumu.html",
    },
    slug: "nevsehir",
  },
  51: {
    plate: 51,
    name: "NİĞDE",
    urls: {
      hryt: "https://www.hurriyet.com.tr/hava-durumu/nigde/",
      trthaber: "https://www.trthaber.com/nigde-hava-durumu.html",
    },
    slug: "nigde",
  },
  52: {
    plate: 52,
    name: "ORDU",
    urls: {
      hryt: "https://www.hurriyet.com.tr/hava-durumu/ordu/",
      trthaber: "https://www.trthaber.com/ordu-hava-durumu.html",
    },
    slug: "ordu",
  },
  53: {
    plate: 53,
    name: "RİZE",
    urls: {
      hryt: "https://www.hurriyet.com.tr/hava-durumu/rize/",
      trthaber: "https://www.trthaber.com/rize-hava-durumu.html",
    },
    slug: "rize",
  },
  54: {
    plate: 54,
    name: "SAKARYA",
    urls: {
      hryt: "https://www.hurriyet.com.tr/hava-durumu/sakarya/",
      trthaber: "https://www.trthaber.com/sakarya-hava-durumu.html",
    },
    slug: "sakarya",
  },
  55: {
    plate: 55,
    name: "SAMSUN",
    urls: {
      hryt: "https://www.hurriyet.com.tr/hava-durumu/samsun/",
      trthaber: "https://www.trthaber.com/samsun-hava-durumu.html",
    },
    slug: "samsun",
  },
  56: {
    plate: 56,
    name: "SİİRT",
    urls: {
      hryt: "https://www.hurriyet.com.tr/hava-durumu/siirt/",
      trthaber: "https://www.trthaber.com/siirt-hava-durumu.html",
    },
    slug: "siirt",
  },
  57: {
    plate: 57,
    name: "SİNOP",
    urls: {
      hryt: "https://www.hurriyet.com.tr/hava-durumu/sinop/",
      trthaber: "https://www.trthaber.com/sinop-hava-durumu.html",
    },
    slug: "sinop",
  },
  58: {
    plate: 58,
    name: "SİVAS",
    urls: {
      hryt: "https://www.hurriyet.com.tr/hava-durumu/sivas/",
      trthaber: "https://www.trthaber.com/sivas-hava-durumu.html",
    },
    slug: "sivas",
  },
  59: {
    plate: 59,
    name: "TEKİRDAĞ",
    urls: {
      hryt: "https://www.hurriyet.com.tr/hava-durumu/tekirdag/",
      trthaber: "https://www.trthaber.com/tekirdag-hava-durumu.html",
    },
    slug: "tekirdag",
  },
  60: {
    plate: 60,
    name: "TOKAT",
    urls: {
      hryt: "https://www.hurriyet.com.tr/hava-durumu/tokat/",
      trthaber: "https://www.trthaber.com/tokat-hava-durumu.html",
    },
    slug: "tokat",
  },
  61: {
    plate: 61,
    name: "TRABZON",
    urls: {
      hryt: "https://www.hurriyet.com.tr/hava-durumu/trabzon/",
      trthaber: "https://www.trthaber.com/trabzon-hava-durumu.html",
    },
    slug: "trabzon",
  },
  62: {
    plate: 62,
    name: "TUNCELİ",
    urls: {
      hryt: "https://www.hurriyet.com.tr/hava-durumu/tunceli/",
      trthaber: "https://www.trthaber.com/tunceli-hava-durumu.html",
    },
    slug: "tunceli",
  },
  63: {
    plate: 63,
    name: "ŞANLIURFA",
    urls: {
      hryt: "https://www.hurriyet.com.tr/hava-durumu/sanliurfa/",
      trthaber: "https://www.trthaber.com/sanliurfa-hava-durumu.html",
    },
    slug: "sanliurfa",
  },
  64: {
    plate: 64,
    name: "UŞAK",
    urls: {
      hryt: "https://www.hurriyet.com.tr/hava-durumu/usak/",
      trthaber: "https://www.trthaber.com/usak-hava-durumu.html",
    },
    slug: "usak",
  },
  65: {
    plate: 65,
    name: "VAN",
    urls: {
      hryt: "https://www.hurriyet.com.tr/hava-durumu/van/",
      trthaber: "https://www.trthaber.com/van-hava-durumu.html",
    },
    slug: "van",
  },
  66: {
    plate: 66,
    name: "YOZGAT",
    urls: {
      hryt: "https://www.hurriyet.com.tr/hava-durumu/yozgat/",
      trthaber: "https://www.trthaber.com/yozgat-hava-durumu.html",
    },
    slug: "yozgat",
  },
  67: {
    plate: 67,
    name: "ZONGULDAK",
    urls: {
      hryt: "https://www.hurriyet.com.tr/hava-durumu/zonguldak/",
      trthaber: "https://www.trthaber.com/zonguldak-hava-durumu.html",
    },
    slug: "zonguldak",
  },
  68: {
    plate: 68,
    name: "AKSARAY",
    urls: {
      hryt: "https://www.hurriyet.com.tr/hava-durumu/aksaray/",
      trthaber: "https://www.trthaber.com/aksaray-hava-durumu.html",
    },
    slug: "aksaray",
  },
  69: {
    plate: 69,
    name: "BAYBURT",
    urls: {
      hryt: "https://www.hurriyet.com.tr/hava-durumu/bayburt/",
      trthaber: "https://www.trthaber.com/bayburt-hava-durumu.html",
    },
    slug: "bayburt",
  },
  70: {
    plate: 70,
    name: "KARAMAN",
    urls: {
      hryt: "https://www.hurriyet.com.tr/hava-durumu/karaman/",
      trthaber: "https://www.trthaber.com/karaman-hava-durumu.html",
    },
    slug: "karaman",
  },
  71: {
    plate: 71,
    name: "KIRIKKALE",
    urls: {
      hryt: "https://www.hurriyet.com.tr/hava-durumu/kirikkale/",
      trthaber: "https://www.trthaber.com/kirikkale-hava-durumu.html",
    },
    slug: "kirikkale",
  },
  72: {
    plate: 72,
    name: "BATMAN",
    urls: {
      hryt: "https://www.hurriyet.com.tr/hava-durumu/batman/",
      trthaber: "https://www.trthaber.com/batman-hava-durumu.html",
    },
    slug: "batman",
  },
  73: {
    plate: 73,
    name: "ŞIRNAK",
    urls: {
      hryt: "https://www.hurriyet.com.tr/hava-durumu/sirnak/",
      trthaber: "https://www.trthaber.com/sirnak-hava-durumu.html",
    },
    slug: "sirnak",
  },
  74: {
    plate: 74,
    name: "BARTIN",
    urls: {
      hryt: "https://www.hurriyet.com.tr/hava-durumu/bartin/",
      trthaber: "https://www.trthaber.com/bartin-hava-durumu.html",
    },
    slug: "bartin",
  },
  75: {
    plate: 75,
    name: "ARDAHAN",
    urls: {
      hryt: "https://www.hurriyet.com.tr/hava-durumu/ardahan/",
      trthaber: "https://www.trthaber.com/ardahan-hava-durumu.html",
    },
    slug: "ardahan",
  },
  76: {
    plate: 76,
    name: "IĞDIR",
    urls: {
      hryt: "https://www.hurriyet.com.tr/hava-durumu/igdir/",
      trthaber: "https://www.trthaber.com/igdir-hava-durumu.html",
    },
    slug: "igdir",
  },
  77: {
    plate: 77,
    name: "YALOVA",
    urls: {
      hryt: "https://www.hurriyet.com.tr/hava-durumu/yalova/",
      trthaber: "https://www.trthaber.com/yalova-hava-durumu.html",
    },
    slug: "yalova",
  },
  78: {
    plate: 78,
    name: "KARABÜK",
    urls: {
      hryt: "https://www.hurriyet.com.tr/hava-durumu/karabuk/",
      trthaber: "https://www.trthaber.com/karabuk-hava-durumu.html",
    },
    slug: "karabuk",
  },
  79: {
    plate: 79,
    name: "KİLİS",
    urls: {
      hryt: "https://www.hurriyet.com.tr/hava-durumu/kilis/",
      trthaber: "https://www.trthaber.com/kilis-hava-durumu.html",
    },
    slug: "kilis",
  },
  80: {
    plate: 80,
    name: "OSMANİYE",
    urls: {
      hryt: "https://www.hurriyet.com.tr/hava-durumu/osmaniye/",
      trthaber: "https://www.trthaber.com/osmaniye-hava-durumu.html",
    },
    slug: "osmaniye",
  },
  81: {
    plate: 81,
    name: "DÜZCE",
    urls: {
      hryt: "https://www.hurriyet.com.tr/hava-durumu/duzce/",
      trthaber: "https://www.trthaber.com/duzce-hava-durumu.html",
    },
    slug: "duzce",
  },
};




module.exports = { PUAN_URLS, FIKSTUR_URLS, PUAN_FIKSTUR_SONUC_URLS, HAVA_URLS }
