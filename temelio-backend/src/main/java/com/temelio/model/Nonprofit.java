package com.temelio.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "nonprofits")
@Data
public class Nonprofit {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;
    private String name;
    private String address;
    @Column(unique = true)
    private String email;

}
