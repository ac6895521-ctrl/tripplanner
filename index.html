import java.util.*;

public class OnlineTravelBooking {

    static Scanner sc = new Scanner(System.in);

    // Travel package class
    static class TravelPackage {
        String name;
        double price;

        TravelPackage(String name, double price) {
            this.name = name;
            this.price = price;
        }
    }

    // Booking class
    static class Booking {
        String bookingId;
        String travellerName;
        int age;
        String phone;
        String destination;
        String packageName;
        int travellers;
        double totalCost;

        Booking(String bookingId, String travellerName, int age,
                String phone, String destination, String packageName,
                int travellers, double totalCost) {

            this.bookingId = bookingId;
            this.travellerName = travellerName;
            this.age = age;
            this.phone = phone;
            this.destination = destination;
            this.packageName = packageName;
            this.travellers = travellers;
            this.totalCost = totalCost;
        }

        void displayBooking() {
            System.out.println("\n========== BOOKING DETAILS ==========");
            System.out.println("Booking ID      : " + bookingId);
            System.out.println("Traveller Name  : " + travellerName);
            System.out.println("Age             : " + age);
            System.out.println("Phone           : " + phone);
            System.out.println("Destination     : " + destination);
            System.out.println("Package         : " + packageName);
            System.out.println("Travellers      : " + travellers);
            System.out.println("Total Cost      : Rs. " + totalCost);
            System.out.println("Status          : Confirmed");
            System.out.println("=====================================");
        }
    }

    static ArrayList<Booking> bookings = new ArrayList<>();
    static int bookingNumber = 1001;

    // Main method
    public static void main(String[] args) {

        while (true) {

            System.out.println("\n=================================");
            System.out.println("   ONLINE TRAVEL BOOKING SYSTEM");
            System.out.println("=================================");
            System.out.println("1. Search Destination");
            System.out.println("2. Book Trip");
            System.out.println("3. View Booking");
            System.out.println("4. Exit");
            System.out.print("Enter your choice: ");

            int choice = sc.nextInt();
            sc.nextLine();

            switch (choice) {

                case 1:
                    searchDestination();
                    break;

                case 2:
                    bookTrip();
                    break;

                case 3:
                    viewBooking();
                    break;

                case 4:
                    System.out.println("Thank you for using Travel Booking System!");
                    return;

                default:
                    System.out.println("Invalid choice!");
            }
        }
    }

    // Search destination
    static void searchDestination() {

        String[] destinations = {
                "Manali",
                "Goa",
                "Kashmir",
                "Jaipur",
                "Shimla"
        };

        System.out.print("\nEnter destination to search: ");
        String search = sc.nextLine();

        boolean found = false;

        for (String destination : destinations) {

            if (destination.equalsIgnoreCase(search)) {
                System.out.println("Destination Found: " + destination);
                found = true;
                break;
            }
        }

        if (!found) {
            System.out.println("Destination not found.");
        }
    }

    // Book trip
    static void bookTrip() {

        System.out.println("\nAvailable Destinations:");
        System.out.println("1. Manali");
        System.out.println("2. Goa");
        System.out.println("3. Kashmir");
        System.out.println("4. Jaipur");
        System.out.println("5. Shimla");

        System.out.print("Select destination: ");
        int destinationChoice = sc.nextInt();
        sc.nextLine();

        String destination;

        switch (destinationChoice) {

            case 1:
                destination = "Manali";
                break;

            case 2:
                destination = "Goa";
                break;

            case 3:
                destination = "Kashmir";
                break;

            case 4:
                destination = "Jaipur";
                break;

            case 5:
                destination = "Shimla";
                break;

            default:
                System.out.println("Invalid destination!");
                return;
        }

        // Packages
        TravelPackage[] packages = {
                new TravelPackage("Basic", 8000),
                new TravelPackage("Standard", 12000),
                new TravelPackage("Premium", 18000)
        };

        System.out.println("\nAvailable Packages for " + destination);

        for (int i = 0; i < packages.length; i++) {
            System.out.println(
                    (i + 1) + ". " +
                    packages[i].name +
                    " - Rs. " +
                    packages[i].price
            );
        }

        System.out.print("Select package: ");
        int packageChoice = sc.nextInt();
        sc.nextLine();

        if (packageChoice < 1 || packageChoice > 3) {
            System.out.println("Invalid package!");
            return;
        }

        TravelPackage selectedPackage = packages[packageChoice - 1];

        // Traveller details
        System.out.print("\nEnter traveller name: ");
        String name = sc.nextLine();

        System.out.print("Enter age: ");
        int age = sc.nextInt();
        sc.nextLine();

        System.out.print("Enter phone number: ");
        String phone = sc.nextLine();

        System.out.print("Enter number of travellers: ");
        int travellers = sc.nextInt();
        sc.nextLine();

        if (travellers <= 0) {
            System.out.println("Number of travellers must be greater than 0.");
            return;
        }

        // Calculate cost
        double totalCost = selectedPackage.price * travellers;

        System.out.println("\n========== COST ==========");
        System.out.println("Destination : " + destination);
        System.out.println("Package     : " + selectedPackage.name);
        System.out.println("Price/Person: Rs. " + selectedPackage.price);
        System.out.println("Travellers  : " + travellers);
        System.out.println("Total Cost  : Rs. " + totalCost);
        System.out.println("==========================");

        // Confirmation
        System.out.print("\nConfirm booking? (Y/N): ");
        String confirm = sc.nextLine();

        if (confirm.equalsIgnoreCase("Y")) {

            String bookingId = "TRV" + bookingNumber++;

            Booking booking = new Booking(
                    bookingId,
                    name,
                    age,
                    phone,
                    destination,
                    selectedPackage.name,
                    travellers,
                    totalCost
            );

            bookings.add(booking);

            System.out.println("\nBooking Successful!");
            System.out.println("Your Booking ID is: " + bookingId);

        } else {
            System.out.println("Booking Cancelled.");
        }
    }

    // View booking
    static void viewBooking() {

        if (bookings.isEmpty()) {
            System.out.println("\nNo bookings available.");
            return;
        }

        System.out.print("\nEnter Booking ID: ");
        String id = sc.nextLine();

        boolean found = false;

        for (Booking booking : bookings) {

            if (booking.bookingId.equalsIgnoreCase(id)) {
                booking.displayBooking();
                found = true;
                break;
            }
        }

        if (!found) {
            System.out.println("Booking not found.");
        }
    }
}