# WP RAG MCP Server Desktop Extension

A Desktop Extension for Claude Desktop that provides intelligent search capabilities for WordPress sites using the [WP RAG](https://services.mobalab.net/wp-rag/) system.

## Overview

### What is WP RAG?

WP RAG (WordPress Retrieval-Augmented Generation) is a powerful WordPress plugin that enables intelligent content search and retrieval using Large Language Models (LLMs). The system architecture consists of:

- **WordPress Site** (third-party owned) + WP RAG Plugin
- **API Server** (our infrastructure) with vector database
- **LLM Integration** (OpenAI and other providers)

The WP RAG system extracts and processes WordPress post content, creates semantic embeddings, and stores them in a vector database. This enables sophisticated search capabilities that go beyond simple keyword matching, allowing users to find relevant content based on meaning and context.

### WP RAG MCP Server

This Desktop Extension provides a local MCP (Model Context Protocol) server that connects Claude Desktop to the WP RAG API server. It allows Claude to search through WordPress content intelligently, making it easier to find relevant posts, articles, and information from your WordPress sites.

## Features

- **Intelligent Post Search**: Search through WordPress posts using natural language queries
- **Semantic Understanding**: Leverages vector embeddings to find content based on meaning, not just keywords
- **Easy Integration**: Seamlessly integrates with Claude Desktop through the MCP protocol
- **Secure Configuration**: API keys and sensitive data are stored securely in the OS keychain

### Available Tools

- `search_posts`: Search for WordPress posts using natural language queries with configurable result limits and score thresholds

## Installation

### Step 1: Download and Install

1. Download the `.dxt` file from the releases page
2. Double-click the `.dxt` file to open it with Claude Desktop
3. Click "Install" in the Claude Desktop interface

### Step 2: Configuration

After installation, you'll need to configure the extension:

1. Open Claude Desktop Settings
2. Navigate to the Extensions section
3. Find "WP RAG MCP Server Desktop Extension" in your installed extensions
4. Configure the following required settings:
    - **WP RAG API Key**: Your authentication key for the WP RAG API server
    - **Site ID on WP RAG**: The unique identifier for your WordPress site in the WP RAG system

### Step 3: Enable the Extension

1. Toggle the extension to "Enabled" in the Extensions settings
2. Restart Claude Desktop if prompted
3. The extension is now ready to use

## Usage

Once installed and configured, you can use the WP RAG search functionality directly in your conversations with Claude. For example:

- "Search for posts about WordPress security"
- "Find articles related to performance optimization"
- "Look for content about user authentication"

Claude will use the WP RAG system to find relevant posts from your WordPress site and provide you with the most appropriate results.

## Requirements

- Claude Desktop (latest version)
- WordPress site configured with the WP RAG plugin
  - WP RAG API Key and Site ID can be obtained on the plugin admin page.

## Support

For issues related to:
- **This Desktop Extension**: Please check the project repository for documentation and issue tracking
- **WP RAG Plugin**: Refer to the WP RAG plugin documentation
- **Claude Desktop**: Visit [Anthropic Support](https://support.anthropic.com)

## About Desktop Extensions

This extension is built using Anthropic's Desktop Extensions format, which makes installing MCP servers as simple as clicking a button. For more information about Desktop Extensions, visit the [official documentation](https://www.anthropic.com/engineering/desktop-extensions).

## Security & Privacy

- All API keys and sensitive configuration data are stored securely in your operating system's keychain
- The extension only communicates with the configured WP RAG API server
- No data is shared with third parties beyond the WP RAG system

## License

MIT License

## Contributing

TBD

---

*Built with ❤️ using the Model Context Protocol (MCP) and Desktop Extensions*