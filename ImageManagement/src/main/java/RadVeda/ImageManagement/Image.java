package RadVeda.ImageManagement;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
@Entity
@Table(name = "image")
public class Image {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long testID;
    private String imageURL;

    public Image() {
        
    }

    public Image(String TestType, String imageURL) {

    }
}
