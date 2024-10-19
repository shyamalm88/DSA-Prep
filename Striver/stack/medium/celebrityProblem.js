const celebrity = (M) => {
  // Size of given matrix;
  const n = M.length;

  /* To store count of people who 
        know person of index i */
  let knowMe = new Array(n).fill(0);

  /* To store count of people who 
        the person of index i knows */
  let Iknow = new Array(n).fill(0);

  // Traverse on given matrix
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // If person i knows person j
      if (M[i][j] == 1) {
        knowMe[j]++;
        Iknow[i]++;
      }
    }
  }

  // Traverse for all persons to find the celebrity
  for (let i = 0; i < n; i++) {
    // Return the index of celebrity
    if (knowMe[i] == n - 1 && Iknow[i] == 0) {
      return i;
    }
  }

  // Return -1 if no celebrity is found
  return -1;
};
