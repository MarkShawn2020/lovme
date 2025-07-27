# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### API (Python/Flask)
- **Development**: `dev/start-api` - Start Flask API server on port 5001 with debug mode
- **Worker**: `dev/start-worker` - Start Celery worker for background tasks
- **Testing**: 
  - `dev/pytest/pytest_unit_tests.sh` - Run unit tests
  - `dev/pytest/pytest_all_tests.sh` - Run all test suites
  - `uv run --directory api pytest` - Run tests using uv
- **Linting**: `dev/reformat` - Run ruff linter/formatter, dotenv-linter, and mypy
- **Type Checking**: `dev/mypy-check` - Run mypy type checking

### Web (Next.js/React)
- **Development**: `cd web && pnpm dev` - Start Next.js dev server on port 3000
- **Build**: `cd web && pnpm build` - Build production application
- **Testing**: `cd web && pnpm test` - Run Jest tests
- **Linting**: `cd web && pnpm lint` - Run oxlint and eslint

### Web-lovme (Custom Frontend)
- **Development**: `cd web-lovme && pnpm dev` - Start development server
- **Build**: `cd web-lovme && pnpm build` - Build application
- **Testing**: `cd web-lovme && pnpm test` - Run tests
- **Linting**: `cd web-lovme && pnpm lint` - Run linting

### Docker
- **Build API**: `make build-api` - Build API Docker image
- **Build Web**: `make build-web` - Build web Docker image
- **Build All**: `make build-all` - Build both images
- **Quick Start**: `cd docker && docker compose up -d` - Start full stack with Docker

## Project Architecture

Dify is an open-source LLM application development platform with a microservices architecture:

### Core Components

**API Backend (`api/`)**: 
- Flask-based Python application serving REST APIs
- Handles LLM integrations, workflows, datasets, and user management
- Uses SQLAlchemy ORM with PostgreSQL
- Celery for async background tasks (document processing, email, etc.)
- Comprehensive model provider support (OpenAI, Anthropic, local models, etc.)

**Web Frontend (`web/`)**:
- Next.js 15+ application with App Router
- React 19+ with TypeScript, Tailwind CSS
- Admin interface for app creation, dataset management, workflow design
- Multi-tenant workspace support with SSO

**Web-lovme (`web-lovme/`)**:
- Custom frontend variant with specialized features
- Similar tech stack to main web frontend

### Key Architecture Patterns

**Model Management**:
- Unified model runtime system in `core/model_runtime/`
- Provider abstraction layer supporting 100+ LLM providers
- Model load balancing and quotas

**Workflow Engine**:
- Visual workflow designer with node-based architecture
- Supports complex AI workflows, agents, RAG pipelines
- Real-time execution with streaming responses

**RAG System**:
- Document processing pipeline with multiple file format support
- Vector database integrations (Weaviate, Pinecone, Chroma, etc.)
- Chunking strategies and retrieval optimization

**Plugin System**:
- MCP (Model Context Protocol) plugin support
- Tool integration framework for external APIs
- OAuth support for authenticated tools

**Multi-tenancy**:
- Workspace-based isolation
- Role-based access control
- Enterprise SSO integration

### Data Architecture

**Database Schema** (`api/models/`):
- Apps, workflows, conversations, messages
- Datasets, documents, segments for RAG
- Provider configurations, API keys
- Usage tracking and billing

**Storage Systems**:
- File storage abstraction (S3, Azure Blob, local, etc.)
- Vector databases for embeddings
- Redis for caching and sessions

## Development Guidelines

### API Development
- Use uv for Python dependency management
- Follow Flask patterns with blueprints in `controllers/`
- Business logic in `services/`, data access in `models/`
- Use Pydantic for request/response validation
- Implement proper error handling with custom exceptions

### Frontend Development  
- Use pnpm for package management (enforced)
- Follow Next.js App Router conventions
- Implement proper TypeScript typing
- Use Zustand for state management, SWR for data fetching
- Support both light and dark themes

### Testing
- API: pytest with comprehensive coverage
- Web: Jest with React Testing Library
- Mock external services in tests
- Use fixtures for test data

### Code Quality
- API: ruff for linting/formatting, mypy for type checking
- Web: ESLint, oxlint, TypeScript strict mode
- Follow existing code conventions and patterns
- Run linters before committing

## Configuration

### Environment Setup
- API: Copy `api/.env.example` to `api/.env` and configure
- Web: Copy `web/.env.example` to `web/.env.local`
- Docker: Use `docker/.env.example` for Docker Compose setup

### Key Environment Variables
- `DATABASE_URL`: PostgreSQL connection string
- `REDIS_URL`: Redis connection for caching/celery
- `SECRET_KEY`: Flask secret key for sessions
- `OPENAI_API_KEY`: OpenAI API key (and other model providers)
- Model provider API keys for various LLM services

## Important Notes

- **Python Version**: Requires Python 3.11-3.12
- **Node.js Version**: Requires Node.js >= v22.11.0  
- **Package Managers**: Use uv for Python, pnpm for Node.js
- **Database**: PostgreSQL with pgvector extension for embeddings
- **Production**: Supports Docker deployment, Kubernetes with Helm charts
- **Documentation**: Comprehensive docs at https://docs.dify.ai