SET xmloption = content;
CREATE TABLE public.subscriptions (
    id bigint NOT NULL,
    user_id text NOT NULL,
    plan_id text NOT NULL,
    subcription_id text,
    status text DEFAULT 'PENDING'::text NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    approval_url text,
    updated_at timestamp without time zone DEFAULT now(),
    active boolean DEFAULT false NOT NULL
);
COMMENT ON TABLE public.subscriptions IS 'Stores subscriptions';
CREATE TABLE public.calls (
    id bigint NOT NULL,
    token uuid NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL
);
CREATE SEQUENCE public.calls_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.calls_id_seq OWNED BY public.calls.id;
CREATE TABLE public.plans (
    id text NOT NULL,
    name text NOT NULL,
    description text NOT NULL,
    details jsonb NOT NULL,
    active boolean DEFAULT false NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL
);
COMMENT ON TABLE public.plans IS 'Stores plans';
CREATE SEQUENCE public.subscriptions_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.subscriptions_id_seq OWNED BY public.subscriptions.id;
CREATE TABLE public.tokens (
    token uuid DEFAULT public.gen_random_uuid() NOT NULL,
    user_id text NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    subscription_id bigint NOT NULL
);
COMMENT ON TABLE public.tokens IS 'Stores user tokens';
CREATE SEQUENCE public.tokens_subscription_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.tokens_subscription_id_seq OWNED BY public.tokens.subscription_id;
ALTER TABLE ONLY public.calls ALTER COLUMN id SET DEFAULT nextval('public.calls_id_seq'::regclass);
ALTER TABLE ONLY public.subscriptions ALTER COLUMN id SET DEFAULT nextval('public.subscriptions_id_seq'::regclass);
ALTER TABLE ONLY public.calls
    ADD CONSTRAINT calls_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.plans
    ADD CONSTRAINT plans_description_key UNIQUE (description);
ALTER TABLE ONLY public.plans
    ADD CONSTRAINT plans_name_key UNIQUE (name);
ALTER TABLE ONLY public.plans
    ADD CONSTRAINT plans_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.subscriptions
    ADD CONSTRAINT subscriptions_approval_url_key UNIQUE (approval_url);
ALTER TABLE ONLY public.subscriptions
    ADD CONSTRAINT subscriptions_id_key UNIQUE (id);
ALTER TABLE ONLY public.subscriptions
    ADD CONSTRAINT subscriptions_paypal_subcription_id_key UNIQUE (subcription_id);
ALTER TABLE ONLY public.subscriptions
    ADD CONSTRAINT subscriptions_pkey PRIMARY KEY (id, user_id);
ALTER TABLE ONLY public.subscriptions
    ADD CONSTRAINT subscriptions_user_id_key UNIQUE (user_id);
ALTER TABLE ONLY public.tokens
    ADD CONSTRAINT tokens_pkey PRIMARY KEY (token);
ALTER TABLE ONLY public.tokens
    ADD CONSTRAINT tokens_token_key UNIQUE (token);
