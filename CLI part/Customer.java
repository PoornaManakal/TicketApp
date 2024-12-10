public class Customer implements Runnable {
    private final TicketPool ticketPool;
    private final int customerRetrievalRate;

    public Customer(TicketPool ticketPool, int customerRetrievalRate) {
        this.ticketPool = ticketPool;
        this.customerRetrievalRate = customerRetrievalRate;
    }

    @Override
    public void run() {
        while (!Thread.currentThread().isInterrupted()) {
            if (ticketPool.removeTicket()) {
                System.out.println("[Customer] Purchased a ticket. Total tickets: " + ticketPool.getTicketsAvailable());
            } else {
                System.out.println("[Customer] No tickets available. Waiting...");
            }
            try {
                Thread.sleep(customerRetrievalRate * 500);
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        }
    }
}
