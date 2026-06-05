import { PrismaClient } from '../src/generated/prisma'

const prisma = new PrismaClient({
  errorFormat: 'pretty',
})

async function main() {
  // Create users with different roles - using plain passwords for demo
  const adminPassword = 'password123'
  const ownerPassword = 'password123'
  const guestPassword = 'password123'

  const admin = await prisma.user.create({
    data: {
      email: 'admin@demo.com',
      name: 'Admin User',
      password: adminPassword,
      role: 'ADMIN',
      phone: '+1234567890'
    }
  })

  const owner = await prisma.user.create({
    data: {
      email: 'owner@demo.com',
      name: 'Property Owner',
      password: ownerPassword,
      role: 'OWNER',
      phone: '+1234567891'
    }
  })

  const guest = await prisma.user.create({
    data: {
      email: 'guest@demo.com',
      name: 'Guest User',
      password: guestPassword,
      role: 'GUEST',
      phone: '+1234567892'
    }
  })

  // Create amenities
  const amenities = await Promise.all([
    prisma.amenity.create({
      data: { name: 'WiFi', logo: '📶' }
    }),
    prisma.amenity.create({
      data: { name: 'Kitchen', logo: '🍳' }
    }),
    prisma.amenity.create({
      data: { name: 'Air Conditioning', logo: '❄️' }
    }),
    prisma.amenity.create({
      data: { name: 'Parking', logo: '🚗' }
    }),
    prisma.amenity.create({
      data: { name: 'Pool', logo: '🏊‍♂️' }
    })
  ])

  // Create sample units
  const unit1 = await prisma.unit.create({
    data: {
      name: 'Cozy Downtown Apartment',
      description: 'Beautiful 2-bedroom apartment in the heart of downtown with city views.',
      address: '123 Main St, Downtown, City 12345',
      pricePerDay: 85.00,
      ownerId: owner.id,
      amenities: {
        create: [
          { amenityId: amenities[0].id }, // WiFi
          { amenityId: amenities[1].id }, // Kitchen
          { amenityId: amenities[2].id }  // AC
        ]
      }
    }
  })

  const unit2 = await prisma.unit.create({
    data: {
      name: 'Luxury Beach House',
      description: 'Stunning beachfront property with private pool and ocean views.',
      address: '456 Ocean Drive, Beach City, BC 67890',
      pricePerDay: 250.00,
      ownerId: owner.id,
      amenities: {
        create: [
          { amenityId: amenities[0].id }, // WiFi
          { amenityId: amenities[1].id }, // Kitchen
          { amenityId: amenities[2].id }, // AC
          { amenityId: amenities[3].id }, // Parking
          { amenityId: amenities[4].id }  // Pool
        ]
      }
    }
  })

  // Create sample bookings
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)

  const nextWeek = new Date()
  nextWeek.setDate(nextWeek.getDate() + 7)

  await prisma.booking.create({
    data: {
      unitId: unit1.id,
      guestId: guest.id,
      checkIn: tomorrow,
      checkOut: nextWeek,
      totalPrice: 595.00, // 7 nights * $85
      guestName: 'John Doe',
      guestEmail: 'john.doe@email.com',
      guestPhone: '+1234567893',
      numberOfGuests: 2,
      status: 'CONFIRMED',
      source: 'DIRECT'
    }
  })

  // Create sample inventory
  await prisma.inventory.create({
    data: {
      unitId: unit1.id,
      name: 'Toilet Paper',
      description: '2-ply toilet paper rolls',
      quantity: 12,
      minQuantity: 3,
      cost: 1.50
    }
  })

  await prisma.inventory.create({
    data: {
      unitId: unit1.id,
      name: 'Towels',
      description: 'Bath towels',
      quantity: 8,
      minQuantity: 2,
      cost: 15.00
    }
  })

  // Create sample expenses
  await prisma.expense.create({
    data: {
      userId: owner.id,
      unitId: unit1.id,
      description: 'Monthly cleaning supplies',
      amount: 45.99,
      category: 'SUPPLIES'
    }
  })

  await prisma.expense.create({
    data: {
      userId: owner.id,
      unitId: unit2.id,
      description: 'Pool maintenance',
      amount: 120.00,
      category: 'MAINTENANCE'
    }
  })

  console.log('✅ Seed data created successfully!')
  console.log('Demo accounts:')
  console.log('- Admin: admin@demo.com / password123')
  console.log('- Owner: owner@demo.com / password123')
  console.log('- Guest: guest@demo.com / password123')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })