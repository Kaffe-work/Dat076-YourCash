PGDMP         5                w         
   yourcashDB    11.1    11.2 
    |           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                       false            }           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                       false            ~           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                       false                       1262    24579 
   yourcashDB    DATABASE     �   CREATE DATABASE "yourcashDB" WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'English_Sweden.1252' LC_CTYPE = 'English_Sweden.1252';
    DROP DATABASE "yourcashDB";
             postgres    false            �            1259    24580    appuser    TABLE     ]   CREATE TABLE public.appuser (
    username text NOT NULL,
    name text,
    pasword text
);
    DROP TABLE public.appuser;
       public         postgres    false            �            1259    24588    expense    TABLE     �   CREATE TABLE public.expense (
    id text NOT NULL,
    cost real,
    timedate timestamp without time zone,
    category text,
    description text
);
    DROP TABLE public.expense;
       public         postgres    false            x          0    24580    appuser 
   TABLE DATA               :   COPY public.appuser (username, name, pasword) FROM stdin;
    public       postgres    false    196   M	       y          0    24588    expense 
   TABLE DATA               L   COPY public.expense (id, cost, timedate, category, description) FROM stdin;
    public       postgres    false    197   z	       �           2606    24587    appuser appuser_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.appuser
    ADD CONSTRAINT appuser_pkey PRIMARY KEY (username);
 >   ALTER TABLE ONLY public.appuser DROP CONSTRAINT appuser_pkey;
       public         postgres    false    196            �           2606    24595    expense expense_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.expense
    ADD CONSTRAINT expense_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.expense DROP CONSTRAINT expense_pkey;
       public         postgres    false    197            x      x�+I-.1�,��E����\1z\\\ a8       y   G   x�3�41�420��50�50W04�20 "�����"Β��.#�j2R���9MLP��Y�"�q��qqq _,�     