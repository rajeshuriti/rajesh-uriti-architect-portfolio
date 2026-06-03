# Rajesh Uriti – Solution Architect Portfolio

Personal portfolio website for Rajesh Uriti, Solution Architect with 16+ years of experience in Cloud Architecture, Digital Transformation, Application Modernisation, and Generative AI.

**Live site**: https://rajesh-uriti-architect-portfolio.vercel.app/

## Tech Stack

- Vite + TypeScript
- React 18
- shadcn-ui
- Tailwind CSS

## Local Development

```sh
git clone https://github.com/rajeshuriti/rajesh-uriti-architect-portfolio.git
cd rajesh-uriti-architect-portfolio
npm install
npm run dev
```

## Deployment

Deployed to Vercel. Push to `main` triggers an automatic deployment.

## AWS ECS/EC2 Deployment (via GitHub Actions)

The `.github/workflows/` directory contains modular workflows for deploying a Dockerised build to AWS ECS on EC2 (free-tier `t2.micro`).

| Workflow | Purpose |
|---|---|
| `01-create-ec2-instance.yml` | Launch EC2 and register with ECS cluster |
| `02-wait-for-ecs-registration.yml` | Wait until instance is ACTIVE in ECS |
| `03-build-and-push-ecr.yml` | Build Docker image and push to ECR |
| `04-deploy-to-ecs.yml` | Deploy image as ECS service |

**Required GitHub Secrets:** `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `AWS_ACCOUNT_ID`, `AWS_REGION`
