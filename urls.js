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
    urls: { hryt: "https://www.hurriyet.com.tr/hava-durumu/adana/" },
  },
  2: {
    plate: 2,
    name: "ADIYAMAN",
    urls: { hryt: "https://www.hurriyet.com.tr/hava-durumu/adiyaman/" },
  },
  3: {
    plate: 3,
    name: "AFYONKARAHİSAR",
    urls: { hryt: "https://www.hurriyet.com.tr/hava-durumu/afyonkarahisar/" },
  },
  4: {
    plate: 4,
    name: "AĞRI",
    urls: { hryt: "https://www.hurriyet.com.tr/hava-durumu/agri/" },
  },
  5: {
    plate: 5,
    name: "AMASYA",
    urls: { hryt: "https://www.hurriyet.com.tr/hava-durumu/amasya/" },
  },
  6: {
    plate: 6,
    name: "ANKARA",
    urls: { hryt: "https://www.hurriyet.com.tr/hava-durumu/ankara/" },
  },
  7: {
    plate: 7,
    name: "ANTALYA",
    urls: { hryt: "https://www.hurriyet.com.tr/hava-durumu/antalya/" },
  },
  8: {
    plate: 8,
    name: "ARTVİN",
    urls: { hryt: "https://www.hurriyet.com.tr/hava-durumu/artvin/" },
  },
  9: {
    plate: 9,
    name: "AYDIN",
    urls: { hryt: "https://www.hurriyet.com.tr/hava-durumu/aydin/" },
  },
  10: {
    plate: 10,
    name: "BALIKESİR",
    urls: { hryt: "https://www.hurriyet.com.tr/hava-durumu/balikesir/" },
  },
  11: {
    plate: 11,
    name: "BİLECİK",
    urls: { hryt: "https://www.hurriyet.com.tr/hava-durumu/bilecik/" },
  },
  12: {
    plate: 12,
    name: "BİNGÖL",
    urls: { hryt: "https://www.hurriyet.com.tr/hava-durumu/bingol/" },
  },
  13: {
    plate: 13,
    name: "BİTLİS",
    urls: { hryt: "https://www.hurriyet.com.tr/hava-durumu/bitlis/" },
  },
  14: {
    plate: 14,
    name: "BOLU",
    urls: { hryt: "https://www.hurriyet.com.tr/hava-durumu/bolu/" },
  },
  15: {
    plate: 15,
    name: "BURDUR",
    urls: { hryt: "https://www.hurriyet.com.tr/hava-durumu/burdur/" },
  },
  16: {
    plate: 16,
    name: "BURSA",
    urls: { hryt: "https://www.hurriyet.com.tr/hava-durumu/bursa/" },
  },
  17: {
    plate: 17,
    name: "ÇANAKKALE",
    urls: { hryt: "https://www.hurriyet.com.tr/hava-durumu/canakkale/" },
  },
  18: {
    plate: 18,
    name: "ÇANKIRI",
    urls: { hryt: "https://www.hurriyet.com.tr/hava-durumu/cankiri/" },
  },
  19: {
    plate: 19,
    name: "ÇORUM",
    urls: { hryt: "https://www.hurriyet.com.tr/hava-durumu/corum/" },
  },
  20: {
    plate: 20,
    name: "DENİZLİ",
    urls: { hryt: "https://www.hurriyet.com.tr/hava-durumu/denizli/" },
  },
  21: {
    plate: 21,
    name: "DİYARBAKIR",
    urls: { hryt: "https://www.hurriyet.com.tr/hava-durumu/diyarbakir/" },
  },
  22: {
    plate: 22,
    name: "EDİRNE",
    urls: { hryt: "https://www.hurriyet.com.tr/hava-durumu/edirne/" },
  },
  23: {
    plate: 23,
    name: "ELAZIĞ",
    urls: { hryt: "https://www.hurriyet.com.tr/hava-durumu/elazig/" },
  },
  24: {
    plate: 24,
    name: "ERZİNCAN",
    urls: { hryt: "https://www.hurriyet.com.tr/hava-durumu/erzincan/" },
  },
  25: {
    plate: 25,
    name: "ERZURUM",
    urls: { hryt: "https://www.hurriyet.com.tr/hava-durumu/erzurum/" },
  },
  26: {
    plate: 26,
    name: "ESKİŞEHİR",
    urls: { hryt: "https://www.hurriyet.com.tr/hava-durumu/eskisehir/" },
  },
  27: {
    plate: 27,
    name: "GAZİANTEP",
    urls: { hryt: "https://www.hurriyet.com.tr/hava-durumu/gaziantep/" },
  },
  28: {
    plate: 28,
    name: "GİRESUN",
    urls: { hryt: "https://www.hurriyet.com.tr/hava-durumu/giresun/" },
  },
  29: {
    plate: 29,
    name: "GÜMÜŞHANE",
    urls: { hryt: "https://www.hurriyet.com.tr/hava-durumu/gumushane/" },
  },
  30: {
    plate: 30,
    name: "HAKKARİ",
    urls: { hryt: "https://www.hurriyet.com.tr/hava-durumu/hakkari/" },
  },
  31: {
    plate: 31,
    name: "HATAY",
    urls: { hryt: "https://www.hurriyet.com.tr/hava-durumu/hatay/" },
  },
  32: {
    plate: 32,
    name: "ISPARTA",
    urls: { hryt: "https://www.hurriyet.com.tr/hava-durumu/isparta/" },
  },
  33: {
    plate: 33,
    name: "MERSİN(İÇEL)",
    urls: { hryt: "https://www.hurriyet.com.tr/hava-durumu/mersin/" },
  },
  34: {
    plate: 34,
    name: "İSTANBUL",
    urls: { hryt: "https://www.hurriyet.com.tr/hava-durumu/istanbul/" },
  },
  35: {
    plate: 35,
    name: "İZMİR",
    urls: { hryt: "https://www.hurriyet.com.tr/hava-durumu/izmir/" },
  },
  36: {
    plate: 36,
    name: "KARS",
    urls: { hryt: "https://www.hurriyet.com.tr/hava-durumu/kars/" },
  },
  37: {
    plate: 37,
    name: "KASTAMONU",
    urls: { hryt: "https://www.hurriyet.com.tr/hava-durumu/kastamonu/" },
  },
  38: {
    plate: 38,
    name: "KAYSERİ",
    urls: { hryt: "https://www.hurriyet.com.tr/hava-durumu/kayseri/" },
  },
  39: {
    plate: 39,
    name: "KIRKLARELİ",
    urls: { hryt: "https://www.hurriyet.com.tr/hava-durumu/kirklareli/" },
  },
  40: {
    plate: 40,
    name: "KIRŞEHİR",
    urls: { hryt: "https://www.hurriyet.com.tr/hava-durumu/kirsehir/" },
  },
  41: {
    plate: 41,
    name: "KOCAELİ",
    urls: { hryt: "https://www.hurriyet.com.tr/hava-durumu/kocaeli/" },
  },
  42: {
    plate: 42,
    name: "KONYA",
    urls: { hryt: "https://www.hurriyet.com.tr/hava-durumu/konya/" },
  },
  43: {
    plate: 43,
    name: "KÜTAHYA",
    urls: { hryt: "https://www.hurriyet.com.tr/hava-durumu/kutahya/" },
  },
  44: {
    plate: 44,
    name: "MALATYA",
    urls: { hryt: "https://www.hurriyet.com.tr/hava-durumu/malatya/" },
  },
  45: {
    plate: 45,
    name: "MANİSA",
    urls: { hryt: "https://www.hurriyet.com.tr/hava-durumu/manisa/" },
  },
  46: {
    plate: 46,
    name: "KAHRAMANMARAŞ",
    urls: { hryt: "https://www.hurriyet.com.tr/hava-durumu/kahramanmaras/" },
  },
  47: {
    plate: 47,
    name: "MARDİN",
    urls: { hryt: "https://www.hurriyet.com.tr/hava-durumu/mardin/" },
  },
  48: {
    plate: 48,
    name: "MUĞLA",
    urls: { hryt: "https://www.hurriyet.com.tr/hava-durumu/mugla/" },
  },
  49: {
    plate: 49,
    name: "MUŞ",
    urls: { hryt: "https://www.hurriyet.com.tr/hava-durumu/mus/" },
  },
  50: {
    plate: 50,
    name: "NEVŞEHİR",
    urls: { hryt: "https://www.hurriyet.com.tr/hava-durumu/nevsehir/" },
  },
  51: {
    plate: 51,
    name: "NİĞDE",
    urls: { hryt: "https://www.hurriyet.com.tr/hava-durumu/nigde/" },
  },
  52: {
    plate: 52,
    name: "ORDU",
    urls: { hryt: "https://www.hurriyet.com.tr/hava-durumu/ordu/" },
  },
  53: {
    plate: 53,
    name: "RİZE",
    urls: { hryt: "https://www.hurriyet.com.tr/hava-durumu/rize/" },
  },
  54: {
    plate: 54,
    name: "SAKARYA",
    urls: { hryt: "https://www.hurriyet.com.tr/hava-durumu/sakarya/" },
  },
  55: {
    plate: 55,
    name: "SAMSUN",
    urls: { hryt: "https://www.hurriyet.com.tr/hava-durumu/samsun/" },
  },
  56: {
    plate: 56,
    name: "SİİRT",
    urls: { hryt: "https://www.hurriyet.com.tr/hava-durumu/siirt/" },
  },
  57: {
    plate: 57,
    name: "SİNOP",
    urls: { hryt: "https://www.hurriyet.com.tr/hava-durumu/sinop/" },
  },
  58: {
    plate: 58,
    name: "SİVAS",
    urls: { hryt: "https://www.hurriyet.com.tr/hava-durumu/sivas/" },
  },
  59: {
    plate: 59,
    name: "TEKİRDAĞ",
    urls: { hryt: "https://www.hurriyet.com.tr/hava-durumu/tekirdag/" },
  },
  60: {
    plate: 60,
    name: "TOKAT",
    urls: { hryt: "https://www.hurriyet.com.tr/hava-durumu/tokat/" },
  },
  61: {
    plate: 61,
    name: "TRABZON",
    urls: { hryt: "https://www.hurriyet.com.tr/hava-durumu/trabzon/" },
  },
  62: {
    plate: 62,
    name: "TUNCELİ",
    urls: { hryt: "https://www.hurriyet.com.tr/hava-durumu/tunceli/" },
  },
  63: {
    plate: 63,
    name: "ŞANLIURFA",
    urls: { hryt: "https://www.hurriyet.com.tr/hava-durumu/sanliurfa/" },
  },
  64: {
    plate: 64,
    name: "UŞAK",
    urls: { hryt: "https://www.hurriyet.com.tr/hava-durumu/usak/" },
  },
  65: {
    plate: 65,
    name: "VAN",
    urls: { hryt: "https://www.hurriyet.com.tr/hava-durumu/van/" },
  },
  66: {
    plate: 66,
    name: "YOZGAT",
    urls: { hryt: "https://www.hurriyet.com.tr/hava-durumu/yozgat/" },
  },
  67: {
    plate: 67,
    name: "ZONGULDAK",
    urls: { hryt: "https://www.hurriyet.com.tr/hava-durumu/zonguldak/" },
  },
  68: {
    plate: 68,
    name: "AKSARAY",
    urls: { hryt: "https://www.hurriyet.com.tr/hava-durumu/aksaray/" },
  },
  69: {
    plate: 69,
    name: "BAYBURT",
    urls: { hryt: "https://www.hurriyet.com.tr/hava-durumu/bayburt/" },
  },
  70: {
    plate: 70,
    name: "KARAMAN",
    urls: { hryt: "https://www.hurriyet.com.tr/hava-durumu/karaman/" },
  },
  71: {
    plate: 71,
    name: "KIRIKKALE",
    urls: { hryt: "https://www.hurriyet.com.tr/hava-durumu/kirikkale/" },
  },
  72: {
    plate: 72,
    name: "BATMAN",
    urls: { hryt: "https://www.hurriyet.com.tr/hava-durumu/batman/" },
  },
  73: {
    plate: 73,
    name: "ŞIRNAK",
    urls: { hryt: "https://www.hurriyet.com.tr/hava-durumu/sirnak/" },
  },
  74: {
    plate: 74,
    name: "BARTIN",
    urls: { hryt: "https://www.hurriyet.com.tr/hava-durumu/bartin/" },
  },
  75: {
    plate: 75,
    name: "ARDAHAN",
    urls: { hryt: "https://www.hurriyet.com.tr/hava-durumu/ardahan/" },
  },
  76: {
    plate: 76,
    name: "IĞDIR",
    urls: { hryt: "https://www.hurriyet.com.tr/hava-durumu/igdir/" },
  },
  77: {
    plate: 77,
    name: "YALOVA",
    urls: { hryt: "https://www.hurriyet.com.tr/hava-durumu/yalova/" },
  },
  78: {
    plate: 78,
    name: "KARABÜK",
    urls: { hryt: "https://www.hurriyet.com.tr/hava-durumu/karabuk/" },
  },
  79: {
    plate: 79,
    name: "KİLİS",
    urls: { hryt: "https://www.hurriyet.com.tr/hava-durumu/kilis/" },
  },
  80: {
    plate: 80,
    name: "OSMANİYE",
    urls: { hryt: "https://www.hurriyet.com.tr/hava-durumu/osmaniye/" },
  },
  81: {
    plate: 81,
    name: "DÜZCE",
    urls: { hryt: "https://www.hurriyet.com.tr/hava-durumu/duzce/" },
  },
};




module.exports = { PUAN_URLS, FIKSTUR_URLS, PUAN_FIKSTUR_SONUC_URLS, HAVA_URLS }
