function equal<T>(actual: T, expected: T): void {
  if (actual !== expected) {
    throw new Error(`expected ${expected}, got ${actual}`);
  }
}

import { domainReviewLane, domainReviewScore } from "../src/domainReview";

const item = { signal: 47, slack: 52, drag: 9, confidence: 80 };
equal(domainReviewScore(item), 199);
equal(domainReviewLane(item), "ship");
