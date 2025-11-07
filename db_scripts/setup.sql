-- 0. Enable the extension required for UUID generation
-- This must be done by a superuser (which the Docker entrypoint is)
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Check if the role (user) exists and create it if not
DO
$do$
BEGIN
   IF NOT EXISTS (
      SELECT FROM pg_catalog.pg_roles
      WHERE  rolname = 'node_user') THEN
      
      -- 1. Create the dedicated user for the Node.js application
      CREATE ROLE node_user WITH
        LOGIN
        PASSWORD 'abcd@1234'
        NOSUPERUSER
        INHERIT
        NOCREATEDB
        NOCREATEROLE
        NOREPLICATION;
   END IF;
END
$do$;

-- 2. Grant permissions on the database
GRANT CONNECT ON DATABASE mydb TO node_user;

-- 3. Create the 'products' table using your specified structure
CREATE TABLE IF NOT EXISTS public.products
(
    -- Using gen_random_uuid() for automatic generation if not provided by app
    id uuid NOT NULL DEFAULT gen_random_uuid(), 
    product_name character varying(255) COLLATE pg_catalog."default" NOT NULL,
    price numeric(10,2) NOT NULL,
    category character varying(100) COLLATE pg_catalog."default",
    stock_status character varying(100) COLLATE pg_catalog."default",
    -- Re-adding a helpful timestamp column
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP, 
    CONSTRAINT products_pkey PRIMARY KEY (id)
);

-- 4. Grant all privileges on the table and sequences to the dedicated user
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO node_user;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO node_user;

-- 5. Ensure future tables and sequences created by the superuser also grant privileges
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON TABLES TO node_user;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON SEQUENCES TO node_user;