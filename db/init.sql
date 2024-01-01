CREATE TABLE  users (
  user_id uuid PRIMARY KEY DEFAULT gen_random_uuid (),
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);