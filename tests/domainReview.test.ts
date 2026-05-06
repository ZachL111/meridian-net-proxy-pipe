import * as assert from "node:assert/strict";
import { domainReviewLane, domainReviewScore } from "../src/domainReview";

const item = { signal: 47, slack: 52, drag: 9, confidence: 80 };
assert.equal(domainReviewScore(item), 199);
assert.equal(domainReviewLane(item), "ship");
