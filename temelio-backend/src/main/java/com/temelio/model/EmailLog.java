package com.temelio.model;

import jakarta.persistence.*;
import lombok.Data;


import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "email_logs")

@Data // Generates getters, setters, toString, equals, and hashCode
public class EmailLog {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String senderEmail;

    private String recipientEmail;

    private String subject;

    private String content;

    private List<String> cc;

    private List<String> bcc;

    private LocalDateTime sentAt;
}
