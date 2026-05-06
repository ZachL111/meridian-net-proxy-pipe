function equal<T>(actual: T, expected: T): void {
  if (actual !== expected) {
    throw new Error(`expected ${expected}, got ${actual}`);
  }
}

import { classify, score, Signal } from "../src/policy";

type FixtureCase = Signal & { name: string; score: number; decision: "accept" | "review" };

const cases: FixtureCase[] = [
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
  equal(score(item), item.score);
  equal(classify(item), item.decision);
}
