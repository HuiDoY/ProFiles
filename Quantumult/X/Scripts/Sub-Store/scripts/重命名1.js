function operator(proxies) {
  const numbers = ["𝟘", "𝟙", "𝟚", "𝟛", "𝟜", "𝟝", "𝟞", "𝟟", "𝟠", "𝟡"];
  return proxies.map((p) => {
    for (let i = 0; i < numbers.length; i++) {
      p.name = p.name.replace(`${i}`, numbers[i]);
    }
    return p;
  });
}
