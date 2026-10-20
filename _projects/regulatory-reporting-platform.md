---
title: A regulatory reporting platform that runs in minutes
date: 2025-01-01
order: 1
category: Case study
client: FTSE 100 asset manager
role: Management consultant, embedded in the Corporate Functions team
period: Woodhurst · Liquidity reporting
status: published
metric: "30+"
metric_label: "regulatory reports run end to end in ~15 minutes"
summary: Building the Databricks pipelines behind 30+ regulatory reports, from event-driven ingestion to a deployment process that ships 75% faster.
stack:
  - Databricks (PySpark, Delta Lake, DABs)
  - Azure Data Factory
  - Azure Functions
  - Azure DevOps
results:
  - "30+ regulatory reports run end to end in ~15 minutes"
  - "Deployments 75% faster in the proof of concept"
image: /assets/images/projects/regulatory-reporting-platform.svg
---

## The brief

Liquidity reporting at a large asset manager is regulated and audit-critical. The reports have fixed business-day timetables, they have to be right, and the people who own them need to adjust inputs without rebuilding anything. I was embedded in the client's Corporate Functions team to build the data pipelines behind them.

## What I built

- **Pipelines on Databricks** (PySpark, Delta Lake) with Azure Data Factory and Azure Functions around them, designed for regulated, audit-critical use.
- **Event-driven ingestion** so data lands against the business-day timetable rather than waiting on a batch window.
- **Ad-hoc user adjustment** built into the flow, so report owners can make changes without breaking the pipeline.
- **A better delivery process.** I spotted that deployments were slow and leaned on offshore teams, and rolled out Databricks Asset Bundles across a proof of concept to fix it.

## Outcome

The production platform runs 30+ regulatory reports end to end in about 15 minutes, reducing the regulatory penalty exposure that comes with late or manual reporting while fitting the client's operating model decisions. The DABs roll-out sped deployments up by 75% and reduced the client's reliance on offshore teams.

Alongside the delivery I mentored a senior consultant in semantic model design, Databricks workflows and PySpark.
