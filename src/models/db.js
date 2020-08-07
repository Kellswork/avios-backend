import { Pool } from 'pg';

const connectionString = 'postgresql://Kells:password@localhost/avios';

const pool = new Pool({
  connectionString: connectionString,
});

const db = {
  query: (text, params) => pool.query(text, params),
};

export default db;
