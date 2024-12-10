public class Vendor implements Runnable {
    private final TicketPool ticketPool;
    private final int ticketReleaseRate;

    public Vendor(TicketPool ticketPool, int ticketReleaseRate) {
        this.ticketPool = ticketPool;
        this.ticketReleaseRate = ticketReleaseRate;
    }

    @Override
    public void run() {
        while (!Thread.currentThread().isInterrupted()) {
            if (ticketPool.addTicket()) {
                System.out.println("[Vendor] Added a ticket. Total tickets: " + ticketPool.getTicketsAvailable());
            } else {
                System.out.println("[Vendor] Pool full. Waiting to add tickets...");
            }
            try {
                Thread.sleep(ticketReleaseRate * 500);
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        }
    }
}
