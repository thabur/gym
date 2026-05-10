# Sezamo Romania MCP

Use this only for local AI clients that support MCP. Do not put these credentials in the public mobile app or commit real passwords.

Official Romania endpoint:

```text
https://mcp.sezamo.ro/mcp/
```

Target store:

```text
Sezamo.ro
Romania
Bucuresti delivery area
```

Claude Desktop example:

```json
{
  "mcpServers": {
    "sezamo": {
      "command": "npx",
      "args": [
        "mcp-remote",
        "https://mcp.sezamo.ro/mcp/",
        "--header",
        "rhl-email: ${RHL_EMAIL}",
        "--header",
        "rhl-pass: ${RHL_PASS}"
      ],
      "env": {
        "RHL_EMAIL": "your-sezamo-email@example.com",
        "RHL_PASS": "your-sezamo-password"
      }
    }
  }
}
```

Operational rules for this food plan:

- Use only Sezamo Romania / Bucuresti availability.
- Do not use Rohlik.cz, Sezamo.cz, or Czech catalog results.
- Add normal grocery ingredients only.
- Do not add cooked meals, meal kits, or Ready to Eat & Cook products.
- Review the cart before checkout.
