// Single source of truth for Classic Paving's details.
// Still to come from the client: trading address, socials, GBP.

export const business = {
  name: "Classic Paving",
  owner: "John",
  url: "https://www.classicpavingoxford.co.uk",
  email: "classpaving1@mail.com",
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
      "Our main line of work. Proper dig-out, compacted sub-base, sharp sand bed and a kiln-dried sand finish, laid in herringbone or straight bond with borders and feature patterns if you want them.",
  },
  {
    slug: "patios",
    name: "Patios",
    blurb:
      "Riven slate, sandstone and porcelain slabs on a full mortar bed, laid to a fall so rain runs away from the house rather than towards it.",
  },
  {
    slug: "tarmac",
    name: "Tarmac Driveways",
    blurb:
      "Tarmac laid hot and rolled over a solid base, with neat edging so the sides don't crumble. A hard-wearing drive for a sensible price.",
  },
  {
    slug: "gravel",
    name: "Gravel Driveways",
    blurb:
      "Fresh gravel over a proper base, held in with block or brick edging so it stays on the drive and off the pavement.",
  },
  {
    slug: "drainage-edging",
    name: "Drainage, Edging & Steps",
    blurb:
      "Channel drains, soakaways, kerbs and front steps. The pieces that keep water off the house and stop a drive spreading.",
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
