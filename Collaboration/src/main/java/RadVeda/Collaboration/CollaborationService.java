package RadVeda.Collaboration;

import RadVeda.Collaboration.Messages.GroupMessageRepository;
import RadVeda.Collaboration.Messages.PrivateMessageRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CollaborationService implements CollaborationServiceInterface{
    private final GroupMessageRepository groupMessageRepository;
    private final PrivateMessageRepository privateMessageRepository;


}