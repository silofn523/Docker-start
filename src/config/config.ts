export default () => ({
    
    DATABASE_HOST: process.env.DATABASE_HOST, 
    DATABASE_PORT: parseInt(process.env.DATABASE_PORT) || 3306,
    DATABASE_USERNAME: process.env.DATABASE_USERNAME,
    DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
    DATABASE_SCHEMA: process.env.DATABASE_SCHEMA
})