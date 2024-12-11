# README

## **Introduction**

This project is a ticketing system designed for efficient management of ticket allocation and user interactions. It consists of a backend built with Spring Boot and a frontend developed using React. The system provides endpoints to manage ticket distribution, user authentication (sign-up and login), and monitoring of the ticket pool's status.

The user interface offers intuitive controls for starting and stopping the system and provides real-time updates on the ticket pool's status.

---

## **Setup Instructions**

### **Prerequisites**

Ensure the following software is installed on your system:

- **Java**: Version 17 or higher
- **Maven**: Latest version for managing Java dependencies
- **Node.js**: Version 16 or higher
- **npm**: Installed alongside Node.js
- **Database**: MySQL 8.0 or higher

### **---------------------------------------------------------Backend Setup---------------------------------------------------------**

1. **Clone the Repository**:
   ```bash
   git clone <repository_url>
   cd <repository_folder>/backend
   ```

2. **Configure MySQL Database**:
   - Create a new database named `ticketing_system`.
   - Update `application.properties` file in the `src/main/resources` directory with your MySQL credentials:
     ```properties
     spring.datasource.url=jdbc:mysql://localhost:3306/ticketing_system
     spring.datasource.username=<your_username>
     spring.datasource.password=<your_password>
     ```

3. **Build the Backend**:
  
   mvn clean install


4. **Run the Backend Application**:

   mvn spring-boot:run


### **Frontend Setup**

1. **Navigate to the Frontend Directory**:

   cd <repository_folder>/frontend


2. **Install Dependencies**:

   npm install


3. **Run the Frontend Application**:

   npm start


4. The frontend should now be accessible at `http://localhost:3000`.



## **Usage Instructions**

### **How to Configure and Start the System**

1. Start the backend server as described above.
2. Launch the frontend application.
3. Navigate to the user interface in your browser.
4. Use the following API endpoints (if needed for testing):
   - **Start Ticketing System**: `POST /api/tickets/start`
   - **Stop Ticketing System**: `POST /api/tickets/stop`
   - **Get Ticket Status**: `GET /api/tickets/status`

### **Explanation of UI Controls**

- **Start System**:
  - Input the total number of tickets, ticket release rate, customer retrieval rate, and maximum capacity.
  - Click the `Start` button to initiate the ticketing system.

- **Stop System**:
  - Click the `Stop` button to halt the ticketing system operations.

- **View Status**:
  - The status panel displays the current ticket count and operational status in real-time.

- **User Login/Sign-up**:
  - Navigate to the user login page.
  - For new users, fill in the sign-up form and click `Register`.
  - For existing users, input your username, password, and role to log in.





### **---------------------------------------------------------Frontend Setup---------------------------------------------------------**

## set directory for frontend

## **cd frontend**

now you are in the frontend

## install node modules

to install node libraries,

## **npm install**

## Available Scripts

In the project directory, you can run:

### **npm start**

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


### **Homepage**
- Displays an overview of the ticketing system.
- Provides navigation to start/stop the system and view ticket status.

### **User Authentication**
- **Sign-Up Page**:
  - Form to create a new account with fields for username, password, and role.
  - Handles validation and displays appropriate error messages.

- **Login Page**:
  - Form for existing users to log in by entering username, password, and role.
  - Displays success or error messages based on login attempts.

### **System Control Panel**
- Allows users to configure the ticketing system parameters such as:
  - Total Tickets
  - Ticket Release Rate
  - Customer Retrieval Rate
  - Maximum Ticket Capacity
- Start and stop buttons for managing the ticket system's state.

### **Status Display**
- A live dashboard shows:
  - Current number of tickets available.
  - Operational status of the system (Running/Stopped).

