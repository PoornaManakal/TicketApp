package com.ticket.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class TicketAppApplication {
    public static void main(String[] args) {
        SpringApplication.run(TicketAppApplication.class, args);
        System.out.println("Ticket App has started successfully...!");
    }
}
