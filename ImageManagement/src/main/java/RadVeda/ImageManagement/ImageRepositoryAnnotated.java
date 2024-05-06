package RadVeda.ImageManagement;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import jakarta.transaction.Transactional;

import java.util.Optional;
import java.util.List;


public interface ImageRepositoryAnnotated extends JpaRepository<ImageAnnotated, Long> {
    // Optional<Image> findById(Long id);

    // @Query(value = "SELECT * FROM image WHERE testID = :testID", nativeQuery = true)
    // List<ImageAnnotated> findAllImages(Long testID);

    @Query(value = "SELECT * FROM image_annotated WHERE testID = :testID AND radID = :radID", nativeQuery = true)
    List<ImageAnnotated> findAllImagesAnnotated(String testID, String radID);

    @Modifying
    @Transactional
    @Query(value = "DELETE FROM image_annotated WHERE testID = :testID AND radID = :radID", nativeQuery = true)
    void deleteImageAnnotated(String testID,String radID);




}
