export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      collaborator_applications: {
        Row: {
          available_for_meetings: boolean | null
          church: string | null
          city: string | null
          created_at: string
          email: string
          id: string
          is_christian: boolean | null
          kingdom_purpose: string | null
          name: string
          skills: string | null
          status: string
          whatsapp: string | null
          why_join: string | null
        }
        Insert: {
          available_for_meetings?: boolean | null
          church?: string | null
          city?: string | null
          created_at?: string
          email: string
          id?: string
          is_christian?: boolean | null
          kingdom_purpose?: string | null
          name: string
          skills?: string | null
          status?: string
          whatsapp?: string | null
          why_join?: string | null
        }
        Update: {
          available_for_meetings?: boolean | null
          church?: string | null
          city?: string | null
          created_at?: string
          email?: string
          id?: string
          is_christian?: boolean | null
          kingdom_purpose?: string | null
          name?: string
          skills?: string | null
          status?: string
          whatsapp?: string | null
          why_join?: string | null
        }
        Relationships: []
      }
      journeys: {
        Row: {
          cover_image: string | null
          created_at: string
          deleted_at: string | null
          description: string | null
          id: string
          is_published: boolean
          release_at: string | null
          slug: string
          subtitle: string | null
          title: string
          updated_at: string
        }
        Insert: {
          cover_image?: string | null
          created_at?: string
          deleted_at?: string | null
          description?: string | null
          id?: string
          is_published?: boolean
          release_at?: string | null
          slug: string
          subtitle?: string | null
          title: string
          updated_at?: string
        }
        Update: {
          cover_image?: string | null
          created_at?: string
          deleted_at?: string | null
          description?: string | null
          id?: string
          is_published?: boolean
          release_at?: string | null
          slug?: string
          subtitle?: string | null
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          created_at: string
          email: string | null
          id: string
          name: string | null
          role: string
        }
        Insert: {
          created_at?: string
          email?: string | null
          id: string
          name?: string | null
          role?: string
        }
        Update: {
          created_at?: string
          email?: string | null
          id?: string
          name?: string | null
          role?: string
        }
        Relationships: []
      }
      week_questions: {
        Row: {
          created_at: string
          id: string
          question: string
          user_id: string
          week_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          question: string
          user_id: string
          week_id: string
        }
        Update: {
          created_at?: string
          id?: string
          question?: string
          user_id?: string
          week_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "week_questions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "week_questions_week_id_fkey"
            columns: ["week_id"]
            isOneToOne: false
            referencedRelation: "weeks"
            referencedColumns: ["id"]
          },
        ]
      }
      weeks: {
        Row: {
          christ_focus: string | null
          content: string | null
          created_at: string
          deleted_at: string | null
          id: string
          is_current: boolean
          is_published: boolean
          journey_id: string
          kingdom_focus: string | null
          pdf_url: string | null
          reading: string | null
          release_at: string | null
          slug: string | null
          summary: string | null
          title: string
          updated_at: string
          video_url: string | null
          webinar_date: string | null
          week_number: string
        }
        Insert: {
          christ_focus?: string | null
          content?: string | null
          created_at?: string
          deleted_at?: string | null
          id?: string
          is_current?: boolean
          is_published?: boolean
          journey_id: string
          kingdom_focus?: string | null
          pdf_url?: string | null
          reading?: string | null
          release_at?: string | null
          slug?: string | null
          summary?: string | null
          title: string
          updated_at?: string
          video_url?: string | null
          webinar_date?: string | null
          week_number: string
        }
        Update: {
          christ_focus?: string | null
          content?: string | null
          created_at?: string
          deleted_at?: string | null
          id?: string
          is_current?: boolean
          is_published?: boolean
          journey_id?: string
          kingdom_focus?: string | null
          pdf_url?: string | null
          reading?: string | null
          release_at?: string | null
          slug?: string | null
          summary?: string | null
          title?: string
          updated_at?: string
          video_url?: string | null
          webinar_date?: string | null
          week_number?: string
        }
        Relationships: [
          {
            foreignKeyName: "weeks_journey_id_fkey"
            columns: ["journey_id"]
            isOneToOne: false
            referencedRelation: "journeys"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      auth_users_count: { Args: never; Returns: number }
      count_missing_profiles: { Args: never; Returns: number }
      has_profiles_trigger: { Args: never; Returns: boolean }
      is_admin: { Args: never; Returns: boolean }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
