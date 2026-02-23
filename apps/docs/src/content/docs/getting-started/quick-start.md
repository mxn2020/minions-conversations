---
title: Quick Start
description: Get up and running with Minions Conversations in minutes
---

## TypeScript

```typescript
import { createClient } from '@minions-conversations/sdk';

const client = createClient();
console.log('Version:', client.version);
```

## Python

```python
from minions_conversations import create_client

client = create_client()
print(f"Version: {client['version']}")
```

## CLI

```bash
conversations info
```
