const getRandomInt = (min, max): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
};

const randomCat = {
  foo: 'foo',
  baz: 'baz',
  loadACat: async (): Promise<{ url: string }> => {
    console.log("Woof, I'm an async function that gets a random dog....");
    const width = getRandomInt(100, 1028);
    const height = getRandomInt(100, 700);
    const cat = await fetch(`http://placedog.net/${width}/${height}`);
    console.log('woof! woof! 🐈 🐈 🐈 🐈 i have a dog!!!!', cat, cat.url);
    const img = document.createElement('img') as HTMLImageElement;
    img.src = cat.url;
    document.body.appendChild(img);
    return cat;
  },
};

export { randomCat };
