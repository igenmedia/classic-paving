// John's own job photos, processed from images/raw/ into public/images/
// (EXIF/GPS stripped). No towns in alt text - we don't know where each job was.

export interface Photo {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
}

const g = (name: string, alt: string, caption: string): Photo => ({
  src: `/images/${name}.webp`, alt, width: 600, height: 450, caption,
});

export const hero: Photo | null = {
  src: "/images/block-paving-driveway-charcoal-key-pattern.webp",
  alt: "Charcoal block paving driveway with a cream key-pattern feature and border, behind black railings",
  width: 1170,
  height: 780,
};

export const gallery: Photo[] = [
  g("red-block-paving-driveway-double-border", "Red block paving driveway with a double silver-grey border in front of a semi-detached house", "Red block drive with a double border"),
  g("brindle-herringbone-block-paving-channel-drain", "Brindle herringbone block paving driveway with a red edge and channel drain across the front", "Herringbone drive with a channel drain at the pavement"),
  g("silver-grey-block-paving-driveway-charcoal-border", "Silver-grey block paving driveway with a charcoal border in front of a red-brick house", "Silver-grey drive with a charcoal border"),
  g("grey-herringbone-driveway-front-steps", "Grey herringbone block paving driveway running past new front steps with a light border", "Herringbone drive with new front steps"),
  g("red-block-paving-diamond-feature-front-garden", "Red block paving front garden with a grey diamond feature, between brick gate pillars", "Front garden paved in red block with a diamond feature"),
  g("slate-grey-patio-side-return", "Wet slate-grey riven patio slabs laid along the side of a brick house", "Slate-grey patio along a side return"),
  g("tarmac-driveway-terraced-houses", "New black tarmac driveway with a light edging line in front of terraced houses", "Tarmac driveway, freshly laid"),
  g("block-paving-driveway-being-laid", "Dark grey block paving driveway part way through being laid, with a block cutter and channel drain", "Mid-job: blocks going down on a new drive"),
];

export const beforeAfter = {
  before: {
    src: "/images/gravel-driveway-before.webp",
    alt: "Worn gravel front drive with weeds and a broken edge before the work",
    width: 480, height: 640,
  },
  after: {
    src: "/images/gravel-driveway-after-block-paved-edge.webp",
    alt: "The same front drive after, with fresh gravel and a red block paved edge at the front",
    width: 480, height: 640,
  },
};
