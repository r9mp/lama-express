import { Model } from 'objection';
import knex from '../../config/knex';

Model.knex(knex);

export default class User extends Model {
  static get tableName() {
    return 'users';
  }
}
