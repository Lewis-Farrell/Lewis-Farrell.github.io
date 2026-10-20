---
title: 300 legacy ETL processes into one pipeline
date: 2025-06-01
order: 2
category: Case study
client: Midsized bank
role: Management consultant, data architecture and strategy
period: Woodhurst · Data modernisation
status: published
metric: "~300"
metric_label: "legacy ETL processes consolidated into one pipeline"
summary: "The end-to-end data architecture for a bank's modernisation: one daily-refresh pipeline, an engineering operating model, and a five-year data strategy."
stack:
  - Databricks Unity Catalog
  - Databricks Asset Bundles
  - Azure DevOps CI/CD
  - Git
results:
  - "~300 legacy ETL processes consolidated into one daily-refresh pipeline"
  - "One source for all business and regulatory reporting"
image: /assets/images/projects/legacy-etl-consolidation.svg
---

## The brief

A midsized bank was running its reporting on roughly 300 separate legacy ETL processes. The aim was to replace them with something the bank could reason about, test and change safely, and to set a direction for its data estate over the next five years.

## Architecture

I designed the end-to-end data architecture in Unity Catalog, including SCD1 and SCD2 handling, change data capture, watermarking and data-quality controls. It consolidates the legacy processes into **one daily-refresh production pipeline** that serves all business and regulatory reporting, across both structured and unstructured sources.

## Engineering practice

The bank's team of eight had no prior software development discipline, so the operating model had to be installed as well as designed.

- **Reproducible workflows** using custom libraries, Git, Databricks Asset Bundles and Azure DevOps CI/CD, with environment-specific deployment controls across dev, test and prod.
- **A phased rollout of agentic coding tools** (Codex) so the team could adopt them with the guard rails already in place.

## Strategy

Alongside the build I designed the client's five-year data strategy: a maturity assessment, an evaluation of Azure, AWS and GCP target architectures, and the COO-level business case for an Azure landscape uplift.
