import { supabase } from './supabaseClient';

export async function insertRowToDatabase(tableName, objectData) {
  try {
    // Use Supabase to insert the object data into the specified table
    const { data, error } = await supabase
      .from(tableName) // Name of the table
      .insert([objectData]); // Insert the object as a new row

    if (error) {
      console.error('Error inserting data:', error);
      return { success: false, error };
    }

    console.log('Data successfully inserted:', data);
    return { success: true, data };
  } catch (err) {
    console.error('Unexpected error:', err);
    return { success: false, error: err };
  }
}
