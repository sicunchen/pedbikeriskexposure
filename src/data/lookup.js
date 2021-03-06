const Superior = [
  3,
  13,
  33,
  41,
  43,
  53,
  61,
  71,
  83,
  95,
  97,
  103,
  109,
  131,
  153,
  -1
];
const NorthBay = [
  1,
  7,
  9,
  19,
  29,
  31,
  39,
  47,
  55,
  69,
  79,
  89,
  101,
  113,
  119,
  129,
  135,
  137,
  141,
  143,
  165,
  11,
  17,
  35,
  49,
  51,
  57,
  63,
  73,
  87,
  111,
  145,
  147,
  151,
  155,
  157,
  -2,
  -4
];

const GMUS = [
  5,
  15,
  67,
  81,
  85,
  105,
  107,
  117,
  121,
  123,
  127,
  133,
  139,
  99,
  125,
  163,
  37,
  45,
  59,
  65,
  75,
  91,
  93,
  115,
  161,
  21,
  23,
  25,
  27,
  77,
  149,
  159,
  -3,
  -5,
  -6,
  -7
];

const SuperNorthBay = [
  3,
  13,
  33,
  41,
  43,
  53,
  61,
  71,
  83,
  95,
  97,
  103,
  109,
  131,
  153,
  1,
  7,
  9,
  19,
  29,
  31,
  39,
  47,
  55,
  69,
  79,
  89,
  101,
  113,
  119,
  129,
  135,
  137,
  141,
  143,
  165,
  11,
  17,
  35,
  49,
  51,
  57,
  63,
  73,
  87,
  111,
  145,
  147,
  151,
  155,
  157,
  -1,
  -2,
  -4
];
const GrandSW = [
  5,
  15,
  67,
  81,
  85,
  105,
  107,
  117,
  121,
  123,
  127,
  133,
  139,
  21,
  23,
  25,
  27,
  77,
  149,
  159,
  -3,
  -5
];

const UniMetro = [37, 45, 59, 65, 75, 91, 93, 115, 161, 99, 125, 163, -6, -7];

const tableLookup = {
  pazSuperior: "1pp4Axxd5C8U7RByKuZsidxmSulBH7YSDTWn25ohQ",
  pazNorthBay: "12Vn0EY7_LJm_kHKsjUnJO4luY-4cekMha6QCiPoG",
  pazGMUS: "1pL3uVpWWEVwXZLUs-LvfSMFSBwd-KL94bT7qxUm9",
  pedroadSuperNorthBay: "1xmTwYnMVqWloOCs2r4CaXLSmmSUAORhTbK4oHJN7",
  pedroadGrandSW: "1M8aJiDnW-DYfP3JGfoWaKS2TtqakFrAGmzyu1az4",
  pedroadUniMetro: "1MhIuLV6ryl1C6wcIhYqyLG7JkdSCu38Vq1lGO8w5",
  bikeroadSuperNorthBay: "1jG6XplSByvnOTrKJsu240CvPj47fi-Buo5CG733v",
  bikeroadGrandSW: "1uVriSHt8mBMmp2-M90TrXHpWeY0KKTuiogaq3p_4",
  bikeroadUniMetro: "1KaSmG9GnL0svhfGWIOyg_PMJvBFCKp3bbwZSc1md"
};

module.exports = {
  paz: { Superior, NorthBay, GMUS },
  road: { SuperNorthBay, GrandSW, UniMetro },
  tableLookup
};
