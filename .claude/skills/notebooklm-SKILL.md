# NotebookLM Skill — General Purpose
# Domain: Research querying, persistent memory, content generation
# Trigger: Domain research needed, architecture decisions to persist, content deliverables requested

## Overview

NotebookLM is a grounded RAG engine — answers ONLY from sources you feed it, zero hallucination. Three capabilities:

1. **Research** — Query domain knowledge before writing code
2. **Memory** — Persist decisions and context across Claude Code sessions
3. **Content** — Generate slides, podcasts, reports, quizzes from research

## Prerequisites

```bash
pip install "notebooklm-py[browser]"
python -m notebooklm login          # Browser auth → Google account
python -m notebooklm auth check --test  # Verify
```

Always use `python -m notebooklm` (not bare `notebooklm`) — Windows/Git Bash PATH compatibility.

## Project Setup

Each project needs a `.notebooklm.json` at root:

```json
{
  "notebooks": {
    "research": "<notebook-id>",
    "memory": "<notebook-id>"
  },
  "default": "research",
  "cli": "python -m notebooklm"
}
```

**First-time setup:**
```bash
python -m notebooklm create "ProjectName — Research"   # Note the ID
python -m notebooklm create "ProjectName — Memory"     # Note the ID
```

Write IDs to `.notebooklm.json`. Add to `.gitignore` if IDs should stay private.

**Finding existing notebooks:**
```bash
python -m notebooklm list    # Shows all notebooks with IDs
```

---

## Capability 1: Research Querying

### When to Query (Before Writing Code)

```
QUERY when the task involves:
  ✅ Domain logic — business rules, regulations, industry terms you don't fully know
  ✅ Competitor patterns — how others implement a similar feature
  ✅ Architecture decisions — "should we use X or Y?" and notebook has references
  ✅ Copy/content — landing page text, feature descriptions grounded in research
  ✅ Data models — what fields/relationships exist in the real domain

DON'T query for:
  ❌ Syntax or framework questions you already know
  ❌ Questions unrelated to the project's research sources
  ❌ Generic coding tasks with no domain context needed
```

### How to Query

```bash
python -m notebooklm use <research-notebook-id>
python -m notebooklm ask "What compliance features do competitors offer for EPR tracking?"
```

**Query quality rules:**
- Specific beats vague: "What fields does a waste manifest require?" >> "Tell me about waste management"
- One question per `ask` command — run multiple for multiple questions
- If the answer is thin, the notebook needs more sources — suggest the user add URLs/docs

### Research-Driven Development Flow

```
1. QUERY   →  Ask NotebookLM about domain rules, competitor patterns, requirements
2. PLAN    →  Design approach using grounded answers (not assumptions)
3. BUILD   →  Write code, reference research in comments where relevant
4. VERIFY  →  Ask NotebookLM "does this implementation cover [standard/regulation]?"
```

**Example:**
```bash
python -m notebooklm use <research-id>
python -m notebooklm ask "What data points are required in an EPR compliance report?"
python -m notebooklm ask "How do competitors structure their compliance dashboards?"
# → Use answers to design component structure
# → Build the component
python -m notebooklm ask "Does tracking these 8 fields cover all EPR requirements?"
```

### Adding Sources

```bash
python -m notebooklm source add "https://example.com/article"       # URL
python -m notebooklm source add "./docs/requirements.pdf"            # Local file
python -m notebooklm source add-text "Paste raw content here"        # Raw text
python -m notebooklm source add-research "EPR compliance 2026"       # Web research (auto-imports)
python -m notebooklm source list                                      # See all sources
python -m notebooklm source fulltext <source-id>                     # Extract full text
python -m notebooklm source guide <source-id>                        # Get summary
```

**Source quality rule:** 5–10 high-quality sources >> 50 random ones. Retrieval quality degrades with noise.

---

## Capability 2: Memory Layer

NotebookLM persists across Claude Code sessions. Conversation context resets; notebook sources don't.

### What to Save

```
SAVE when:
  ✅ Architecture decision made (and the rationale + rejected alternatives)
  ✅ Project context that future sessions need
  ✅ Design pattern chosen over alternatives (and why)
  ✅ Bug root cause found after significant debugging
  ✅ Requirement changes or meeting notes discussed
```

### How to Save

```bash
python -m notebooklm use <memory-notebook-id>

# Save a decision
python -m notebooklm source add-text "ADR-001: Chose PostgreSQL with RLS for multi-tenancy. Rejected MongoDB (no row-level security). Date: 2026-04-10."

# Save from a file
python -m notebooklm source add "./docs/decisions/adr-001.md"
```

### How to Recall

```bash
python -m notebooklm use <memory-notebook-id>
python -m notebooklm ask "What database did we choose and why?"
python -m notebooklm ask "What architecture decisions have been made so far?"
python -m notebooklm ask "Were there any rejected approaches for authentication?"
```

### Memory Conventions

```
- Prefix: ADR-NNN: (Architecture Decision Record) for queryability
- Always include: date, decision, rationale, rejected alternatives
- One notebook per concern: don't mix research + memory in one notebook
```

### When to Check Memory

```
CHECK at session start if:
  - User references past work ("we already decided", "remember when", "as before")
  - You're about to make an architecture decision that might contradict a previous one
  - You're about to suggest a technology — check if one was already chosen
```

---

## Capability 3: Content Generation

Generate deliverables from notebook sources when output beyond code is needed.

### Quick Reference

| User wants | Command |
|---|---|
| Presentation | `generate slide-deck` |
| Podcast / audio explainer | `generate audio --wait` |
| Video explainer | `generate video --style whiteboard --wait` |
| Study material | `generate quiz` / `generate flashcards` |
| Written report | `generate report --format briefing` |
| Blog post | `generate report --format blog-post` |
| Visual summary | `generate infographic --orientation landscape` |
| Concept map | `generate mind-map` |
| Structured comparison | `generate data-table "compare X across Y"` |

### Download

```bash
python -m notebooklm download audio ./output.mp3
python -m notebooklm download video ./output.mp4
python -m notebooklm download slide-deck ./output.pptx
python -m notebooklm download slide-deck ./output.pdf
python -m notebooklm download quiz --format json ./quiz.json
python -m notebooklm download quiz --format markdown ./quiz.md
python -m notebooklm download infographic ./output.png
python -m notebooklm download mind-map ./mindmap.json
python -m notebooklm download data-table ./data.csv
```

### Multilingual Audio

```bash
python -m notebooklm language list                          # 50+ languages
python -m notebooklm generate audio --language hindi --wait
python -m notebooklm generate audio --language assamese --wait
```

### Slide Revision

```bash
python -m notebooklm slide revise 3 "add more data points"
python -m notebooklm slide revise 1 "make the title more impactful"
```

### Generation Workflow

```
1. Ensure notebook has good sources (add more if needed)
2. Generate the artifact (audio/video take 2-10 min)
3. Wait for completion (--wait flag)
4. Download in desired format
5. Report file location to user
```

---

## Python API (For Automation)

Use when the user needs scripts, pipelines, or batch operations:

```python
import asyncio
from notebooklm import NotebookLMClient

async def main():
    async with await NotebookLMClient.from_storage() as client:
        notebooks = await client.notebooks.list()
        nb = await client.notebooks.create("Name")
        await client.sources.add_url(nb.id, "https://example.com", wait=True)
        await client.sources.add_file(nb.id, "./doc.pdf", wait=True)
        result = await client.chat.ask(nb.id, "Key insights?")
        print(result.answer)
        await client.research.web_research(nb.id, "topic")
        status = await client.artifacts.generate_audio(nb.id,
            instructions="engaging", format="deep-dive")
        await client.artifacts.wait_for_completion(nb.id, status.task_id)
        await client.artifacts.download_audio(nb.id, "podcast.mp3")

asyncio.run(main())
```

**Use Python API for:** reusable scripts, chained operations, batch processing, CI/CD integration.
**Use CLI for:** quick queries during development, one-off generation, interactive research.

---

## Safety Rules

```
1. NEVER feed secrets — no .env, API keys, passwords, tokens, credentials
2. NEVER feed private user data — no PII, customer data without explicit consent
3. UNDOCUMENTED APIs — NotebookLM uses unofficial Google APIs, can break without notice
4. SOURCE QUALITY — 5-10 good sources >> 50 random ones
5. ONE NOTEBOOK PER CONCERN — separate research, memory, technical docs
```

## Troubleshooting

```
Auth failing?     → python -m notebooklm login (re-authenticate in browser)
Command not found? → Use python -m notebooklm (not bare notebooklm)
Silent failure?   → Command likely succeeded — verify with list/source list
Stale results?    → Cookies expire periodically — re-run login
```
