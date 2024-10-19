# Rule Engine with AST

## Live URL
```https://rule-engine-ast-live.vercel.app/```

## Objective
This application aims to develop a simple 3-tier rule engine that determines user eligibility based on
attributes such as age, department, income, and spend. The system uses an **Abstract Syntax Tree (AST)** to
represent conditional rules, allowing dynamic creation, combination, and modification of rules.

## Features
- Dynamic rule creation, modification, and combination using AST.
- Rule-based user eligibility checks based on attributes like age, department, salary, and experience.
- Flexible rule evaluation using AST for efficient decision-making.
- Combines multiple rules into a single AST for optimized checks.
- Handles complex conditions like AND, OR, and nested logical expressions.
- Rules can be updated and deleted (Bonus)

## Prerequisites
Node.js: Version 14 or higher
API Endpoint: A running instance of the backend service (see the backend repository for setup instructions).

## Installation
1. Clone the repository:
 ```
 git clone https://github.com/rijurekh24/Rule-Engine-Frontend.git
 cd rule-engine-frontend
 ```
2. **Install dependencies**:
 ```
 npm install
 ```
3. **Start the server**:
 ```
 npm run dev
 ```
