export class Settings {
  static END_POINT_PREFIX = 'https://emitter.pl/api/';
  //static END_POINT_PREFIX = 'http://localhost:3333/api/';
  static ITEMS_END_POINT = Settings.END_POINT_PREFIX + 'items';
  static CHECK_TITLE_END_POINT = Settings.END_POINT_PREFIX + 'check-title';
  static SURVEY_END_POINT = Settings.END_POINT_PREFIX + 'survey';
  static WORKERS_END_POINT = Settings.END_POINT_PREFIX + 'workers';
  static LOGIN_END_POINT = Settings.END_POINT_PREFIX + 'login';
  static LOGOUT_END_POINT = Settings.END_POINT_PREFIX + 'logout';
  static AUTH = Settings.END_POINT_PREFIX + 'auth';
  static UPLOAD_END_POINT = Settings.END_POINT_PREFIX + 'upload';
}
