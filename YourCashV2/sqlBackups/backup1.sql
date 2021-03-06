PGDMP     !    -    
            w         
   yourcashDB    11.1    11.2     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                       false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                       false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                       false            �           1262    24579 
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
       public         postgres    false            �            1259    24611    user_expenses    TABLE     X   CREATE TABLE public.user_expenses (
    username text NOT NULL,
    id text NOT NULL
);
 !   DROP TABLE public.user_expenses;
       public         postgres    false            �          0    24580    appuser 
   TABLE DATA               :   COPY public.appuser (username, name, pasword) FROM stdin;
    public       postgres    false    196   l       �          0    24588    expense 
   TABLE DATA               L   COPY public.expense (id, cost, timedate, category, description) FROM stdin;
    public       postgres    false    197   �       �          0    24611    user_expenses 
   TABLE DATA               5   COPY public.user_expenses (username, id) FROM stdin;
    public       postgres    false    198   �                  2606    24587    appuser appuser_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.appuser
    ADD CONSTRAINT appuser_pkey PRIMARY KEY (username);
 >   ALTER TABLE ONLY public.appuser DROP CONSTRAINT appuser_pkey;
       public         postgres    false    196                       2606    24595    expense expense_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.expense
    ADD CONSTRAINT expense_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.expense DROP CONSTRAINT expense_pkey;
       public         postgres    false    197                       2606    24618    user_expenses id_user 
   CONSTRAINT     ]   ALTER TABLE ONLY public.user_expenses
    ADD CONSTRAINT id_user PRIMARY KEY (username, id);
 ?   ALTER TABLE ONLY public.user_expenses DROP CONSTRAINT id_user;
       public         postgres    false    198    198                       2606    24624 #   user_expenses user_expenses_id_fkey    FK CONSTRAINT        ALTER TABLE ONLY public.user_expenses
    ADD CONSTRAINT user_expenses_id_fkey FOREIGN KEY (id) REFERENCES public.expense(id);
 M   ALTER TABLE ONLY public.user_expenses DROP CONSTRAINT user_expenses_id_fkey;
       public       postgres    false    2051    197    198                       2606    24619 )   user_expenses user_expenses_username_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.user_expenses
    ADD CONSTRAINT user_expenses_username_fkey FOREIGN KEY (username) REFERENCES public.appuser(username);
 S   ALTER TABLE ONLY public.user_expenses DROP CONSTRAINT user_expenses_username_fkey;
       public       postgres    false    196    198    2049            �   &   x�+I-.1�,��E����\ �gbq
����� i�      �   G   x�3�41�420��50�50W04�20 "�����"Β��.#�j2R���9MLP��Y�"�q��qqq _,�      �      x������ � �     