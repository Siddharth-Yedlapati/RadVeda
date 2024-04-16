package RadVeda.Collaboration.Messages;

public record PrivateMessageRequest(
        Long testId,
        String text,
        String referenceMessageType,
        Long referenceMessageId,
        String recipientType,
        Long recipientId) {
}
