public class TicketPool {
    private int ticketsAvailable;
    private final int maxCapacity;

    public TicketPool(int totalTickets, int maxCapacity) {
        this.ticketsAvailable = totalTickets;
        this.maxCapacity = maxCapacity;
    }

    public synchronized boolean addTicket() {
        if (ticketsAvailable < maxCapacity) {
            ticketsAvailable++;
            return true;
        }
        return false;
    }

    public synchronized boolean removeTicket() {
        if (ticketsAvailable > 0) {
            ticketsAvailable--;
            return true;
        }
        return false;
    }

    public synchronized int getTicketsAvailable() {
        return ticketsAvailable;
    }

    public synchronized void setTicketsAvailable(int ticketsAvailable) {
        this.ticketsAvailable = ticketsAvailable;
    }

    public int getMaxCapacity() {
        return maxCapacity;
    }
}
