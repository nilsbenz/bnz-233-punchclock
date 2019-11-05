package ch.zli.m223.punchclock.repository;

import ch.zli.m223.punchclock.domain.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<AppUser, Long> {
    AppUser findByUsername(String username);
}
