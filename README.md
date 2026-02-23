# minions-conversations

**Email threads, reply parsing, intent detection, and escalation triggers**

Built on the [Minions SDK](https://github.com/mxn2020/minions).

---

## Quick Start

```bash
# TypeScript / Node.js
npm install @minions-conversations/sdk minions-sdk

# Python
pip install minions-conversations

# CLI (global)
npm install -g @minions-conversations/cli
```

---

## CLI

```bash
# Show help
conversations --help
```

---

## Python SDK

```python
from minions_conversations import create_client

client = create_client()
```

---

## Project Structure

```
minions-conversations/
  packages/
    core/           # TypeScript core library (@minions-conversations/sdk on npm)
    python/         # Python SDK (minions-conversations on PyPI)
    cli/            # CLI tool (@minions-conversations/cli on npm)
  apps/
    web/            # Playground web app
    docs/           # Astro Starlight documentation site
    blog/           # Blog
  examples/
    typescript/     # TypeScript usage examples
    python/         # Python usage examples
```

---

## Development

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm run build

# Run tests
pnpm run test

# Type check
pnpm run lint
```

---

## Documentation

- Docs: [conversations.minions.help](https://conversations.minions.help)
- Blog: [conversations.minions.blog](https://conversations.minions.blog)
- App: [conversations.minions.wtf](https://conversations.minions.wtf)

---

## License

[MIT](LICENSE)
