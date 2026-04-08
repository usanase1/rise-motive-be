import { PrismaClient } from '@prisma/client';
import { execSync } from 'child_process';

const prisma = new PrismaClient();

async function runMigrations() {
  try {
    console.log('Running database migrations...');
    
    // Run prisma migrate deploy
    execSync('npx prisma migrate deploy', { stdio: 'inherit' });
    
    console.log('Migrations completed successfully!');
    
    // Test database connection
    await prisma.$connect();
    console.log('Database connection successful!');
    
    // Check if admin table exists
    try {
      await prisma.$queryRaw`SELECT COUNT(*) FROM Admin`;
      console.log('Admin table exists and is accessible');
    } catch (error) {
      console.log('Admin table not found or not accessible:', error);
    }
    
    // Check if training application table exists
    try {
      await prisma.$queryRaw`SELECT COUNT(*) FROM TrainingApplication`;
      console.log('TrainingApplication table exists and is accessible');
    } catch (error) {
      console.log('TrainingApplication table not found or not accessible:', error);
    }
    
    await prisma.$disconnect();
    
  } catch (error) {
    console.error('Migration failed:', error);
    process.exit(1);
  }
}

// Run migrations if this file is executed directly
if (require.main === module) {
  runMigrations();
}

export default runMigrations;
