const getLetters = (formulas: string[] | string): string[] => {
  const letters: Set<string> = new Set();

  if (Array.isArray(formulas)) {
    for (const formula of formulas) {
      const letterMatches = formula
        .slice(formula.indexOf("=") + 1)
        .match(/[A-Za-z]/g);

      if (letterMatches) {
        letterMatches.forEach((letter) => {
          letters.add(letter);
        });
      }
    }
    return Array.from(letters);
  }

  const letterMatches = formulas
    .slice(formulas.indexOf("=") + 1)
    .match(/[A-Za-z]/g);

  if (letterMatches) {
    letterMatches.forEach((letter) => {
      letters.add(letter);
    });
    return Array.from(letters);
  }

  return [];
};

export default getLetters;
