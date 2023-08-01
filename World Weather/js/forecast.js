const KEY = "96b947a45d33d7dc1c49af3203966408";
const key = "efc0a4c9cb80af206bf07186ed800406";
// bu mening kalitim. Agar o'zingiz olsangiz va ishlamasa buni ishlating.
// Agar ishlamay qolsa unda 1 soatda so'rovlar soni limitdan oshib ketgan bo'ladi.
// Aloqa: Telegram => @akror_web
const getData = async (city) => {
  const one = "https://api.openweathermap.org/data/2.5/weather";
  const twen = `?q=${city}&units=metric&appid=${KEY}`;
  loader(true)
  const req = await fetch(one + twen);
  const data = await req.json();
  loader(false)
  return data;
};
getData("London")
  .then((data) => console.log(data))
//   .catch((err) => console.log(err.massage));
