import { petTypeCount, letPetTalkByTypeAndName } from "../exercises/06";

describe("06", () => {
  test("should count pet type correctly", () => {
    const { cat, dog, bird } = petTypeCount();
    expect(cat).toBe(2);
  });

  test("should count sound group by type correctly", () => {
    expect(letPetTalkByTypeAndName("cat", "bengal")).toBe("meow");
    expect(letPetTalkByTypeAndName("cat", "no-name")).toBeUndefined();
    expect(letPetTalkByTypeAndName("dog", "fluffykins")).toBeUndefined();
  });
});
