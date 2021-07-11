/**
 * @description router link for each component based on group
 */

enum EUrl {
  COMPONENT = 'component-ui',
  WEB = 'web-ui',
  FUNCTION = 'functions'
}

enum EMenuLink {
  COMPONENT = 'components',
  WEB = 'web',
  FUNCTION = 'functions'
}

enum EComponentUI {
  BUTTON = 'button',
  CARD = 'card',
  MENU = 'menu'
}

enum EWebUI {
  TABLE = 'table',
}

enum EFunctions {
  RXJS = 'rxjs',
}

export { EUrl, EMenuLink, EComponentUI, EWebUI, EFunctions };

