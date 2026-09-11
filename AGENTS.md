# MIRRA — Agent Context

## What this project is
MIRRA is an algorithmic bias audit platform for women in financial credit and housing rental domains in India. It is NOT a dashboard — it is a 10-stage narrative experience that guides users from curiosity to conviction.

## Design system (non-negotiable)
- Background: #F7F5F2 (ivory) always
- Text: #111111 always  
- Fonts: Playfair Display (headlines, serif) + DM Sans (body, sans)
- No border radius above 4px except buttons (8px max)
- No glassmorphism, no gradients, no shadows heavier than shadow-sm
- No generic dashboard UI patterns
- Thin dividers (1px #E0DDD8) instead of cards
- Animations: Framer Motion only, 600–1200ms, cubic-bezier(0.16, 1, 0.32, 1)

## Tech stack
- Next.js 14 (App Router), TypeScript, Tailwind CSS (custom config)
- Framer Motion for animations
- D3.js for India heatmap and SHAP bars
- Supabase for database
- FastAPI (Python) for bias engine at /bias-engine
- Anthropic Claude API for narrative generation
- @react-pdf/renderer for PDF export

## Mode system
- NEXT_PUBLIC_MODE=demo uses mock data from lib/mock-data.ts
- NEXT_PUBLIC_MODE=live uses real Supabase + FastAPI + Claude
- ALL data access goes through lib/data.ts — never call Supabase directly from components

## File structure
- app/ — Next.js pages (10 stages)
- components/ui/ — reusable components
- lib/ — data.ts, mock-data.ts, supabase.ts, anthropic.ts, types.ts
- bias-engine/ — FastAPI Python service

## Key numbers (embedded in mock data)
- Widowed women approval rate: 34% vs married women: 71% → 44% gap
- Single woman rental response rate: 18% vs couple: 67%
- Adding male co-applicant: 18% → 64%

## Current status
[Update this as you build — tells OpenCode what's done]
- [ ] Project scaffolded
- [ ] Tailwind configured
- [ ] Mock data created
- [ ] Stage 1: Entry screen
