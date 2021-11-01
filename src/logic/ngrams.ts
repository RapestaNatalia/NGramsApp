let n_grams: string[] = [];
let temp_grams: string[];
let str_wth_punct: string;

export const main_function_n_grams = (n: number, chain: string): string[] => {
  n_grams = [];
  str_wth_punct = chain.replace(/[^\w\s]|_/g, '').replace(/\s{2,}/g, ' ');
  temp_grams = str_wth_punct.split(' ');
  return get_n_grams(n);
};
const get_n_grams = (n: number): string[] => {
  if (n === 1) {
    n_grams.push(temp_grams[0]);
    return n_grams;
  }
  if (n <= 0 || n > temp_grams.length) {
    return [];
  }
  let temp = '';
  for (let i = 0; i <= temp_grams.length - 1; i++) {
    temp = temp.concat(temp_grams[i] + ' ');
    n_grams.push(temp.trim());
  }
  temp_grams.shift();
  return get_n_grams(n - 1);
};
