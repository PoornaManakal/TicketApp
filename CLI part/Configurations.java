
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Scanner;

public class Configurations {

    // Method to save the system state (ticket details) to a file
    public static void saveSystemState(TicketPool ticketPool) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Do you want to save the system details to a text file? (yes/no): ");
        String saveChoice = scanner.nextLine().trim().toLowerCase();

        if ("yes".equals(saveChoice)) {
            try (FileWriter writer = new FileWriter("system_state.txt")) {
                writer.write("Tickets Available: " + ticketPool.getTicketsAvailable() + "\n");
                writer.write("Max Capacity: " + ticketPool.getMaxCapacity() + "\n");
                System.out.println("System details saved to system_state.txt");
            } catch (IOException e) {
                System.out.println("Error saving system state: " + e.getMessage());
            }
        }
    }

    // Method to load the system state (ticket details) from a file
    public static boolean loadSystemState(TicketPool ticketPool) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Do you want to start from the previous state? (yes/no): ");
        String loadChoice = scanner.nextLine().trim().toLowerCase();

        if ("yes".equals(loadChoice)) {
            try (BufferedReader reader = new BufferedReader(new FileReader("system_state.txt"))) {
                String line;
                while ((line = reader.readLine()) != null) {
                    if (line.startsWith("Tickets Available: ")) {
                        int ticketsAvailable = Integer.parseInt(line.replace("Tickets Available: ", ""));
                        ticketPool.setTicketsAvailable(ticketsAvailable);
                        System.out.println("Loaded tickets available: " + ticketsAvailable);
                    }
                }
                return true;
            } catch (IOException | NumberFormatException e) {
                System.out.println("Error loading system state: " + e.getMessage());
            }
        }
        return false;
    }
}
