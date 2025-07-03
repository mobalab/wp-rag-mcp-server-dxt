import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";

const options = {
  name: 'wp-rag-mcp-server-dxt',
  version: '0.0.1',
};

const server = new McpServer(options);


server.registerTool(
  "search_posts",
  {
    title: "Search WordPress posts from WP RAG vector database",
    description: "",
    // inputSchema: IPAddressSchema
  },
  async ({ q }) => {
   return {
     content: [{
        type: "text",
        text: "dummy"
      }]
    };
  }
);


// Start the server
const transport = new StdioServerTransport();
server.connect(transport);
