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
🎯 Practice Modules & ExercisesClick to expand each module to inspect included drills:[x] Reverse Words in a String — Pointer iteration without extra token memory[x] Defang an IP Address — String substitution and sanitization routines[x] Truncate Sentence — Word boundary slicing and prefix handling[x] Valid Anagram — Character frequency sorting vs. map counters[x] Simplify Unix Path — Canonical path resolution via stack logic[x] Running Sum of 1D Array — In-place prefix sum accumulators[x] Filter Active Usernames — High-order predicates and truthy checks[x] Frequency Counter — Accumulating metrics using single-pass reduce[x] Cart Total with Discount Logic — Object streaming and financial rounding[x] Group Items by Category — Dynamic bucket aggregation via Object.groupBy[x] Two Sum — Complement search in $O(n)$ time using Hash Maps[x] Contains Duplicate — $O(1)$ set lookup comparisons[x] Intersection of Two Arrays — Unique element filtering across multiple sets[x] First Non-Repeating Character — Frequency map coupled with chronological scanning[x] Group Anagrams — Key hashing and bucket generation⚡ Getting StartedPrerequisitesEnsure you have Node.js (v18+) and npm installed.Bash# Clone the repository
git clone [https://github.com/your-username/qa-sdet-ts-lab.git](https://github.com/your-username/qa-sdet-ts-lab.git)

# Navigate into the lab root
cd qa-sdet-ts-lab

# Install dependencies
npm install
Running DrillsRun any individual drill file directly with tsx (no compile step needed):Bash# Execute a single string drill
npx tsx src/01_string-basics/splitAndJoins.ts

# Execute a Map/Set drill
npx tsx src/03_Map&Set/MapAndSet.ts
Run global tasks:Bash# Run the entry file
npm run start

# Strict TypeScript type validation
npm run typecheck
🗺️ Learning RoadmapTrack your progress across the complete SDET technical interview curriculum:[Phase 1: Foundations] ──► [Phase 2: Core Patterns] ──► [Phase 3: Systems & Data]
       (Complete)                 (In Progress)                 (Planned)
[x] Phase 1: Foundations[x] String manipulation & regex patterns[x] Declarative array pipelines (map, filter, reduce)[x] Hash Maps & Hash Sets fundamentals[ ] Phase 2: Core Algorithmic Patterns[ ] Two-pointer navigation[ ] Sliding window arrays and substring optimization[ ] Monotonic stacks & recursion queues[ ] 60-minute timed mock coding drills[ ] Phase 3: Real-World SDET Scenarios[ ] Asynchronous event loop & race conditions handling[ ] Dynamic JSON schema diffing and payload assertions[ ] Relational SQL aggregation & data reasoning[ ] Live verbal problem-solving & narration walkthroughsBuilt for technical rigor, analytical reasoning, and software reliability.Crafted for continuous learning and engineering growth.What Makes This Layout WorkClear Information Density: Collapsible <details> sections keep the list of 15+ coding problems neatly organized so visitors can expand only what they want to review.Visual Progress Badges & Checklists: Moving from plain text bullets to GitHub markdown checkboxes ([x] / [ ]) gives an immediate sense of forward momentum.Structured Mental Model: The table linking data structures directly to real-world QA/SDET tasks immediately clarifies why this repository exists and how it applies to practical automation engineering.
