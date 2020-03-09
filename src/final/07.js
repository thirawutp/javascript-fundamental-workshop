export const fluffykins = {
  name: "fluffykins",
  color: "white",
  sound: "meow"
};

function getCat() {
  const begal = { ...fluffykins, name: "begal" };
  return begal;
}

export default getCat;
