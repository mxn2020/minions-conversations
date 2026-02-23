"""
Minions Conversations SDK — Type Schemas
Custom MinionType schemas for Minions Conversations.
"""

from minions.types import FieldDefinition, FieldValidation, MinionType

email_thread_type = MinionType(
    id="conversations-email-thread",
    name="Email thread",
    slug="email-thread",
    description="A conversation thread with a lead.",
    icon="💬",
    schema=[
        FieldDefinition(name="leadId", type="string", label="leadId"),
        FieldDefinition(name="subject", type="string", label="subject"),
        FieldDefinition(name="status", type="select", label="status"),
        FieldDefinition(name="lastMessageAt", type="string", label="lastMessageAt"),
        FieldDefinition(name="messageCount", type="number", label="messageCount"),
        FieldDefinition(name="intent", type="select", label="intent"),
        FieldDefinition(name="sentiment", type="select", label="sentiment"),
    ],
)

email_message_type = MinionType(
    id="conversations-email-message",
    name="Email message",
    slug="email-message",
    description="A single email in a thread.",
    icon="📧",
    schema=[
        FieldDefinition(name="threadId", type="string", label="threadId"),
        FieldDefinition(name="direction", type="select", label="direction"),
        FieldDefinition(name="body", type="string", label="body"),
        FieldDefinition(name="sentAt", type="string", label="sentAt"),
        FieldDefinition(name="parsedIntent", type="select", label="parsedIntent"),
        FieldDefinition(name="sentiment", type="select", label="sentiment"),
    ],
)

escalation_trigger_type = MinionType(
    id="conversations-escalation-trigger",
    name="Escalation trigger",
    slug="escalation-trigger",
    description="A rule that escalates a conversation to a human.",
    icon="🚨",
    schema=[
        FieldDefinition(name="name", type="string", label="name"),
        FieldDefinition(name="condition", type="select", label="condition"),
        FieldDefinition(name="action", type="select", label="action"),
        FieldDefinition(name="isActive", type="boolean", label="isActive"),
    ],
)

custom_types: list[MinionType] = [
    email_thread_type,
    email_message_type,
    escalation_trigger_type,
]

