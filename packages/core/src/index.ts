/**
 * Minions Conversations SDK
 *
 * Email threads, reply parsing, intent detection, and escalation triggers
 *
 * @module @minions-conversations/sdk
 */

export const VERSION = '0.1.0';

/**
 * Example: Create a client instance for Minions Conversations.
 * Replace this with your actual SDK entry point.
 */
export function createClient(options = {}) {
    return {
        version: VERSION,
        ...options,
    };
}

export * from './schemas/index.js';
