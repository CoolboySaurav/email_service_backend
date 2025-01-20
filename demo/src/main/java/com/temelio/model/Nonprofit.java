package com.temelio.model;

import jakarta.persistence.*;
import lombok.Data;
//import org.springframework.data.mongodb.core.mapping.Document;

@Entity
@Table(name = "nonprofits")
//@Document(collation = "nonprofit")
@Data
public class Nonprofit {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String address;
    @Column(unique = true)
    private String email;

}
