export type AlarmType = {
  id: string;
  name: string;
  time: Date;
  enabled: boolean;
  days: {
    mon: boolean;
    tue: boolean;
    wed: boolean;
    thu: boolean;
    fri: boolean;
    sat: boolean;
    sun: boolean;
  };
}