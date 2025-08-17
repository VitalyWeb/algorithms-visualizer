// Sortings import
import { quickSortGenerator } from "./sort/quick-sort-generator";
import { timSortGenerator } from "./sort/tim-sort-generator";
import { introSortGenerator } from "./sort/intro-sort-generator";
import { radixSortGenerator } from "./sort/radix-sort-generator";
import { countingSortGenerator } from "./sort/counting-sort-generator";
import { mergeSortGenerator } from "./sort/merge-sort-generator";
import { bucketSortGenerator } from "./sort/bucket-sort-generator";

export const animationGenerators = {
    // sorting
  "quick-sort": quickSortGenerator,
  "tim-sort": timSortGenerator,
  "intro-sort": introSortGenerator,
  "radix-sort": radixSortGenerator,
  "counting-sort": countingSortGenerator,
  "merge-sort": mergeSortGenerator,
  "bucket-sort": bucketSortGenerator,
};