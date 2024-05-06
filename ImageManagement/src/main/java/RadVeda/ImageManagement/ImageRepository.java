package RadVeda.ImageManagement;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import jakarta.transaction.Transactional;

import java.util.Optional;
import java.util.List;


public interface ImageRepository extends JpaRepository<Image, Long> {
    Optional<Image> findById(Long id);

    @Query(value = "SELECT * FROM image WHERE testID = :testID", nativeQuery = true)
    List<Image> findAllImages(String testID);

    @Modifying
    @Transactional
    @Query(value = "DELETE FROM image WHERE testID = :testID", nativeQuery = true)
    void deleteImageOriginal(String testID);

    
    // @Modifying
    // @Transactional
    // @Query(value = "DELETE FROM test WHERE id = :testID", nativeQuery = true)
    // void deleteTest(Long testID);
}
