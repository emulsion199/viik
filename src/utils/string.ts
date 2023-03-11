export const cc = (...classNames: string[]) => {
  if (typeof classNames == "string") {
    return classNames;
  }
  const name = classNames.reduce((prev, it) => {
    if (!it) return prev;
    prev.push(it);
    return prev;
  }, new Array<string>());
  return name.join(" ");
};
