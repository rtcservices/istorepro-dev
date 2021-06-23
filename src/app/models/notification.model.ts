export interface NotificationModel {
  id: number;
  title: string;
  subTitle?: string;
  author?: string;
  avatar?: string;
  time: Date;
}
