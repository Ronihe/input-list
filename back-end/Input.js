const db = require('./db');

/** Related functions for Inputs. */
class Input {
  /** Get all inputs */
  static async getAll() {
    const inputsRes = await db.query('SELECT * FROM inputs;');
    return inputsRes.rows;
  }

  static async createOne(data) {
    const result = await db.query(
      `INSERT INTO inputs (input) VALUES ($1) RETURNING *`,
      [data.input]
    );

    return result.rows[0];
  }
}
module.exports = Input;
