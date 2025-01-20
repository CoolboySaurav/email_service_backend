package com.temelio.model;

import jakarta.persistence.*;
import lombok.Data;
//import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Entity
@Table(name = "email_logs")
//@Document(collation = "email_logs")
@Data // Generates getters, setters, toString, equals, and hashCode
public class EmailLog {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String recipientEmail;

    private String subject;

    private String content;

    private LocalDateTime sentAt;
}
