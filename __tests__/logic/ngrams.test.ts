import { main_function_n_grams } from '../../src/logic/ngrams';
describe("Check n-grams", () => {
  afterEach(() => {
        jest.clearAllMocks();
  });
  test("check n===0", () => {
    const chain = "Show me the code.";
    const result = main_function_n_grams(0, chain);
    expect(result).toEqual([]);
  });
  test("check n<0", () => {
    const chain = "Show me the code.";
    const result = main_function_n_grams(-1, chain);
    expect(result).toEqual([]);
  });
  test("n === chain length", () => {
    const chain = "Show me the code.";
    const result = main_function_n_grams(4,chain);
    const expected = [
        "Show",
        "Show me",
        "Show me the",
        "Show me the code",
        "me",
        "me the",
        "me the code",
        "the",
        "the code",
        "code"
      ];
    expect(result).toEqual(expected);
  });
  test("n === chain length with more characters", () => {
    const chain = "Show ,me the code.-=.;&^$$##@";
    const result = main_function_n_grams(4,chain);
    const expected = [
        "Show",
        "Show me",
        "Show me the",
        "Show me the code",
        "me",
        "me the",
        "me the code",
        "the",
        "the code",
        "code"
      ];
    expect(result).toEqual(expected);
  });
});