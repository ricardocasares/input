SET xmloption = content;
CREATE TABLE public.calls (
    id bigint NOT NULL,
    token_id bigint NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL
);
COMMENT ON TABLE public.calls IS 'Stores API calls';
CREATE SEQUENCE public.calls_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.calls_id_seq OWNED BY public.calls.id;
CREATE TABLE public.plans (
    id integer NOT NULL,
    paypal_plan_id text NOT NULL,
    name text NOT NULL,
    description text NOT NULL,
    details jsonb NOT NULL,
    status text NOT NULL
);
COMMENT ON TABLE public.plans IS 'Stores plans';
CREATE SEQUENCE public.plans_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.plans_id_seq OWNED BY public.plans.id;
CREATE TABLE public.subscriptions (
    id bigint NOT NULL,
    user_id text NOT NULL,
    paypal_subscription_id text,
    paypal_plan_id text NOT NULL,
    plan_id integer NOT NULL,
    status text NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL
);
COMMENT ON TABLE public.subscriptions IS 'Stores subscriptions';
CREATE SEQUENCE public.subscriptions_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.subscriptions_id_seq OWNED BY public.subscriptions.id;
CREATE TABLE public.tokens (
    id bigint NOT NULL,
    subscription_id bigint NOT NULL,
    user_id text NOT NULL,
    token uuid DEFAULT public.gen_random_uuid() NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL
);
COMMENT ON TABLE public.tokens IS 'Stores API tokens';
CREATE SEQUENCE public.tokens_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.tokens_id_seq OWNED BY public.tokens.id;
CREATE SEQUENCE public.tokens_subscription_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.tokens_subscription_id_seq OWNED BY public.tokens.subscription_id;
ALTER TABLE ONLY public.calls ALTER COLUMN id SET DEFAULT nextval('public.calls_id_seq'::regclass);
ALTER TABLE ONLY public.plans ALTER COLUMN id SET DEFAULT nextval('public.plans_id_seq'::regclass);
ALTER TABLE ONLY public.subscriptions ALTER COLUMN id SET DEFAULT nextval('public.subscriptions_id_seq'::regclass);
ALTER TABLE ONLY public.tokens ALTER COLUMN id SET DEFAULT nextval('public.tokens_id_seq'::regclass);
ALTER TABLE ONLY public.tokens ALTER COLUMN subscription_id SET DEFAULT nextval('public.tokens_subscription_id_seq'::regclass);
ALTER TABLE ONLY public.calls
    ADD CONSTRAINT calls_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.plans
    ADD CONSTRAINT plans_name_key UNIQUE (name);
ALTER TABLE ONLY public.plans
    ADD CONSTRAINT plans_paypal_plan_id_key UNIQUE (paypal_plan_id);
ALTER TABLE ONLY public.plans
    ADD CONSTRAINT plans_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.subscriptions
    ADD CONSTRAINT subscriptions_paypal_subscription_id_key UNIQUE (paypal_subscription_id);
ALTER TABLE ONLY public.subscriptions
    ADD CONSTRAINT subscriptions_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.subscriptions
    ADD CONSTRAINT subscriptions_user_id_key UNIQUE (user_id);
ALTER TABLE ONLY public.tokens
    ADD CONSTRAINT tokens_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.tokens
    ADD CONSTRAINT tokens_subscription_id_key UNIQUE (subscription_id);
ALTER TABLE ONLY public.tokens
    ADD CONSTRAINT tokens_token_key UNIQUE (token);
