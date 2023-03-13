type className = string | undefined;
export const cc = (...classNames: className[]) => {
  if (typeof classNames == 'string') {
    return classNames;
  }
  const name = classNames.reduce((prev, it) => {
    if (!it) return prev;
    prev.push(it);
    return prev;
  }, new Array<string>());
  return name.join(' ');
};
