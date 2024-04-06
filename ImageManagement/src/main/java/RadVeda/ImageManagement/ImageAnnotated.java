package RadVeda.ImageManagement;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
@Entity
@Table(name = "imageAnnotated")
public class ImageAnnotated {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long testID;
    private Long radID;
    private String imageURL;

    public ImageAnnotated() {
        
    }

    // public ImageAnnotated(String TestType, String imageURL) {

    // }
}
