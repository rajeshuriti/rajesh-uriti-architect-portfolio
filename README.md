# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/cfa650b5-bc01-465d-b105-b9aed44a8fb9

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/cfa650b5-bc01-465d-b105-b9aed44a8fb9) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/cfa650b5-bc01-465d-b105-b9aed44a8fb9) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

# React App Deployment to AWS ECS/EC2 via GitHub Actions

This repository provides a modular, production-ready GitHub Actions setup for deploying a React app (Dockerized) to AWS ECS using EC2 (t2.micro, free tier). Each major deployment step is split into a separate workflow, allowing for independent, manual execution and easy troubleshooting.

## Workflows Overview

### 1. `01-create-ec2-instance.yml`
- **Purpose:** Launches a t2.micro EC2 instance (Amazon Linux 2) with the `ecsInstanceRole` and registers it to your ECS cluster.
- **Manual Inputs:**
  - `ecs_cluster`: Name of your ECS cluster
  - `ec2_key_name`: Name of an existing EC2 key pair (for SSH access)

### 2. `02-wait-for-ecs-registration.yml`
- **Purpose:** Waits until the EC2 instance registers and becomes ACTIVE in the specified ECS cluster.
- **Manual Inputs:**
  - `ecs_cluster`: Name of your ECS cluster

### 3. `03-build-and-push-ecr.yml`
- **Purpose:** Builds the Docker image for your React app and pushes it to Amazon ECR.
- **Manual Inputs:**
  - `image_tag`: Docker image tag (e.g., `latest`, `v1.0.0`)

### 4. `04-deploy-to-ecs.yml`
- **Purpose:** Deploys the Docker image from ECR to your ECS cluster on the EC2 instance.
- **Manual Inputs:**
  - `ecs_cluster`: Name of your ECS cluster
  - `image_tag`: Docker image tag to deploy

---

## Prerequisites

- **AWS Account** with permissions to manage EC2, ECS, ECR, and IAM.
- **ECS Cluster** created (can be empty initially).
- **EC2 Key Pair** created in your AWS region (for SSH access).
- **IAM Role** `ecsInstanceRole` must exist and be attachable to EC2 instances.
- **GitHub Secrets** set in your repository:
  - `AWS_ACCESS_KEY_ID`
  - `AWS_SECRET_ACCESS_KEY`
  - `AWS_ACCOUNT_ID`
  - `AWS_REGION`

---

## Usage Instructions

1. **Create EC2 Instance**
   - Go to the Actions tab, select `01 - Create EC2 Instance for ECS Cluster`, and run the workflow.
   - Input your ECS cluster name and EC2 key pair name.

2. **Wait for ECS Registration**
   - After the EC2 instance launches, run `02 - Wait for EC2 to Register with ECS` with your cluster name.
   - This ensures the instance is ready to run ECS tasks.

3. **Build and Push Docker Image**
   - Run `03 - Build and Push Docker Image to ECR` with your desired image tag.
   - This builds your React app Docker image and pushes it to ECR.

4. **Deploy to ECS**
   - Run `04 - Deploy Docker Image to ECS` with your cluster name and image tag.
   - This registers a new ECS task definition and deploys it as a service on your EC2 instance.

---

## Security Group
- The workflows create (if needed) a security group allowing inbound HTTP (80), HTTPS (443), and ECS agent (51678) ports.

## Error Handling
- Each workflow checks for resource existence before creation and handles timeouts or errors gracefully.

## Notes
- All workflows are **manual** (`workflow_dispatch`) and can be run independently.
- Designed for **free tier**: uses `t2.micro` and minimal resources.
- You can SSH into the EC2 instance using the key pair you specify.

---

## Customization
- You can modify the Docker build context, ECR repository name, or ECS task definition as needed for your app.
- For production, consider using a load balancer and HTTPS.

---

## Cleanup
- Remember to terminate EC2 instances and delete unused resources to avoid unnecessary charges.

---

## Questions?
Open an issue or discussion in this repository for help or suggestions.
