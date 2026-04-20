markdown# NotebookLM Integration

## Notebook

| Purpose | Notebook ID |
|---------|------------|
| Market Research & Competitors | `bfb720f7-1707-4842-a9b1-64c526a7bfb9` |

## Usage

Query research while coding:
  python -m notebooklm use bfb720f7-1707-4842-a9b1-64c526a7bfb9
  python -m notebooklm ask "your question"

## When to Query

- Before designing a component: "How do competitors structure their [dashboard/pricing/onboarding]?"
- Before building a feature: "What's the industry standard for [EPR tracking/waste categorization]?"
- For domain terminology: "What does WEEE/CPCB/EPR/Form 10 mean in this context?"
- For content/copy: "What value propositions resonate in the waste management space?"

## Rules

- Always use `python -m notebooklm` (not bare `notebooklm`) for Git Bash compatibility
- Never feed .env or secrets to NotebookLM
