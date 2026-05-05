import * as assert from "node:assert/strict";
import { classify, score, Signal } from "../src/policy";

const cases: Array<Signal & { score: number; decision: "accept" | "review" }> = [
  {
    "name": "case_1",
    "demand": 82,
    "capacity": 90,
    "latency": 18,
    "risk": 14,
    "weight": 8,
    "score": 166,
    "decision": "review"
  },
  {
    "name": "case_2",
    "demand": 84,
    "capacity": 70,
    "latency": 26,
    "risk": 5,
    "weight": 4,
    "score": 172,
    "decision": "review"
  },
  {
    "name": "case_3",
    "demand": 70,
    "capacity": 74,
    "latency": 11,
    "risk": 7,
    "weight": 13,
    "score": 202,
    "decision": "accept"
  }
];

for (const item of cases) {
  assert.equal(score(item), item.score);
  assert.equal(classify(item), item.decision);
}
