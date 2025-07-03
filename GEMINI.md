# WP RAG MCP Server DXT

## Project Overview

WP RAG MCP Server DXT is a desktop extension (dxt) project that creates a Model Context Protocol (MCP) server as part of the "WP RAG" WordPress plugin ecosystem.

**Main Features:**
- Access to vector database containing WordPress post data and their embedding representations
- Provides database information from API server to MCP clients
- Functions as a bridge between WordPress plugin and LLMs (OpenAI, etc.)

**System Architecture:**
```
WordPress (3rd party owned) + WP RAG Plugin <-> API Server (our owned) <-> OpenAI etc. LLM
                                                        ↓↑
                                                WP RAG MCP Server (dxt)
```

**Primary Goals:**
- **Create a dxt (desktop extension) file** for Claude Desktop integration
- Efficiently provide WordPress content data via MCP protocol
- Advanced search and response capabilities utilizing embedding representations stored in vector database
- Design focused on extensibility and maintainability

**Development References:**
When developing this project, please refer to the following official documentation:
- Desktop Extensions Guide: https://www.anthropic.com/engineering/desktop-extensions
- DXT Development Documentation: https://github.com/anthropics/dxt

## Tech Stack

**Programming Language:**
- TypeScript/JavaScript (Node.js runtime)

**Package Management:**
- npm or yarn

**Main Frameworks & Libraries:**
- `@modelcontextprotocol/sdk` - MCP SDK for Node.js
- `@types/node` - TypeScript definitions for Node.js
- Database connection libraries (vector database support)
- API client libraries (for communication with existing API server)

**Development & Runtime Environment:**
- Node.js 18+ (LTS recommended)
- TypeScript for type safety
- ESM (ES Modules) support

## Development Workflow

### Environment Setup
```bash
# Install Node.js dependencies
npm install

# Or using yarn
yarn install
```

### Development Runtime
```bash
# Build TypeScript (if using TypeScript)
npm run build

# Start MCP server in development mode
npm run dev

# Or start built server
npm start
```

### Testing
```bash
# Run tests
npm test

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode
npm run test:watch
```

### Development Tools
```bash
# TypeScript type checking
npm run type-check

# Linting
npm run lint

# Format code
npm run format

# Build for production
npm run build
```

### MCP Server Configuration
The server should be configured to work with MCP clients. Example configuration structure:
```json
{
  "name": "wp-rag-mcp-server",
  "version": "1.0.0",
  "description": "MCP server for WP RAG WordPress plugin",
  "main": "dist/index.js",
  "type": "module"
}
```

---

*Note: The following sections will be added as development progresses:*
- Coding Conventions
- Deployment
- Important Files