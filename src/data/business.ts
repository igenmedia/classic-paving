// Single source of truth for Classic Paving's details.
// Still to come from the client: email, trading address, domain, socials, GBP.

export const business = {
  name: "Classic Paving",
  owner: "John",
  url: "https://www.classicpavingoxford.co.uk",
  base: "Oxford",
  radius: "30-40 miles",
  phones: {
    landline: { display: "01865 389180", tel: "+441865389180" },
    freephone: { display: "0800 191 0611", tel: "+448001910611" },
    mobile: { display: "07362 749788", tel: "+447362749788" },
  },
  geo: { latitude: 51.752, longitude: -1.2577 },
  sameAs: [] as string[],
};

export const services = [
  {
    slug: "block-paving",
    name: "Block Paving Driveways",
    blurb:
      "Proper dig-out, compacted MOT Type 1, sharp sand bed and a kiln-dried sand finish. Laid in herringbone, basketweave or a border and centre to suit the house.",
  },
  {
    slug: "patios",
    name: "Patios",
    blurb:
      "Indian sandstone, porcelain and riven slabs on a full mortar bed, laid to a fall so rain runs away from the house rather than towards it.",
  },
  {
    slug: "resin-tarmac",
    name: "Resin & Tarmac",
    blurb:
      "Resin bound and tarmac surfaces for driveways that need to be smooth, quick to sweep and kind to the drains.",
  },
  {
    slug: "kerbs-edging",
    name: "Kerbs, Edging & Steps",
    blurb:
      "Dropped kerbs, edging, garden steps and walling. The finishing pieces that stop a drive spreading and make the whole job look tidy.",
  },
  {
    slug: "drainage",
    name: "Drainage",
    blurb:
      "Channel drains, soakaways and permeable layouts, so a new front drive meets the rules on surface water without a planning application.",
  },
  {
    slug: "repairs",
    name: "Repairs & Re-laying",
    blurb:
      "Sunken blocks, rocking slabs and tired drives lifted, re-bedded and re-sanded. Sometimes a repair is all you need, and we'll tell you if it is.",
  },
];

export const areas = [
  "Oxford", "Abingdon", "Kidlington", "Botley", "Headington", "Cowley",
  "Witney", "Woodstock", "Eynsham", "Bicester", "Thame", "Wheatley",
  "Didcot", "Wallingford", "Wantage", "Faringdon", "Chipping Norton",
  "Carterton", "Burford", "Henley-on-Thames", "Watlington", "Banbury",
  "Brackley", "Buckingham", "Aylesbury", "Princes Risborough",
  "High Wycombe", "Marlow", "Newbury", "Hungerford", "Reading", "Swindon",
];
