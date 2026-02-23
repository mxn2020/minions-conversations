/**
 * @module @minions-conversations/sdk/schemas
 * Custom MinionType schemas for Minions Conversations.
 */

import type { MinionType } from 'minions-sdk';

export const emailthreadType: MinionType = {
  id: 'conversations-email-thread',
  name: 'Email thread',
  slug: 'email-thread',
  description: 'A conversation thread with a lead.',
  icon: '💬',
  schema: [
    { name: 'leadId', type: 'string', label: 'leadId' },
    { name: 'subject', type: 'string', label: 'subject' },
    { name: 'status', type: 'select', label: 'status' },
    { name: 'lastMessageAt', type: 'string', label: 'lastMessageAt' },
    { name: 'messageCount', type: 'number', label: 'messageCount' },
    { name: 'intent', type: 'select', label: 'intent' },
    { name: 'sentiment', type: 'select', label: 'sentiment' },
  ],
};

export const emailmessageType: MinionType = {
  id: 'conversations-email-message',
  name: 'Email message',
  slug: 'email-message',
  description: 'A single email in a thread.',
  icon: '📧',
  schema: [
    { name: 'threadId', type: 'string', label: 'threadId' },
    { name: 'direction', type: 'select', label: 'direction' },
    { name: 'body', type: 'string', label: 'body' },
    { name: 'sentAt', type: 'string', label: 'sentAt' },
    { name: 'parsedIntent', type: 'select', label: 'parsedIntent' },
    { name: 'sentiment', type: 'select', label: 'sentiment' },
  ],
};

export const escalationtriggerType: MinionType = {
  id: 'conversations-escalation-trigger',
  name: 'Escalation trigger',
  slug: 'escalation-trigger',
  description: 'A rule that escalates a conversation to a human.',
  icon: '🚨',
  schema: [
    { name: 'name', type: 'string', label: 'name' },
    { name: 'condition', type: 'select', label: 'condition' },
    { name: 'action', type: 'select', label: 'action' },
    { name: 'isActive', type: 'boolean', label: 'isActive' },
  ],
};

export const customTypes: MinionType[] = [
  emailthreadType,
  emailmessageType,
  escalationtriggerType,
];

