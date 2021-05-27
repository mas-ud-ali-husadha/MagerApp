const StarRating = {
  getStars(rating) {
    const stars = Math.round(rating * 10) / 10;
    const output = [];
    let i = stars;
    let max = 5;
    for (i; i >= 1; i -= 1) {
      output.push('<i class="fa fa-star" aria-hidden="true" style="color: gold;"></i>&nbsp;');
    }

    if (i >= 0.5) {
      max -= 1;
      output.push('<i class="fa fa-star-half-alt" aria-hidden="true" style="color: gold;"></i>&nbsp;');
    }

    while (max > stars) {
      output.push('<i class="far fa-star" aria-hidden="true" style="color: gold;"></i>&nbsp;');
      max -= 1;
    }

    return output.join('');
  },
};

export default StarRating;
