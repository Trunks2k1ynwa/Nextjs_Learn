export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      account: {
        Row: {
          address: string | null;
          age: number | null;
          id: number;
          name: string | null;
        };
        Insert: {
          address?: string | null;
          age?: number | null;
          id?: number;
          name?: string | null;
        };
        Update: {
          address?: string | null;
          age?: number | null;
          id?: number;
          name?: string | null;
        };
        Relationships: [];
      };
      Images: {
        Row: {
          href: string | null;
          id: number;
          name: string | null;
          username: string | null;
        };
        Insert: {
          href?: string | null;
          id?: number;
          name?: string | null;
          username?: string | null;
        };
        Update: {
          href?: string | null;
          id?: number;
          name?: string | null;
          username?: string | null;
        };
        Relationships: [];
      };
      profiles: {
        Row: {
          avatar_url: string | null;
          full_name: string | null;
          id: string;
          updated_at: string | null;
          username: string | null;
          website: string | null;
        };
        Insert: {
          avatar_url?: string | null;
          full_name?: string | null;
          id: string;
          updated_at?: string | null;
          username?: string | null;
          website?: string | null;
        };
        Update: {
          avatar_url?: string | null;
          full_name?: string | null;
          id?: string;
          updated_at?: string | null;
          username?: string | null;
          website?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'profiles_id_fkey';
            columns: ['id'];
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
