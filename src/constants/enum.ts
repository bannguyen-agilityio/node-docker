export const enum Position {
  LEFT = 'left',
  RIGHT = 'right',
}

export const enum TextFieldState {
  VALID = 'indigo',
  INVALID = 'red',
}

export const enum StatusType {
  ONLINE = 'online',
  ACTIVE = 'active',
  BANNED = 'banned',
  FAILED = 'failed',
  OFFLINE = 'offline',
  ENGAGEMENT = 'engagement',
}

export const enum HighlightColor {
  PRIMARY = 'blue',
  SECONDARY = 'gray',
  WARNING = 'red',
  SUCCESS = 'green',
}

export const enum MediaPlatform {
  INSTAGRAM = 'Instagram',
}

export const enum AccountStatus {
  ACTIVE = StatusType.ACTIVE,
  BANNED = StatusType.BANNED,
}

export const enum IssueStatus {
  BANNED = StatusType.BANNED,
  FAILED = StatusType.FAILED,
}
