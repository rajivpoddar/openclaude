import type { Command } from '../types/command.js'
import { memoizeWithLRU } from '../utils/memoize.js'
import type { MCPServerConnection } from '../services/mcp/types.js'

const MCP_SKILLS_CACHE_SIZE = 20

/**
 * Discover model-invocable skills exposed by MCP resources.
 *
 * The MCP_SKILLS feature flag is enabled in the production bundle, so this
 * module must always exist even when no server exposes skill resources. Keep
 * the default behavior conservative: return no skill commands while still
 * allowing resource-capable MCP servers to connect and expose their tools.
 */
export const fetchMcpSkillsForClient = memoizeWithLRU(
  async (_client: MCPServerConnection): Promise<Command[]> => [],
  (client: MCPServerConnection) => client.name,
  MCP_SKILLS_CACHE_SIZE,
)
