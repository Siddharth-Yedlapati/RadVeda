package RadVeda.Collaboration.Messages;

public record GroupMessageRequest(
        Long testId,
        String text,
        String referenceMessageType,
        Long referenceMessageId) {
}
