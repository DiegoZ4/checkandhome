## Next.js Booking System Project

This is a complete booking management system with multi-user roles, property management, and channel manager integration.

### Project Features:

- Multi-user system (Admin, Guest, Owner, Cleaner, CheckInOut roles)
- Property management (units with name, address, calendar, daily pricing in USD, photos, amenities)
- Amenities system with name and logo
- Channel manager integration for Booking.com and Airbnb calendar sync
- Financial tracking (purchases/expenses with description and amount)
- Inventory/stock management
- Consumption tracking
- Modern UI with booking calendar
- Dashboard for different user roles

### Database Schema:

- Users table with role-based access
- Properties (units) with full details
- Amenities with logos
- Bookings with calendar integration
- Financial records (expenses/purchases)
- Inventory and consumption tracking

### API Integrations:

- Booking.com API for calendar sync
- Airbnb API for reservation management
- Channel manager functionality

### Development Status:

- [x] Verify copilot-instructions.md file creation
- [x] Clarify project requirements
- [x] Scaffold Next.js booking system project
- [x] Customize project with booking features
- [x] Install required extensions
- [x] Compile and setup dependencies
- [x] Create and run development task
- [x] Launch the project
- [x] Complete documentation

### Getting Started:

1. Run `npm run dev` to start development server
2. Visit http://localhost:3000 to see the application
3. Database is set up with SQLite and Prisma
4. Use `npx prisma studio` to view/edit database
