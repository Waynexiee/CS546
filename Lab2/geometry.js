function checkIsProperNumber(val, variableName) {
  if (typeof val !== "number") {
    throw `${variableName || "provided variable"} is not a number`;
  }

  if (isNaN(val)) {
    throw '${variableName || "provided variable"} is NaN';
  }
}

module.exports = {
  volumeOfRectangularPrism: (length, width, height) => {
    checkIsProperNumber(length, "length");
    checkIsProperNumber(width, "width");
    checkIsProperNumber(height, "height");

    if (length <= 0) {
      throw "length should be greater than 0";
    }

    if (width <= 0) {
      throw "width should be greater than 0";
    }

    if (height <= 0) {
      throw "height should be greater than 0";
    }

    return length * width * height;
  },

  surfaceAreaOfRectangularPrism: (length, width, height) => {
    checkIsProperNumber(length, "length");
    checkIsProperNumber(width, "width");
    checkIsProperNumber(height, "height");

    if (length <= 0) {
      throw "length should be greater than 0";
    }

    if (width <= 0) {
      throw "width should be greater than 0";
    }

    if (height <= 0) {
      throw "height should be greater than 0";
    }

    return 2 * (length * width + length * height + width * height);
  },

  volumeOfSphere: (radius) => {
    checkIsProperNumber(radius, "radius");

    if (radius <= 0) {
      throw "radius should be greater than 0";
    }

    return 4 * Math.PI * Math.pow(radius, 3) / 3;
  },

  surfaceAreaOfSphere: (radius) => {
    checkIsProperNumber(radius, "radius");

    if (radius <= 0) {
      throw "radius should be greater than 0";
    }

    return 4* Math.PI * Math.pow(radius, 2);
  }
};