import java.util.Scanner;

public class TicketingApp {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        TicketPool ticketPool = new TicketPool(0, 0);

        boolean loaded = Configurations.loadSystemState(ticketPool); 
        int ticketReleaseRate = 0, customerRetrievalRate = 0;

        if (!loaded) {
            System.out.println("Welcome to the Ticketing System!");
            int totalTickets = getPositiveInteger(scanner, "Enter total number of tickets: ");
            int maxTicketCapacity = getPositiveInteger(scanner, "Enter max ticket capacity: ");
            ticketReleaseRate = getPositiveInteger(scanner, "Enter ticket release rate (seconds): ");
            customerRetrievalRate = getPositiveInteger(scanner, "Enter customer retrieval rate (seconds): ");
            ticketPool = new TicketPool(totalTickets, maxTicketCapacity);
        }

        Vendor vendor = new Vendor(ticketPool, ticketReleaseRate);
        Customer customer = new Customer(ticketPool, customerRetrievalRate);

        Thread vendorThread = null, customerThread = null;

        while (true) {
            System.out.println("\nCommands:\n1. Start\n2. Stop\n3. Exit");
            int choice = getValidChoice(scanner, "Enter choice: ");

            switch (choice) {
                case 1:
                    if (vendorThread == null || !vendorThread.isAlive()) {
                        vendorThread = new Thread(vendor);
                        customerThread = new Thread(customer);
                        vendorThread.start();
                        customerThread.start();
                        System.out.println("System started!");
                    } else {
                        System.out.println("System already running!");
                    }
                    break;
                case 2:
                    if (vendorThread != null && customerThread != null) {
                        vendorThread.interrupt();
                        customerThread.interrupt();
                        System.out.println("System stopped!");
                        Configurations.saveSystemState(ticketPool);
                    } else {
                        System.out.println("No system running!");
                    }
                    break;
                case 3:
                    if (vendorThread != null && customerThread != null) {
                        vendorThread.interrupt();
                        customerThread.interrupt();
                    }
                    System.out.println("Exiting...");
                    System.exit(0);
                    break;
                default:
                    System.out.println("Invalid choice.");
            }
        }
    }

    private static int getPositiveInteger(Scanner scanner, String message) {
        int value;
        while (true) {
            System.out.print(message);
            try {
                value = Integer.parseInt(scanner.nextLine());
                if (value > 0) return value;
                else throw new NumberFormatException();
            } catch (NumberFormatException e) {
                System.out.println("Invalid input. Please enter a positive integer.");
            }
        }
    }

    private static int getValidChoice(Scanner scanner, String message) {
        int choice;
        while (true) {
            System.out.print(message);
            try {
                choice = Integer.parseInt(scanner.nextLine());
                if (choice >= 1 && choice <= 3) return choice;
                else throw new NumberFormatException();
            } catch (NumberFormatException e) {
                System.out.println("Invalid choice. Please enter 1, 2, or 3.");
            }
        }
    }
}
