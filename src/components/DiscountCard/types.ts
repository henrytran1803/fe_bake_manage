export interface DiscountCardProps {
  id?: string;
  name: string;
  discount: string;
  dateStart: string;
  dateEnd: string;
  code: string;
  isAvailable: boolean;
}