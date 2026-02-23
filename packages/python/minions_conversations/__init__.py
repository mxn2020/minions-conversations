"""
Minions Conversations Python SDK

Email threads, reply parsing, intent detection, and escalation triggers
"""

__version__ = "0.1.0"


def create_client(**kwargs):
    """Create a client for Minions Conversations.

    Args:
        **kwargs: Configuration options.

    Returns:
        dict: Client configuration.
    """
    return {
        "version": __version__,
        **kwargs,
    }

from .schemas import *
