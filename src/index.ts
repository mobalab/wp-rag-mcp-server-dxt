import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";

const options = {
  name: 'wp-rag-mcp-server-dxt',
  version: '0.0.1',
};

const server = new McpServer(options);

const WP_RAG_API_URL = process.env.WP_RAG_API_URL || "http://localhost:8000";
const WP_RAG_API_KEY = process.env.WP_RAG_API_KEY;

const SearchPostsInputSchema = z.object({
  site_id: z.number().describe("The site identifier"),
  q: z.string().describe("Search query"),
  limit: z.number().optional().default(10).describe("Number of results"),
  score_threshold: z.number().optional().default(0.5).describe("Threshold for score"),
});

server.registerTool(
  "search_posts",
  {
    title: "Search WordPress posts from WP RAG vector database",
    description: "Search posts from a specific site using a query and optional filters.",
    inputSchema: SearchPostsInputSchema.shape,
  },
  async ({ site_id, q, limit, score_threshold }) => {
    try {
      const url = new URL(`${WP_RAG_API_URL}/api/sites/${site_id}/posts/search`);
      url.searchParams.append("q", q);
      url.searchParams.append("limit", limit.toString());
      url.searchParams.append("score_threshold", score_threshold.toString());

      const headers: Record<string, string> = {
        "Content-Type": "application/json",
      };
      if (WP_RAG_API_KEY) {
        headers["X-Api-Key"] = WP_RAG_API_KEY;
      }

      const response = await fetch(url.toString(), {
        method: "GET",
        headers: headers,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`API error: ${response.status} - ${(errorData as any).detail || response.statusText}`);
      }

      const data = await response.json();
      return {
        content: [{
          type: "text",
          text: JSON.stringify(data, null, 2),
        }],
      };
    } catch (error) {
      console.error("Error in search_posts tool:", error);
      return {
        content: [{
          type: "text",
          text: `Error searching posts: ${(error as Error).message}`,
        }],
      };
    }
  }
);


// Start the server
const transport = new StdioServerTransport();
server.connect(transport);
