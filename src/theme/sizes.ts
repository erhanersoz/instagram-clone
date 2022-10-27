enum Spacing {
  XXS = 4,
  XS = 8,
  SM = 10,
  MD = 16,
  LG = 24,
  XL = 32,
  XXL = 40,
  SCREEN = 16,
  INPUT_TOP_GAP = 4,
  INPUT_LABEL_HEIGHT = 6,
  INPUT_LEFT_MARGIN_TOP = 14,
}

enum BorderRadius {
  DEFAULT = 6,
  CARD = 10,
  FULL = 9999,
}

const sizes = {
  spacing: Spacing,
  borderRadius: BorderRadius,
};

export type ThemeSizes = typeof sizes;

export default sizes;
