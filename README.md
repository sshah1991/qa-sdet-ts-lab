<div align="center">

# 🧪 QA SDET TypeScript Learning Lab

> Elevating QA engineers and SDETs from script-runners to systems-thinkers through core logic, patterns, and type-safe problem solving.

<br/>

[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Target](https://img.shields.io/badge/Focus-QA%20%2F%20SDET-0A84FF?style=for-the-badge&logo=target&logoColor=white)](#)
[![Status](https://img.shields.io/badge/Phase-Active%20Drills-8A2BE2?style=for-the-badge)](#)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](#)

<br/>

[Core Pillars](#-core-pillars) • [Practice Modules](#-practice-modules) • [Directory Layout](#-project-structure) • [Execution Guide](#-getting-started) • [Roadmap](#-learning-roadmap)

</div>

---

## 💡 The Core Thesis

> **Quality Engineering is not just about asserting expected output.**  
> It is about deconstructing runtime behavior, predicting failure modes, and writing maintainable, type-safe logic.

Modern automation frameworks demand real software engineering discipline. This lab bridges the gap between basic test scripting and resilient SDET architecture:

| 🧩 Pillar | ⚙️ SDET Application | 🎯 Target Outcome |
| :--- | :--- | :--- |
| **Data Structures** | `Map`, `Set`, Queues, Trees | Fast in-memory state tracking, caching, and payload parsing |
| **Algorithmic Logic** | Two Pointers, Sliding Window | High-throughput data validation, stream parsing, and log evaluation |
| **Type Safety** | Interfaces, Generics, Narrowing | Self-documenting API schemas and bulletproof test harnesses |
| **Edge-Case Mindset** | Falsy checks, boundary states | Catching regression bugs before code reaches release candidates |

---

## 🗂️ Project Structure

```bash
src/
├── 01_string-basics/           # String manipulation, regex & sanitization drills
│   └── splitAndJoins.ts
├── 02_array-transformation/    # map, filter, reduce & declarative data pipelines
│   └── map-filter-reduce.ts
├── 03_Map&Set/                 # Fast lookups, unique bounds & hash tables
│   └── MapAndSet.ts
├── Practice/                   # Unstructured mini-drills & experimental logic
│   ├── mapPractice.ts
│   ├── map-filter-reducePractice.ts
│   ├── setPractice.ts
│   └── stackPractice.ts
├── index.ts                    # Entry-point demo runner
└── tsconfig.json
