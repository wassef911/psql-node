import { createConnection } from 'typeorm';

export const establishDatabaseConnection = async (ENTITIES) => {
    await createConnection({
        type: 'postgres',
        host: process.env.POSTGRES_HOST || 'localhost',
        port: parseInt(process.env.POSTGRES_PORT) || 5432,
        username: process.env.POSTGRES_USER || 'postgres',
        password: process.env.POSTGRES_PASSWORD || '',
        database: process.env.POSTGRES_DATABASE || 'test',
        entities: ENTITIES,
        synchronize: true,
    });
}
