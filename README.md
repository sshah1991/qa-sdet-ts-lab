<div align="center">

# 🧪 QA SDET TypeScript Learning Lab

> Bridging QA logic, automation thinking, and robust TypeScript fundamentals for real-world SDET growth.

<br/>

[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node](https://img.shields.io/badge/Runtime-Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![QA/SDET](https://img.shields.io/badge/Focus-QA%20%2F%20SDET-0A84FF?style=for-the-badge)](#)
[![Status](https://img.shields.io/badge/Phase-Active%20Drills-8A2BE2?style=for-the-badge)](#)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](#)

<br/>

[Overview](#-overview) • [Curriculum](#-curriculum) • [Quick Start](#-quick-start) • [Progress](#-progress-tracker)

</div>

---

## 🔎 Overview

This repository is a practical TypeScript learning lab designed for aspiring QA engineers and SDETs who want to grow beyond test execution into real software and automation reasoning.

The focus is not only on solving algorithmic puzzles, but on building strong engineering habits: handling edge cases, validating behavior, reasoning about data flow, and writing maintainable logic that mirrors real automation and quality engineering work.

> **Why these drills exist:** These exercises are intentionally shaped around real SDET concerns such as async polling, retry backoff logic, strict API typing, dynamic locator strategies, resilient data handling, and structured debugging—not generic textbook LeetCode alone.

---

## 🧠 Core Pillars

| Pillar | SDET Value | Example Focus |
| :--- | :--- | :--- |
| **Data Structures** | Better state tracking and payload handling | `Map`, `Set`, sorting, grouping |
| **Type Safety** | Stronger validation logic | strict TypeScript types and boundaries |
| **Algorithmic Reasoning** | Better bug isolation and debugging | patterns, frequency analysis, traversal |
| **Edge-Case Thinking** | fewer flaky tests and better coverage | off-by-one, empty input, duplicate values |
| **Automation Mindset** | stronger engineering judgment | dynamic selectors, resilient flows, retries |

---

## 📚 Curriculum

### Current module coverage

<details>
<summary><b>1. String Fundamentals & Sanitization</b> — 5/5 complete</summary>

- [x] **Reverse Words in a String** — tokenization and word reordering logic
- [x] **Defang an IP Address** — safe string replacement and sanitization
- [x] **Truncate Sentence** — boundary-aware slicing and whitespace control
- [x] **Valid Anagram** — frequency comparison using string transforms
- [x] **Simplify Unix Path** — stack-style path normalization

</details>

<details>
<summary><b>2. Declarative Array Transformations</b> — 5/5 complete</summary>

- [x] **Running Sum of 1D Array** — prefix accumulation patterns
- [x] **Filter Active Usernames** — predicate-based filtering and output shaping
- [x] **Frequency Counter** — single-pass aggregation with `reduce()`
- [x] **Cart Total with Discount Logic** — business rules applied to stream data
- [x] **Group Items by Category** — dynamic bucket creation and grouping

</details>

<details open>
<summary><b>3. Map & Set Optimization</b> — 4/5 complete</summary>

- [x] **Two Sum** — complement lookup in linear time using hash maps
- [x] **Contains Duplicate** — unique-check behavior with `Set`
- [x] **Intersection of Two Arrays** — multi-collection matching and set membership
- [x] **First Non-Repeating Character** — frequency map + first-match scanning
- [ ] **Group Anagrams** — map keying by canonical sorted strings

</details>

<details>
<summary><b>4. Sort with Comparator</b> — 5/5 complete</summary>

- [x] **Sort Colors** — three-way partitioning and stable ordering ideas
- [x] **Largest Number** — comparator-driven custom number ordering
- [x] **Sort Characters by Frequency** — map-based frequency sorting
- [x] **Custom Multi-Level Object Sorting** — department, salary, and name ordering
- [x] **Relative Sort Array** — ordering by custom priority list with leftovers appended

</details>

---

## ⚡ Quick Start

```bash
# 1) Enter the project workspace
cd "/Users/apple/Desktop/Coding Practice TS"

# 2) Install project dependencies
cd ts-practice && npm install

# 3) Run the main entry point
npm run start

# 4) Run strict TypeScript checks
npm run typecheck

# 5) Run a specific drill file
npx tsx ../src/01_TypescriptFluencyAndStringBasics/01_string-basics/splitAndJoins.ts
npx tsx ../src/01_TypescriptFluencyAndStringBasics/02_array-transformation/map-filter-reduce.ts
npx tsx ../src/01_TypescriptFluencyAndStringBasics/03_Map&Set/MapAndSet.ts
npx tsx ../src/01_TypescriptFluencyAndStringBasics/04_SortWithComparotor/SortWithComparator.ts

# 6) Watch mode for live re-runs during development
npm run dev
```

> Use the `npx tsx` commands when you want to target one drill without executing the full app entrypoint.

---

## 📊 Progress Tracker

| Module | Total | Done | Status | Progress |
| :--- | ---: | ---: | :--- | :--- |
| String Basics | 5 | 5 | ✅ Complete | `██████████ 100%` |
| Array Transformation | 5 | 5 | ✅ Complete | `██████████ 100%` |
| Map & Set | 5 | 4 | 🔄 In Progress | `█████████░ 80%` |
| Sort with Comparator | 5 | 5 | ✅ Complete | `██████████ 100%` |
| Overall | 20 | 19 | 🔄 Active | `█████████░ 95%` |

**Current open item:** `Group Anagrams` in the Map & Set module.

---

## 🗂️ Project Structure

```bash
src/
├── 01_TypescriptFluencyAndStringBasics/
│   ├── 01_string-basics/
│   │   └── splitAndJoins.ts
│   ├── 02_array-transformation/
│   │   └── map-filter-reduce.ts
│   ├── 03_Map&Set/
│   │   └── MapAndSet.ts
│   ├── 04_SortWithComparotor/
│   │   └── SortWithComparator.ts
│   └── Practice/
│       ├── mapPractice.ts
│       ├── map-filter-reducePractice.ts
│       ├── setPractice.ts
│       └── stackPractice.ts
├── index.ts
└── README.md
```

---

## 🌱 Roadmap

- [x] Foundations: strings, arrays, object modeling, and TypeScript basics
- [x] Core data structures: `Map`, `Set`, ordering, grouping, and frequency logic
- [ ] Core patterns: two pointers, sliding window, monotonic stacks
- [ ] SDET-style practice: async polling, retries, dynamic locators, resilient selectors
- [ ] SQL reasoning and data validation scenarios
- [ ] System design and engineering theory notes
- [ ] Story-driven learning and live coding walkthroughs

---

## 🏁 Closing Note

This repository represents a practical engineering path for QA and SDET growth: from writing small TypeScript snippets to reasoning about system behavior, automation reliability, edge cases, and core logic under pressure.

It is designed to build the technical confidence needed for automation engineering, quality strategy, and modern software testing roles.
